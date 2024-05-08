Feature: Criar novo cliente

  Background:
    Given o sistema

  @Teste01
  Scenario:
    Given a tela de cliente
    When eu clicar no botão Novo cliente
    And digitar o "Leonardo Hs 123" do cliente
    And clicar no botão Cadastrar
    Then deve aparecer uma mensagem de sucesso
