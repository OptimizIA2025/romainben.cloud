/* Comportements partages par les 4 pages : bascule de theme et bascule de langue.
   Le theme est deja pose avant le premier rendu par le petit script inline du
   <head> : ce fichier ne fait que gerer le clic et memoriser le choix. */

(function () {
    'use strict';

    var root = document.documentElement;

    /* ─────────── Theme ─────────── */

    function currentTheme() {
        return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    }

    function applyTheme(theme) {
        root.setAttribute('data-theme', theme);
        var meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', theme === 'dark' ? '#0E0F12' : '#FAFAF9');
        var btn = document.getElementById('theme-toggle');
        if (btn) {
            var toDark = theme === 'light';
            btn.setAttribute('aria-label', toDark ? 'Passer en theme sombre' : 'Passer en theme clair');
            btn.setAttribute('title', toDark ? 'Theme sombre' : 'Theme clair');
        }
    }

    var themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        applyTheme(currentTheme());
        themeBtn.addEventListener('click', function () {
            var next = currentTheme() === 'dark' ? 'light' : 'dark';
            applyTheme(next);
            try { localStorage.setItem('rb-theme', next); } catch (e) {}
        });
    }

    /* Si l'utilisateur n'a jamais tranche, on continue de suivre le systeme. */
    if (window.matchMedia) {
        var mq = window.matchMedia('(prefers-color-scheme: dark)');
        var onSystemChange = function (e) {
            var stored;
            try { stored = localStorage.getItem('rb-theme'); } catch (err) { stored = null; }
            if (stored !== 'dark' && stored !== 'light') applyTheme(e.matches ? 'dark' : 'light');
        };
        if (mq.addEventListener) mq.addEventListener('change', onSystemChange);
        else if (mq.addListener) mq.addListener(onSystemChange);
    }

    /* ─────────── Langue ─────────── */

    /* Le dictionnaire est defini par la page elle-meme dans window.RB_I18N, sous la
       forme { "texte francais exact": "english text" }. Une page sans dictionnaire
       n'affiche pas la bascule, plutot que d'afficher une traduction a trous. */

    var DICT = window.RB_I18N || null;
    var langBtn = document.getElementById('lang-toggle');

    if (!DICT || !langBtn) {
        if (langBtn) langBtn.remove();
        return;
    }

    var SEL = 'h1, h2, h3, h4, p, li, span, a, button, dt, dd, div, title, option, label';
    var norm = function (s) { return s.replace(/\s+/g, ' ').trim(); };

    /* On memorise le francais d'origine au premier passage : la bascule inverse
       doit pouvoir restaurer le texte exact, y compris son balisage interne. */
    var nodes = [];
    Array.prototype.forEach.call(document.querySelectorAll(SEL), function (el) {
        if (el.closest('#lang-toggle, #theme-toggle')) return;

        /* Cas courant : le balisage interne fait partie de la cle. */
        var key = norm(el.innerHTML);
        if (key && Object.prototype.hasOwnProperty.call(DICT, key)) {
            nodes.push({ el: el, mode: 'html', fr: el.innerHTML, en: DICT[key] });
            return;
        }

        /* Boutons et liens a icone : le SVG ne doit pas entrer dans la cle, et
           surtout il ne doit pas etre efface par la traduction. On ne touche
           alors qu'aux noeuds texte, l'icone reste en place. */
        if (el.querySelector('svg')) {
            var txtKey = norm(el.textContent);
            if (txtKey && Object.prototype.hasOwnProperty.call(DICT, txtKey)) {
                var texts = [];
                Array.prototype.forEach.call(el.childNodes, function (n) {
                    if (n.nodeType === 3 && n.nodeValue.trim()) texts.push(n);
                });
                if (texts.length) {
                    nodes.push({
                        el: el, mode: 'text', node: texts[0],
                        extra: texts.slice(1).map(function (x) { return { node: x, fr: x.nodeValue }; }),
                        fr: texts[0].nodeValue, en: DICT[txtKey]
                    });
                }
            }
        }
    });

    var ATTRS = window.RB_I18N_ATTR || {};

    function applyLang(lang) {
        var en = lang === 'en';
        nodes.forEach(function (n) {
            if (n.mode === 'text') {
                n.node.nodeValue = en ? ' ' + n.en + ' ' : n.fr;
                n.extra.forEach(function (x) { x.node.nodeValue = en ? '' : x.fr; });
            } else {
                n.el.innerHTML = en ? n.en : n.fr;
            }
        });

        Object.keys(ATTRS).forEach(function (sel) {
            var spec = ATTRS[sel];
            var el = document.querySelector(sel);
            if (!el) return;
            Object.keys(spec).forEach(function (attr) {
                if (!el.hasAttribute('data-fr-' + attr)) {
                    el.setAttribute('data-fr-' + attr, el.getAttribute(attr) || '');
                }
                el.setAttribute(attr, en ? spec[attr] : el.getAttribute('data-fr-' + attr));
            });
        });

        root.setAttribute('lang', en ? 'en' : 'fr');
        if (en) root.setAttribute('data-lang', 'en'); else root.removeAttribute('data-lang');
        langBtn.textContent = en ? 'FR' : 'EN';
        langBtn.setAttribute('aria-label', en ? 'Revenir au francais' : 'Switch to English');
    }

    var stored;
    try { stored = localStorage.getItem('rb-lang'); } catch (e) { stored = null; }
    if (stored !== 'en' && stored !== 'fr') {
        stored = (navigator.language || '').toLowerCase().indexOf('fr') === 0 ? 'fr' : 'en';
    }
    applyLang(stored);

    langBtn.addEventListener('click', function () {
        var next = root.getAttribute('data-lang') === 'en' ? 'fr' : 'en';
        applyLang(next);
        try { localStorage.setItem('rb-lang', next); } catch (e) {}
    });
})();
