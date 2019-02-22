var data = {
    me : {
        name : {
            first : "Erwan",
            last : "Osouf"
        },
        title : "Lead Developer Full Stack"
    },
    skills : [{
        name : "Back-End",
        skills : [
            { 
                name : "Java - JEE",
                skills : [

                ]
            },
            { 
                name : "SQL", 
                skills : [
                    { name : "Sybase ASA" },
                    { name : "PostgreSQL" }
                ]
            },
            { 
                name : "Web Services",
                skills : [
                    { name : "SOAP" },
                    { name : "REST" }
                ]
            },
            { name : "Apache Tomcat" }
        ]
    }, {
        name : "Front-End",
        skills : [
            { name : "HTML5/CSS3" },
            { name : "LESS" },
            { name : "JavaScript" }
        ]
    }, {
        name : "Conception",
        skills : [
            { name : "UML" },
            { name : "Rédaction de Spécifications Techniques" }
        ]
    }, {
        name : "Aide à la décision",
        skills : [
            { name : "Optimisation Combinatoire" },
            { name : "Programmation par Contraintes" },
            { name : "Métaheuristiques" },
            { name : "Data Visualization" },
            { name : "Data Mining" },
        ]
    }, {
        name : "Outils",
        skills : [
            { name : "Eclipse IDE" },
            { name : "CVS – Git" },
            { name : "Jenkins CI" },
            { name : "Google Apps" }
        ]
    }, {
        name : "Systèmes d’exploitation",
        skills : [
            { name : "Windows (OS/Server)" },
            { name : "Linux (Ubuntu)" },
        ]
    }, {
        name : "Langues",
        skills : [
            { name : "Anglais", level : "Bon niveau" },
			{ name : "IELTS", level : "7,5/9" },
			{ name : "Espagnol", level : "Niveau scolaire" },
			{ name : "Créole Guadeloupéen", level : "parlé" }
        ]
    }],
    experiences : [{
        title : "Ingénieur Études et Développements",
        company : {
            name : "Praxedo",
            location : "Paris"
        },
        description : "Plate-forme SaaS de Field Service Management (Gestion d’interventions)",
        date : "2013 - 2017",
        duration : "4 ans",
        projects : [{
            label : "Mise en place d’interfaces avec plusieurs prestataires de géolocalisation",
            description : `Intégration de flux de géolocalisation des techniciens via WebServices (TomTom
            WebFleet, Orange Fleet et FleetFreedom) utilisant une infrastructure commune
            pour le traitement des données.`
        }, { 
            label :"Développement d’une application web d’optimisation de la planification",
            description : `Création d'une API REST exponsant les algorithmes d’optimisation développés lors de mon stage.
            Intégration de la plate-forme avec cette application.`
        }, { 
            label :"Développement d’outils d’aide à la planification des interventions",
            description : `Visualisations d’un planning : Gantt jour et semaine, planning technicien.
                Module de suivi en temps réel et indicateurs de charge et d’avancement.
                Module de visualisation géographique des interventions.`
        }, { 
            label : "Refonte de l’interface graphique du client de messagerie instantanée intégré"
        }, { 
            label :"Support technique applicatif"
        }, { 
            label :"Correction de bugs / Gestion des évolutions" 
        }]
    }, { 
        title : "Projet de Fin d’Etudes", 
        company : {
            name : "Praxedo",
            location : "Paris"
        },
        date : "2013",
        duration : "6 mois",
        projects : [
            "Spécifications et développement d’algorithmes pour l’optimisation de tournées de techniciens sous contraintes.",
            "Benchmarks, tests unitaires et documentation."
        ]
    }],
    formations : [{ 
        name : "École des Mines de Nantes (2009 – 2013)",
        description : " Formation Ingénieur, Option Génie Informatique pour l’Aide à la Décision"
	}, { 
        name : "École Polytechnique de Montréal (2011/2012)",
        description : "Transfert de Crédit, Certificat en Génie Informatique et Logiciel."
	}, { 
        name : "Classe Préparatoire aux Grandes Écoles (2008/2009)", 
        description : 
        `Option PCSI, Major de Promotion.
		<br />Lycée Baimbridge – Pointe-à-Pitre, Guadeloupe`
    }, { 
        name : "Baccalauréat (2008)",
        label : 
        `Série S, mention Très Bien
		<br />Lycée Poirier de Gissac – Sainte Anne, Guadeloupe`
    }],
    hobbies : [{ 
        name : "Coordinateur Pédagogique / Formateur (Depuis Juillet 2015)",
		description : `Association Belleville Citoyenne
			<br />Projet _blank : enseignement de la programmation web à des jeunes de quartiers populaires.
			<a href="http://blank.bellevillecitoyenne.fr/">blank.bellevillecitoyenne.fr</a>
		</dd>`
    }, { 
        name : "Sports",
        description : "Bodyboard, Planche à Voile"
    }],
    contacts : [{
        name : "Mail", 
        link: "mailto:erwan.osouf@gmail.com?subject=Contact%20via%20votre%20Portfolio",
        icon : "fa fa-envelope",
        value : "erwan.osouf@gmail.com"
    }, {
        name : "Téléphone",
        link : "tel:+33679512518",
        icon : "fa fa-phone",
        value : "(+33) 6 79 51 25 18"
    }, { 
        name : "LinkedIn",
        link : "https://www.linkedin.com/in/erwanosouf",
        icon : "fa fa-linkedin",
        value : "LinkedIn" 
    }]
};

var app = new Vue({
    el: '#app',
    data: data
});

// Displays document
document.getElementsByTagName('body')[0].classList.remove('loading');