YUI().use('node', 'node-event-delegate', 'event', 'pjax', function (Y) {

	var pjax = new Y.Pjax({
		container: '.content',
		linkSelector : 'a.navigation-link',
		titleSelector : 'h1.pjax-title',
		navigateOnHash : true
	});

	// Listen for the `navigate` event and add the "loading" CSS class. The styles
	// for the this CSS class can add a loading spinner or dim the container node.
	pjax.on('navigate', function (e) {
		var url = e.url, event = e.originEvent;
		this.get('container').get('parentNode').addClass('loading');
	});

	// Listen for either the `load` or `error` events and remove the "loading" CSS
	// class from the container node.
	pjax.on(['error', 'load'], function (e) {
		this.get('container').get('parentNode').removeClass('loading');
	});

});
