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
        /* L'attribut n'est pose que pour le sombre, et seulement s'il change
           reellement. Toute ecriture sur la racine invalide le style de tout le
           document, des selecteurs :root[data-theme="dark"] en dependant. Le
           clair etant l'etat par defaut de la feuille, il correspond a l'absence
           d'attribut : l'ecrire quand meme coutait un recalcul complet pour un
           affichage rigoureusement identique. */
        var vise = theme === 'dark' ? 'dark' : null;
        if (root.getAttribute('data-theme') !== vise) {
            if (vise) root.setAttribute('data-theme', vise);
            else root.removeAttribute('data-theme');
        }
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

    /* Pas de suivi de la preference systeme : le site s'ouvre en clair par
       defaut et ne passe en sombre que si l'utilisateur le demande (choix RBE
       du 26/07). Un visiteur en theme systeme sombre voit donc quand meme la
       DA « Trame » telle qu'elle a ete concue. */

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
    var known = (typeof WeakSet === 'function') ? new WeakSet() : null;
    function collect(scope) {
    Array.prototype.forEach.call(scope.querySelectorAll(SEL), function (el) {
        if (el.closest('#lang-toggle, #theme-toggle')) return;
        /* Un element deja enregistre ne doit pas l'etre deux fois : le
           reobserver apres un rendu du tunnel dupliquerait les entrees. */
        if (known) { if (known.has(el)) return; known.add(el); }

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
    }
    collect(document);

    var ATTRS = window.RB_I18N_ATTR || {};

    /* Certaines phrases du tunnel sont assemblees autour d'une valeur (une date,
       une adresse) : leur texte complet n'est jamais deux fois le meme, donc on
       ne peut pas le prendre comme cle. On y remplace des FRAGMENTS, en gardant
       la valeur d'origine pour pouvoir revenir au francais. */
    var FRAG = window.RB_I18N_FRAGMENTS || null;
    var fragNodes = [];

    /* Un fragment d'un seul mot est compare avec des limites de mot : sans ca
       « mai » remplacerait les trois premieres lettres de « mail ». Les
       fragments a plusieurs mots restent en comparaison litterale. */
    var fragRe = {};
    if (FRAG) {
        Object.keys(FRAG).forEach(function (fr) {
            if (!/\s/.test(fr)) {
                fragRe[fr] = new RegExp('\\b' + fr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'g');
            }
        });
    }
    function hasFrag(v, fr) {
        return fragRe[fr] ? new RegExp(fragRe[fr].source, '').test(v) : v.indexOf(fr) !== -1;
    }
    function swapFrag(v, fr) {
        return fragRe[fr] ? v.replace(fragRe[fr], FRAG[fr]) : v.split(fr).join(FRAG[fr]);
    }
    function collectFragments(scope) {
        if (!FRAG) return;
        var walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT, null);
        var n;
        while ((n = walker.nextNode())) {
            var v = n.nodeValue;
            if (!v || !v.trim()) continue;
            if (known && known.has(n)) continue;
            for (var fr in FRAG) {
                if (hasFrag(v, fr)) {
                    if (known) known.add(n);
                    fragNodes.push({ node: n, fr: v });
                    break;
                }
            }
        }
    }

    function applyLang(lang) {
        var en = lang === 'en';
        fragNodes.forEach(function (f) {
            if (!en) { f.node.nodeValue = f.fr; return; }
            var v = f.fr;
            for (var fr in FRAG) { v = swapFrag(v, fr); }
            f.node.nodeValue = v;
        });
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

    /* Tout le travail de traduction est repousse au moment ou l'anglais est
       reellement demande.

       Avant, le chargement appelait `applyLang('fr')` meme en restant en
       francais. Cet appel reecrivait `el.innerHTML` sur chaque element collecte
       avec exactement le meme contenu : rien ne changeait a l'ecran, mais le
       navigateur detruisait puis reconstruisait ces sous-arbres et recalculait
       la mise en page de toute la page. Lighthouse mobile le chiffrait a 415 ms
       de tache longue pour un fichier de 4 Ko, et 1100 ms de Style & Layout.

       La collecte elle-meme (une serialisation de `innerHTML` par element sur un
       selecteur tres large, plus un parcours de tous les noeuds texte) est
       desormais differee au meme titre. Sur un chargement francais, ce fichier
       ne fait donc plus que poser l'etat de la bascule. Le francais d'origine
       reste capture correctement : au moment ou la collecte tourne, le document
       n'a encore jamais ete modifie. */
    var collected = false;
    function ensureCollected() {
        if (collected) return;
        collected = true;
        collect(document);
        collectFragments(document.body);
        watchLateContent();
    }

    /* Le tunnel de reservation construit son interface en JavaScript : ses
       textes n'existent pas au chargement. On retraduit donc ce qui apparait
       apres coup, sinon la page bascule en anglais mais pas le calendrier.
       L'observateur n'est installe qu'une fois l'anglais engage : en francais il
       n'aurait rien a faire a chaque mutation du tunnel. */
    function watchLateContent() {
        if (!window.MutationObserver) return;
        var pending = null;
        new MutationObserver(function (records) {
            if (root.getAttribute('data-lang') !== 'en') return;
            var fresh = false;
            records.forEach(function (r) {
                Array.prototype.forEach.call(r.addedNodes, function (n) {
                    if (n.nodeType === 1) { fresh = true; }
                });
            });
            if (!fresh || pending) return;
            pending = setTimeout(function () {
                pending = null;
                var before = nodes.length + fragNodes.length;
                collect(document);
                collectFragments(document.body);
                if (nodes.length + fragNodes.length > before) applyLang('en');
            }, 60);
        }).observe(document.body, { childList: true, subtree: true });
    }

    var stored;
    try { stored = localStorage.getItem('rb-lang'); } catch (e) { stored = null; }

    if (stored === 'en') {
        ensureCollected();
        applyLang('en');
    } else {
        /* Le document est deja dans sa langue d'origine : on ne touche ni au
           contenu ni a la racine. `lang="fr"` est deja sur la balise <html>, et
           `data-lang` n'a pas ete pose puisque le choix memorise n'est pas
           l'anglais. Les reecrire serait deux invalidations de style de plus
           pour un resultat identique. Seul l'etat du bouton reste a poser. */
        langBtn.textContent = 'EN';
        langBtn.setAttribute('aria-label', 'Switch to English');
    }

    langBtn.addEventListener('click', function () {
        ensureCollected();
        var next = root.getAttribute('data-lang') === 'en' ? 'fr' : 'en';
        applyLang(next);
        try { localStorage.setItem('rb-lang', next); } catch (e) {}
    });
})();
