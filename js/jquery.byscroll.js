/***********************************************
 * ByScroll jQuery plugin
 * This is a free jQuery plugin. Please feel free to use it in your projects.
 * Licensed under MIT
 * @author ynzkai
 * @date: 2015/06/01
 * @version 1.0.0
 * http://
 ***********************************************/
;(function($) {
	var clientHeight = $(window).height();
	var items = [];

	$(document).scroll(function() {
		var item;
		for(var i = 0; i < items.length; i++) {
			if(items[i].ele.offset().top - $(document).scrollTop() - clientHeight < 10) {
				if(typeof items[i].arg === 'string') {
					items[i].ele.addClass(items[i].arg);
				} else if(items[i].arg instanceof Function) {
					items[i].arg.call();
				}

			}
		}
	});

	jQuery.fn.extend({
		listenedByScroll: function(arg) {
							$(document).scroll();
							if(!arg) return this;
							items.push({ele: $(this), arg: arg});
							return this;
						}
	});
})(jQuery);
