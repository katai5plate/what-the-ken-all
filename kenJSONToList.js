const fs = require('fs-extra');

(async () => {
  const json = await fs.readJSON('ken.json');
  const list = json.map(({ pref, city, town }) => `${pref}${city}${town}`);
  await fs.writeJSON('list.json', list);
})();
