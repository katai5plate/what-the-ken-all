const fs = require('fs-extra');

(async () => {
  //   const ken = await fs.readJSON('ken.json');
  const list = await fs.readJSON('list.json');
  const template = (body, js) =>
    [
      '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">',
      '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
      '<meta http-equiv="X-UA-Compatible" content="ie=edge">',
      `<title>WTKA</title></head><body>${body}<script>${js}</script></body></html>`
    ].join('');
  const html = template(
    'Open the console!',
    `window.list = ${JSON.stringify(list)}; console.log('Try "window.list"')`
  );
  await fs.writeFile('docs/index.html', html);
})();
