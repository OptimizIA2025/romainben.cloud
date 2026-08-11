/* Dictionnaire anglais de la page d'accueil, consomme par site.js.
   Cle = texte francais EXACT du HTML (espaces normalises). Les elements qui
   contiennent une icone SVG sont repris par leur texte seul, site.js sait
   traiter les deux formes. Les noms de technologies ne sont pas traduits. */

window.RB_I18N = {
    /* Titre et hero */
    "Romain Ben | Ingénieur Polytech, co-fondateur OptimizIA.xyz":
        "Romain Ben | Engineering student, co-founder OptimizIA.xyz",
    "Romain Ben <br><span class=\"highlight\">étudiant ingénieur</span> <br>&amp; entrepreneur.":
        "Romain Ben <br><span class=\"highlight\">engineering student</span> <br>&amp; entrepreneur.",
    "étudiant ingénieur": "engineering student",
    "Maths appliquées, automatisation et IA. Ce sont les ingrédients principaux que j'utilise pour proposer via <strong style=\"color: var(--ink)\">OptimizIA.xyz</strong>, des solutions innovantes pour mes clients ! Sept systèmes en production, du workflow de veille au SaaS avec paiement.":
        "Applied mathematics, automation and AI. Those are the main ingredients I use to build innovative solutions for our clients through <strong style=\"color: var(--ink)\">OptimizIA.xyz</strong>. Seven systems in production, from a monitoring workflow to a SaaS with payments.",
    "Me contacter": "Get in touch",
    "Voir les systèmes en production": "See the systems running in production",

    /* Navigation et intitules de section */
    "Parcours": "Background",
    "Compétences": "Skills",
    "Réalisations": "Work",
    "Projets": "Projects",
    "Contact": "Contact",
    "FAQ": "FAQ",
    "CV complet": "Full CV",
    "Prendre rendez-vous": "Book a meeting",
    "SEOPlus!, audit SEO &amp; GEO": "SEOPlus!, SEO &amp; GEO audit",
    "Le parcours": "Background",
    "Ce que je sais faire": "What I can do",
    "Des systèmes qui tournent": "Systems that run",
    "Le code public": "Public code",
    "Travaillons ensemble": "Let's work together",
    "Questions fréquentes": "Frequently asked questions",
    "Mon rôle dans l'agence": "My role in the agency",

    /* Parcours */
    "Je suis en <strong>MAM4 à Polytech Nice Sophia</strong>, sur le campus de <strong>Sophia-Antipolis</strong>, spécialité <strong>Maths Appliquées &amp; Modélisation</strong>. C'est ma <strong>4ᵉ année dans l'école</strong> et la 2ᵉ du cycle ingénieur : j'ai d'abord fait les deux ans de prépa intégrée <strong>PeiP</strong> sur place, à me former sur les maths, l'algo et la modélisation.":
        "I am in my <strong>fourth year at Polytech Nice Sophia</strong>, on the <strong>Sophia-Antipolis</strong> campus, majoring in <strong>Applied Mathematics &amp; Modelling</strong>. It is my <strong>fourth year at the school</strong> and the second of the engineering cycle: I first spent two years in the <strong>PeiP</strong> integrated preparatory programme on campus, training in mathematics, algorithmics and modelling.",
    "En parallèle, j'ai co-fondé <strong>OptimizIA.xyz</strong> avec <a href=\"https://www.ginoux.xyz\" target=\"_blank\" rel=\"noopener\">Rémy Ginoux</a>, une agence d'intégration IA et d'automatisation pour les PME/ETI. Ensemble, nous collaborons sur les aspects techniques et développement : workflows n8n, agents, intégrations. Rémy apporte en plus 25 ans de terrain industriel et la vision business. Mon engagement entrepreneurial est reconnu par le <strong>Statut National Étudiant-Entrepreneur (SNEE)</strong>, dispositif PEPITE du ministère de l'Enseignement supérieur.":
        "Alongside my studies I co-founded <strong>OptimizIA.xyz</strong> with <a href=\"https://www.ginoux.xyz\" target=\"_blank\" rel=\"noopener\">Rémy Ginoux</a>, an AI and automation agency for small and mid-sized companies. We work together on the technical and development side: n8n workflows, agents, integrations. Rémy also brings 25 years of industrial experience and the business vision. My entrepreneurial work is officially recognised by the <strong>French National Student-Entrepreneur Status (SNEE)</strong>, part of the PEPITE programme run by the Ministry of Higher Education.",
    "Depuis, j'ai arrêté de faire seulement des scripts : je livre des <strong>systèmes complets qui tournent en production</strong>, avec base de données, paiement, authentification et supervision. Les cas concrets sont détaillés plus bas.":
        "Since then I have stopped writing standalone scripts: I ship <strong>complete systems that run in production</strong>, with a database, payment, authentication and monitoring. The concrete cases are detailed below.",
    "Ce que j'aime : prendre un problème concret (une boîte Gmail qui déborde, un traitement d'image à optimiser, un site à livrer, une veille à automatiser) et sortir une solution qui marche, sans sur-ingénierie, sans frameworks inutiles.":
        "What I enjoy: taking a concrete problem (an overflowing Gmail inbox, an image pipeline to optimise, a site to ship, monitoring to automate) and delivering something that works, without over-engineering and without needless frameworks.",
    "Antibes, France": "Antibes, France",
    "Polytech Nice Sophia, MAM4": "Polytech Nice Sophia, 4th year",
    "Co-fondateur OptimizIA.xyz": "Co-founder of OptimizIA.xyz",
    "Statut Étudiant-Entrepreneur (SNEE)": "Student-Entrepreneur Status (SNEE)",

    /* Competences */
    "Six domaines qui se répondent, du calcul numérique jusqu'au système en production.":
        "Six areas that feed into each other, from numerical computing to a system running in production.",
    "Développement": "Development",
    "Automatisation &amp; IA": "Automation &amp; AI",
    "Back-end &amp; Données": "Back end &amp; data",
    "Infra &amp; Déploiement": "Infrastructure &amp; deployment",
    "SEO &amp; GEO": "SEO &amp; GEO",
    "Maths &amp; Modélisation": "Maths &amp; modelling",
    "Le choix de la techno suit le besoin, pas la mode. Un site qui doit charger vite reste en HTML pur, une application qui gère des comptes et du temps réel passe sur Next.js.":
        "The stack follows the need, not the trend. A site that has to load fast stays plain HTML, an application that handles accounts and real time moves to Next.js.",
    "Un workflow qui tourne la nuit ne vaut rien s'il tombe en silence. Chaque automatisation que je livre embarque sa reprise sur erreur et son alerte quand une exécution échoue.":
        "A workflow that runs overnight is worthless if it fails silently. Every automation I ship carries its own error recovery and an alert when a run fails.",
    "Qui a le droit de voir quoi se décide dans la base de données, jamais dans le navigateur. C'est ce qui fait qu'un abonnement résilié perd vraiment ses accès.":
        "Who is allowed to see what is decided in the database, never in the browser. That is what makes a cancelled subscription actually lose its access.",
    "Un projet livré est un projet en ligne. Nom de domaine, certificat, en-têtes de sécurité et cache des fichiers sont posés avec le reste, il n'y a rien à héberger après coup.":
        "A delivered project is a project that is live. Domain name, certificate, security headers and file caching ship with the rest, there is nothing left to host afterwards.",
    "Être trouvé ne se joue plus seulement sur Google. Les pages sont écrites pour être citées telles quelles par ChatGPT et Perplexity, avec les données structurées qui vont avec.":
        "Being found is no longer only about Google. Pages are written to be quoted as they are by ChatGPT and Perplexity, with the structured data that goes with it.",
    "La part du cursus qui sert vraiment en mission : estimer un coût de calcul, choisir un algorithme, comprendre pourquoi un traitement rame au lieu de le subir.":
        "The part of the degree that actually pays off on a project: estimating a computation cost, picking an algorithm, understanding why a job is slow instead of putting up with it.",
    "Agents LLM": "LLM agents",
    "Crawlers IA": "AI crawlers",
    "Analyse numérique": "Numerical analysis",
    "Matrices sparses": "Sparse matrices",
    "Équations différentielles": "Differential equations",

    /* Realisations */
    "Une exécution réussie par jour ouvré, avec sa durée.":
        "One successful run per working day, with its duration.",
    "Rapport rendu en direct : score, note et plan en quatre phases.":
        "Report delivered live: score, grade and a four-phase plan.",
    "Vue graphique du système d'information, notes et liens entre projets.":
        "Graph view of the information system, notes and links between projects.",
    "Chaque nuit, l'agent parcourt les sources suivies par le client, note chaque élément selon des critères calibrés avec lui, puis envoie une synthèse le matin du lundi au vendredi. Un second workflow surveille le premier et alerte dès qu'une exécution échoue, ce qui rend la veille exploitable sans surveillance humaine.":
        "Every night the agent goes through the sources the client follows, scores each item against criteria calibrated with him, then sends a digest on weekday mornings. A second workflow watches the first and raises an alert as soon as a run fails, which makes the monitoring usable without anyone supervising it.",
    "SEOPlus! analyse un site sur 80 points techniques, SEO et sécurité, puis rend un rapport bilingue où chaque correctif est classé par priorité plutôt que listé en vrac. Il sert d'abord à qualifier un prospect avec des chiffres au lieu d'un argumentaire. C'est cet outil qui a audité ce site.":
        "SEOPlus! checks a site against 80 technical, SEO and security points, then returns a bilingual report where every fix is ranked by priority rather than dumped in a list. Its first job is to qualify a prospect with numbers instead of a sales pitch. It is the tool that audited this site.",
    "Le paiement Stripe déclenche l'ouverture des accès, mais la décision de qui a le droit de voir quoi se prend dans la base de données, jamais dans le navigateur. C'est ce qui fait qu'un abonnement résilié perd réellement ses accès, et pas seulement l'affichage d'un bouton.":
        "The Stripe payment opens up access, but the decision of who may see what is taken in the database, never in the browser. That is what makes a cancelled subscription actually lose its access, rather than just hiding a button.",
    "Le site d'une consultante en RH et RSE a été reconstruit en HTML, CSS et JavaScript, sans framework, avec ses données structurées et ses pages légales conformes. Il est livré avec un audit SEO et GEO et un plan d'action sur 30 jours, pour qu'elle sache quoi faire une fois le site en ligne.":
        "The site of an HR and CSR consultant was rebuilt in plain HTML, CSS and JavaScript, with its structured data and compliant legal pages. It ships with an SEO and GEO audit and a 30-day action plan, so she knows what to do once the site is live.",
    "À l'arrivée de chaque message, une classification décide de sa catégorie, déclenche une notification si c'est urgent et prépare un brouillon de réponse pour les cas récurrents. Les catégories à faible valeur sont nettoyées automatiquement. Le gain mesuré est de 20 à 30 minutes par jour.":
        "As each message arrives, a classifier decides its category, fires a notification if it is urgent and prepares a reply draft for recurring cases. Low-value categories are cleaned up automatically. The measured gain is 20 to 30 minutes a day.",
    "Les créneaux proposés sont calculés depuis les disponibilités réelles de l'agenda, avec la durée, le battement et le délai de prévenance pilotés par paramètre et non codés en dur. À la réservation, la fiche contact est créée ou mise à jour sans jamais produire de doublon, et la confirmation comme l'invitation visio partent seules.":
        "The slots on offer are computed from real calendar availability, with duration, buffer and notice period driven by settings rather than hard-coded. On booking, the contact record is created or updated without ever producing a duplicate, and both the confirmation and the video-call invitation go out on their own.",
    "Toute l'activité de l'agence tient dans une base Obsidian partagée entre les deux associés : fiches de tâches, backlog priorisé, diagrammes de Gantt et chemin critique remis à jour à chaque sprint. Les tableaux de bord se calculent depuis les fiches, et le point d'avancement part par mail tout seul.":
        "The agency's whole activity sits in an Obsidian base shared between both partners: task records, a prioritised backlog, Gantt charts and a critical path refreshed every sprint. Dashboards are computed from the records, and the progress report goes out by email on its own.",
    "Sept cas concrets, du besoin exprimé jusqu'à la mise en production. Les missions clients sont décrites par secteur, sans nommer les entreprises.":
        "Seven concrete cases, from the stated need through to production. Client work is described by sector, without naming the companies.",
    "Mission client": "Client work",
    "Produit interne": "In-house product",
    "Automatisation": "Automation",
    "Ce site": "This site",
    "Interne": "In-house",

    "Agent de veille quotidien": "Daily monitoring agent",
    "Un créateur de contenu passait ses matinées à éplucher newsletters, vidéos et réseaux pour ne rien rater de son secteur.":
        "A content creator was spending his mornings combing through newsletters, videos and social feeds so as not to miss anything in his field.",
    "Collecte multi-sources déclenchée automatiquement chaque nuit": "Multi-source collection triggered automatically every night",
    "Scoring de pertinence par LLM sur des critères définis avec lui": "Relevance scoring by LLM against criteria defined with him",
    "Synthèse envoyée par mail du lundi au vendredi": "A digest emailed Monday to Friday",
    "Workflow de surveillance qui prévient dès qu'une exécution échoue": "A watchdog workflow that warns as soon as a run fails",
    "Veille livrée 5 jours sur 7, sans intervention": "Monitoring delivered five days a week, hands off",

    "SaaS d'audit SEO &amp; GEO": "SEO &amp; GEO audit SaaS",
    "Qualifier un prospect avec une analyse chiffrée de son site plutôt qu'avec un argumentaire.":
        "Qualifying a prospect with hard numbers about their site rather than with a sales pitch.",
    "Moteur d'analyse couvrant 80 points par site": "An analysis engine covering 80 checks per site",
    "Rapport bilingue avec score, verdict et correctifs priorisés": "A bilingual report with a score, a verdict and prioritised fixes",
    "Espace client et archivage des rapports en base": "A client area with reports archived in the database",
    "Newsletter hebdomadaire générée et envoyée automatiquement": "A weekly newsletter generated and sent automatically",
    "Audit complet rendu en ligne en quelques minutes": "A full audit delivered online in minutes",

    "Plateforme d'abonnement": "Subscription platform",
    "Transformer un service à accès manuel en produit vendable, avec un contrôle d'accès qui ne dépend pas du front.":
        "Turning a manually granted service into a sellable product, with access control that does not depend on the front end.",
    "Paiement Stripe en production, abonnements et espace client": "Stripe payments in production, subscriptions and a client area",
    "Attribution automatique des accès communautaires après paiement": "Community access granted automatically after payment",
    "Droits décidés en base avec Row Level Security": "Permissions decided in the database with Row Level Security",
    "Connexion OAuth en un clic, sans saisie de code": "One-click OAuth sign-in, no code to type",
    "Tunnel de vente opérationnel de bout en bout": "A sales funnel that works end to end",

    "Site vitrine &amp; audit SEO": "Marketing site &amp; SEO audit",
    "Une consultante indépendante en RH et RSE partait d'un site constructeur lent et peu visible dans les résultats de recherche.":
        "An independent HR and CSR consultant was starting from a slow website-builder site with little visibility in search results.",
    "Refonte complète en HTML, CSS et JS, sans framework": "Full rebuild in HTML, CSS and JavaScript, no framework",
    "Données structurées et pages légales conformes": "Structured data and compliant legal pages",
    "Audit SEO et GEO livré avec un plan d'action sur 30 jours": "An SEO and GEO audit delivered with a 30-day action plan",
    "Site en production sur un socle SEO propre": "A live site on clean SEO foundations",

    "Tri intelligent de boîte Gmail": "Smart Gmail inbox triage",
    "Une boîte mail saturée dans laquelle l'important se noyait dans le volume quotidien.":
        "A saturated inbox where what mattered was drowning in the daily volume.",
    "Classification automatique des messages à l'arrivée": "Automatic classification of incoming messages",
    "Notification immédiate sur les urgences": "Instant notification on urgent items",
    "Nettoyage planifié des catégories à faible valeur": "Scheduled clean-up of low-value categories",
    "Brouillons de réponse pré-rédigés pour les cas récurrents": "Pre-written reply drafts for recurring cases",
    "20 à 30 minutes économisées par jour": "20 to 30 minutes saved every day",

    "Prise de rendez-vous sur mesure": "Custom booking funnel",
    "Remplacer un outil de réservation tiers par un tunnel maison, intégré au site et branché sur mon agenda réel.":
        "Replacing a third-party booking tool with an in-house funnel, built into the site and wired to my real calendar.",
    "Créneaux calculés depuis les disponibilités réelles de l'agenda": "Slots computed from real calendar availability",
    "Durée, battement et délai de prévenance pilotés par paramètre": "Duration, buffer and notice period driven by settings",
    "Fiche contact créée ou mise à jour, sans jamais créer de doublon": "A contact record created or updated, never a duplicate",
    "Confirmation par mail et invitation visio générées automatiquement": "Email confirmation and video-call invitation generated automatically",
    "Réservation autonome, zéro saisie manuelle": "Self-service booking, zero manual data entry",

    "Système d'information et pilotage de projet": "Internal information system and project control",
    "Deux associés, plusieurs projets et clients menés en parallèle, et aucun endroit unique pour savoir qui fait quoi ni où en est chaque chantier.":
        "Two partners, several projects and clients running in parallel, and no single place to see who is doing what or where each workstream stands.",
    "Base de connaissances Obsidian partagée et synchronisée entre les deux associés":
        "An Obsidian knowledge base shared and synced between both partners",
    "Portefeuille structuré en sprints : fiches de tâches, backlog priorisé, revue hebdomadaire":
        "A portfolio organised in sprints: task records, prioritised backlog, weekly review",
    "Diagrammes de Gantt, cartes de dépendances et chemin critique tenus à jour à chaque sprint":
        "Gantt charts, dependency maps and a critical path kept current every sprint",
    "Tableaux de bord calculés depuis les fiches, et point d'avancement envoyé par mail automatiquement":
        "Dashboards computed from the records, and a progress report emailed automatically",
    "Un seul endroit pour piloter tous les projets": "A single place to steer every project",

    /* Projets */
    "Projets académiques et sites livrés, avec le dépôt ouvert et la démo en ligne.":
        "Academic projects and delivered sites, with the repository open and the demo online.",
    "En cours": "Ongoing",
    "Maths · Python": "Maths · Python",
    "Front · Freelance": "Front end · Freelance",
    "Covoiturage Polytech": "Polytech carpooling",
    "<strong style=\"color: var(--ink)\">En cours de développement avec la direction de l'école.</strong> Application de covoiturage réservée aux étudiants et personnels de l'Université Côte d'Azur. Inscription restreinte aux adresses institutionnelles, trajets récurrents, réservation passager, calcul des frais d'essence au prorata et carte interactive.":
        "<strong style=\"color: var(--ink)\">Currently being developed with the school's management.</strong> A carpooling app reserved for students and staff of Université Côte d'Azur. Sign-up restricted to institutional addresses, recurring trips, passenger booking, prorated fuel cost splitting and an interactive map.",
    "Compression JPEG (DCT · CSR)": "JPEG compression (DCT · CSR)",
    "Implémentation d'un algorithme de compression inspiré JPEG, transformée en cosinus discrète sur blocs 8×8 puis stockage en matrices sparses CSR. Application Streamlit interactive avec métriques en temps réel.":
        "An implementation of a JPEG-inspired compression algorithm: discrete cosine transform on 8×8 blocks, then storage as CSR sparse matrices. Interactive Streamlit app with metrics in real time.",
    "Site portfolio photographe": "Photographer portfolio site",
    "Site vitrine pour une cliente photographe. Galerie soignée, design responsive, navigation fluide. Projet freelance livré en HTML/CSS/JS vanilla, sans framework.":
        "A marketing site for a photographer. Careful gallery, responsive design, smooth navigation. Freelance project delivered in vanilla HTML, CSS and JavaScript, no framework.",
    "Code": "Code",
    "Démo live": "Live demo",
    "Site live": "Live site",
    "Voir tous les repos sur GitHub": "See all repositories on GitHub",

    /* OptimizIA */
    "<strong>OptimizIA.xyz</strong> est l'agence que j'ai co-fondée avec <a href=\"https://www.ginoux.xyz\" target=\"_blank\" rel=\"noopener\">Rémy Ginoux</a>. Nous accompagnons les dirigeants de PME et d'ETI sur l'intégration de l'IA et l'automatisation de leurs processus, à Nice, à Sophia-Antipolis et à distance partout ailleurs en France.":
        "<strong>OptimizIA.xyz</strong> is the agency I co-founded with <a href=\"https://www.ginoux.xyz\" target=\"_blank\" rel=\"noopener\">Rémy Ginoux</a>. We help the owners of small and mid-sized companies adopt AI and automate their processes, in Nice, in Sophia-Antipolis and remotely anywhere else in France.",
    "Ma part est <strong>technique</strong> : je conçois les systèmes et je les mets en production, du workflow n8n à l'application complète avec base de données, paiement et supervision. Une partie des réalisations ci-dessus vient de là. Rémy porte le diagnostic, la relation client et <strong>25 ans de terrain industriel</strong>. C'est ce qui nous permet d'aller vite sans naviguer à vue.":
        "My side of it is <strong>technical</strong>: I design the systems and take them to production, from an n8n workflow to a complete application with database, payment and monitoring. Part of the work shown above comes from there. Rémy owns the diagnosis, the client relationship and <strong>25 years on the industrial floor</strong>. That is what lets us move fast without flying blind.",
    "Visiter OptimizIA.xyz": "Visit OptimizIA.xyz",

    /* Contact */
    "Deux façons de me joindre selon ce qui t'amène, perso ou pro.":
        "Two ways to reach me, depending on why you are here: personal or professional.",
    "Échange personnel": "Personal enquiry",
    "Une question, une collaboration, un projet étudiant, un simple bonjour : fais-moi un mail.":
        "A question, a collaboration, a student project or just to say hello: drop me an email.",
    "Contacte-moi !": "Email me",
    "Mission OptimizIA.xyz": "OptimizIA.xyz engagement",
    "Un besoin IA, automatisation ou Knowledge Management pour ton entreprise ? Passe par l'agence.":
        "An AI, automation or Knowledge Management need for your company? Go through the agency.",
    "Contacter OptimizIA.xyz": "Contact OptimizIA.xyz",
    "Tu veux améliorer ton site en SEO et GEO ?": "Want to improve your site for SEO and GEO?",
    "Fais un tour sur SEOPlus!, l'outil d'audit qu'on a construit chez OptimizIA.xyz. Il analyse 80 points techniques, SEO et sécurité, et te rend un rapport avec les correctifs classés par priorité. C'est lui qui a audité ce site.":
        "Take a look at SEOPlus!, the audit tool we built at OptimizIA.xyz. It runs 80 technical, SEO and security checks and returns a report with the fixes ranked by priority. It is the tool that audited this site.",
    "Auditer mon site": "Audit my site",

    /* FAQ */
    "Ce qu'on me demande souvent sur OptimizIA.xyz et mon parcours.":
        "What people often ask me about OptimizIA.xyz and my background.",
    "Qui est Romain Ben ?": "Who is Romain Ben?",
    "Romain Ben est un étudiant ingénieur en MAM4 (Mathématiques Appliquées et Modélisation) à Polytech Nice Sophia. Il est co-fondateur de l'agence OptimizIA.xyz, spécialisée en IA et automatisation pour les PME et ETI, et titulaire du Statut National Étudiant-Entrepreneur.":
        "Romain Ben is a fourth-year engineering student in Applied Mathematics and Modelling at Polytech Nice Sophia. He is co-founder of OptimizIA.xyz, an agency specialising in AI and automation for small and mid-sized companies, and holds the French National Student-Entrepreneur Status.",
    "Vous êtes étudiant : est-ce un risque pour mon projet ?":
        "You are a student: is that a risk for my project?",
    "C'est la question la plus légitime, alors voici les faits. Sept systèmes tournent aujourd'hui en production. Les plus complets embarquent base de données, paiement, authentification et supervision, et chacun tourne au rythme prévu avec son commanditaire, du quotidien au jour ouvré, pas seulement livré une fois. Mon statut d'étudiant-entrepreneur (SNEE) est reconnu par le ministère de l'Enseignement supérieur, il encadre officiellement cette activité en parallèle du cursus ingénieur. Et je ne travaille pas seul : chez OptimizIA.xyz, Rémy Ginoux apporte 25 ans de terrain industriel et pilote le diagnostic et la relation client. Le binôme est fait pour ça, ma vitesse d'exécution technique avec son expérience des organisations.":
        "It is the most legitimate question there is, so here are the facts. Seven systems are running in production today. The most complete ones carry a database, payments, authentication and monitoring, and each runs on the cadence agreed with its owner, from daily to every business day, not merely delivered once. My student-entrepreneur status (SNEE) is recognised by the French Ministry of Higher Education and officially covers this activity alongside the engineering degree. And I do not work alone: at OptimizIA.xyz, Rémy Ginoux brings 25 years on the industrial floor and owns the diagnosis and the client relationship. The pairing is built for exactly this, my technical execution speed with his experience of organisations.",
    "Quelle formation suit Romain Ben ?": "What is Romain Ben studying?",
    "Il suit le cursus ingénieur Mathématiques Appliquées et Modélisation (MAM) à Polytech Nice Sophia, école d'ingénieurs de l'Université Côte d'Azur. Il est en MAM4, soit sa quatrième année à Polytech et la deuxième du cycle ingénieur, après deux ans de prépa intégrée PeiP.":
        "He is on the Applied Mathematics and Modelling engineering programme at Polytech Nice Sophia, the engineering school of Université Côte d'Azur. He is in his fourth year at Polytech and the second year of the engineering cycle, after two years in the PeiP integrated preparatory programme.",
    "Quelles sont les compétences techniques de Romain Ben ?": "What are Romain Ben's technical skills?",
    "Développement web (HTML, CSS, JavaScript, Next.js), programmation (Python, Java, C#, C), automatisation n8n, agents LLM sur API OpenAI et Claude, back-end Supabase et PostgreSQL avec RLS, paiement Stripe, déploiement Docker sur VPS, SEO technique et GEO, modélisation mathématique et compression d'image (DCT, CSR).":
        "Web development (HTML, CSS, JavaScript, Next.js), programming (Python, Java, C#, C), n8n automation, LLM agents on the OpenAI and Claude APIs, Supabase and PostgreSQL back ends with RLS, Stripe payments, Docker deployment on a VPS, technical SEO and GEO, mathematical modelling and image compression (DCT, CSR).",
    "Quels systèmes Romain Ben a-t-il livrés en production ?": "What systems has Romain Ben shipped to production?",
    "Un agent de veille quotidien pour un créateur de contenu (collecte multi-sources, scoring par LLM, synthèse envoyée du lundi au vendredi). Un SaaS d'audit SEO et GEO analysant 80 points par site. Une plateforme d'abonnement avec paiement Stripe, espace client et attribution automatique des accès. Un site vitrine et son audit SEO pour une consultante RH et RSE. Un tri automatique de boîte Gmail qui économise 20 à 30 minutes par jour. Un tunnel de prise de rendez-vous sur mesure, dont les créneaux sont calculés depuis les disponibilités réelles de l'agenda. Un système d'information et de pilotage de projet, qui centralise le suivi des tâches et la base de connaissance.":
        "A daily monitoring agent for a content creator (multi-source collection, LLM scoring, a digest sent Monday to Friday). An SEO and GEO audit SaaS running 80 checks per site. A subscription platform with Stripe payments, a client area and automatic access provisioning. A marketing site and its SEO audit for an HR and CSR consultant. Automatic Gmail inbox triage that saves 20 to 30 minutes a day. A bespoke booking funnel whose slots are computed from real calendar availability. And an information and project-steering system that centralises task tracking and the knowledge base.",
    "Qu'est-ce qu'OptimizIA.xyz et quels services proposez-vous ?": "What is OptimizIA.xyz and what services do you offer?",
    "OptimizIA.xyz est une agence B2B d'IA et d'automatisation co-fondée avec <strong>Rémy Ginoux</strong> (25 ans d'expérience en transformation industrielle chez Volvo, Airbus, Solvay). Nous intervenons sur trois axes : <strong>automatisation de processus métier</strong> via workflows n8n, déploiement d'<strong>agents IA personnalisés</strong> sur API OpenAI, et <strong>Knowledge Management</strong> : structuration de la connaissance interne pour la rendre exploitable par des outils IA. L'objectif : libérer +30 % de temps productif dès les premières semaines.":
        "OptimizIA.xyz is a B2B AI and automation agency co-founded with <strong>Rémy Ginoux</strong> (25 years of industrial transformation experience at Volvo, Airbus and Solvay). We work along three lines: <strong>business process automation</strong> through n8n workflows, deployment of <strong>custom AI agents</strong> on the OpenAI API, and <strong>Knowledge Management</strong>, structuring internal knowledge so AI tools can actually use it. The goal: free up 30% more productive time within the first few weeks.",
    "En combien de temps un premier MVP est-il livré ?": "How long does a first MVP take to deliver?",
    "Notre méthode se déroule en 3 phases : un <strong>diagnostic de maturité</strong> (1 à 3 semaines), la construction d'un <strong>MVP fonctionnel en moyenne en 13 jours</strong>, puis une phase d'industrialisation à l'échelle. Le MVP permet au dirigeant de valider concrètement la solution avant tout engagement à grande échelle. Les premiers gains sont mesurables dès la mise en production.":
        "Our method runs in three phases: a <strong>maturity assessment</strong> (one to three weeks), building a <strong>working MVP in 13 days on average</strong>, then scaling up. The MVP lets the owner validate the solution concretely before committing at scale. The first gains are measurable as soon as it goes live.",
    "Quelle est la différence entre un workflow n8n et un agent IA ?": "What is the difference between an n8n workflow and an AI agent?",
    "Un <strong>workflow n8n</strong> est un enchaînement de règles déterministes : si X alors Y. Fiable, auditable, idéal pour les processus bien définis (tri d'emails, synchronisation d'outils, notifications automatiques). Un <strong>agent IA</strong> intègre un LLM capable de raisonner sur des situations non prévues, pour rédiger, synthétiser ou décider avec du contexte. Les deux se combinent souvent : le workflow orchestre, l'agent interprète.":
        "An <strong>n8n workflow</strong> is a chain of deterministic rules: if X then Y. Reliable, auditable, ideal for well-defined processes (email sorting, tool synchronisation, automatic notifications). An <strong>AI agent</strong> embeds an LLM that can reason about situations nobody anticipated, to write, summarise or decide with context. The two are often combined: the workflow orchestrates, the agent interprets.",
    "À qui s'adressent vos solutions ?": "Who are your solutions for?",
    "Principalement des <strong>dirigeants de PME et ETI</strong> avec des processus répétitifs à fort volume : gestion d'emails, qualification de leads, reporting, traitement de documents. Le critère déterminant n'est pas le secteur mais l'existence de <strong>tâches manuelles récurrentes</strong> qui consomment du temps à forte valeur. Nous intervenons aussi pour des particuliers sur des projets ciblés.":
        "Mainly <strong>owners of small and mid-sized companies</strong> with high-volume repetitive processes: email handling, lead qualification, reporting, document processing. The deciding factor is not the sector but the presence of <strong>recurring manual tasks</strong> that eat up high-value time. We also work with individuals on targeted projects.",
    "Comment démarrer un projet avec OptimizIA.xyz ?": "How do I start a project with OptimizIA.xyz?",
    "Le plus simple : envoyer un email à <a href=\"mailto:contact@optimizia.xyz\"><strong>contact@optimizia.xyz</strong></a> en décrivant votre contexte (secteur, processus douloureux, volume estimé). On revient sous 48h pour planifier un premier échange de diagnostic, sans engagement. Vous pouvez aussi passer directement par le formulaire sur <a href=\"https://www.optimizia.xyz/fr/contact.html\" target=\"_blank\" rel=\"noopener\"><strong>optimizia.xyz</strong></a>.":
        "The simplest way: email <a href=\"mailto:contact@optimizia.xyz\"><strong>contact@optimizia.xyz</strong></a> describing your context (sector, the process that hurts, estimated volume). We reply within 48 hours to set up a first diagnostic conversation, with no commitment. You can also use the form on <a href=\"https://www.optimizia.xyz/fr/contact.html\" target=\"_blank\" rel=\"noopener\"><strong>optimizia.xyz</strong></a> directly.",

    /* Footer */
    "Étudiant ingénieur MAM4 en Maths Appliquées à Polytech Nice Sophia, co-fondateur d'OptimizIA.xyz. Dev, automatisation n8n, agents IA et entrepreneuriat.":
        "Fourth-year engineering student in Applied Mathematics at Polytech Nice Sophia, co-founder of OptimizIA.xyz. Development, n8n automation, AI agents and entrepreneurship.",
    "OptimizIA.xyz, l'agence IA &amp; automatisation": "OptimizIA.xyz, the AI &amp; automation agency",
    "Contact &amp; infos": "Contact &amp; info",
    "Ressources": "Resources",
    "Mentions légales": "Legal notice",
    "Présence en ligne vérifiée et suivie par notre propre outil d'audit, sur 80 points techniques, SEO et sécurité.":
        "Online presence verified and monitored by our own audit tool, across 80 technical, SEO and security checks."
};

window.RB_I18N_ATTR = {
    'meta[name="description"]': {
        content: "Romain Ben, fourth-year engineering student at Polytech Nice Sophia and co-founder of OptimizIA.xyz. n8n automation, AI agents, SaaS and applied mathematics."
    }
};
