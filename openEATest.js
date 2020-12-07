const { chromium } = require('playwright');
const assert = require('assert');

(async () => {
  const browser = await chromium.launch({headless: false}); //adicionar devtools: true para abrir com o inspecionar aberto
  const page = await browser.newPage();

  // Abrir a página do trabalho
  await page.goto('https://boiling-forest-28972.herokuapp.com/');
  for (let i = 1; i <=3; i++)
    for (let index = 1; index <= 5; index++) {
        await page.click(`#container  div.ui.grid div.twelve.wide.stretched.column div div div:nth-child(${index}) img`);
        await page.screenshot({ path: `evidencias/${i}-${index}-selecionado.png`});
    }
    
    // Espera que o primeiro item dos recomendados seja clicável
    await page.click('#container div:nth-child(4) div div div.content.image.scrolling div.description div.ui.two.cards div:nth-child(1) div div.description div');
    
    // Salva um registro do resultado obtido
    await page.screenshot({ path: `evidencias/filmes-sugeridos.png`});

    // Obter lista de cards
    const list =  await page.$$('.ui.two.cards .card');
    
    // Verificar se a lista de recomendados não está vazia
    assert(list.length > 0);
    browser.close();
})();