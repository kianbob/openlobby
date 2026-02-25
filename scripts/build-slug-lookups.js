#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function buildLookup(dirName) {
  const dir = path.join(__dirname, '..', 'public', 'data', dirName);
  const lookup = {};
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
  
  for (const f of files) {
    const slug = f.replace('.json', '');
    lookup[slug] = slug;
    try {
      const data = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
      if (data.name) {
        lookup[slugify(data.name)] = slug;
      }
    } catch {}
  }
  return lookup;
}

const types = [
  { dir: 'clients', out: 'client-slug-lookup.json' },
  { dir: 'firms', out: 'firm-slug-lookup.json' },
  { dir: 'lobbyists', out: 'lobbyist-slug-lookup.json' },
];

for (const { dir, out } of types) {
  console.log(`Building ${out} from ${dir}/...`);
  const lookup = buildLookup(dir);
  const outPath = path.join(__dirname, '..', 'public', 'data', out);
  fs.writeFileSync(outPath, JSON.stringify(lookup));
  console.log(`  → ${Object.keys(lookup).length} entries`);
}

console.log('Done.');
