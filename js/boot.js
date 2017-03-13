
// main config for requirejs
require.config({
	waitSeconds: 20,
	//lets stop the caching
	urlArgs: "random=" + Math.random(),
	baseUrl: "/js/",
	appDir: "./",
	paths: {
		"jquery"		: "libs/jquery-3.1.1",
		"react"			: "libs/react",
		"ReactDOM"		: "libs/react-dom",
		"global" 		: "/js/global",
	}
});

var controller = document.getElementById('body').getAttribute('data-controller');

require(['global'], function (g) {

	g.init();

	if (controller) {
		require(['/js/controllers/' + controller + ".js"], function (c) {
			c.init()
		});
	}
	
})
 
