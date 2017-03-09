//import additional scripts
define(["jquery"] , function ($) {

    //init function for page controller js
    function init() {
    	$('[data-component]').each(function(){
    		var _this = $(this)
    		require(['jsx!/js/components/'+$(this).data('component')], function (w) {
				w.init(_this)
			});
    	});

    	$('[data-template]').each(function(){
    		var _this = $(this)
    		require(['jsx!/js/template/'+$(this).data('template')], function (w) {
				w.init(_this)
			});
    	});    	
    }

    function genId(_this){

    	function s4() {
    		return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	  	}

	  	if (_this.prop('id').length == 0) {
	  		var newId = s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
	  		_this.attr('id',newId)
	  		return newId
	  	} else {
	  		return _this.attr('id')
	  	}
  		
    }


    return {
        //set public functions
        init: init,
        genId : genId
    }

});
