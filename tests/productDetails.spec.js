/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(Array.isArray([productDetails]), true); /* Fonte de "Array.isArray": https://pt.stackoverflow.com/questions/77190/como-saber-se-um-objeto-%C3%A9-um-array-em-javascript-sem-jquery#:~:text=O%20m%C3%A9todo%20Array.,e%20false%20se%20n%C3%A3o%20%C3%A9.&text=O%20typeof%20%C3%A9%20um%20Operador,o%20tipo%20de%20um%20Operando. */
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails(' ', ' ').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof productDetails([0]), typeof productDetails([1]), Object);
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(productDetails([0]), productDetails([1]), true);
    // (Difícil) Teste que os dois productIds terminam com 123.
  });
});
