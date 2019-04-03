(function($) {
	const scroll = new SimpleBar(document.getElementById('scroll'));

	$('.side-wrapper').mouseenter(function(){
		$('.slide-menu-wrapper').addClass('slide-menu-wrapper_hover');
		$('.side-menu li:first-child a').addClass('side-menu__link_active');
	})
	$('.slide-menu-wrapper').mouseleave(function() {
		if(!$('.slide-menu-wrapper').hasClass('slide-menu-wrapper_open')){
    		$('.slide-menu-wrapper').removeClass('slide-menu-wrapper_hover');
    		$('.side-menu li:first-child a').removeClass('side-menu__link_active');
		}
  	});

  	$('a').click(function(){
  		if($(this).data('toggle') === 'showmenu'){
  			if($($(this).attr('href')).hasClass('slide-menu-wrapper_open')){
  				$('.content-wrapper').removeClass('content-wrapper_side-menu_open');
  				$($(this).attr('href')).removeClass('slide-menu-wrapper_open');
  				$(this).html('<i class="fa fa-bars"></i>');
  			} else {
  				$('.content-wrapper').addClass('content-wrapper_side-menu_open');
  				$($(this).attr('href')).addClass('slide-menu-wrapper_open');
  				$(this).html('<i class="fa fa-times"></i>');
  			}
  			return false;
  		}
  	});

  	$('.form-group-icon .fa-times-circle').on('click', function(){
  		$(this).parent().find('.form-input').val('');
  	});

  	$('.slide-menu li a').click(function(){
  		var link = $(this);
  		var submenu = link.parent().children('ul');
  		if(submenu.length > 0){
  			if(submenu.hasClass('slide-menu_level2_open')){
  				submenu.slideUp(300, function(){ 
	      			submenu.removeClass('slide-menu_level2_open');
	      			link.removeClass('slide-menu__link_active');
	      			link.children('.slide-menu__arrow').removeClass('fa-minus').addClass('fa-plus');
	      			scroll.recalculate();
	    		});
	    	} else {
  				submenu.slideDown(300, function(){ 
	      			submenu.addClass('slide-menu_level2_open');
	      			link.addClass('slide-menu__link_active');
	      			link.children('.slide-menu__arrow').removeClass('fa-plus').addClass('fa-minus');
	      			scroll.recalculate();
	    		});
	    	}

  			return false;
  		}
  	});

  	$('.tags-select a').on('click', function(){
  		$(this).toggleClass('tags__link_active');
  		return false;
  	});

  	$('[data-toggle="tooltip"]').tooltip();

  	var slider = $("#price-range");
  	slider.slider({
    	range: true,
    	min: parseInt(slider.parent().find('.slider-range-min').text()),
    	max: parseInt(slider.parent().find('.slider-range-max').text()),
    	values: [300, 800],
    	slide: function(event, ui) {
    		$(ui.handle).parent().find('.ui-slider-handle').eq(0).attr('data-value', ui.values[0]);
    		$(ui.handle).parent().find('.ui-slider-handle').eq(1).attr('data-value', ui.values[1]);
    	},
    	change: function(event, ui) {
    		$(ui.handle).parent().find('.ui-slider-handle').eq(0).attr('data-value', ui.values[0]);
    		$(ui.handle).parent().find('.ui-slider-handle').eq(1).attr('data-value', ui.values[1]);
    	}
    });
    slider.parent().find('.ui-slider-handle').eq(0).attr('data-value', slider.slider("values", 0));
    slider.parent().find('.ui-slider-handle').eq(1).attr('data-value', slider.slider("values", 1));

    slider = $("#passengers-range");
    slider.slider({
    	range: true,
    	min: parseInt(slider.parent().find('.slider-range-min').text()),
    	max: parseInt(slider.parent().find('.slider-range-max').text()),
    	values: [ 50, 200 ],
    	slide: function( event, ui ) {
        	$(ui.handle).parent().find('.ui-slider-handle').eq(0).attr('data-value', ui.values[0]);
    		$(ui.handle).parent().find('.ui-slider-handle').eq(1).attr('data-value', ui.values[1]);
    	},
    	change: function(event, ui) {
    		$(ui.handle).parent().find('.ui-slider-handle').eq(0).attr('data-value', ui.values[0]);
    		$(ui.handle).parent().find('.ui-slider-handle').eq(1).attr('data-value', ui.values[1]);
    	}
    });
    slider.parent().find('.ui-slider-handle').eq(0).attr('data-value', slider.slider("values", 0));
    slider.parent().find('.ui-slider-handle').eq(1).attr('data-value', slider.slider("values", 1));
})(jQuery);