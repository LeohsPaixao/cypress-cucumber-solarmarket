Feature: Criando novo projeto

Scenario: Criar um novo projeto

Given que estou na tela de projetos
When eu coloco o nome do projeto como "projeto casa do cliente" e o nome do cliente como "testando cucumber11"
And eu coloco a descrição como "Lorem ipsum dolor sit amet. Aut delectus voluptas ut consequuntur eaque est voluptates obcaecati qui voluptatem provident sit voluptatem animi. Eos quae consequatur est nemo illum et laboriosam enim"
And eu clico no botão de cadatrar
Then um novo projeto é criado com sucesso