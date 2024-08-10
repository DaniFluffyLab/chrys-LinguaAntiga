/** Conjunto de funções de desenho usando Canvas. */
const Draw = {

    /** Desenha uma linha.
     *  @param {Object} context   - Objeto com o contexto do Canvas
     *  @param {number} x1        - Posição X do ponto inicial
     *  @param {number} y1        - Posição Y do ponto inicial
     *  @param {number} x2        - Posição X do ponto final
     *  @param {number} y2        - Posição Y do ponto final
     *  @param {number} width     - Grossura da linha
     *  @memberof Draw
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
     *  @memberof Draw
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
    let clearString = LA.convertGrammar(string)
    let syllables = LA.getSyllableType(clearString)

    // Para cada sílaba, executar
    syllables.forEach((syllable) => {

        switch (syllable.type) {

            case "NUMBER":
                output.push(sprites[`Num${syllable.value}`]);   // Armazena sprite
                break;                                          // Encerra esta iteração

            case "SPACE":
                output.push(sprites["SPACE"]);  // Armazena sprite
                break;                          // Encerra esta iteração

            case "VOWELL":
            case "CONSONANT":
            case "SYLLABLE":
                output.push(sprites[syllable.value]);   // Armazena sprite
                break;                                  // Encerra esta iteração
        }

    })

    // Encerra a execução
    return output

}



/** Escreve a string para a imagem da língua antiga e retorna a URL da imagem.
 * @param {string} string   - Texto a traduzir
 * @param {boolean} mirror  - Espelhar imagem?
 * @param {number} fontSize - Tamanho da fonte
 */
function drawInLA(string, mirror, fontSize, rusticMode) {

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
        fontSize * 1.3, fontSize * 1.3,     // Tamanho
        0,                              // Ãngulo
        false                           // Espelhar
    )

    // Retorna o URL da imagem e encerra a execução
    return htmlCanvas.toDataURL()

}