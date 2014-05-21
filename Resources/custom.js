var screenWidth = $(window).width();
var isShow = 0;

jQuery(document).ready(function(){
jQuery("#btn").click(function(){
		
		
		// $('#hidden_div1').display="";
	
	//if ( isShow == 0 ){
			jQuery("#hidden_div1").css('z-index', '1000');
			
			jQuery("#hidden_div1").show();
			jQuery("#hidden_div1").animate({
				'right':'0',
			},500);
			
			jQuery("#div1").animate({
				'left':'-'+screenWidth,
			},500);
			setTimeout(function(){
				jQuery("#div1").hide();
			},600);
			
			isShow	= 1;
		// } else{
			// jQuery("#hidden_div1").animate({
				// 'right':'-100%',
			// },500,'swing', function(){
				// jQuery("#hidden_div1").css('right', '-'+screenWidth);
				// jQuery("#hidden_div1").css('z-index', '-1000');
			// });
			// isShow	= 0;
		// }
	});
	
	jQuery("#btn1").click(function(){
		
		
	
	// if ( isShow == 0 ){
			// jQuery("#hidden_div1").css('z-index', '1000');
			// jQuery("#hidden_div1").animate({
				// 'right':'0',
			// },500);
			// isShow	= 1;
		// } else{
			// jQuery("#hidden_div1").animate({
				// 'right':'-100%',
			// },500,'swing', function(){
				// jQuery("#hidden_div1").css('right', '-'+screenWidth);
				// jQuery("#hidden_div1").css('z-index', '-1000');
			// });
			
			jQuery("#hidden_div1").animate({
				'left':'-'+screenWidth,
			},500);
			setTimeout(function(){
				jQuery("#hidden_div1").hide();
			},600);
			isShow	= 0;
		//}
	});
	// jQuery("#btn2").click(function(){
		// alert("2");
		// $('#hidden_div1').display=none;
		// $('#_div1').display=none;
	// });
});

