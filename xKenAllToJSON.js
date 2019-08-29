const fs = require('fs-extra');
const { decode } = require('iconv-lite');

(async () => {
  const buf = await fs.readFile('x-ken-all.csv');
  const csv = decode(buf, 'sjis');
  const json = csv
    .split(/\r\n|\n/)
    .map(v => v.split(',').map(w => w.replace(/^"(.*?)"$/, '$1')))
    .map(
      ([
        id_1,
        id_2,
        postalCode,
        prefKana,
        cityKana,
        townKana,
        pref,
        city,
        town,
        ex_1,
        ex_2,
        ex_3,
        ex_4,
        ex_5,
        ex_6
      ]) => ({
        id_1,
        id_2,
        postalCode,
        prefKana,
        cityKana,
        townKana,
        pref,
        city,
        town,
        ex_1,
        ex_2,
        ex_3,
        ex_4,
        ex_5,
        ex_6
      })
    );
  await fs.writeJSON('ken.json', json);
})();
