# Pasticceria Marí — Sito web

Sito vetrina elegante, bilingue (IT/EN), con richiesta torte personalizzate via WhatsApp.

## Come vederlo subito

Doppio click su `index.html`: si apre nel browser e funziona tutto (il sito non ha dipendenze,
serve solo la connessione per i font Google e la mappa).

## Struttura

```
pasticceria-mari/
├── index.html        ← tutta la pagina (testi italiani di default)
├── css/style.css     ← stile: palette crema/cioccolato/oro, animazioni
├── js/main.js        ← lingue IT/EN, animazioni, modulo torte → WhatsApp
└── assets/img/       ← 8 fotografie reali del locale (+ _archivio-ai/ con le vecchie AI)
```

## Le fotografie

Le foto attuali sono **foto reali della Pasticceria Marí** prese dalla scheda pubblica
di Google Maps (scattate da clienti e dal locale):

| File | Soggetto | Usata in |
|---|---|---|
| `hero.jpg` | interno del locale (versione migliorata con AI a partire dalla foto reale; originali in `_originali/`) | copertina |
| `storia.jpg` | vetrina dei dolci | La nostra storia |
| `brioche.jpg` | brioche alla crema | card prodotti |
| `mignon.jpg` | vetrina mignon e cannoli | card prodotti |
| `torta.jpg` | crostata di frutta | card prodotti |
| `nera.jpg` | brioche nera al carbone | card prodotti |
| `caffe.jpg` | cappuccino con latte art | card prodotti |
| `torte-vetrina.jpg` | torta panna e fragole | sezione torte |

⚠️ **Diritti d'uso**: queste foto appartengono a chi le ha scattate (clienti/il locale).
Per lavorarci e mostrare il sito alla pasticceria vanno benissimo; **prima di pubblicare
il sito online** conviene farsi consegnare le foto (o l'autorizzazione) direttamente
dalla Pasticceria Marí. In `assets/img/_archivio-ai/` restano le immagini AI precedenti,
libere da diritti, riutilizzabili come ripiego rimettendole al posto di quelle attuali
(stessi nomi; `baci.jpg` → oggi `nera.jpg`, `panettone.jpg` → oggi `caffe.jpg`).

## Personalizzazioni frequenti

| Cosa | Dove |
|---|---|
| **Numero WhatsApp** | `js/main.js`, riga ~12: `CONFIG.whatsapp` (formato internazionale senza + né spazi). Ora è impostato il fisso `390221119196`: se la pasticceria usa un altro numero per WhatsApp, va cambiato qui. |
| **Testi (italiano e inglese)** | `js/main.js`, oggetto `I18N` — ogni chiave esiste in `it:` e in `en:`. |
| **Orari** | `index.html`, sezione `id="contatti"` (e nel blocco JSON-LD in `<head>` per Google). |
| **Foto** | Sostituire i file in `assets/img/` mantenendo gli stessi nomi (hero.jpg 1920×1072, storia.jpg e torte-vetrina.jpg 928×1152, le altre 900×900 o proporzioni simili). |
| **Colori** | `css/style.css`, variabili in `:root` in cima al file. |

## Pubblicazione

I file sono statici: si caricano così come sono su qualsiasi hosting
(Netlify, Vercel, GitHub Pages, Aruba, SiteGround…). Nessun build step, nessun database.

1. Caricare l'intera cartella sul server / trascinarla su Netlify.
2. Collegare il dominio (es. `pasticceriamari.it`).
3. Verificare il numero WhatsApp (vedi sopra).

## Note tecniche

- Zero librerie JavaScript: caricamento rapidissimo anche su rete mobile (~1 MB immagini incluse).
- Animazioni con `transform`/`opacity` a 60fps; disattivate automaticamente per chi ha
  "riduci movimento" attivo (accessibilità).
- SEO: meta tag, Open Graph e dati strutturati Schema.org (`Bakery`) già inclusi.
- Le immagini sotto la piega usano `loading="lazy"`: nei browser in background il caricamento
  è rimandato (comportamento normale di Chrome), su una scheda visibile è immediato.
