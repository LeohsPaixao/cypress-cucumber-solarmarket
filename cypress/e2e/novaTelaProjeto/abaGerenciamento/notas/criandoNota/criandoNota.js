import { should } from "chai";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

//BACKGROUND
Given('que eu estou na tela de Login', () => {
    cy.login()
});

Then('eu devo entrar na tela principal', () => {
    cy.visitAndwait('/', 500)
});

//TESTE 1
Given('que eu entre em um projeto', () => {
    cy.get('[data-test="projetos-menu_lista"]').click()
    cy.get('.card').should('be.visible')
    cy.get(':nth-child(1) > :nth-child(1) > .link').click();
});

When('seleciono a aba {string}', (aba) => {
    cy.get('.gerenciamento-container__main').should('be.visible')
    cy.get('.gerenciamento-container__header-list > :nth-child(2)').click();
});

And('clico no botão Nova nota', () => {
    cy.get('.gerenciamento-action-header > .u-flex').click();
});

And('eu insiro o texto {string}', (conteudoNota) => {
    cy.get('.gerenciamento-action-header > .modal > .modal__dialog > [data-test="modal-content"]').should('be.visible');
    cy.get('.tagify__input').type(conteudoNota).should('have.text', conteudoNota);
});

And('clico no botão Salvar', () => {
    cy.get('.gerenciamento-action-header > .modal > .modal__dialog > [data-test="modal-content"] > [data-test="modal-footer"] > .is-primary').should('be.enabled').click();
});

Then('deve aparecer a nova nota {string}', (novaNota) => {
    cy.get('.atividade').should('contain', novaNota);
});
