var data = {
    me : {
        name : {
            first : "Erwan",
            last : "Osouf"
        },
        title : "Lead Developer Full Stack"
    },
    nav : {
        heading : {
            href : "#",
            label : "Erwan Osouf"
        },
        items : [
            { href : "#experiences", icon : "fa-briefcase", label : "Expériences" },
            { href : "#skills", icon : "fa-check", label : "Compétences" },
            { href : "#formation", icon : "fa-graduation-cap", label : "Formation" },
            { href : "#hobbies", icon : "fa-star", label : "Centres d'interêt" },
            { href : "#contact", icon : "fa-envelope", label : "Contact" },
            { href : "mailto:erwan.osouf@gmail.com?subject=Je%20suis%20interessé%20par%20votre%20profil", icon: "fa-cart-plus", label : "Ajouter au panier" },
            { href : "docs/Erwan_OSOUF_CV.pdf", icon: "fa-cloud-download", label : "CV", attrs : { download : "download", target:"_blank"}}
        ]
    },
    description : `
    <h2>Bienvenue sur mon Site !</h2>
    <p>
            Je suis actuellement Ingénieur Etudes et Développements chez <a href : "https://www.praxedo.com/">Praxedo</a>,
            un éditeur de logiciel basé à Paris.
            <br />Praxedo édite une solution <abbr title="Software As A Service">SaaS</abbr> de gestion d'interventions
            à destination des techniciens, livreurs et inspecteurs.
            <br />Praxedo est le leader français dans ce domaine.
    </p>
    <p>
        Je réalise des évolutions sur la plate-forme Praxedo Interventions, que ce soit en back-end ou front-end.
        <br />Pour plus d'informations, je vous invite à consulter mes <a href : "experiences.html" class="navigation-link">Expériences</a> et
        <a href : "skills.html" class="navigation-link">Compétences</a>.
        <br />Vous pouvez également télécharger mon <a href : "docs/Erwan_OSOUF_CV.pdf" download target="_blank">CV</a>.
    </p>
    <p>
        Je suis diplômé de l'<a href : "http://www.mines-nantes.fr/">Ecole des Mines de Nantes</a> (Promotion 2013) et spécialisé dans l'informatique décisionnelle.
        <br /> Pour plus de détails sur mon parcours, vous pouvez consulter la page dédiée à ma <a href : "formation.html" class="navigation-link">formation</a>.
    </p>
    <p>
        Si vous êtes intéréssé par mon profil, n'hésitez pas à me <a href : "contact.html" class="navigation-link">contacter</a>.
        <br />Vous pouvez même m'ajouter à votre
        <a href : "mailto:erwan.osouf@gmail.com?subject=Je%20suis%20interessé%20par%20votre%20profil" class="navigation-link">panier</a> !
    </p>
    <p>
        A bientôt !
        <br /> Erwan Osouf
    </p>
    `,
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
        projects : [{ 
            label : "Spécifications et développement d’algorithmes pour l’optimisation de tournées de techniciens sous contraintes."
        },{ 
            label : "Benchmarks, tests unitaires et documentation."
        }]
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
			<a href : "http://blank.bellevillecitoyenne.fr/">blank.bellevillecitoyenne.fr</a>
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