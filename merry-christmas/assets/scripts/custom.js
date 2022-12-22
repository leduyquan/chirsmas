function loading() {
    $('body').css('height', $(window).height());
    document.getElementById("loading").style.visibility = "visible";
    setTimeout('loadingVisible()', 1000);
}

function loadingVisible() {
    document.getElementById("loading").style.visibility = "hidden";

    $('body').css({ 'overflow': 'visible', 'height': '100%' });

    /* BigScreen Image Show Related Codes */
    bigScreenShow();

    $('div#player').ttwMusicPlayer(myPlaylist, {
        autoPlay: true,
        jPlayer: {
            swfPath: 'Jplayer'
        }
    });
}

$(document).ready(function () {
    /* E-Card Sender Related Codes */
    eCardRelated();

    /* Snow Effect Bind Related Codes */
    if ($(window).width() > 480)
        snowEffectBind();

    /* Dynamin Message In Footer Related Codes */
    bindYourMessageArc();

    /* Paper Divs On Tree Related Codes */
    pFoldStart();

    /* Google Map Related Codes */

    setInterval(function () { intervalFiveSeconds() }, 5000);

    twitterFetcher.fetch('397750117039501313', 'twits', 5, true, true, false);

    /*Volume on/off for music player*/
    $('a.musicPlayer').click(function () {
        if ($(this).hasClass('off')) {
            musicOnOff(true);
        }
        else {
            musicOnOff(false);
        }
    });
});

var bindGoogleMap = function () {
    if ($('.uc-container.map').hasClass('uc-current') && isEmpty($('#googleMap'))) {
        var map;
        var Lat = 51.5143;
        var Lng = -0.1106;

        var roadAtlasStyles = [
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                  { "visibility": "on" },
                  { "color": "#ffffff" }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                { "visibility": "on" },
                { "color": "#B7DBF4" }
              ]
            }
          ];

        var mapOptions = {
            zoom: 13,
            center: new google.maps.LatLng(Lat, Lng),
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'usroadatlas']
            }
        };
        map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

        var styledMapOptions = {
            name: 'US Road Atlas'
        };

        var usRoadMapType = new google.maps.StyledMapType(roadAtlasStyles, styledMapOptions);

        map.mapTypes.set('usroadatlas', usRoadMapType);
        map.setMapTypeId('usroadatlas');
    }
};

var bindYourMessageArc = function () {
    var $ex = $('span.message').hide();
    $ex.show().arctext({ radius: 480 });
};

var bigScreenShow = function () {
    var winWidth = $(window).width();
    if (winWidth > 1600)
        setTimeout(function () { $('.bigScreenWrap').animate({ right: 0 }, 300, function () { }); }, 4000);
};

var eCardRelated = function () {
    $('#eCard label').labelOver('over');

    $('.emailSender').parents().on('click', function () {
        if ($('.emailSender').css('display') == 'block') {
            $('.emailSender').fadeOut(700);
            patternOfOff(false);
        }
    });

    $('.emailSender').click(function (event) {
        event.stopPropagation();
    });
    $('a.mail').click(function (event) {
        event.stopPropagation();
    });

    $('a.mail').click(function () {
        if ($('.emailSender').css('display') == 'block') {
            $('.emailSender').fadeOut(700);
            patternOfOff(false);
        }
        else {
            $('.emailSender').fadeIn(700);
            patternOfOff(true);
        }
    });

    $('a.send').click(function () {
        /*function which validates input with required class in contact page */
        var myform = $("#eCard").validate({
            errorPlacement: function (error, element) {
                error.appendTo();
            }
        }).form();

        /*myform returns true if form is valid.*/
        if (myform) {
            var action = $('#eCard').attr('action');
            $.post(action, {
                name: $('#name').val(),
                email: $('#email').val(),
                message: $('#message').val()
            },
				function (data) {
				    $('#eCard a.send').fadeOut(1000);

				    if (data == 'Mail send') {
				        $('#eCard a.send').fadeOut(1000, function () { $('#eCard div.success').fadeIn(1000); });
				    }
				    else {
				        $('#eCard a.send').fadeOut(1000, function () { $('#eCard div.not').fadeIn(1000); });
				    }
				})
        }
    });
};

var pFoldStart = function () {
    var opened = false;

    $('div.treeWrap div.uc-container').each(function (i) {
        var $item = $(this), direction;

        switch (i) {
            case 0: direction = ['right', 'bottom', 'right', 'bottom']; break;
            case 1: direction = ['right', 'top', 'right', 'top']; break;
            case 2: direction = ['right', 'top', 'right', 'top']; break;
            case 3: direction = ['left', 'top', 'left', 'top']; break;
        }

        var pfold = $item.pfold({
            folddirection: direction,
            speed: 200,
            folds: 4,
            onEndFolding: function () { opened = false; },
            centered: true
        });

        $item.find('img').on('click', function () {
            if (!opened) {
                opened = true;

                pfold.unfold();

                patternOfOff(true);
                setTimeout(function () { bindGoogleMap(); }, 2500);
                if ($item.hasClass('video')) {
                    musicOnOff(false);
                    $item.find('iframe').attr('src', '//www.youtube.com/embed/qOPeo5iC_nA?rel=0&amp;wmode=transparent');
                }
            }
        }).end().parents().on('click', function () {
            if ($('.uc-current .uc-final').css('display') == 'block') {
                patternOfOff(false);

                if ($item.hasClass('video')) {
                    musicOnOff(true);
                    $item.find('iframe').attr('src', '');
                }
            }
            pfold.fold();
        });
        $('.uc-final-wrapper').click(function (event) {
            event.stopPropagation();
        });
    });
};

function musicOnOff(isOn) {
    if (isOn == true) {
        $('a.musicPlayer').removeClass('off');
        $.jPlayer.play();
    }
    else {
        $('a.musicPlayer').addClass('off');
        $.jPlayer.pause();
    }
}

function patternOfOff(isOn) {
    if (isOn == true) {
        $('.treeWrap').css('z-index', '8500');
        $('.uc-current').parent().css('z-index', '901');
        $('.pattern').fadeIn(700);
    }
    else {
        $('.treeWrap').css('z-index', '3000');
        $('.uc-current').parents().css('z-index', '899');
        $('.pattern').fadeOut(700);
    }
}

function intervalFiveSeconds() {
    vibrationElementsOnTree();
    twitAnimation();
}

function twitAnimation() {
    var ul = $('.twitArea ul');
    var li = $('.twitArea ul > li').first();
    var liCount = $('.twitArea ul > li').length;

    var top = ul.css('top').replace('px', '');
    var h = li.height() + 50;
    var newTop = top - h;

    if ((-1 * (liCount * h)) >= newTop) newTop = 0;

    ul.animate({ top: newTop }, 500);
}

function vibrationElementsOnTree() {
    $('.uc-initial-content > img').ClassyWiggle('start');

    setTimeout(function () { $('.uc-initial-content > img').ClassyWiggle('stop'); }, 1500);
}

/* Element empty control */
function isEmpty(el) {
    return !$.trim(el.html())
}

/* plugin for labels to be placed over input fields in contact page */
$.fn.labelOver = function (overClass) {
    return this.each(function () {
        var label = $(this);
        var f = label.attr('for');
        if (f) {
            var input = $('#' + f);
            this.hide = function () {
                label.css({
                    textIndent: -10000
                })
            }
            this.show = function () {
                if (input.val() == '') label.css({
                    textIndent: 0
                })
            }
            // handlers
            input.focus(this.hide);
            input.blur(this.show);
            label.addClass(overClass).click(function () {
                input.focus()
            });
            if (input.val() != '') this.hide();
        }
    })
}