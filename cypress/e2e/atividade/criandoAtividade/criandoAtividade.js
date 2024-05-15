import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
let nomeAtividade 

Given('que eu estou logado', () => {
    cy.login();
    cy.visitAndwait('/', 500)
    
});

When('busco um projeto existente', () => {
    cy.get('[data-test="projetos-menu_lista"]').click()
    cy.get('.card').should('be.visible')
    cy.get(':nth-child(1) > :nth-child(1) > .link').click();
});

And('eu clico no botão Nova Atividade', () => {
    cy.get('.gerenciamento-action-header > .btn').should('be.visible').click();
    cy.get('.modal-crud-atividade > :nth-child(1) > :nth-child(1)').should('be.visible')
});

And('insiro o nome da atividade {string} e escolher o tipo de atividade {string}', (nome, tipoAtividade) => {
    nomeAtividade = nome
    cy.get('[data-test="projetos-titulo_0"]').type(nome).should('have.value', nome)
    cy.get('[data-test="dropdown-box"]').click();
    cy.get('[data-test="dropdown-ul"] > :nth-child(1)').should('contain.text', tipoAtividade).click()
    cy.get('[data-test="projetos-botao_salvar_0"]').click();
});

Then('a nova atividade deve ser criada', () => {
    cy.get('.awn-toast-content').should('contain', 'Atividade criada com sucesso!')
    cy.get('.gerenciamento-container__body-aba-atividade-planejado > .gerenciamento-container__body-aba-atividade-list').should('contain', nomeAtividade)
});