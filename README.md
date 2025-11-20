# Atlantis - Gerenciamento de Acomodações

## Implementação do padrão Builder

Para permitir a criação flexível de diferentes tipos de acomodações em hotéis, pousadas ou resorts, aplicamos o padrão de projeto **Builder**:

- **Classe Acomodação**: Representa qualquer tipo de acomodação, com atributos como camas de solteiro, camas de casal, suítes, climatização e vagas de garagem.
- **ConstrutorAcomodação**: Define a construção passo a passo de uma acomodação.
- **Diretor**: Controla a construção de diferentes tipos de acomodações.
- **Classes DiretorEspecíficas**: Ex.: `DiretorSolteiroSimples`, responsáveis por criar acomodações específicas com as configurações definidas na tabela de opções de hospedagem.

## Funcionalidades implementadas

- Criação de todos os tipos de acomodações, conforme definido pela tabela de melhores opções.
- Controle de hospedagem, permitindo:
  - Registro de hóspedes.
  - Vinculação de hóspedes a acomodações específicas.

## Como rodar o projeto

Instalação das dependências:

```bash
npm install
````

Para executar o sistema, é necessário estar na pasta do arquivo principal:

```bash
cd src
cd ts/app
```

E então executar o arquivo `app.ts`:

```bash
npx ts-node app.ts
```
