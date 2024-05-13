Feature: Criando novo projeto

Scenario: Criar um novo projeto

Given que estou na tela de projetos
When eu coloco o nome do projeto como "projeto casa do cliente" e o nome do cliente como "testando cucumber11"
And eu coloco a descrição como "gleidson joga liso"
And eu clico no botão de cadatrar
Then um novo projeto é criado com sucesso