$( document ).ready(function() {
	wow = new WOW(
		{
		  boxClass:     'wow',      // default
		  animateClass: 'animated', // default
		  offset:       0,          // default
		  mobile:       true,       // default
		  live:         true        // default
		}
	)
	wow.init();
	$( ".mess-open" ).click(function() {
		$( "#mess-screen" ).fadeIn();
		$(".mess-box").slideDown(300);
	});
	$( ".close-btn" ).click(function() {
		$( ".mess-box" ).hide();
		$( "#mess-screen" ).fadeOut();
	});
	$(window).load(function() {
       $('#loading-screen').fadeOut('fast');
	   $('.mess-box').hide();
	   var bgmusic = document.getElementById("background_audio"); 
			bgmusic.play(); 
    });
	
	var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'page.mp3');
        $.get();

        audioElement.addEventListener("load", function() {
            audioElement.play();
        }, true);

        $('.mess-open').click(function() {
            audioElement.play();
        });
		$('.close-btn').click(function() {
            audioElement.play();
        });
	$(function() {
        $(this).bind("contextmenu", function(e) {
            e.preventDefault();
        });
    });
	document.onkeydown = function(e) {
        if (e.ctrlKey && 
            (e.keyCode === 67 || 
             e.keyCode === 86 || 
             e.keyCode === 85 || 
             e.keyCode === 83 || 
             e.keyCode === 117)) {
            window.close();
            return false;
        } else {
            return true;
        }
	};
	window.addEventListener("keydown", keyListener, false);

	function keyListener(e) {
		if(e.keyCode == 123) {
			window.close();
		}
	}
});
