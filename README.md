# playwright-basic-test
Teste E2E utilizando o framework playwright

## Build Setup

Acesse a pasta raiz do projeto e execute os comandos a seguir para executar o teste

``` bash
# instalar dependencias do projeto (node_modules)
npm install


# iniciar a execução do teste (Windows)
node .\openEATest.js


# iniciar a execução do teste (Linux)
node ./openEATest.js
```

**Importante - A página web está hospedada no heroku e a carga dos dados demora na primeira requisição**

## O teste consinste em

1. Abrir o navegador

2. Acessar o endereço do FarpasFlix (trabalho simples da faculdade) =)

3. Clicar nos 5 primeiros filmes, selecionando-os,  que sumiram após selecionados três vezes seguidas.

4.  Aguardar o modal com as recomendações de filmes ser aberto

5.  Verificar se a lista de filmes recomendados retornou pelo menos 1 filme
