import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

Given("eu estou na tela de login", () => {
    cy.login();
    cy.visitAndwait('/', 500)
    cy.get('[data-test="projetos-menu_lista"]').click()

})
When("eu clico no projeto", () =>{
    cy.get(':nth-child(1) > :nth-child(1) > .link').click()

})

And("eu clico no botao EXCLUIR", () => {
    cy.get('.remover > .svb-delete').click()


})
And("eu clico no botao ACEITAR", () => {
    cy.get('#awn-confirm-ok').click()
})

Then("o projeto foi removido", () =>{
    cy.get('.awn-toast-content').should('contain',  'Projeto foi excluido com sucesso!')
})