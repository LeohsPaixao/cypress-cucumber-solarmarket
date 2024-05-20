Feature: Criação de uma nota
  Background: Login no sistema
    Given que eu estou na tela de Login
    Then eu devo entrar na tela principal

  @Teste1
  Scenario: Criando uma nova nota
    Given que eu entre em um projeto
    When seleciono a aba "Notas"
    And clico no botão Nova nota
    And eu insiro o texto "Devo me lembrar de ligar para o Vasco"
    And clico no botão Salvar
    Then deve aparecer a nova nota "Devo me lembrar de ligar para o Vasco"
