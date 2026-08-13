/* Comportements partages par les 4 pages : consentement a la mesure d'audience,
   bascule de theme et bascule de langue.
   Le theme est deja pose avant le premier rendu par le petit script inline du
   <head> : ce fichier ne fait que gerer le clic et memoriser le choix. */

/* ═══════════ Consentement et mesure d'audience ═══════════ */

/* Microsoft Clarity n'est PAS pose dans le <head> des pages : il est charge
   ici, et uniquement apres acceptation. Tant que le visiteur n'a pas choisi, le
   site ne fait aucune requete sortante et ne depose aucun cookie. C'est la seule
   position defendable pour du rejeu de session, qui n'entre dans aucune des
   exemptions de consentement de la CNIL contrairement a une mesure d'audience
   anonyme.

   Clarity exige de son cote un signal de consentement pour les visiteurs de
   l'EEE, du Royaume-Uni et de la Suisse depuis le 31/10/2025 : sans appel a
   `consentv2` il tourne en mode degrade, donc un site francais qui se contente
   de poser la balise perd des fonctionnalites sans le savoir. Le signal envoye
   ici accorde la mesure d'audience et REFUSE le stockage publicitaire : cela
   suffit aux cartes de chaleur et au rejeu, sans faire poser les cookies
   publicitaires Microsoft (MUID, ANONCHK, MR, SM) qu'il faudrait sinon declarer.
   Seuls `_clck` et `_clsk` sont alors deposes, en first-party.

   Le bandeau se construit ici, feuille de style comprise, plutot que dans les
   quatre pages. Le site n'a pas de CSS partagee, et dupliquer ce bloc quatre
   fois est exactement le defaut qui a deja fait servir deux versions
   contradictoires d'un meme texte. Il porte aussi ses deux langues lui-meme
   plutot que de passer par les dictionnaires i18n, dont les cles sont fragiles ;
   en contrepartie il est exclu de la collecte de traduction par son attribut
   `data-consent`, voir `collect` et `collectFragments` plus bas. */

(function () {
    'use strict';

    var CLARITY_ID = 'y1tpyc2qw8';
    var STORE = 'rb-consent';

    /* Un choix n'est pas eternel. 13 mois pour un accord, la duree de validite
       que la CNIL retient pour les traceurs de mesure d'audience ; 6 mois pour
       un refus, delai au bout duquel la question peut etre reposee sans
       harceler. Passe l'echeance le choix est traite comme absent. */
    var VALIDITE = { granted: 397, denied: 182 };

    var TXT = {
        fr: {
            titre: "Mesure d'audience",
            corps: "Ce site peut utiliser Microsoft Clarity pour comprendre comment ses pages sont lues : clics, défilement, rejeu de navigation. Rien n'est chargé et aucun cookie n'est déposé tant que vous n'avez pas accepté.",
            plus: "Le détail dans les mentions légales",
            oui: "Accepter",
            non: "Refuser",
            gerer: "Gérer les cookies",
            region: "Consentement à la mesure d'audience"
        },
        en: {
            titre: "Analytics",
            corps: "This site can use Microsoft Clarity to understand how its pages are read: clicks, scrolling, session replay. Nothing is loaded and no cookie is stored until you accept.",
            plus: "Full details in the legal notice",
            oui: "Accept",
            non: "Decline",
            gerer: "Manage cookies",
            region: "Consent to analytics"
        }
    };

    var CSS =
        '#rb-consent{position:fixed;left:0;right:0;bottom:0;z-index:9999;' +
        'background:var(--surface);border-top:1px solid var(--ink);' +
        'color:var(--ink-2);font-family:var(--f-body);font-size:.9rem;line-height:1.55}' +
        '#rb-consent .rbc-in{max-width:var(--max-width);margin:0 auto;padding:18px 28px;' +
        'display:flex;align-items:center;gap:28px;flex-wrap:wrap}' +
        '#rb-consent .rbc-txt{flex:1 1 420px;min-width:0}' +
        '#rb-consent .rbc-t{font-family:var(--f-mono);font-size:.72rem;font-weight:600;' +
        'letter-spacing:.12em;text-transform:uppercase;color:var(--ink);margin-bottom:6px}' +
        '#rb-consent a{color:var(--accent);text-decoration:underline}' +
        '#rb-consent .rbc-act{display:flex;gap:10px;flex:0 0 auto}' +
        '#rb-consent button{font-family:var(--f-mono);font-size:.72rem;font-weight:600;' +
        'letter-spacing:.04em;line-height:1;height:38px;min-width:108px;padding:0 18px;' +
        'background:none;border:1px solid var(--ink);color:var(--ink);cursor:pointer;' +
        'transition:var(--transition)}' +
        '#rb-consent button:hover{background:var(--ink);color:var(--paper)}' +
        '.rbc-relink{background:none;border:0;padding:0;font:inherit;color:inherit;' +
        'cursor:pointer;text-decoration:underline}' +
        '@media (max-width:620px){#rb-consent .rbc-in{padding:16px 20px;gap:14px}' +
        '#rb-consent .rbc-act{width:100%}#rb-consent button{flex:1 1 0;min-width:0}}' +
        /* cv.html est concu pour etre imprime en PDF : un bandeau en position
           fixe se retrouverait sur la sortie papier, et le rappel du pied avec. */
        '@media print{#rb-consent,.rbc-relink-wrap{display:none}}';

    function langue() {
        if (document.documentElement.getAttribute('data-lang') === 'en') return 'en';
        try { if (localStorage.getItem('rb-lang') === 'en') return 'en'; } catch (e) {}
        return 'fr';
    }

    function lire() {
        var brut;
        try { brut = localStorage.getItem(STORE); } catch (e) { return null; }
        if (!brut) return null;
        var v;
        try { v = JSON.parse(brut); } catch (e) { return null; }
        if (!v || !VALIDITE.hasOwnProperty(v.s)) return null;
        if ((Date.now() - (v.t || 0)) / 86400000 > VALIDITE[v.s]) return null;
        return v.s;
    }

    function ecrire(s) {
        try { localStorage.setItem(STORE, JSON.stringify({ s: s, t: Date.now() })); } catch (e) {}
    }

    var charge = false;

    function charger() {
        if (charge) return;
        charge = true;
        /* Souche officielle Microsoft. Elle empile les appels dans `clarity.q`
           en attendant le vrai script : le signal de consentement pose juste
           apres ne peut donc pas arriver trop tot, il sera rejoue. */
        (function (c, l, a, r, i, t, y) {
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
            t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
            y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
        })(window, document, 'clarity', 'script', CLARITY_ID);
        window.clarity('consentv2', { ad_Storage: 'denied', analytics_Storage: 'granted' });
    }

    function revoquer() {
        if (window.clarity) {
            window.clarity('consentv2', { ad_Storage: 'denied', analytics_Storage: 'denied' });
        }
        /* `_clck` et `_clsk` sont deposes en first-party sur ce domaine : on les
           efface nous-memes plutot que de dependre du script tiers pour le
           faire. Le rechargement qui suit coupe la collecte deja en cours, un
           refus devant prendre effet immediatement et pas au prochain clic. */
        ['_clck', '_clsk'].forEach(function (n) {
            document.cookie = n + '=; Max-Age=0; path=/';
            document.cookie = n + '=; Max-Age=0; path=/; domain=.' + location.hostname;
        });
    }

    var bandeau = null;

    function construire() {
        var t = TXT[langue()];
        var style = document.createElement('style');
        style.textContent = CSS;
        document.head.appendChild(style);

        bandeau = document.createElement('div');
        bandeau.id = 'rb-consent';
        bandeau.setAttribute('data-consent', '');
        bandeau.setAttribute('role', 'region');
        bandeau.setAttribute('aria-label', t.region);
        bandeau.innerHTML =
            '<div class="rbc-in"><div class="rbc-txt">' +
            '<p class="rbc-t"></p><p class="rbc-b"></p></div>' +
            '<div class="rbc-act">' +
            '<button type="button" data-rbc="non"></button>' +
            '<button type="button" data-rbc="oui"></button>' +
            '</div></div>';

        /* En tete de <body> : un bandeau de consentement doit etre atteint tot
           au clavier et par un lecteur d'ecran, meme s'il est affiche en bas. */
        document.body.insertBefore(bandeau, document.body.firstChild);

        bandeau.querySelector('[data-rbc="non"]').addEventListener('click', function () {
            ecrire('denied');
            if (charge) { revoquer(); location.reload(); return; }
            masquer();
        });
        bandeau.querySelector('[data-rbc="oui"]').addEventListener('click', function () {
            ecrire('granted');
            charger();
            masquer();
        });

        peindre();
    }

    /* Les libelles sont reecrits a chaque affichage plutot que poses une fois :
       la langue peut avoir change depuis la construction du bandeau. */
    function peindre() {
        if (!bandeau) return;
        var t = TXT[langue()];
        bandeau.setAttribute('aria-label', t.region);
        bandeau.querySelector('.rbc-t').textContent = t.titre;
        bandeau.querySelector('.rbc-b').innerHTML = '';
        bandeau.querySelector('.rbc-b').appendChild(document.createTextNode(t.corps + ' '));
        var a = document.createElement('a');
        a.href = 'mentions-legales.html#cookies';
        a.textContent = t.plus;
        bandeau.querySelector('.rbc-b').appendChild(a);
        bandeau.querySelector('[data-rbc="non"]').textContent = t.non;
        bandeau.querySelector('[data-rbc="oui"]').textContent = t.oui;
        var relink = document.querySelector('.rbc-relink');
        if (relink) relink.textContent = t.gerer;
    }

    function afficher(focus) {
        if (!bandeau) construire(); else { bandeau.hidden = false; peindre(); }
        if (focus) bandeau.querySelector('[data-rbc="non"]').focus();
    }

    function masquer() {
        if (bandeau) bandeau.hidden = true;
    }

    /* Retirer son accord doit etre aussi simple que le donner : le pied de page
       des quatre pages porte donc un bouton qui rouvre le bandeau. Il est ajoute
       ici et non dans le HTML pour ne pas casser les cles de traduction du pied
       de page, qui indexent sur le contenu complet de l'element. */
    function poserRappel() {
        var hote = document.querySelector('footer .footer-domains');
        if (!hote) return;
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'rbc-relink';
        b.textContent = TXT[langue()].gerer;
        b.addEventListener('click', function () { afficher(true); });
        /* Separateur et bouton dans une meme enveloppe : masquer le seul bouton
           a l'impression laisserait le « · » orphelin dans le PDF du CV. */
        var enveloppe = document.createElement('span');
        enveloppe.className = 'rbc-relink-wrap';
        enveloppe.setAttribute('data-consent', '');
        enveloppe.appendChild(document.createTextNode(' · '));
        enveloppe.appendChild(b);
        hote.appendChild(enveloppe);
    }

    var choix = lire();
    if (choix === 'granted') charger();
    poserRappel();
    if (!choix) afficher(false);

    document.addEventListener('rb:lang', peindre);
})();

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
        /* `[data-consent]` : le bandeau de consentement porte ses deux langues
           lui-meme, il ne doit pas entrer dans le dictionnaire. */
        if (el.closest('#lang-toggle, #theme-toggle, [data-consent]')) return;
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
            /* Meme exclusion que dans `collect` : sans elle un fragment comme
               un nom de mois viendrait mordre dans le texte du bandeau. */
            if (n.parentNode && n.parentNode.nodeType === 1 &&
                n.parentNode.closest('[data-consent]')) continue;
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
        /* Le bandeau de consentement est hors dictionnaire : il se retraduit sur
           cet evenement, sinon il resterait en francais apres la bascule. */
        document.dispatchEvent(new CustomEvent('rb:lang', { detail: next }));
    });
})();
