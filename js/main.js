var data = {
    me : {
        name : {
            first : "Erwan",
            last : "Osouf"
        },
        title : "Lead Developer Full Stack"
    },
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