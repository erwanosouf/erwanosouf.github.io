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