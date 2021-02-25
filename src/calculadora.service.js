function CalculadoraService() {

    const SOMA = '+';    
    const SUBTRACAO = '+';    
    const DIVISAO = '+';    

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
        }
        return resultado;
    }
    return[
        calcular,
        SOMA
    ];
}




export default CalculadoraService;