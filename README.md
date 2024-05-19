# Dominando o Padrão MVC: Um Guia Prático e Teórico

## Introdução

Este repositório é um recurso educacional abrangente projetado para ensinar o padrão de projeto Model-View-Controller (MVC) através de uma abordagem prática e teórica. 
Com um projeto prático como base, você será capaz de entender e aplicar o padrão MVC em seus futuros projetos de desenvolvimento. 
Além disso, a teoria que abordaremos fornecerá a base necessária para uma boa compreensão da prática.

Lembre-se, `A prática leva à perfeição`. Portanto, é essencial que você aplique o que aprendeu. Mas não se preocupe, você pode se referir a este projeto 
sempre que precisar de um lembrete ou orientação.

Esperamos que este repositório seja um recurso valioso em sua jornada para dominar o padrão MVC. Desejamos a você boa sorte e um aprendizado gratificante!

## Sobre o Projeto

Este projeto, que serve como um modelo para o seu aprendizado, simula um site simples de gerenciamento de tarefas. Ele permite que você crie, edite, exclua e conclua tarefas diárias, proporcionando uma experiência prática do padrão MVC.

## Tecnologias Utilizadas

- `JavaScript:` A linguagem de programação principal do projeto.
- `SQL:` Usado para interagir com um banco de dados relacional.
- `MySQL:` O Sistema de Gerenciamento de Banco de Dados (SGBD) utilizado.
- `Express:` Um framework JavaScript que facilita a criação de servidores web.
- `Sequelize:` Um ORM para facilitar e acelerar as consultas ao banco de dados.
- `Handlebars:` A engine de templates/views utilizada neste projeto.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js**
- **npm**
- **Git**

## Índice

- Título do Projeto
- Introdução
- Sobre o Projeto
- Tecnologias Utilizadas
- Pré-requisitos
- Índice
- Instalação
- Uso
- Teoria

# Instalação 

Para ter este repositório localmente em sua máquina, siga os passos abaixo:

1. Clone o repositório:

```bash
git clone https://github.com/PedroLung/projeto-vetclinic.git
```

2. Navegue até o diretório do projeto:

```bash
cd projeto-vetclinic
```

3. Instale as dependências:

```bash
npm install
```

## Como Usar

Para testar este código, siga os passos abaixo:

1. Abra seu navegador (preferencialmente o Chrome) e insira a seguinte URL: `localhost:3000/tasks`.

2. Clique no botão 'Criar' para criar uma nova tarefa. Basta inserir o título e a descrição da tarefa.

3. O botão 'Ver todos' funciona como uma página inicial. Sempre que clicar nele, você poderá visualizar todas as suas tarefas criadas.

4. Para editar uma tarefa, clique no botão 📝.

5. Para excluir uma tarefa, clique no X.

6. Para marcar uma tarefa como concluída, clique no botão ✔️. Clicar novamente desmarca a tarefa.

Nota: Em breve, adicionarei uma nova View. Quando você clicar no nome da tarefa, será apresentada a descrição da tarefa.

# Teoria do padrão MVC

# Arquitetura de Software

A arquitetura de software é o planejamento geral de uma aplicação, garantindo o melhor desempenho para a execução de um sistema. Ela envolve a organização dos componentes, definições de estruturas, protocolos de comunicação, sincronização, acesso a dados e muito mais. Assim como um projeto arquitetônico define como um imóvel será construído, a arquitetura de software estabelece padrões técnicos para a segurança, escalabilidade e performance de um sistema. A escolha do modelo arquitetural impacta diretamente a qualidade, manutenção e escalabilidade do software.

Antes de mergulhar nos conceitos da arquitetura MVC, é importante entender um pouco mais sobre o padrão arquitetural Tiers e Layers, que será complementado pelo MVC.

## Tiers e Layers

### Tiers

As camadas de Tiers são mais densas e físicas, formando uma grande caixa. Antigamente, essa camada era conhecida como a infraestrutura física, incluindo servidores, redes interligadas e hardware em geral. No entanto, hoje em dia, o conceito de Tiers também abrange os grandes componentes arquiteturais e camadas individuais de um sistema. Adicionou-se uma parte lógica ao tier, incluindo banco de dados e contêineres grandes de uma aplicação. Os Tiers geralmente estão relacionados à infraestrutura e à disponibilidade do sistema. Por exemplo, um sistema de três Tiers pode ter uma camada de apresentação (front-end), uma camada de lógica de negócios (back-end) e uma camada de banco de dados.

### Layers

As camadas de Layers são menores, uma abstração mais interna, focando na organização do código-fonte. Elas representam a estrutura lógica da aplicação e como os diferentes módulos ou componentes se relacionam. Por exemplo, em uma aplicação web, você pode ter camadas como interface do usuário (UI), lógica de negócios e acesso a dados. Cada camada tem responsabilidades específicas e se comunica com outras camadas de maneira bem definida. Algumas características das camadas Layers incluem:

- **Organização interna**: As Layers organizam os conteúdos dentro de um projeto.
- **Camadas internas**: Elas definem como o código é dividido e agrupado.
- **Exemplo prático**: Imagine as pastas dentro do seu projeto, representando diferentes partes da aplicação.

Em resumo, Tiers se concentram na infraestrutura física e nos grandes componentes, enquanto Layers tratam da organização interna e lógica do código.

## Padrão Arquitetural MVC (Model-View-Controller)

O MVC (Model-View-Controller) é um padrão arquitetural amplamente utilizado no desenvolvimento de software. Ele oferece uma divisão clara e organizada das responsabilidades entre os componentes de uma aplicação. Vamos analisar suas anotações e fazer as correções:

### Model

- **Regra de Negócio**: Contém a lógica de negócio da aplicação.
- Define as propriedades das entidades.
- Pode ser dividido em várias camadas, como serviços, repositórios e modelos de domínio.

### View

- **Regra de Visualização**: Cuida da interface e da experiência do usuário.
- Interage diretamente com o usuário.
- Exibe os dados processados pelo controller.
- É puramente a interface da aplicação.

### Controller (Ponto de Entrada)

- **Camada Core**: Responsável pela lógica e inteligência da aplicação.
- Recebe requisições dos usuários e interage com os modelos.
- Pode fazer chamadas para vários Models.
- Constrói a view com base nas informações coletadas dos Models.
