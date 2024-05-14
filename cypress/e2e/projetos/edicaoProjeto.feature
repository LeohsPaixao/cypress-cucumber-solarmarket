Feature: Editando um projeto

Scenario: Editando nome e descrição do projeto

Given que estou na tela de projetos
When eu seleciono o projeto
And edito o nome para "testando edição"
And edito a descricao para "testando a edição de um projeto utilizando cypress cucumber!!!!"
Then projeto editado com sucesso