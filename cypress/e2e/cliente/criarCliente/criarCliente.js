const { Given, When, Then, And } = require('cypress-cucumber-preprocessor/steps');

Given('o sistema', () => {
  cy.login();
  cy.visitAndwait('/clientes', 500)
  cy.get('.u-flex > div > .is-primary').should('contain', 'Clientes')
});

When('eu clicar no botão de Novo cliente', () => {
  cy.get('[data-test="clientes-btn_cadastrar_novo_cliente"]').click();
})

// @Teste01
Given('o modal de cadastro de cliente', () => {
  cy.get('[data-test="modal-content"]').should('be.visible');
})

When('digitar {string} no campo nome', (nome) => {
  cy.get('[data-test="clientes-input_nome"]').type(nome);
});

And('clicar no botão Cadastrar', () => {
  cy.get('[data-test="clientes-button_cadastrar"]').should('be.enabled').click();
})

Then('deve aparecer uma mensagem de sucesso', () => {
  cy.get('.awn-toast-wrapper').should('be.visible');
})

// @Teste02
Given('o modal de cadastro de cliente', () => {
  cy.get('[data-test="modal-content"]').should('be.visible');
})

When('digitar {string} no campo nome', (nome) => {
  cy.get('[data-test="clientes-input_nome"]').type(nome);
});

And('digitar o {int} como CPF inválido', (cpf) => {
  cy.get('#cnpj-cpf-novo-cliente input.current-input').type(cpf)
})

And('clicar no botão Cadastrar', () => {
  cy.get('[data-test="clientes-button_cadastrar"]').should('be.enabled').click();
})

Then('deve aparecer uma mensagem de erro relacionado ao CPF', () => {
  cy.get('.awn-toast-wrapper').should('be.visible').and('contain.text', 'Tamanho do cpf ou cnpj inválido');
})

// @Teste03
Given('o modal de cadastro de cliente', () => {
  cy.get('[data-test="modal-content"]').should('be.visible');
})

When('digitar {string} no campo nome', (nome) => {
  cy.get('[data-test="clientes-input_nome"]').type(nome);
});

And('digitar o {int} como telefone inválido', (phone) => {
  cy.get('#telefone-novo-cliente div:eq(1) input[type=text]').type(phone)
})

And('clicar no botão Cadastrar', () => {
  cy.get('[data-test="clientes-button_cadastrar"]').should('be.enabled').click();
})

Then('deve aparecer uma mensagem de erro relacionado ao telefone', () => {
  cy.get('.awn-toast-wrapper').should('be.visible').and('contain.text', 'Must be at least 10 characters in length');
})

// @Teste04
Given('o modal de cadastro de cliente', () => {
  cy.get('[data-test="modal-content"]').should('be.visible');
})

When('digitar {string} no campo nome', (nome) => {
  cy.get('[data-test="clientes-input_nome"]').type(nome);
});

And('digitar o {int} como CEP inválido', (cep) => {
  cy.get('[data-test="clientes-input_cep"]').type(cep, { delay: 150 })
    .blur();
})

Then('deve aparecer uma mensagem de erro relacionado ao CEP', () => {
  cy.get('.awn-toast-wrapper').should('be.visible').and('contain.text', 'CEP Inválido!');
  cy.get('[data-test="clientes-input_cep"]').clear();
})

// @Teste05
Given('o modal de cadastro de cliente', () => {
  cy.get('[data-test="modal-content"]').should('be.visible');
})

When('digitar {string} no campo nome', (nome) => {
  cy.get('[data-test="clientes-input_nome"]').type(nome);
});

And('digitar o {string} como Email inválido', (email) => {
  cy.get('#email-novo-cliente').type(email);
})

Then('deve aparecer uma mensagem de erro no campo de Email', () => {
  cy.get('.erros-container').should('be.visible');
  cy.get('[data-test="clientes-button_cadastrar"]').should('is.disabled');
})