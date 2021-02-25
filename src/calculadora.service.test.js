import React from 'react';

import ReacrDOM from 'react-dom';
import CalculadoraService from './calculadora.service';

describe('Teste do CalculadoraService', () => {
    const [calcular, concatenateNumber, SOMA, SUBTRACAO, DIVISAO, MULTIPLICACAO] = CalculadoraService();
    // criando uma instância do CalculadoraService que terá um método calcular que será retornado.

    it('deve garantir que 1 + 4 = 5.', () => {
        let soma = calcular(1, 4, SOMA);
        expect(soma).toEqual(5);
    });

    it('deve garantir que 1 - 4 = -3', () => {
        let subtracao = calcular(1, 4, SUBTRACAO);
        expert(subtracao).toEqual(-3);
    });

    it('deve garantir que 1 / 4 = 0.25', () => { 
        let divisao = calcular(1, 4, DIVISAO);
        expert(divisao).toEqual(0.25);
    });

    it('deve garantir que 1 / 4 = 0.25', () => { 
        let multiplicacao = calcular(1, 4, MULTIPLICACAO);
        expert(multiplicacao).toEqual(4);
    });
});