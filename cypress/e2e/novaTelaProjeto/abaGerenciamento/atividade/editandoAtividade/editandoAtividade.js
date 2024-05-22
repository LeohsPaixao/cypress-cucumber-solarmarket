import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

let nomeAtividadeEditada;

Given('que eu estou logado', () => {
    cy.login();
    cy.visitAndwait('/', 500);
});

Given('busco um projeto existente', () => {
    cy.get('[data-test="projetos-menu_lista"]').click();
    cy.get('.card').should('be.visible');
    cy.get(':nth-child(1) > :nth-child(1) > .link').click();
});

When('escolho a atividade que tem o título {string} para editar', (titulo) => {
    // Seleciona o card da atividade com o título especificado
    cy.get('[data-v-4fc93b40=""][data-v-2207a003=""] > :nth-child(1)')
        .contains(titulo)
        .parents('.gerenciamento-atividade-card')
        .within(() => {
            // Clica no botão de ação do dropdown
            cy.get('.dropdown-action-btn').click();
            cy.get('.dropdown-content').within(() => {
                cy.get('li').contains('Editar').click();
            });
        });
});
Then('deve aparecer um modal para edição', () => {
    cy.get('.modal-crud-atividade').should('be.visible');
});

And('Altero o titulo da atividade para {string}', (novoTitulo) => {
    nomeAtividadeEditada = novoTitulo;
    cy.get('[data-test="projetos-titulo_0"]').clear().type(novoTitulo).should('have.value', novoTitulo);
});

And('Altero o tipo de atividade para {string}', (novoTipoAtividade) => {
    cy.get('[data-test="dropdown-box"]').click();
    cy.get('[data-test="dropdown-ul"] > :nth-child(1)').contains(novoTipoAtividade).click();
});

And('salvo a alteração da nova atividade', () => {
    cy.get('[data-test="projetos-botao_salvar_0"]').should('be.enabled').click();
});

Then('deve aparecer a atividade com o novo titulo', () => {
    cy.get('.awn-toast-content').should('contain', 'Atividade editada com sucesso!');
    cy.get('[data-v-4fc93b40=""][data-v-2207a003=""] > :nth-child(1)')
        .should('contain', nomeAtividadeEditada);
});
