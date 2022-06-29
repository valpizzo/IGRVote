const puppeteer = require('puppeteer');
const fs = require('fs/promises');

// Need to capture team name, image, username, password
async function getTeamNames() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://igrugby.org/find-a-club/');

  // Teams: ALL TEAM NAMES in an array
  const teams = await page.$$eval('.uael-sub-menu-item', names => {
    return names.map(el => el.textContent);
  });
  // await page.setViewport({width: 1366, height: 768})
  // await Promise.all([
  //   page.click('.uael-sub-menu-item'),
  //   page.waitForNavigation(),
  // ]);

  // await page.screenshot({path: 'currentPage.png'});
  //const imgs = await page.$eval('.elementor-heading-title', el => el.textContent);
  // const imgs = await page.$$eval('.elementor-heading-title', logos => {
  //   return logos.map(el => el.textContent);
  // });
  // await Promise.all([
  //   page.click('.uael-sub-menu-item'),
  //   page.waitForNavigation(),
  // ]);
  // const imgs = await page.$$eval('.uael-sub-menu-item', els => {
  //   //.elementor-widget-container img
  //   return els.map(async teamPage => {
  //     await teamPage.click();
  //     await page.waitForNavigation();
  //     const logo = await page.$eval(
  //       '.elementor-widget-heading div h2',
  //       thumbnail => thumbnail.textContent,
  //     );
  //     await page.goto('https://igrugby.org/find-a-club/');
  //     return logo;
  //   });

  //   // return el.map(async teamPage => {
  //   //   await Promise.all([teamPage.click(), page.waitForNavigation()]);
  //   //   const logo = await page.$eval(
  //   //     '.elementor-widget-container img',
  //   //     thumbnail => thumbnail.src,
  //   //   );
  //   //   await page.goto('https://igrugby.org/find-a-club/');
  //   //   return logo;
  //   // });
  // });

//   await page.$$eval('button', elHandles => elHandles.forEach(el => el.click()))

// await page.screenshot({ path: 'clicks_eval_foreach.png' })
// await browser.close()

  //console.log(imgs);

  // TRANSFORM TEAMS DATA
  for (var i = 0; i < teams.length; i++) {
    let user = '';
    teams[i].split(' ').forEach(word => {
      user += word[0];
    });
    teams[i] = {
      id: i,
      name: teams[i],
      username: user,
      password: teams[i].split(' ')[0],
    };
    teams[i] = JSON.stringify(teams[i]);
  }
  await fs.writeFile('./data/teams.json', '[' + teams.join(',\r\n') + ']');
  //await fs.writeFile('logos.txt', imgs.join('\r\n'));
  await browser.close();
}

getTeamNames();
