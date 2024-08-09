/** Conjunto de sprites das letras da Língua Antiga */
const Sprites = {
    chrys: new Image(),
    normal: {
        Num0: new Image(),
        Num1: new Image(),
        Num2: new Image(),
        Num3: new Image(),
        Num4: new Image(),
        Num5: new Image(),
        Num6: new Image(),
        Num7: new Image(),
        SPACE: new Image(),
        A: new Image(),
        B: new Image(),
        BA: new Image(),
        BE: new Image(),
        BI: new Image(),
        BO: new Image(),
        BU: new Image(),
        D: new Image(),
        DA: new Image(),
        DE: new Image(),
        DI: new Image(),
        DO: new Image(),
        DU: new Image(),
        E: new Image(),
        F: new Image(),
        FA: new Image(),
        FE: new Image(),
        FI: new Image(),
        FO: new Image(),
        FU: new Image(),
        G: new Image(),
        GA: new Image(),
        GE: new Image(),
        GI: new Image(),
        GO: new Image(),
        GU: new Image(),
        I: new Image(),
        J: new Image(),
        JA: new Image(),
        JE: new Image(),
        JI: new Image(),
        JO: new Image(),
        JU: new Image(),
        K: new Image(),
        KA: new Image(),
        KE: new Image(),
        KI: new Image(),
        KO: new Image(),
        KU: new Image(),
        L: new Image(),
        LA: new Image(),
        LE: new Image(),
        LI: new Image(),
        LO: new Image(),
        LU: new Image(),
        M: new Image(),
        MA: new Image(),
        ME: new Image(),
        MI: new Image(),
        MO: new Image(),
        MU: new Image(),
        N: new Image(),
        NA: new Image(),
        NE: new Image(),
        NI: new Image(),
        NO: new Image(),
        NU: new Image(),
        O: new Image(),
        P: new Image(),
        PA: new Image(),
        PE: new Image(),
        PI: new Image(),
        PO: new Image(),
        PU: new Image(),
        Q: new Image(),
        QA: new Image(),
        QE: new Image(),
        QI: new Image(),
        QO: new Image(),
        QU: new Image(),
        R: new Image(),
        RA: new Image(),
        RE: new Image(),
        RI: new Image(),
        RO: new Image(),
        RU: new Image(),
        S: new Image(),
        SA: new Image(),
        SE: new Image(),
        SI: new Image(),
        SO: new Image(),
        SU: new Image(),
        T: new Image(),
        TA: new Image(),
        TE: new Image(),
        TI: new Image(),
        TO: new Image(),
        TU: new Image(),
        U: new Image(),
        V: new Image(),
        VA: new Image(),
        VE: new Image(),
        VI: new Image(),
        VO: new Image(),
        VU: new Image(),
        X: new Image(),
        XA: new Image(),
        XE: new Image(),
        XI: new Image(),
        XO: new Image(),
        XU: new Image(),
        Z: new Image(),
        ZA: new Image(),
        ZE: new Image(),
        ZI: new Image(),
        ZO: new Image(),
        ZU: new Image()
    },
    rustic: {
        Num0: new Image(),
        Num1: new Image(),
        Num2: new Image(),
        Num3: new Image(),
        Num4: new Image(),
        Num5: new Image(),
        Num6: new Image(),
        Num7: new Image(),
        SPACE: new Image(),
        A: new Image(),
        B: new Image(),
        BA: new Image(),
        BE: new Image(),
        BI: new Image(),
        BO: new Image(),
        BU: new Image(),
        D: new Image(),
        DA: new Image(),
        DE: new Image(),
        DI: new Image(),
        DO: new Image(),
        DU: new Image(),
        E: new Image(),
        F: new Image(),
        FA: new Image(),
        FE: new Image(),
        FI: new Image(),
        FO: new Image(),
        FU: new Image(),
        G: new Image(),
        GA: new Image(),
        GE: new Image(),
        GI: new Image(),
        GO: new Image(),
        GU: new Image(),
        I: new Image(),
        J: new Image(),
        JA: new Image(),
        JE: new Image(),
        JI: new Image(),
        JO: new Image(),
        JU: new Image(),
        K: new Image(),
        KA: new Image(),
        KE: new Image(),
        KI: new Image(),
        KO: new Image(),
        KU: new Image(),
        L: new Image(),
        LA: new Image(),
        LE: new Image(),
        LI: new Image(),
        LO: new Image(),
        LU: new Image(),
        M: new Image(),
        MA: new Image(),
        ME: new Image(),
        MI: new Image(),
        MO: new Image(),
        MU: new Image(),
        N: new Image(),
        NA: new Image(),
        NE: new Image(),
        NI: new Image(),
        NO: new Image(),
        NU: new Image(),
        O: new Image(),
        P: new Image(),
        PA: new Image(),
        PE: new Image(),
        PI: new Image(),
        PO: new Image(),
        PU: new Image(),
        Q: new Image(),
        QA: new Image(),
        QE: new Image(),
        QI: new Image(),
        QO: new Image(),
        QU: new Image(),
        R: new Image(),
        RA: new Image(),
        RE: new Image(),
        RI: new Image(),
        RO: new Image(),
        RU: new Image(),
        S: new Image(),
        SA: new Image(),
        SE: new Image(),
        SI: new Image(),
        SO: new Image(),
        SU: new Image(),
        T: new Image(),
        TA: new Image(),
        TE: new Image(),
        TI: new Image(),
        TO: new Image(),
        TU: new Image(),
        U: new Image(),
        V: new Image(),
        VA: new Image(),
        VE: new Image(),
        VI: new Image(),
        VO: new Image(),
        VU: new Image(),
        X: new Image(),
        XA: new Image(),
        XE: new Image(),
        XI: new Image(),
        XO: new Image(),
        XU: new Image(),
        Z: new Image(),
        ZA: new Image(),
        ZE: new Image(),
        ZI: new Image(),
        ZO: new Image(),
        ZU: new Image(),
    }
}

// Declara os arquivos dos sprites
Object.keys(Sprites.normal).forEach(spriteName => {
    Sprites.normal[spriteName].src = `sprites/normal/${spriteName}.png`
})
Object.keys(Sprites.rustic).forEach(spriteName => {
    Sprites.rustic[spriteName].src = `sprites/rustic/${spriteName}.png`
})
Sprites.chrys.src = "sprites/chrys_symb.png"

/** Conjunto de funções de cálculo da Espiral de Arquimedes. */
const Spiral = {

    /** Calcula os valores da Espiral de Arquimedes e os retorna em uma Array.
     * @param {number} varA         - Variavel A da equação geral da espiral
     * @param {number} varB         - Variavel B da equação geral da espiral
     * @param {number} precision    - Precisão angular do cálculo
     * @param {number} totalSize    - Tamanho limite da espiral para o cálculo
     * @param {boolean} clockwise   - Calcular espiral para sentido horário?
     * @param {boolean} randomness  - Adicionar aleatoriedade ao raio da espiral?
     * @memberof spiral
     */
    calc: function (varA, varB, precision, totalSize, clockwise, randomness) {

        let output = [];  // Variavel para armazenar o cálculo
        let theta = 0;  // Ângulo da espiral
        let size = 0;   // Comprimento da espiral
        let clockwiseNum = clockwise ? -1 : 1 // Variável para calcular o sentido da espiral

        // Enquanto espiral não alcançar tamanho solicitado, calcular
        while (size < totalSize) {

            // Obtém valor aleatório da execução
            let random = randomness ? (Math.random() * 3) : 0

            // Calcula valores reais
            let realR = varA + varB * theta;  // Obtém raio
            let realX = realR * Math.sin(theta)   // Converte coordenada polar para X
            let realY = (-1 * clockwiseNum) * (realR * Math.cos(theta))   // Converte coordenada polar para Y

            // Calcula valores aleatorizados
            let r = random + varA + varB * theta;  // Obtém raio
            let x = r * Math.sin(theta)   // Converte coordenada polar para X
            let y = (-1 * clockwiseNum) * (r * Math.cos(theta))   // Converte coordenada polar para Y

            // Caso não seja primeira execução
            if (output.at(-1) != undefined) {

                // Calcula a distância entre o ponto atual e o último ponto calculado
                let distanceBetweenPoints = Math.sqrt(
                    Math.pow(output.at(-1).realX - realX, 2) + Math.pow(output.at(-1).realY - realY, 2)
                )

                // Adiciona a distância ao total
                size = size + distanceBetweenPoints
            }


            // Armazena o cálculo 
            output.push({
                radius: r,
                theta: clockwiseNum * theta,
                X: x,
                Y: y,
                realX: realX,
                realY: realY,
                size: size
            })

            // Adiciona valor à theta para iniciar nova execução
            theta = theta + precision
        }

        // Encerra a execução
        return output
    },

    /** Obtém a coordenada de espiral mais próxima do tamanho solicitado.
     *  @param {Object} spiral  - Objeto de espiral a se procurar o ponto.
     *  @param {number} size    - Tamanho a se procurar.
     *  @memberof spiral
     */
    closest: function (spiral, size) {
        return spiral.reduce(function (prev, curr) {
            return (Math.abs(curr.size - size) < Math.abs(prev.size - size) ? curr : prev);
        });
    }

}

/** Conjunto de funções de desenho usando Canvas. */
const Draw = {

    /** Desenha uma linha.
     *  @param {Object} context   - Objeto com o contexto do Canvas
     *  @param {number} x1        - Posição X do ponto inicial
     *  @param {number} y1        - Posição Y do ponto inicial
     *  @param {number} x2        - Posição X do ponto final
     *  @param {number} y2        - Posição Y do ponto final
     *  @param {number} width     - Grossura da linha
     *  @memberof draw
     */
    line: function (context, x1, y1, x2, y2, width = 1) {
        context.beginPath();
        context.lineWidth = width;
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
    },

    /** Desenha uma imagem.
     *  @param {Object} context   - Objeto com o contexto do Canvas
     *  @param {Object} image     - Objeto HTML com a imagem
     *  @param {number} x         - Posição X da imagem
     *  @param {number} y         - Posição Y da imagem
     *  @param {number} width     - Largura da imagem
     *  @param {number} height    - Altura da imagem
     *  @param {number} angle     - Ângulo da imagem 
     *  @param {boolean} mirror   - Espelhar imagem? 
     *  @memberof draw
      */
    image: function (context, image, x, y, width, height, angle, mirror) {

        let mirrorValue = mirror ? -1 : 1;  // Define valor de espelhamento

        let centerX = width / 2;  // Obtém centro no eixo X
        let centerY = height / 2; // Obtém centro no eixo Y

        context.save();   // Preserva o estado atual do contexto

        context.translate(x, y);  // Move contexto para a posição da imagem
        context.rotate(angle);  // Rotaciona imagem
        context.scale(1, mirrorValue);  // Espelha imagem

        context.drawImage(image, -centerX, -centerY, width, height);  // Desenha imagem

        context.restore();  // Retorna o contexto ao estado anterior

    }



}

/** Traduz um texto para Lingua Antiga, em string e caracteres.
 * @param {Object} sprites  - Objeto contendo os sprites
 * @param {string} string   - Texto a traduzir
*/
function wordsToSprites(sprites, string) {

    // Variável para return
    let output = [];

    // Preparando input
    let cleanString = clearString(string)

    // Enquanto houver caracteres nas strings, executar
    while (cleanString != "") {

        // Obtém os 2 primeiros caracteres
        let char1 = cleanString.substring(0, 1);
        let char2 = cleanString.length == 1 ? " " : cleanString.substring(1, 2);

        // Define o tipo de sílaba
        let syllableType = undefined;
        syllableType = /[0-9]/.test(char1) ? "NUMBER" : syllableType;
        syllableType = /[AEIOU]/.test(char1) ? "VOWELL" : syllableType;
        syllableType = /[BDFGJKLMNPQRSTVXZ]{1}[^AEIOU]{1}/.test(char1 + char2) ? "CONSONANT" : syllableType;
        syllableType = /[BDFGJKLMNPQRSTVXZ]{1}[AEIOU]{1}/.test(char1 + char2) ? "SYLLABLE" : syllableType;

        // Para cada tipo, executar
        switch (syllableType) {

            case "NUMBER":
                output.push(sprites[`Num${char1}`])         // Armazena sprite
                cleanString = cleanString.substring(1);     // Remove caractere da string
                break;                                      // Encerra esta iteração

            case "VOWELL":
            case "CONSONANT":
                output.push(sprites[char1]);                // Armazena sprite
                cleanString = cleanString.substring(1);     // Remove caractere da string
                break;                                      // Encerra esta iteração

            case "SYLLABLE":
                output.push(sprites[char1 + char2]);                // Armazena sprite
                cleanString = cleanString.substring(2);             // Remove caracteres da string
                break;                                              // Encerra esta iteração

            default:
                output.push(sprites["SPACE"]);                  // Armazena sprite
                cleanString = cleanString.substring(1);         // Remove caractere da string
        }
    }

    // Encerra a execução
    return output

}

/** Limpa a string de todos os caracteres que não existem na Lingua Antiga e converte os números
 * @param {string} string   - Texto a limpar
*/
function clearString(string) {

    // Trata os caracteres
    let cleanWords = string

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

    // Cria variável para armazenar valor final
    let cleanString = "";

    // Enquanto houver caracteres a checar, executar
    while (cleanWords != "") {

        // Obtém primeiro caractere
        let char = cleanWords.substring(0, 1);

        // Se caractere não for número
        if (/[^0-9]/.test(char)) {
            cleanString = cleanString + char;           // Armazena caractere na string de saída
            cleanWords = cleanWords.substring(1);       // Remove o primeiro caractere na string de entrada
            continue;                                   // Prossegue para próxima iteração
        }

        let number = ""     // Variável para armazenar número a converter

        // Enquanto for número, executar
        while (/[0-9]/.test(char)) {
            number = number.toString() + char.toString();       // Armazena número na variável de número
            cleanWords = cleanWords.substring(1);               // Remove o primeiro caractere na string de entrada
            char = cleanWords.substring(0, 1);                  // Redefine a variável "char"
        }

        // Adiciona o número convertido á string final
        cleanString = cleanString + parseInt(number).toString(8);
    }

    return cleanString

}

/** Traduz a string para a imagem da língua antiga e retorna a URL da imagem.
 * @param {string} string   - Texto a traduzir
 * @param {boolean} mirror  - Espelhar imagem?
 * @param {number} fontSize - Tamanho da fonte
 */
function translateAndCreateIMG(string, mirror, fontSize, rusticMode) {

    // Define o tipo de sprites a se utilizar
    let fontStyle = rusticMode ? "rustic" : "normal"

    // Traduz texto
    let translatedText = wordsToSprites(Sprites[fontStyle], string)

    // Calcula espiral
    let spiral = Spiral.calc(
        fontSize,       // Ponto A
        fontSize / 7,   // Ponto B
        0.005,          // Precisão do cálculo
        (translatedText.length * fontSize) + (fontSize * 2),    // Tamanho da espiral 
        mirror,         // Espelhar?
        rusticMode      // Gerar efeito de rabisco?
    )

    // Cria o canvas
    let htmlCanvas = document.createElement("canvas");            // Cria o elemento HTML
    let canvasCtx = htmlCanvas.getContext("2d");                  // Obtém o contexto do Canvas
    htmlCanvas.width = parseInt(spiral.at(-1).radius * 2 + fontSize);           // Define largura
    htmlCanvas.height = parseInt(spiral.at(-1).radius * 2 + fontSize);          // Define altura
    canvasCtx.translate(spiral.at(-1).radius + (fontSize / 2), spiral.at(-1).radius + (fontSize / 2));  // Define o centro do plano cartesiano

    // Desenha linha da espiral
    for (i = 0; i < spiral.at(-1).size; i++) {

        // Desenha linha entre ponto anterior e atual
        Draw.line(canvasCtx,    // Contexto do Canvas
            Spiral.closest(spiral, i - 2).X, Spiral.closest(spiral, i - 2).Y,   // Ponto XY 1
            Spiral.closest(spiral, i).X, Spiral.closest(spiral, i).Y,           // Ponto XY 2
            fontSize / 14   // Espessura da linha
        );
    }

    // Desenha caractere
    for (i = fontSize / 2; i < (translatedText.length * fontSize); i = i + fontSize) {

        Draw.image(canvasCtx,    // Contexto do Canvas
            translatedText[(i - (fontSize / 2)) / fontSize],            // Sprite a desenhar
            Spiral.closest(spiral, i).realX, Spiral.closest(spiral, i).realY,   // Posição XY
            fontSize, fontSize,                 // Tamanho do sprite
            Spiral.closest(spiral, i).theta,    // Ângulo do sprite
            mirror    // Espelhar?
        )
    }

    // Desenha marca d'água
    Draw.image(canvasCtx,               // Contexto do Canvas
        Sprites.chrys,                  // Logo do Chrys
        0, 0,                           // Posição XY
        fontSize*1.3, fontSize*1.3,     // Tamanho
        0,                              // Ãngulo
        false                           // Espelhar
    )

    // Retorna o URL da imagem e encerra a execução
    return htmlCanvas.toDataURL()

}