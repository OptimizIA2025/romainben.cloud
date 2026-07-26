/* Dictionnaire anglais de la page CV, consomme par site.js.
   Cle = texte francais EXACT tel qu'il apparait dans le HTML (espaces normalises,
   balises internes comprises). Les noms propres et les technologies ne figurent
   pas ici : ils ne se traduisent pas. */

window.RB_I18N = {
    /* Titre de l'onglet et en-tete */
    "CV de Romain Ben | Automatisation n8n et agents IA":
        "Romain Ben's CV | n8n automation and AI agents",
    "Curriculum vitae, mis à jour le 26 juillet 2026":
        "Curriculum vitae, updated 26 July 2026",
    "Étudiant ingénieur en mathématiques appliquées et modélisation, co-fondateur d'OptimizIA.xyz. Je conçois et je mets en production des systèmes d'automatisation et d'IA pour des PME et des ETI.":
        "Engineering student in applied mathematics and modelling, co-founder of OptimizIA.xyz. I design and ship automation and AI systems that run in production for small and mid-sized companies.",
    "Retour au site": "Back to the site",
    "Imprimer ou enregistrer en PDF": "Print or save as PDF",
    "Antibes, Alpes-Maritimes": "Antibes, French Riviera",
    "Prendre rendez-vous": "Book a meeting",

    /* Titres de section */
    "En résumé": "Summary",
    "Expérience": "Experience",
    "Réalisations en production": "Shipped to production",
    "Compétences techniques": "Technical skills",
    "Formation et distinctions": "Education and awards",
    "Projets, code public": "Projects, public code",
    "Langues et centres d'intérêt": "Languages and interests",
    "Entrepreneuriat et freelance": "Entrepreneurship and freelance",
    "7 systèmes": "7 systems",
    "6 domaines": "6 areas",
    "3 dépôts": "3 repositories",

    /* Resume */
    "Quatrième année à Polytech Nice Sophia, spécialité Mathématiques Appliquées et Modélisation, après deux ans de prépa intégrée PeiP. En parallèle, co-fondateur et responsable technique d'OptimizIA.xyz, agence d'intégration IA et d'automatisation pour les PME et ETI, avec le Statut National Étudiant-Entrepreneur. Je ne livre pas des scripts isolés mais des systèmes complets en production : collecte et traitement de données, agents LLM, base PostgreSQL avec contrôle d'accès, paiement, authentification, déploiement conteneurisé et supervision des exécutions.":
        "Fourth year at Polytech Nice Sophia, majoring in Applied Mathematics and Modelling, after two years of the school's integrated preparatory programme. Alongside my studies I am co-founder and technical lead of OptimizIA.xyz, an AI and automation agency for small and mid-sized companies, and I hold the French National Student-Entrepreneur Status. I do not ship isolated scripts but complete production systems: data collection and processing, LLM agents, a PostgreSQL database with access control, payment, authentication, containerised deployment and run monitoring.",
    "Agents IA et LLM": "AI and LLM agents",
    "Supabase et PostgreSQL": "Supabase and PostgreSQL",
    "Next.js et TypeScript": "Next.js and TypeScript",
    "Docker et nginx": "Docker and nginx",
    "SEO technique et GEO": "Technical SEO and GEO",
    "Mathématiques appliquées": "Applied mathematics",
    "Automatisation n8n": "n8n automation",

    /* Experience */
    "Co-fondateur, responsable technique": "Co-founder, technical lead",
    "<b>2026</b>aujourd'hui": "<b>2026</b>present",
    "<b>2025</b>aujourd'hui": "<b>2025</b>present",
    "OptimizIA.xyz, Sophia-Antipolis": "OptimizIA.xyz, Sophia-Antipolis, France",
    "Agence B2B d'intégration IA et d'automatisation pour dirigeants de PME et d'ETI, co-fondée avec <a href=\"https://www.ginoux.xyz\" target=\"_blank\" rel=\"noopener\">Rémy Ginoux</a>. Je porte la partie technique : architecture, développement, mise en production et exploitation.":
        "A B2B AI and automation agency for owners of small and mid-sized companies, co-founded with <a href=\"https://www.ginoux.xyz\" target=\"_blank\" rel=\"noopener\">Rémy Ginoux</a>. I own the technical side: architecture, development, release and operations.",
    "Conception et exploitation d'une trentaine de <strong>workflows n8n en production</strong> sur VPS : collecte multi-sources, scoring par LLM, notifications, reprise sur erreur, alerte en cas d'échec d'exécution":
        "Designed and operate around thirty <strong>n8n workflows running in production</strong> on a VPS: multi-source collection, LLM scoring, notifications, error recovery and alerting when a run fails",
    "Développement d'<strong>agents IA</strong> sur API OpenAI et Claude, adaptés aux processus internes des clients":
        "Built <strong>AI agents</strong> on the OpenAI and Claude APIs, fitted to each client's internal processes",
    "Back-end <strong>Supabase et PostgreSQL</strong> : modèle de données, Row Level Security, procédures stockées, migrations":
        "<strong>Supabase and PostgreSQL</strong> back end: data model, Row Level Security, stored procedures, migrations",
    "Intégration <strong>Stripe</strong> de bout en bout : abonnements, webhooks, gestion des changements de formule au prorata":
        "End-to-end <strong>Stripe</strong> integration: subscriptions, webhooks, prorated plan changes",
    "Sites et interfaces livrés en HTML, CSS et JavaScript, ou en <strong>Next.js</strong> quand l'authentification et le temps réel l'imposent":
        "Sites and interfaces delivered in plain HTML, CSS and JavaScript, or in <strong>Next.js</strong> when authentication and real time call for it",
    "Déploiement et exploitation : <strong>Docker, nginx, VPS Linux, Vercel</strong>, DNS et TLS, en-têtes de sécurité HTTP, redirections canoniques":
        "Deployment and operations: <strong>Docker, nginx, Linux VPS, Vercel</strong>, DNS and TLS, HTTP security headers, canonical redirects",
    "Optimisation <strong>SEO technique et GEO</strong> : données structurées Schema.org, Core Web Vitals, llms.txt, accès explicite aux crawlers IA":
        "<strong>Technical SEO and GEO</strong>: Schema.org structured data, Core Web Vitals, llms.txt, explicit access for AI crawlers",
    "Développeur web freelance": "Freelance web developer",
    "Missions indépendantes": "Independent assignments",
    "Sites vitrines livrés de la maquette à la mise en ligne, en HTML, CSS et JavaScript sans framework : galerie photographe, site de consultante indépendante, avec données structurées, pages légales conformes et audit SEO livré avec un plan d'action.":
        "Marketing sites delivered from mockup to launch in plain HTML, CSS and JavaScript: a photographer's gallery, an independent consultant's site, with structured data, compliant legal pages and an SEO audit shipped with an action plan.",

    /* Realisations */
    "Les missions clients sont décrites par secteur, sans nommer les entreprises.":
        "Client work is described by sector, without naming the companies.",
    "<b>Mission</b>créateur de contenu": "<b>Client</b>content creator",
    "Agent de veille quotidien": "Daily monitoring agent",
    "Collecte multi-sources déclenchée chaque nuit, scoring de pertinence par LLM sur des critères définis avec le client, synthèse envoyée par mail du lundi au vendredi, et workflow de surveillance qui alerte dès qu'une exécution échoue.":
        "Multi-source collection triggered every night, relevance scoring by LLM against criteria defined with the client, a digest emailed Monday to Friday, and a watchdog workflow that raises an alert as soon as a run fails.",
    "<strong>Résultat :</strong> veille livrée 5 jours sur 7, sans intervention humaine.":
        "<strong>Outcome:</strong> monitoring delivered five days a week, with no human intervention.",
    "<b>Produit</b>interne": "<b>Product</b>in-house",
    "SaaS d'audit SEO et GEO": "SEO and GEO audit SaaS",
    "Moteur d'analyse couvrant 80 points par site, rapport bilingue avec score, verdict et correctifs priorisés, espace client avec archivage des rapports en base, newsletter hebdomadaire générée et envoyée automatiquement.":
        "An analysis engine covering 80 checks per site, a bilingual report with a score, a verdict and prioritised fixes, a client area with reports archived in the database, and a weekly newsletter generated and sent automatically.",
    "<strong>Résultat :</strong> audit complet rendu en ligne en quelques minutes.":
        "<strong>Outcome:</strong> a full audit delivered online in minutes.",
    "Plateforme d'abonnement": "Subscription platform",
    "Passage d'un service à accès manuel à un produit vendable : paiement Stripe en production, attribution automatique des accès communautaires après paiement, droits décidés en base avec Row Level Security, connexion OAuth en un clic.":
        "Turned a manually granted service into a sellable product: Stripe payments in production, community access granted automatically after payment, permissions decided in the database with Row Level Security, one-click OAuth sign-in.",
    "<strong>Résultat :</strong> tunnel de vente opérationnel de bout en bout.":
        "<strong>Outcome:</strong> a sales funnel that works end to end.",
    "<b>Mission</b>conseil RH et RSE": "<b>Client</b>HR and CSR consulting",
    "Site vitrine et audit SEO": "Marketing site and SEO audit",
    "Refonte complète d'un site constructeur lent et peu visible : reconstruction en HTML, CSS et JavaScript sans framework, données structurées, pages légales conformes, audit SEO et GEO livré avec un plan d'action sur 30 jours.":
        "Full rebuild of a slow, barely visible website-builder site: rewritten in plain HTML, CSS and JavaScript, structured data, compliant legal pages, and an SEO and GEO audit delivered with a 30-day action plan.",
    "<strong>Résultat :</strong> site en production sur un socle SEO propre.":
        "<strong>Outcome:</strong> a live site on clean SEO foundations.",
    "<b>Automatisation</b>boîte mail": "<b>Automation</b>inbox",
    "Tri intelligent de boîte Gmail": "Smart Gmail inbox triage",
    "Classification automatique des messages à l'arrivée, notification immédiate sur les urgences, nettoyage planifié des catégories à faible valeur, brouillons de réponse pré-rédigés pour les cas récurrents.":
        "Automatic classification of incoming messages, instant notification on urgent ones, scheduled clean-up of low-value categories, and pre-written reply drafts for recurring cases.",
    "<strong>Résultat :</strong> 20 à 30 minutes économisées par jour.":
        "<strong>Outcome:</strong> 20 to 30 minutes saved every day.",
    "<b>Ce site</b>prise de rendez-vous": "<b>This site</b>booking funnel",
    "Tunnel de réservation sur mesure": "Custom booking funnel",
    "Remplacement d'un outil de réservation tiers par un tunnel maison : créneaux calculés depuis les disponibilités réelles de l'agenda, durée, battement et délai de prévenance pilotés par paramètre, fiche contact créée ou mise à jour sans jamais générer de doublon, confirmation par mail et invitation visio automatiques.":
        "Replaced a third-party booking tool with an in-house funnel: slots computed from real calendar availability, duration, buffer and notice period driven by settings, a contact record created or updated without ever producing a duplicate, and automatic email confirmation and video-call invitation.",
    "<strong>Résultat :</strong> réservation autonome, zéro saisie manuelle.":
        "<strong>Outcome:</strong> self-service booking, zero manual data entry.",
    "Essayer le tunnel": "Try the funnel",
    "<b>Interne</b>knowledge management": "<b>In-house</b>knowledge management",
    "Système d'information et pilotage de projet": "Internal information system and project control",
    "Conception et exploitation du système d'information interne de l'agence, sous Obsidian, partagé et synchronisé entre les deux associés : base de connaissances structurée, portefeuille de projets en sprints avec fiches de tâches et backlog priorisé, diagrammes de Gantt, cartes de dépendances et chemin critique tenus à jour à chaque sprint, tableaux de bord calculés depuis les fiches, et point d'avancement envoyé par mail automatiquement.":
        "Designed and run the agency's internal information system in Obsidian, shared and synced between both partners: a structured knowledge base, a project portfolio organised in sprints with task records and a prioritised backlog, Gantt charts, dependency maps and a critical path kept current every sprint, dashboards computed from the records, and a progress report emailed automatically.",
    "<strong>Résultat :</strong> un seul endroit pour piloter tous les projets et toutes les missions clients.":
        "<strong>Outcome:</strong> a single place to steer every project and every client engagement.",

    /* Competences */
    "Développement": "Development",
    "Single-file sans framework quand le site le permet, Next.js quand il faut de l'authentification et du temps réel. Python pour le traitement de données.":
        "Single-file and framework-free when the site allows it, Next.js when authentication and real time are required. Python for data processing.",
    "Automatisation et IA": "Automation and AI",
    "Une trentaine de workflows en production : collecte, scoring par LLM, notifications, reprise sur erreur et alerte quand un run échoue. Et le système d'information qui pilote l'agence, monté sous Obsidian.":
        "Around thirty workflows in production: collection, LLM scoring, notifications, error recovery and alerting when a run fails. Plus the information system that steers the agency, built in Obsidian.",
    "Back-end et données": "Back end and data",
    "Schémas Postgres avec Row Level Security, paiement Stripe et webhooks, authentification OAuth. Le contrôle d'accès se joue en base, pas dans le front.":
        "Postgres schemas with Row Level Security, Stripe payments and webhooks, OAuth authentication. Access control is decided in the database, not in the front end.",
    "Infrastructure et déploiement": "Infrastructure and deployment",
    "Mise en ligne de bout en bout : conteneur nginx, terminaison TLS, en-têtes de sécurité, redirections canoniques et cache des assets.":
        "Shipping end to end: nginx container, TLS termination, security headers, canonical redirects and asset caching.",
    "SEO et GEO": "SEO and GEO",
    "Optimisation pour les moteurs classiques et pour les moteurs génératifs : données structurées, passages citables, accès explicite aux crawlers IA.":
        "Optimisation for classic search engines and for generative ones: structured data, quotable passages, explicit access for AI crawlers.",
    "Mathématiques et modélisation": "Mathematics and modelling",
    "Formation en mathématiques appliquée à des cas concrets : compression d'image par DCT et stockage CSR, traitement du signal, modélisation d'algorithmes.":
        "A mathematics background applied to concrete cases: image compression by DCT with CSR storage, signal processing, algorithm modelling.",
    "Analyse numérique": "Numerical analysis",
    "Matrices creuses": "Sparse matrices",
    "Équations différentielles": "Differential equations",
    "Crawlers IA": "AI crawlers",
    "Agents LLM": "LLM agents",

    /* Formation */
    "<b>2025</b>2028 (prévu)": "<b>2025</b>2028 (expected)",
    "Diplôme d'ingénieur, Mathématiques Appliquées et Modélisation":
        "Engineering degree, Applied Mathematics and Modelling",
    "Polytech Nice Sophia, Université Côte d'Azur, Biot":
        "Polytech Nice Sophia, Université Côte d'Azur, Biot, France",
    "Cycle ingénieur, actuellement en <strong>MAM4</strong>, deuxième année du cycle. Analyse numérique, algèbre linéaire, équations différentielles, optimisation, probabilités et statistiques, algorithmique, programmation en C, Java et Python, Matlab, modélisation et traitement du signal.":
        "Engineering programme, currently in <strong>year 4</strong>, the second year of the engineering cycle. Numerical analysis, linear algebra, differential equations, optimisation, probability and statistics, algorithmics, programming in C, Java and Python, Matlab, modelling and signal processing.",
    "Parcours des écoles d'ingénieurs Polytech (PeiP)":
        "Polytech integrated preparatory programme (PeiP)",
    "Prépa intégrée sur deux ans : mathématiques, physique, informatique et algorithmique, méthodologie de projet. Admission au cycle ingénieur en spécialité Mathématiques Appliquées et Modélisation.":
        "Two-year integrated preparatory programme: mathematics, physics, computer science and algorithmics, project methodology. Admitted to the engineering cycle in Applied Mathematics and Modelling.",
    "<b>2026</b>distinction": "<b>2026</b>award",
    "Statut National Étudiant-Entrepreneur (SNEE)":
        "French National Student-Entrepreneur Status (SNEE)",
    "Dispositif PEPITE, ministère de l'Enseignement supérieur":
        "PEPITE programme, French Ministry of Higher Education",
    "Reconnaissance officielle du projet entrepreneurial OptimizIA.xyz : aménagement de l'emploi du temps, accompagnement et accès à l'écosystème PEPITE.":
        "Official recognition of the OptimizIA.xyz venture: adjusted timetable, mentoring and access to the PEPITE ecosystem.",

    /* Projets */
    "<b>En cours</b>projet académique": "<b>Ongoing</b>academic project",
    "<strong>En cours de développement avec la direction de l'école.</strong> Application de covoiturage réservée aux étudiants et personnels de l'Université Côte d'Azur : inscription restreinte aux adresses institutionnelles, trajets récurrents, réservation passager, calcul des frais d'essence au prorata et carte interactive.":
        "<strong>Currently being developed with the school's management.</strong> A carpooling app reserved for students and staff of Université Côte d'Azur: sign-up restricted to institutional addresses, recurring trips, passenger booking, prorated fuel cost splitting and an interactive map.",
    "<b>Maths</b>Python": "<b>Maths</b>Python",
    "Compression JPEG par DCT et matrices creuses": "JPEG compression using DCT and sparse matrices",
    "Implémentation d'un algorithme de compression inspiré de JPEG : transformée en cosinus discrète sur blocs 8×8 puis stockage en matrices creuses au format CSR. Application Streamlit interactive avec métriques calculées en temps réel.":
        "An implementation of a JPEG-inspired compression algorithm: discrete cosine transform on 8×8 blocks, then storage as sparse matrices in CSR format. Interactive Streamlit app with metrics computed in real time.",
    "<b>Freelance</b>front": "<b>Freelance</b>front end",
    "Site portfolio photographe": "Photographer portfolio site",
    "Site vitrine livré pour une cliente photographe : galerie soignée, design responsive, navigation fluide. Projet freelance en HTML, CSS et JavaScript vanilla, sans framework.":
        "A marketing site delivered for a photographer: a careful gallery, responsive design, smooth navigation. Freelance project in vanilla HTML, CSS and JavaScript, no framework.",
    "Code source": "Source code",
    "Démonstration": "Live demo",
    "Site en ligne": "Live site",

    /* Divers */
    "Langues": "Languages",
    "<strong>Français</strong> langue maternelle · <strong>Anglais</strong> niveau B2 · <strong>Espagnol</strong> niveau A2":
        "<strong>French</strong> native · <strong>English</strong> level B2 · <strong>Spanish</strong> level A2",
    "Méthode de travail": "How I work",
    "Prendre un problème concret et sortir une solution qui marche, sans sur-ingénierie et sans framework inutile. Modifier l'existant plutôt qu'empiler du neuf.":
        "Take a concrete problem and ship something that works, without over-engineering and without a needless framework. Change what exists rather than pile on something new.",
    "Centres d'intérêt": "Interests",
    "Parachutisme, gestion du risque et discipline · Voyages · Veille technique sur l'IA et l'automatisation":
        "Skydiving, risk management and discipline · Travel · Keeping up with AI and automation",
    "Localisation": "Location",
    "Antibes, Alpes-Maritimes. Mobile sur la technopole de Sophia-Antipolis et à distance.":
        "Antibes, French Riviera. Available across the Sophia-Antipolis tech park and remotely.",
    "Mentions légales": "Legal notice"
};

/* Attributs a traduire en plus du contenu. */
window.RB_I18N_ATTR = {
    'meta[name="description"]': {
        content: "Full CV of Romain Ben: engineering student in applied mathematics at Polytech Nice Sophia and co-founder of OptimizIA.xyz. n8n automation, AI agents, Supabase, Stripe, Next.js, SEO and GEO."
    }
};
