const { generateText, createElement, validateInput } = require('../js/util');

describe('Testes da função de geração de texto', () => {
    it ('Teste passando valores válidos', () => {
        let text = generateText('Rafael Brito', 30);
        expect(text).toBe('Rafael Brito (30 years old)');
    });
    
    it ('Teste com o primeiro argumento vazio e o segundo Null.', () => {
        let text = generateText('', null);
        expect(text).toBe(' (null years old)');
    });

    it ('Teste da função sem dados de argumento.', () => {
        let text = generateText();
        expect(text).toBe('undefined (undefined years old)');
    });

});

describe('Testes da função de criação de elemento com o DOM', () => {
    it('Gerando elemento do tipo li.', () => {
        let tipo = "li"; 
        let texto = "Teste";
        let nomeDaClasse = 'test-classe';
        let elemento1 = createElement(tipo, texto, nomeDaClasse);
        expect(elemento1.textContent).toMatch(/Teste/);
    });

    it ("Criando um novo elemento sem nenhum dado.", ()=>{
        const elemento = createElement(null);
        expect(elemento.textContent).toBe("");
    });

});

describe('Testes da função de validação dos dados de entrada', () => {
    it('Testando entrada de texto sem demais argumentos.', () =>{
        let texto = 'Teste mesa de trabalho';
        let validacao = validateInput(texto);
        expect(validacao).toBeTruthy();
    });

    it('Testando se entrada vazia retorna falso.', () =>{
        let validacao = validateInput();
        expect(validacao).toBeFalsy();
    });

    it('Testando se entrada vazia indicando que é texto retorna falso.', () =>{
        let texto = "  ";
        let validacao = validateInput(texto, true, false);
        expect(validacao).toBeFalsy();
    });

    it('Testando entrada de texto indicando que é texto.', () =>{
        let entrada = "Qualquer Texto";
        let validacao = validateInput(entrada, true, false);
        expect(validacao).toBeTruthy();
    });

    it('Testando entrada de número indicando que é texto.', () =>{
        let entrada = 15;
        let validacao = validateInput(entrada, true, false);
        expect(validacao).toBeFalsy();
    });


    it('Testando entrada de número indicando que é número.', () =>{
        let entrada = 30;
        let validacao = validateInput(entrada, false, true);
        expect(validacao).toBeTruthy();
    });

    it('Testando entrada de texto indicando que é número.', () =>{
        let entrada = "Qualquer texto";
        let validacao = validateInput(entrada, false, true);
        expect(validacao).toBeFalsy();
    });
});