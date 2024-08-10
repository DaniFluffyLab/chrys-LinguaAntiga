/** Conjunto de funções para gerir a gramática da Língua Antiga */
const LA = {

    /** Limpa a string de todos os caracteres que não existem na Lingua Antiga para e converte os números
     * @param {string} string   - Texto a limpar
     * @memberof LA
     */
    convertGrammar: function (string) {

        // ETAPA 1 - LIMPAR TODOS OS CARACTERES


        let string_charsCleared = string

            // Limpando string
            .toUpperCase()                      // Maiúsculas
            .normalize("NFD")                   // Destaca letras de seus acentos
            .replace(/C\u0327/g, "Ç")           // Preserva cedilha
            .replace(/-/g, " ")                 // Preserva hifen com um espaço
            .replace(/[^a-zA-Z0-9Ç\ ]/g, "")    // Apaga caracteres desconhecidos

            // Converte silabas com "H"
            .replace(/CH/g, "X")    // CHá -> Xá
            .replace(/LHI/g, "LI")  // ToLHIdo -> ToLIdo
            .replace(/LH/g, "LI")   // ConseLHo -> ConseLIo
            .replace(/NHI/g, "NI")  // GruNHIdo -> GruNIdo
            .replace(/NH/g, "NI")   // SeNHor -> SeNIor
            .replace(/SH/g, "X")    // SHow -> Xou
            .replace(/H/g, "")      // Remove todos os outros "H"

            // Converte silabas com "C"
            .replace(/CE/g, "SSE")  // ConCEito -> ConSSEito
            .replace(/CI/g, "SSI")  // EssenCIa -> EssenSSIa
            .replace(/Ç/g, "SS")    // EsperanÇa -> EsperanSSa
            .replace(/SSS/g, "SS")  // Corrige palavras com 3 SS's, por conta das adaptações acima
            .replace(/\ SS/g, " S")  // Corrige palavras com 2 SS's no começo da palavra, por conta das adaptações acima (caso 1)
            .replace(/^S/g, "S")    // Corrige palavras com 2 SS's no começo da palavra, por conta das adaptações acima (caso 2)
            .replace(/C/g, "K")     // Converte todos os outros casos

            // Converte outras letras
            .replace(/W/g, "U")     // KiWi -> KiUi
            .replace(/Y/g, "I")     // FaradaY -> FaradaI



        // ETAPA 2 - CONVERTER NÚMEROS PARA BASE 8



        // Cria variável para armazenar valor com números convertidos
        let string_numbersConverted = "";

        // Enquanto houver caracteres a checar, executar
        while (string_charsCleared != "") {

            // Obtém primeiro caractere
            let char = string_charsCleared.substring(0, 1);

            // Se caractere não for número
            if (/[^0-9]/.test(char)) {
                string_numbersConverted = string_numbersConverted + char;           // Armazena caractere na string de saída
                string_charsCleared = string_charsCleared.substring(1);       // Remove o primeiro caractere na string de entrada
                continue;                                   // Prossegue para próxima iteração
            }

            // Caso seja número, segue abaixo

            let number = ""     // Variável para armazenar número a converter

            // Enquanto caractere analisado for número, executar
            while (/[0-9]/.test(char)) {
                number = number.toString() + char.toString();       // Armazena número na variável de número
                string_charsCleared = string_charsCleared.substring(1);               // Remove o primeiro caractere na string de entrada
                char = string_charsCleared.substring(0, 1);                  // Redefine a variável "char" com próximo caractere
            }

            // Adiciona o número convertido à string
            string_numbersConverted = string_numbersConverted + parseInt(number).toString(8);
        }

        // Encerra a execução
        return string_numbersConverted
    },

    /** Obtém os tipos de sílabas da string em LA, que já deve ter tido sua gramática devidamente adequada.
     * @param {string} convertedString - String já adequada para LA 
     * @memberof LA
     */
    getSyllableType: function (convertedString) {

        // Cria a variável de saída 
        let output = [];

        // Enquanto houver caracteres na string, executar
        while (convertedString != "") {

            // Obtém os 2 primeiros caracteres
            let char1 = convertedString.substring(0, 1);
            let char2 = convertedString.length == 1 ? " " : convertedString.substring(1, 2);

            // Define o tipo de sílaba
            let syllableType = undefined;
            syllableType = /[0-9]/.test(char1) ?                                        "NUMBER" : syllableType;
            syllableType = /[AEIOU]/.test(char1) ?                                      "VOWELL" : syllableType;
            syllableType = /[\ ]/.test(char1) ?                                         "SPACE" : syllableType;
            syllableType = /[BDFGJKLMNPQRSTVXZ]{1}[^AEIOU]{1}/.test(char1 + char2) ?    "CONSONANT" : syllableType;
            syllableType = /[BDFGJKLMNPQRSTVXZ]{1}[AEIOU]{1}/.test(char1 + char2) ?     "SYLLABLE" : syllableType;

            // Para cada tipo de sílaba, armazenar na variável de saída
            switch (syllableType) {
                
                case "VOWELL":
                case "CONSONANT":
                case "NUMBER":
                case "SPACE":
                    output.push({type: syllableType, value: char1})     // Armazena tipo
                    convertedString = convertedString.substring(1);     // Remove caractere da string
                    break;                                              // Encerra esta iteração

                case "SYLLABLE":
                    output.push({type: syllableType, value: char1 + char2});    // Armazena sprite
                    convertedString = convertedString.substring(2);             // Remove caracteres da string
                    break;                                                      // Encerra esta iteração

                default:    // Caso de caractere desconhecido
                    throw Error(`ERRO: String informada possui caractere inválido -> ${char1}`)
            }
        }

        // Encerra a execução
        return output;
    }

}