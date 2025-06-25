


console.log(
    '\n' 
  + ' %c ꦿ᭄꯭꯭随꯭性꯭এ.' 
  + ' %c https://hi.sb ' 
  + '\n', 

  'color: #fadfa3; background: #030307; padding:5px 0; line-height:1.5;', 

  'background: #fadfa3; padding:5px 0; line-height:1.5;'

  );


$("#top_to").hide();$(window).scroll(function(){if($(this).scrollTop()>200){$("#top_to").fadeIn(100)}else{$("#top_to").fadeOut(200)}});$("#top_to").click(function(){$("body,html").animate({scrollTop:0},400);return false});

if (Config.dark === 'true') {   
//夜间模式
function switchNightMode() {
	var night = document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") || "0";
	let storage = window.localStorage;
	$('<div class="ze_DarkSky"><div class="ze_DarkPlanet"><svg class="moon" viewBox="0 0 1024 1024"><path d="M505.4 878.6c-196.7 0-358-150.9-374.9-343.1 1-18.6 16.1-33.4 34.9-33.4 10.8 0 20.5 4.8 26.9 12.4 0.2 0.3 0.5 0.1 0.5-0.7 41.6 44.2 100.5 71.9 166.1 71.9 127.1 0 230.1-103 230.1-230.1 0-66.1-28-125.1-72.6-166.8 0.1-0.1 0.5-0.1 0.3-0.3-7-6.5-11.4-15.7-11.4-26.1 0-19 14.9-34.1 33.7-35.3 192.1 17.1 342.9 178.3 342.9 375 0 208-168.5 376.5-376.5 376.5z" fill="#f3b679"></path></svg><svg class="sun" viewBox="0 0 1024 1024"><path d="M0 512A512 512 0 1 0 512 0 512 512 0 0 0 0 512z m0 0" fill="#FFFBD9"></path><path d="M144.011636 512A367.988364 367.988364 0 1 0 512 144.011636 367.988364 367.988364 0 0 0 144.011636 512z m0 0" fill="#FFD81A"></path></svg></div></div>').appendTo($("body"));
	if (night == "0") {
	
		document.cookie = "night=1;path=/";
		$('.sun').css('display', 'block');
		$('.moon').css('display', 'none');
		storage.setItem('gmtNightMode', true);
		console.log("夜间模式开启")
        $('.logo-dark').removeClass('d-none')
        $('.logo-dark').addClass('d-inline-block')
        $('.logo-light').removeClass('d-inline-block')
        $('.logo-light').addClass('d-none')

	} else {
	
		document.cookie = "night=0;path=/";
		$('.moon').css('display', 'block');
		$('.sun').css('display', 'none');
		storage.removeItem('gmtNightMode');
		console.log("夜间模式关闭")
        $('.logo-dark').removeClass('d-inline-block')
        $('.logo-dark').addClass('d-none')
        $('.logo-light').removeClass('d-none')
        $('.logo-light').addClass('d-inline-block')
	}
	setTimeout(function () {
		if (storage.getItem('gmtNightMode')) {
			$('.moon').css('display', 'block');
			$('.sun').css('display', 'none');
		} else {
			$('.sun').css('display', 'block');
			$('.moon').css('display', 'none');
		}
		$('body')[0].classList.toggle('nice-dark-mode');
	}, 900)
	setTimeout(function () {
		$(".ze_DarkSky").fadeOut(1e3, function () {
			$(this).remove()
		})
	}, 2e3)

  } (function() {
	if (document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") === "") {
		if (new Date().getHours() > 21 || new Date().getHours() < 6) {
			document.body.classList.add("nice-dark-mode");
			document.cookie = "night=1;path=/";
			console.log("夜间模式开启")
            $('.logo-dark').removeClass('d-none')
            $('.logo-dark').addClass('d-inline-block')
            $('.logo-light').removeClass('d-inline-block')
            $('.logo-light').addClass('d-none')
		} else {
			document.body.classList.remove("nice-dark-mode");
			document.cookie = "night=0;path=/";
			console.log("夜间模式关闭")
            $('.logo-dark').removeClass('d-inline-block')
            $('.logo-dark').addClass('d-none')
            $('.logo-light').removeClass('d-none')
            $('.logo-light').addClass('d-inline-block')
		}
	} else {
		var night = document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") || "0";
		if (night == "0") {
			document.body.classList.remove("nice-dark-mode")
            $('.logo-dark').removeClass('d-inline-block')
            $('.logo-dark').addClass('d-none')
            $('.logo-light').removeClass('d-none')
            $('.logo-light').addClass('d-inline-block')
		} else {
			if (night == "1") {
				document.body.classList.add("nice-dark-mode")
                $('.logo-dark').removeClass('d-none')
                $('.logo-dark').addClass('d-inline-block')
                $('.logo-light').removeClass('d-inline-block')
                $('.logo-light').addClass('d-none')
			}
		}
	}
})();
}



