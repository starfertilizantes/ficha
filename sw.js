// Guarda o app no celular para abrir mesmo sem internet.
// Ao publicar uma versão nova, mude o número abaixo para os celulares baixarem a atualização.
const VERSAO = 'ficha-v1';
const ARQUIVOS = ['./', './index.html', './config.js', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSAO).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k.startsWith('ficha-v') && k !== VERSAO).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

const comTempo = (p, ms) => Promise.race([p, new Promise((_, r) => setTimeout(() => r(new Error('tempo')), ms))]);

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Arquivos do próprio app: tenta a internet (para pegar atualizações) e cai no que está guardado se o sinal estiver ruim.
  if (url.origin === self.location.origin) {
    e.respondWith(
      comTempo(fetch(req), 3500)
        .then(res => {
          if (res.ok) { const c = res.clone(); caches.open(VERSAO).then(x => x.put(req, c)); }
          return res;
        })
        .catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('./index.html')))
    );
    return;
  }

  // Fontes: usa a cópia guardada.
  if (url.host === 'fonts.googleapis.com' || url.host === 'fonts.gstatic.com') {
    e.respondWith(
      caches.match(req).then(r => r || fetch(req).then(res => {
        const c = res.clone(); caches.open(VERSAO).then(x => x.put(req, c)); return res;
      }))
    );
  }
  // Google (login e Drive) passa direto, sem cache.
});
