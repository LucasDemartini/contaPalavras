const { expect } = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { contaPalavras } = require('../app/contaPalavras');
lab.test('contar palavras de uma frase', (done) => {
  expect(contaPalavras("eu como laranjas laranjas"))to.equal(4);
  done();
});
