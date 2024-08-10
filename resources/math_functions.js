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