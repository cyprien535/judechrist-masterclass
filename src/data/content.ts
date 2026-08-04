import { FeatureCard, AudienceItem, SpeakerItem } from '../types';
import speakerOneImg from '../assets/images/regenerated_image_1785852586244.jpg';
import wilenockEssouImg from '../assets/images/regenerated_image_1785852586958.jpg';

export const HERO_CONTENT = {
  badge: "MASTERCLASS EXCLUSIVE 100% EN LIGNE SUR GOOGLE MEET",
  titlePart1: "DE 0 FCFA À TES PREMIERS ",
  titleHighlight: "100.000 FCFA EN LIGNE",
  subtitle: "Découvre le système étape par étape pour créer ton offre, captiver tes premiers clients et générer tes premiers revenus en 30 jours — sans capital de départ, sans audience et sans payer de pub !",
  primaryCta: "Sécuriser ma Place (2 000 FCFA)",
  secondaryCta: "Écrire sur WhatsApp",
  registeredCount: "+500 participants attendus",
  registeredSubtext: "Samedi 29 Août 2026 à 20H (Google Meet)",
  badgeDelivered: "+500 participants attendus",
  whatsappNumber: "22947146037",
  whatsappFormatted: "+229 47 14 60 37",
  whatsappUrl: "https://wa.me/22947146037",
  whatsappGroupUrl: "https://wa.me/22947146037",
  checkoutUrl: "https://master-class.mymaketou.shop/products/inscription-a-la-master-class-du-29-aout-2026/checkout",
  facebookUrl: "https://www.facebook.com/profile.php?id=61577533991254",
  developerName: "MEVI Cyprien",
  developerUrl: "https://www.facebook.com/profile.php?id=61588131732811",
};

export const PROGRAM_MODULES: { number: string; title: string; subtitle: string; outcome?: string }[] = [
  {
    number: "01",
    title: "Comment trouver le produit qui se vend tout seul",
    subtitle: "La méthode pour repérer les produits qui partent même sans pub."
  },
  {
    number: "02",
    title: "La stratégie pour avoir tes 100 premiers clients sans publicité",
    subtitle: "Le système organique qui te ramène des ventes dès la semaine 1."
  },
  {
    number: "03",
    title: "Créer des visuels et des posts qui donnent envie d'acheter",
    subtitle: "Les codes de design + copywriting qui transforment un simple post en machine à cash."
  },
  {
    number: "04",
    title: "Les 5 erreurs qui tuent 90% des débutants en e-commerce",
    subtitle: "Évite ces pièges et gagne 6 mois d'avance."
  },
  {
    number: "05",
    title: "Le plan d'action pour atteindre 100.000 FCFA de vente en 30 jours",
    subtitle: "Étape par étape, avec planning concret à appliquer dès le soir même."
  }
];

export const WHY_JOIN_CONTENT = {
  sectionLabel: "LE PROGRAMME DE LA SESSION",
  mainTitle: "Les 5 Piliers Stratégiques de la Masterclass",
  introText: "Un condensé de stratégies pratiques, simples et directement applicables sur le marché local pour bâtir ton indépendance financière.",
  youtubeVideoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  modules: PROGRAM_MODULES
};

export const AUDIENCE_CONTENT = {
  badge: "POUR QUI EST CETTE MASTERCLASS ?",
  title: "Un Programme Conçu Spécialement Pour Vous",
  subtitle: "À qui s'adresse cette session ?",
  intro: "Que vous partiez de zéro ou que vous cherchiez à propulser votre activité existante, cette formation en ligne va transformer votre approche du business digital.",
  audiences: [
    {
      id: "aud-01",
      number: "01",
      title: "Aspirant Entrepreneur & Débutant",
      description: "Vous avez la volonté de vous lancer mais vous vous sentez bloqué par le manque d'argent, d'expérience ou de méthode claire.",
      iconName: "Rocket"
    },
    {
      id: "aud-02",
      number: "02",
      title: "Vendeur & Commerçant WhatsApp",
      description: "Vous publiez des statues et posts tous les jours mais les ventes stagnent. Apprenez à structurer votre tunnel de vente organique.",
      iconName: "ShoppingBag"
    },
    {
      id: "aud-03",
      number: "03",
      title: "Créateur de Contenu & Freelance",
      description: "Vous possédez des talents digitaux ou une communauté, mais vous ne savez pas comment les monétiser en revenus récurrents.",
      iconName: "Video"
    },
    {
      id: "aud-04",
      number: "04",
      title: "Coach, Formateur & Consultant",
      description: "Vous voulez packager votre savoir-faire en offres irrésistibles et attirer des clients prêts à payer le juste prix.",
      iconName: "GraduationCap"
    },
    {
      id: "aud-05",
      number: "05",
      title: "Étudiant & Jeune Diplômé",
      description: "Vous souhaitez développer des compétences recherchées, créer votre propre emploi et générer vos propres revenus en parallèle.",
      iconName: "BookOpen"
    },
    {
      id: "aud-06",
      number: "06",
      title: "Salarié en Quête d'Indépendance",
      description: "Vous voulez bâtir une source de revenus secondaires solide sur internet sans compromettre votre emploi actuel.",
      iconName: "Briefcase"
    },
    {
      id: "aud-07",
      number: "07",
      title: "Artisan & Prestataire de Service",
      description: "Vous créez ou offrez des services d'exception. Apprenez à utiliser le digital pour capter des clients bien au-delà de votre ville.",
      iconName: "Hammer"
    }
  ] as AudienceItem[]
};

export const INFO_CONTENT = {
  sectionLabel: "INFORMATIONS PRATIQUES & PASS",
  dateLabel: "DATE OFFICIELLE",
  dateValue: "Samedi 29 Août 2026",
  timeLabel: "HEURE DE DÉMARRAGE",
  timeValue: "20H00 Précises (Heure de Cotonou)",
  locationLabel: "FORMAT / ACCÈS",
  locationValue: "100% En Ligne sur Google Meet",
  locationSubtext: "(Lien d'accès sécurisé transmis directement par WhatsApp & Email)",
  priceLabel: "INVESTISSEMENT UNIQUE",
  priceValue: "2 000 FCFA SEULEMENT",
  participantsLabel: "COMMUNAUTÉ",
  participantsValue: "+500 Participants attendus",
  speakerLabel: "MENTOR & FORMATEUR",
  speakerValue: "Prophète Jude-Christ Exaucé",
  phonesValue: "+229 47 14 60 37",
  seatsLabel: "DISPONIBILITÉ",
  seatsValue: "Pass Unique à 2 000 FCFA — Places Limitées sur la salle Meet",
  urgentBanner: "Réservez votre Pass (2 000 FCFA) dès maintenant pour garantir votre accès dans la salle Google Meet !"
};

export const RECENT_REGISTRATIONS = [
  { name: "Marc K.", city: "Cotonou", timeAgo: "il y a 3 minutes" },
  { name: "Sylvie A.", city: "Abomey-Calavi", timeAgo: "il y a 8 minutes" },
  { name: "Mireille B.", city: "Parakou", timeAgo: "il y a 15 minutes" },
  { name: "Christian T.", city: "Porto-Novo", timeAgo: "il y a 22 minutes" }
];

export const OBSTACLES_CONTENT = {
  badge: "LES FREINS QUI TE BLOQUENT",
  titlePart1: "Tu veux réussir sur internet. ",
  titleHighlight: "Pourquoi stagnes-tu encore ?",
  subtitle: "Si tu n'as pas encore généré tes premiers 100 000 FCFA en ligne, c'est probablement à cause de l'un de ces 3 pièges invisibles :",
  obstacles: [
    {
      id: "wall-1",
      number: "Obstacle 01",
      title: "L'Overdose d'Informations & La Confusion Totale",
      description: "Tu consommes des dizaines de vidéos, d'astuces et de conseils contradictoires. Résultat : tu as la tête pleine d'idées, mais tu ne sais toujours pas quelle première action concrète poser aujourd'hui.",
      tags: ["Surinformation", "Confusion", "Inaction"]
    },
    {
      id: "wall-2",
      number: "Obstacle 02",
      title: "L'Absence de Système de Vente Structuré",
      description: "Tu comptes uniquement sur la chance ou l'espoir en postant au hasard. Sans méthode d'acquisition client définie, tes efforts restent sporadiques et tes revenus imprévisibles.",
      tags: ["Improvisation", "Pas de système", "Zéro stratégie"]
    },
    {
      id: "wall-3",
      number: "Obstacle 03",
      title: "Des Stratégies Inadaptées au Marché Local",
      description: "Appliquer des théories occidentales complexes (funnels coûteux, pubs à gros budget) qui ne fonctionnent pas avec les réalités africaines (WhatsApp, Mobile Money, confiance de proximité).",
      tags: ["Théories inefficaces", "Peur du rejet", "Réalité africaine"]
    }
  ]
};

export const SUCCESS_ROADMAP_CONTENT = {
  badge: "LA STRATÉGIE DE TRANSFORMATION",
  titlePart1: "Une seule soirée ",
  titleHighlight: "pour déclencher ton succès",
  subtitle: "Prophète Jude-Christ Exaucé vous transmet en direct sur Google Meet un système prêt à l'emploi, testé et approuvé sur le terrain local.",
  steps: [
    {
      id: "step-1",
      number: "01",
      title: "CRÉER & STRUCTURER",
      iconName: "Key",
      detail: "Packager une offre ou un produit irrésistible réclamé par le marché",
      benefit: "Prêt à être commercialisé immédiatement"
    },
    {
      id: "step-2",
      number: "02",
      title: "CAPTIVER & CONVERTIR",
      iconName: "ShoppingBag",
      detail: "Mettre en place la boucle d'acquisition organique 0 FCFA pub",
      benefit: "Attirer des clients qualifiés chaque jour"
    },
    {
      id: "step-3",
      number: "03",
      title: "ENCAISSER & PERPÉTUER",
      iconName: "ShieldCheck",
      detail: "Utiliser WhatsApp et Mobile Money pour automatiser tes encaissements",
      benefit: "Souveraineté et indépendance financière"
    }
  ]
};

export const SPEAKERS_CONTENT = {
  sectionLabel: "LES INTERVENANTS DE LA MASTERCLASS",
  title: "Qui Animent Cette Masterclass ?",
  subtitle: "Faites connaissance avec les intervenants passionnés qui vont vous accompagner pas à pas vers la maîtrise de vos ventes en ligne et votre indépendance financière.",
  speakers: [
    {
      id: "speaker-1",
      name: "Prophète Jude-Christ Exaucé",
      role: "Orateur Principal & Fondateur",
      specialty: "L'Architecte Bleu — Personal Branding & Vente Digitale",
      badge: "ORATEUR PRINCIPAL",
      bio: "Stratège passionné et accompagnateur d'entrepreneurs, Prophète Jude-Christ Exaucé s'est spécialisé dans le lancement rapide d'activités rentables en Afrique. Sa mission : vous donner les clés concrètes pour transformer vos compétences et vos smartphones en véritables leviers de création de richesse.",
      topics: [
        "La méthodologie exacte pour passer de 0 FCFA à 100 000 FCFA en 30 jours",
        "Comment captiver tes 100 premiers clients sans dépenser 1 centime en publicité",
        "Maîtriser WhatsApp Business, le copywriting et la persuasion commerciale"
      ],
      image: speakerOneImg,
      alignment: "left"
    },
    {
      id: "speaker-2",
      name: "Wilenock Essou",
      role: "Coach Formateur & Social Media Manager",
      specialty: "Expertise Écosystème Facebook & Conversion Audience",
      badge: "INTERVENANT SPÉCIAL",
      bio: "Willenock Essou se définit principalement comme un Coach Formateur et un Social Media Manager. Son expertise se concentre sur l'écosystème Facebook, où il aide à générer de l'engagement réel et de la visibilité, tant pour son propre compte que pour celui des nombreux entrepreneurs qu'il accompagne.",
      topics: [
        "Asseoir leur autorité dans leur domaine respectif",
        "Attirer naturellement des prospects qualifiés sans avoir recours à une prospection agressive",
        "Convertir une audience en clients payants grâce à des stratégies de contenu ciblées"
      ],
      image: wilenockEssouImg,
      alignment: "right"
    }
  ] as SpeakerItem[]
};
