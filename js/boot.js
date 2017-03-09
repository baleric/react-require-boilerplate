//quick test function for localhost, saves removing console logs from production
function _test(theTest){
	if (document.domain == "localhost"){
		console.log(theTest)	
	}	
}

// main config for requirejs
require.config({
	waitSeconds: 20,
	//lets stop the caching
	urlArgs: "random=" + Math.random(),
	baseUrl: "/js/",
	paths: {
		"jquery": "libs/jquery-3.1.1",
		"react": "libs/react",
		"ReactDOM": "libs/react-dom",
		"global" : "/js/global",
		"text": "libs/text",
		"JSXTransformer": "libs/JSXTransformer"
	}
});

var controller = document.getElementById('body').getAttribute('data-controller');

require(['jsx!global'], function (g) {

	g.init();

	if (controller) {
		require(['jsx!/js/views/' + controller], function (c) {
			c.init()
		});
	}
	
})

