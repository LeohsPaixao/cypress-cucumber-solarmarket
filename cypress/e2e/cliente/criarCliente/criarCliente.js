const { Given, When, Then, And } = require('cypress-cucumber-preprocessor/steps');

Given('o sistema', () => {
  cy.login();
  cy.visitAndwait('/clientes', 500)
  cy.get('.u-flex > div > .is-primary').should('contain', 'Clientes')
});

// @Teste01
Given('a tela de cliente', () => {
  cy.get('[data-test="clientes-content"]').should('be.visible');
})

When('eu clicar no botão Novo cliente', () => {
  cy.get('[data-test="clientes-btn_cadastrar_novo_cliente"]').click();
  cy.get('[data-test="modal-content"]').should('be.visible');
})

And('digitar o {string} do cliente', (nome) => {
  cy.get('[data-test="clientes-input_nome"]').type(nome);
});

And('clicar no botão Cadastrar', () => {
  cy.get('[data-test="clientes-button_cadastrar"]').should('be.enabled').click();
})

Then('deve aparecer uma mensagem de sucesso', () => {
  cy.get('.awn-toast-wrapper').should('be.visible');
})