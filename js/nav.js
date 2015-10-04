YUI().use('node', 'node-event-delegate', 'event', 'pjax', function (Y) {
	 var pjax, layout, menu, menuLink, active = 'active', toggleMenu;

	 layout = Y.one('#layout');
	 menu = Y.one('#menu');
	 menuLink = Y.one('#menuLink');

	 toggleMenu = function(pShow) {
		 layout.toggleClass(active, pShow);
		 menu.toggleClass(active, pShow);
		 menuLink.toggleClass(active, pShow);
	 };

	 menuLink.on('click', function (e) {
			 e.preventDefault();
			 toggleMenu();
	 });

	 //PJAX
	 pjax = new Y.Pjax({
		container: '.content',
		linkSelector : 'a.navigation-link',
		titleSelector : 'title',
		contentSelector : 'section'
	});

	// Listen for the `navigate` event and add the "loading" CSS class. The styles
	// for the this CSS class can add a loading spinner or dim the container node.
	pjax.on('navigate', function (e) {
		this.get('container').get('parentNode').addClass('loading');
	});

	// Listen for either the `load` or `error` events and remove the "loading" CSS
	// class from the container node.
	pjax.on(['error', 'load'], function (e) {
		this.get('container').get('parentNode').removeClass('loading');
		if (window.matchMedia && window.matchMedia('(max-width: 48em)').matches) {
			// Hide menu on load if in small screen
			toggleMenu(false);
		}
	});

});
