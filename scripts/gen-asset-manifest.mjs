// Genera l'elenco degli asset realmente presenti in public/assets/parkhub.
// AssetSlot usa questo manifest per mostrare subito il fallback senza richieste 404 né flash.
import { readdirSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dir = join(root, 'public', 'assets', 'parkhub');
const out = join(root, 'src', 'app', 'lib', 'asset-manifest.json');

let files = [];
try {
  files = readdirSync(dir).filter((f) => /\.(webp|avif|jpe?g|png)$/i.test(f)).sort();
} catch {
  files = [];
}

mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, JSON.stringify(files, null, 2) + '\n');
console.log(`[assets] ${files.length} file in manifest`);
