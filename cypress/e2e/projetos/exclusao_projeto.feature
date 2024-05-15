Feature: remova um projeto dos projetos

Scenario: Remove a project

Given  eu estou na tela de login
When eu clico no projeto 
And eu clico no botao EXCLUIR 
And eu clico no botao ACEITAR
Then o projeto foi removido 

