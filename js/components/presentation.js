Vue.component('presentation', {
    template : `<header class="header">
		<h1>{{ who.name.first}}  {{ who.name.last }}</h1>
		<h2>{{ who.title }}</h2>
	</header>`,
    props : [ 'who' ]
});