# Briefing du 12 février 2018

## Etat des lieux

**Personnes présentes:** Antoine, Nicolas, Marie-Ange

* Etude des contraintes imposées par l'exercice et par le cahier des charges du projet

* Récupération de l'adresse url de site multipage auprès de l'équipe ayant réalisé l'étape précédente

* Découverte de la technologie utilisée pour réalisée le site multipage existant sur lequel nous devrons implanté le CMS (React)

* Analyse des pages déja existantes et de celles qu'il faudra créer pour implanté le CMS pour les pages demandées News et Agenda.

* Décision collégiale de reprendre la page existante "Actualités des mini-entreprises" comme page de News - cela nécessitera l'import des articles existants dans le CMS.

* Décision collégiale de créer une nouvelle page pour l'Agenda en CMS car aucune page existante ne correspondait à ce type de contenu.

* Décision de créer une seule DB comprenant 2 tables (News et Agenda)

* Détermination des différents champs pour chacune des 2 tables (News et Agenda) en fonction du contenu déja existant sur la page d'Actualité du site multipage pour les News. 

* Table "News" - Champs: ID, Titre, Texte (texte,lien, mise en gras, etc...), image.

* Table "Agenda" - Champs: ID, Nom de l'évènement, Date de début, Date de fin, heure de début, heure de fin, Lieu, Description (maximum de caractère imposés) , image.

* Nécessité d'implémenter un éditeur de texte WYSIWYG pour la mise en forme du champ texte de la page News.

* Rechercher de solution gratuite d'éditeur de texte WYSIWYG (Froala (payant), CKEditor 4, ...)

* Réflexion sur l'utilisation du MVC dev

* Réflexion sur le développement d'un CMS réalisé en PHP et MySQL à partir d'un site multipage créer en react.js.

* Réflexion sur la manière de d'installer un système permettant toutes les opérations CRUD à partir de la partie admin du CMS custom.

## Dispatching des différentes tâches

**Antoine:** 

* Réalisation prototype de l'interface admin du CMS sur Figma
* Documentation sur les solutions gratuites d'éditeur texte WYSIWYG customisable pour la page News.
* Analyse de la structure du site multipages déja existant pour pourvoir y intégrér le CMS en PHP/MySQL 

**Marie-Ange:** 

* Création de la DB MySQL et docu descriptif champs en markdown pour la DB
* Rédaction du compte-rendu du briefing du 12 février 2018
* Création du Kaban sur Github
* Création des issues et attributions des tâches selon les décisions prises en commun 
* Création des branches sur repo github pour chaque membre de l'équipe
* Analyse de la structure du site multipages déja existant pour pourvoir y intégrér le CMS en PHP/MySQL 
 
**Nicolas:** 

* Ajout page Agenda dans le site multipages
* Ajout d'un item Agenda dans le menu de toutes les pages
* Analyse de la structure du site multipages déja existant pour pourvoir y intégrér le CMS en PHP/MySQL 


# Briefing du 5 mars 2018

## Etat des lieux

**Personnes présentes:** Antoine, Nicolas, Marie-Ange

## Etat des lieux

* Le site des jeunes entreprises ont un section Actualités qui reprend principalement des évènements à venir en détails, il possède également une section agenda qui se présente sous la forme d'un simple google agenda (titre et date de l'évènement sans plus de détails - http://www.lje.be/index.php/fr/accueil/agenda).

L'objectif pédagogique étant d'intégrer les opérations CRUD, après concertation avec notre coach, il a été décidé d'appliquer les opérations CRUD uniquement sur la page Actualités qui est la plus complexe et de faire un simple link vers le google agenda existant sur la page Agenda de notre site.

## Dispatching des différentes tâches

**Antoine:** 

* Création premières maquettes Figma pour le backend
* Backend et deploiement du site sur hébergeur gratuit
* Gestion des routes (framework Fatfree)
* Gestion de la communication du site existant en react avec notre DB MySQL  et PHP pour pouvoir réaliser les opérations CRUD

**Marie-Ange:** 

* Récupération et mise au format texte brut des contenu de la page actualité pour tester le CRUD (format respectant les champs de la DB que nous avons créer)
* Création de la DB MySQL (2 tables : administrateurs et actualites)
* Création de la page Agenda (React)
* Ajout dans les routes et les menus de la page Agenda (React)
* Encodage directement via phpMyAdmin de quelques Actualités pour tester le READ du CRUD
* Création maquette Figma définitive après suppression de la page Agenda à insérer dans le CMS (page login, actu_add , actu_edit)
* Intégration HTML/CSS des pages de backend login , ajout actu et modification actu.
* Testing et communication avec Antoine des corrections à effectuer au niveau du backend
* Organisation réunion briefing
* Ajout issues et tenue du Kaban GitHub tout au long du projet
* Rédaction des compte rendu de briefing et communication sur Ryver pour centraliser les infos
* Communication des livrables par mail au coach le jour de la deadline.

 
**Nicolas:** 

* /

