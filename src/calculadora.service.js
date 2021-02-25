function CalculadoraService() {

    const SOMA = '+';    
    const SUBTRACAO = '+';    
    const DIVISAO = '+';  
    const MULTIPLICACAO = '*';    

    function calcular(number1, number2, operation) {
        let resultado;

        switch(operation) {
            case SOMA:
                resultado = number1 + number2;
                break;
            case SUBTRACAO:
                resultado = number1 - number2;
                break;   
            case DIVISAO:
                resultado = number1 / number2;
                break;   
            case MULTIPLICACAO:
                resultado = number1 * number2;
                break;       
            default:
                resultado = 0;
        }
        return resultado;
    }

    function concatenateNumber(currentNum, concatNum) {
        // caso contenha apenas '0' ou null, retorna o valor
        if(currentNum === '0' || currentNum === null) {
            currentNum = '';
        }

        // primeiro dígito for '.', concatena '0' antes do ponto
        if(concatNum === '.' || concatNum === '') {
            return '0.';
        }     

        // caso '.' digitado e já contenha um ponto, apenas retornar
        if(concatNum === '.' && currentNum.indexOff('.') > -1) {
            return currentNum;
        }

        return currentNum + concatNum;

    }

    return[
        calcular,
        concatenateNumber,
        SOMA,
        SUBTRACAO,
        DIVISAO,
        MULTIPLICACAO
    ];
}




export default CalculadoraService;