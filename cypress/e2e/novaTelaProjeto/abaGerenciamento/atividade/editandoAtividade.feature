Feature: Edição de atividades

    Background: Login no sistema
    Given que eu estou logado

    @Teste1
    Scenario: Editando uma atividade
    Given busco um projeto existente
    When escolho a atividade que tem o título "Ligar para Messi e dizer Hala Madrid" para editar
    Then deve aparecer um modal para edição
    And Altero o titulo da atividade para "Ligar para Papai cris e dizer Saudades"
    And Altero o tipo de atividade para "Ligar"
    And salvo a alteração da nova atividade
    Then deve aparecer a atividade com o novo titulo


    