import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

let nomeProjeto
let nomeCliente
let descProjeto

Given("que estou na tela de projetos", () => {
    cy.login();
    cy.visitAndwait('/', 500)
    cy.get('[data-test="projetos-menu_lista"]').click()
    cy.get('.header-top > .u-margin-r-15').should('be.visible').click();
    cy.get('[data-test="projetos-modal"] > :nth-child(1) > :nth-child(1)').should('be.visible')
})

When ("eu coloco o nome do projeto como {string} e o nome do cliente como {string}", (nome, cliente) => {
    nomeProjeto = nome;
    nomeCliente = cliente;
    cy.wait(2000)
    cy.get('[data-test="projetos-nome"]').type(nome)
    cy.get('[data-test="projetos-nome_cliente"]').type(cliente);
    cy.get('.u-margin-sm-t-50').should('be.visible')
    
})
And('eu coloco a descrição como {string}', (descricao) =>{
    descProjeto = descricao;
    cy.get('[data-test="projetos-descricao"]').type(descricao)
})
And('eu clico no botão de cadatrar', () =>{
    cy.get('[data-test="projetos-btn_cadastrar"]').click();
})

Then("um novo projeto é criado com sucesso", () => {
    cy.get('.awn-toast-content').should('contain','Projeto criado com sucesso!')
    cy.get('div > h1').should('contain', nomeProjeto);
    cy.get('.descricao-projeto').should('contain', descProjeto);
    cy.get('.dados-cliente > .card-body > :nth-child(1)').should('contain', nomeCliente)

})
