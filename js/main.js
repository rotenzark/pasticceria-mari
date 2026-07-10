/* ==========================================================================
   Pasticceria Marí — Milano
   Vanilla JS: i18n IT/EN, animazioni, menu mobile, form torte → WhatsApp.
   ========================================================================== */
(function () {
  'use strict';

  /* ---------- Configurazione ----------
     Se il numero WhatsApp della pasticceria è diverso dal fisso,
     basta cambiarlo qui (formato internazionale, senza + né spazi). */
  var CONFIG = {
    whatsapp: '390221119196'
  };

  var REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Dizionario IT / EN ---------- */
  var I18N = {
    it: {
      'skip': 'Salta al contenuto',
      'nav.storia': 'La storia',
      'nav.prodotti': 'Prodotti',
      'nav.torte': 'Torte su misura',
      'nav.contatti': 'Contatti',
      'nav.cta': 'Ordina una torta',

      'hero.overline': 'Pasticceria artigianale — Milano',
      'hero.title': 'La dolcezza ha un indirizzo.',
      'hero.sub': 'Brioche appena sfornate, caffè come si deve e torte create su misura per i tuoi momenti. In via Montegani 10, ogni giorno dal mattino presto.',
      'hero.cta1': 'Ordina la tua torta',
      'hero.cta2': 'Scopri i prodotti',
      'hero.hours': 'Aperti ogni giorno dalle 6:30',

      'mq.1': 'Brioche alla crema', 'mq.2': 'Caffè espresso', 'mq.3': 'Torte su misura',
      'mq.4': 'Baci di dama', 'mq.5': 'Panettone artigianale', 'mq.6': 'Pasticcini mignon',

      'storia.overline': 'La nostra storia',
      'storia.title': 'Un forno di quartiere, un cuore milanese.',
      'storia.p1': 'Marí nasce in via Lodovico Montegani, nel sud di Milano, dove ogni mattina alle 6:30 il profumo di burro e vaniglia attraversa la serranda ancora mezza alzata. Prima i cornetti, poi il caffè, poi i sorrisi: è così che apriamo, da sempre.',
      'storia.p2': 'Ogni brioche è sfornata qui, ogni torta è disegnata insieme a chi la ordina, ogni panettone lievita con calma tutta la notte. Non abbiamo fretta: la pasticceria è un mestiere di pazienza.',
      'storia.quote': '«La brioche con crema pasticcera è a un livello successivo di bontà.»',
      'storia.cite': '— dai nostri clienti',
      'storia.s1': 'apriamo ogni mattina',
      'storia.s2': 'giorni a settimana',
      'storia.s3': 'artigianale',
      'storia.alt': 'La vetrina dei dolci della Pasticceria Marí: mignon, crostatine e cannoli',

      'prod.overline': 'La vetrina',
      'prod.title': 'Ciò che esce dal nostro forno',
      'prod.sub': 'Pochi dolci, fatti bene, ogni giorno. E quando arriva una festa, la vetrina si veste a tema.',
      'prod.1.t': 'Brioche & viennoiserie',
      'prod.1.d': "Sfogliate, alla crema, al cioccolato: il buongiorno dei milanesi, sfornato all'alba.",
      'prod.1.alt': 'Brioche alla crema pasticcera con zucchero a velo',
      'prod.2.t': 'Pasticcini mignon',
      'prod.2.d': 'Piccoli capolavori da vassoio, per la domenica in famiglia e i giorni di festa.',
      'prod.2.alt': 'Vassoio di pasticcini mignon assortiti',
      'prod.3.t': 'Torte classiche e su misura',
      'prod.3.d': 'Dalla crostata di frutta alla torta dei tuoi sogni, decorata come la immagini tu.',
      'prod.3.alt': 'Crostata di frutta fresca con crema pasticcera',
      'prod.4.t': 'La brioche nera',
      'prod.4.d': 'La specialità che incuriosisce tutti: sfoglia al carbone vegetale, cuore morbido di crema.',
      'prod.4.alt': 'Brioche alla crema accanto alla brioche nera al carbone vegetale',
      'prod.5.t': 'Colazione & caffè',
      'prod.5.d': 'Cappuccino con la schiuma giusta e brioche calda: il rito del mattino, dalle 6:30.',
      'prod.5.alt': 'Cappuccino con latte art a cuore e brioche appena sfornata',
      'prod.6.t': 'La vetrina cambia ogni giorno.',
      'prod.6.d': 'Il modo migliore per scoprirla è passare a trovarci: via Lodovico Montegani 10.',
      'prod.6.a': 'Come raggiungerci',

      'torte.overline': 'Torte personalizzate',
      'torte.title': 'La torta dei tuoi momenti.',
      'torte.sub': "Compleanni, battesimi, lauree, anniversari: raccontaci l'occasione, i gusti e quante persone sarete. Ti rispondiamo con una proposta e il prezzo, senza impegno.",
      'torte.alt': 'Torta di compleanno con panna montata e fragole fresche',

      'form.nome': 'Il tuo nome *',
      'form.nomePh': 'es. Giulia',
      'form.occ': 'Occasione *',
      'form.occ0': 'Scegli…',
      'form.occ1': 'Compleanno',
      'form.occ2': 'Battesimo / Comunione',
      'form.occ3': 'Laurea',
      'form.occ4': 'Anniversario',
      'form.occ5': 'Matrimonio',
      'form.occ6': 'Altro',
      'form.data': 'Data della festa *',
      'form.pers': 'Numero di persone',
      'form.gusti': 'Gusti e idee',
      'form.gustiPh': 'es. pan di Spagna, crema e fragole, decorazione a tema…',
      'form.send': 'Invia la richiesta su WhatsApp',
      'form.hint': 'Si aprirà WhatsApp con il messaggio già scritto: controlli e invii. Nessuna registrazione.',
      'form.alt': 'Preferisci parlare con noi?',
      'form.err': 'Questo campo è necessario per prepararti la proposta.',

      'cont.overline': 'Contatti',
      'cont.title': 'Vieni a trovarci.',
      'cont.dove': 'Dove siamo',
      'cont.maps': 'Apri in Google Maps',
      'cont.parla': 'Parla con noi',
      'cont.orari': 'Orari',
      'cont.lun': 'Lunedì',
      'cont.mardom': 'Martedì – Domenica',

      'foot.tag': 'Pasticceria artigianale in via Lodovico Montegani 10, Milano. Ogni giorno dalle 6:30.',
      'foot.top': 'Torna su ↑',

      'meta.title': 'Pasticceria Marí — Milano · Artigianale ogni mattina dalle 6:30'
    },

    en: {
      'skip': 'Skip to content',
      'nav.storia': 'Our story',
      'nav.prodotti': 'Pastries',
      'nav.torte': 'Custom cakes',
      'nav.contatti': 'Find us',
      'nav.cta': 'Order a cake',

      'hero.overline': 'Artisan pâtisserie — Milan',
      'hero.title': 'Sweetness has an address.',
      'hero.sub': 'Freshly baked brioche, proper Italian coffee and cakes made to measure for your moments. Via Montegani 10, open every day from early morning.',
      'hero.cta1': 'Order your cake',
      'hero.cta2': 'Explore our pastries',
      'hero.hours': 'Open every day from 6:30 am',

      'mq.1': 'Cream-filled brioche', 'mq.2': 'Espresso coffee', 'mq.3': 'Custom cakes',
      'mq.4': 'Baci di dama', 'mq.5': 'Artisan panettone', 'mq.6': 'Mignon pastries',

      'storia.overline': 'Our story',
      'storia.title': 'A neighbourhood bakery with a Milanese heart.',
      'storia.p1': 'Marí was born on via Lodovico Montegani, in the south of Milan, where every morning at 6:30 the scent of butter and vanilla drifts under the half-raised shutter. First the croissants, then the coffee, then the smiles: that is how we have always opened.',
      'storia.p2': 'Every brioche is baked here, every cake is designed together with the person ordering it, every panettone rises slowly through the night. We are never in a hurry: pastry is a craft of patience.',
      'storia.quote': '“The cream-filled brioche is on another level of deliciousness.”',
      'storia.cite': '— our guests',
      'storia.s1': 'we open every morning',
      'storia.s2': 'days a week',
      'storia.s3': 'handmade',
      'storia.alt': 'The pastry display at Pasticceria Marí: mignon pastries, tartlets and cannoli',

      'prod.overline': 'The counter',
      'prod.title': 'Fresh from our oven',
      'prod.sub': 'A few things, made well, every single day. And when a holiday comes, the counter dresses up for the occasion.',
      'prod.1.t': 'Brioche & viennoiserie',
      'prod.1.d': 'Flaky, cream-filled or chocolate: the way Milan says good morning, baked at dawn.',
      'prod.1.alt': 'Cream-filled brioche dusted with icing sugar',
      'prod.2.t': 'Mignon pastries',
      'prod.2.d': 'Little masterpieces by the tray, for family Sundays and days of celebration.',
      'prod.2.alt': 'Tray of assorted mignon pastries',
      'prod.3.t': 'Classic & custom cakes',
      'prod.3.d': 'From fruit tarts to the cake of your dreams, decorated exactly as you imagine it.',
      'prod.3.alt': 'Fresh fruit tart with pastry cream',
      'prod.4.t': 'The black brioche',
      'prod.4.d': 'The specialty everyone asks about: charcoal-black pastry with a soft cream heart.',
      'prod.4.alt': 'Cream-filled brioche next to the charcoal black brioche',
      'prod.5.t': 'Breakfast & coffee',
      'prod.5.d': 'A proper cappuccino and a warm brioche: the morning ritual, from 6:30 am.',
      'prod.5.alt': 'Cappuccino with heart latte art and a fresh brioche',
      'prod.6.t': 'The counter changes every day.',
      'prod.6.d': 'The best way to discover it is to drop by: via Lodovico Montegani 10.',
      'prod.6.a': 'How to find us',

      'torte.overline': 'Custom cakes',
      'torte.title': 'A cake for your moments.',
      'torte.sub': 'Birthdays, christenings, graduations, anniversaries: tell us the occasion, the flavours and how many guests. We reply with a proposal and a price, no strings attached.',
      'torte.alt': 'Birthday cake with whipped cream and fresh strawberries',

      'form.nome': 'Your name *',
      'form.nomePh': 'e.g. Julia',
      'form.occ': 'Occasion *',
      'form.occ0': 'Choose…',
      'form.occ1': 'Birthday',
      'form.occ2': 'Christening / Communion',
      'form.occ3': 'Graduation',
      'form.occ4': 'Anniversary',
      'form.occ5': 'Wedding',
      'form.occ6': 'Other',
      'form.data': 'Date of the event *',
      'form.pers': 'Number of guests',
      'form.gusti': 'Flavours & ideas',
      'form.gustiPh': 'e.g. sponge cake, cream and strawberries, themed decoration…',
      'form.send': 'Send the request on WhatsApp',
      'form.hint': 'WhatsApp will open with the message already written: review and send. No sign-up needed.',
      'form.alt': 'Prefer to talk to us?',
      'form.err': 'We need this to prepare your proposal.',

      'cont.overline': 'Find us',
      'cont.title': 'Come visit us.',
      'cont.dove': 'Where we are',
      'cont.maps': 'Open in Google Maps',
      'cont.parla': 'Talk to us',
      'cont.orari': 'Opening hours',
      'cont.lun': 'Monday',
      'cont.mardom': 'Tuesday – Sunday',

      'foot.tag': 'Artisan pâtisserie at via Lodovico Montegani 10, Milan. Every day from 6:30 am.',
      'foot.top': 'Back to top ↑',

      'meta.title': 'Pasticceria Marí — Milan · Artisan pâtisserie, open daily from 6:30 am'
    }
  };

  var lang = 'it';
  try { lang = localStorage.getItem('mari-lang') || 'it'; } catch (e) {}
  if (!I18N[lang]) lang = 'it';

  function applyLang(next) {
    lang = I18N[next] ? next : 'it';
    var dict = I18N[lang];

    document.documentElement.lang = lang;
    document.title = dict['meta.title'];

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-ph');
      if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      if (dict[key] !== undefined) el.setAttribute('alt', dict[key]);
    });

    document.querySelectorAll('.lang__btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    try { localStorage.setItem('mari-lang', lang); } catch (e) {}

    splitHeroTitle(true);
    refreshMarquee();
  }

  document.querySelectorAll('.lang__btn').forEach(function (btn) {
    btn.addEventListener('click', function () { applyLang(btn.getAttribute('data-lang')); });
  });

  /* ---------- Hero title: word-by-word reveal ---------- */
  var heroTitle = document.getElementById('heroTitle');
  var heroShown = false;

  function splitHeroTitle(instant) {
    if (!heroTitle) return;
    var text = heroTitle.textContent.trim();
    heroTitle.textContent = '';
    heroTitle.classList.add('is-split');
    text.split(/\s+/).forEach(function (word, i) {
      var w = document.createElement('span');
      w.className = 'w';
      var inner = document.createElement('span');
      inner.className = 'w__in';
      inner.style.setProperty('--wd', (0.08 * i) + 's');
      inner.textContent = word;
      w.appendChild(inner);
      heroTitle.appendChild(w);
      heroTitle.appendChild(document.createTextNode(' '));
    });
    if (instant && heroShown) {
      // language switched after intro: show immediately, no re-animation
      heroTitle.classList.add('is-shown');
    }
  }

  function showHeroTitle() {
    heroShown = true;
    if (heroTitle) {
      // double rAF so the initial transform is committed before transitioning
      requestAnimationFrame(function () {
        requestAnimationFrame(function () { heroTitle.classList.add('is-shown'); });
      });
    }
  }

  /* ---------- Preloader ---------- */
  var preloader = document.getElementById('preloader');
  var preloaderDone = false;

  function finishPreloader() {
    if (preloaderDone) return;
    preloaderDone = true;
    if (preloader) preloader.classList.add('is-done');
    showHeroTitle();
  }

  if (REDUCED) {
    finishPreloader();
  } else {
    window.addEventListener('load', function () { setTimeout(finishPreloader, 350); });
    setTimeout(finishPreloader, 1800); // fallback: mai bloccare l'utente
  }

  /* ---------- Nav: stato scrolled ---------- */
  var nav = document.getElementById('nav');
  function onScrollNav() {
    nav.classList.toggle('is-scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScrollNav, { passive: true });
  onScrollNav();

  /* ---------- Menu mobile ---------- */
  var burger = document.getElementById('burger');
  var mmenu = document.getElementById('mobileMenu');

  function setMenu(open) {
    burger.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Chiudi il menu' : 'Apri il menu');
    mmenu.classList.toggle('is-open', open);
    mmenu.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('menu-open', open);
    if (open) nav.classList.add('is-scrolled');
    else onScrollNav();
  }

  burger.addEventListener('click', function () {
    setMenu(!mmenu.classList.contains('is-open'));
  });
  mmenu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { setMenu(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mmenu.classList.contains('is-open')) setMenu(false);
  });

  /* ---------- Reveal on scroll ---------- */
  var toReveal = document.querySelectorAll('.reveal, .img-reveal');
  if ('IntersectionObserver' in window && !REDUCED) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    toReveal.forEach(function (el) { io.observe(el); });
  } else {
    toReveal.forEach(function (el) { el.classList.add('in-view'); });
  }

  /* ---------- Parallax leggero ---------- */
  var parallaxEls = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
  if (parallaxEls.length && !REDUCED) {
    var ticking = false;
    var updateParallax = function () {
      var vh = window.innerHeight;
      parallaxEls.forEach(function (el) {
        var rect = el.getBoundingClientRect();
        if (rect.bottom < -100 || rect.top > vh + 100) return;
        var speed = parseFloat(el.getAttribute('data-parallax')) || 0.15;
        var offset = (rect.top + rect.height / 2 - vh / 2) * speed;
        el.style.transform = 'translate3d(0,' + offset.toFixed(1) + 'px,0)';
      });
      ticking = false;
    };
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(updateParallax); }
    }, { passive: true });
    updateParallax();
  }

  /* ---------- Marquee: duplica il contenuto per il loop infinito ---------- */
  var marqueeTrack = document.getElementById('marqueeTrack');
  var marqueeBase = marqueeTrack ? marqueeTrack.innerHTML : '';

  function refreshMarquee() {
    if (!marqueeTrack) return;
    var dict = I18N[lang];
    // con reduced-motion il CSS mostra la lista statica: niente doppione
    marqueeTrack.innerHTML = REDUCED ? marqueeBase : marqueeBase + marqueeBase;
    marqueeTrack.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
  }

  /* ---------- Form torte → WhatsApp ---------- */
  var form = document.getElementById('cakeForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var required = ['fNome', 'fOccasione', 'fData'];
      var firstInvalid = null;

      required.forEach(function (id) {
        var input = document.getElementById(id);
        var field = input.closest('.field');
        var error = field.querySelector('.field__error');
        var valid = input.value.trim() !== '';
        field.classList.toggle('has-error', !valid);
        if (error) error.hidden = valid;
        if (!valid && !firstInvalid) firstInvalid = input;
      });

      if (firstInvalid) { firstInvalid.focus(); return; }

      var nome = document.getElementById('fNome').value.trim();
      var occasione = document.getElementById('fOccasione').value;
      var dataVal = document.getElementById('fData').value;
      var persone = document.getElementById('fPersone').value;
      var gusti = document.getElementById('fGusti').value.trim();

      var dataFmt = dataVal;
      try {
        dataFmt = new Date(dataVal + 'T12:00:00').toLocaleDateString(
          lang === 'it' ? 'it-IT' : 'en-GB',
          { day: 'numeric', month: 'long', year: 'numeric' }
        );
      } catch (err) {}

      var msg = lang === 'it'
        ? 'Ciao! Vorrei richiedere una torta personalizzata.\n\n' +
          '• Nome: ' + nome + '\n' +
          '• Occasione: ' + occasione + '\n' +
          '• Data della festa: ' + dataFmt + '\n' +
          '• Persone: ' + (persone || 'da definire') + '\n' +
          '• Gusti e idee: ' + (gusti || 'da definire insieme') + '\n\nGrazie!'
        : 'Hello! I would like to request a custom cake.\n\n' +
          '• Name: ' + nome + '\n' +
          '• Occasion: ' + occasione + '\n' +
          '• Date of the event: ' + dataFmt + '\n' +
          '• Guests: ' + (persone || 'to be defined') + '\n' +
          '• Flavours & ideas: ' + (gusti || 'to be discussed') + '\n\nThank you!';

      window.open('https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(msg), '_blank', 'noopener');
    });

    // rimuovi l'errore appena l'utente corregge
    ['fNome', 'fOccasione', 'fData'].forEach(function (id) {
      var input = document.getElementById(id);
      input.addEventListener('input', function () {
        if (input.value.trim() !== '') {
          var field = input.closest('.field');
          field.classList.remove('has-error');
          var error = field.querySelector('.field__error');
          if (error) error.hidden = true;
        }
      });
    });
  }

  /* ---------- Avvio ---------- */
  splitHeroTitle(false);
  applyLang(lang);
})();
