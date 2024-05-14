Feature: Criar novo cliente

  Background: Deve esta logado e na tela de cliente
    Given o sistema
    When eu clicar no botão de Novo cliente

  @Teste01
  Scenario: Deve criar um novo cliente somente com o nome
    Given o modal de cadastro de cliente
    When digitar "Nome do cliente" no campo nome
    And clicar no botão Cadastrar
    Then deve aparecer uma mensagem de sucesso


  @Teste02
  Scenario: Deve aparecer uma mensagem erro caso coloque um CPF/CNPJ inválido
    Given o modal de cadastro de cliente
    When digitar "Nome do cliente" no campo nome
    And digitar o 55555 como CPF inválido
    And clicar no botão Cadastrar
    Then deve aparecer uma mensagem de erro relacionado ao CPF

  @Teste03
  Scenario: Deve aparecer uma mensagem erro caso coloque um número de telefone inválido
    Given o modal de cadastro de cliente
    When digitar "Nome do cliente" no campo nome
    And digitar o 55555 como telefone inválido
    And clicar no botão Cadastrar
    Then deve aparecer uma mensagem de erro relacionado ao telefone

  @Teste04
  Scenario: Deve aparecer uma mensagem erro caso coloque um CEP inválido
    Given o modal de cadastro de cliente
    When digitar "Nome do cliente" no campo nome
    And digitar o 012345678 como CEP inválido
    Then deve aparecer uma mensagem de erro relacionado ao CEP

  @Teste05
  Scenario: Deve aparecer uma mensagem erro caso coloque um Email inválido
    Given o modal de cadastro de cliente
    When digitar "Nome do cliente" no campo nome
    And digitar o "fds@.com" como Email inválido
    Then deve aparecer uma mensagem de erro no campo de Email