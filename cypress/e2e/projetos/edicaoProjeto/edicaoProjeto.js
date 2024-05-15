import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

let editarNomeProjeto;
let editarDescProjeto;

Given("que estou na tela de projetos", () => {
    cy.login();
    cy.visitAndwait('/', 500)
    cy.get('[data-test="projetos-menu_lista"]').click()
    cy.get('.card').should('be.visible')
})

When ("eu seleciono o projeto", () => {
    cy.wait(2000)
    cy.get(':nth-child(1) > :nth-child(1) > .link').click();
    cy.get('[data-test="projetos-titulo_editar"] > .svb-edit').click();
    cy.get('[style="display: block;"] > .modal__dialog > [data-test="modal-content"]').should('be.visible');
})

And ("edito o nome para {string}" ,(editarNome) =>{
    editarNomeProjeto = editarNome;
    cy.get('[data-test="projetos-titulo_nome"]').clear().type(editarNome)
})

And ("edito a descricao para {string}" ,(editarDesc) =>{
    editarDescProjeto = editarDesc;
    cy.get('textarea').clear().type(editarDesc)
    cy.get('[data-test="projetos-titulo_alterar"]').click();
})

Then("projeto editado com sucesso", () => {
    cy.get('.awn-toast-content').should('contain','Projeto foi alterado com sucesso!');
    cy.get('div > h1').should('contain', editarNomeProjeto);
    cy.get('.descricao-projeto').should('contain', editarDescProjeto);
})