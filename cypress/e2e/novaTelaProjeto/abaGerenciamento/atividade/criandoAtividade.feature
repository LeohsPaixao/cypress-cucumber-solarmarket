Feature: Criação de atividade
    Scenario: Criando uma nova atividade
        Given que eu estou logado
        When busco um projeto existente
        # But caso não houver projeto eu crio um projeto chamado "Projeto da casa de Fulano"
        And eu clico no botão Nova Atividade
        And insiro o nome da atividade "Ligar pra mateus, foi de vasco" e escolher o tipo de atividade "Ligar"
        Then a nova atividade deve ser criada