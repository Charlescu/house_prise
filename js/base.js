var Length = document.documentElement.clientWidth;
var baseWidth = Length <= 1024 ? Length : 1024 < Length ? 750 : '';
document.documentElement.style.fontSize = baseWidth / 750 * 100 + 'px';


//正则表达式

window.onload = function() {
	var back_page = document.getElementsByClassName('icon-fanhui')[0];
	back_page.onclick = function back_page(){
		window.history.back(-1)
	}
}

//接口地址
var baseUrl = 'http://192.168.1.15/public/api/portal/';
localStorage.setItem('middle_token', 'd88cdfe1e26d10f8c9a83e6ea4d1f01fb3ac81eb');
// 弹窗样式
function popup(message) {
    $('.popup').css('top', 3 + 'rem').html(message);
    setTimeout(function() {
        $('.popup').css('top', '-' + 2 + 'rem').html(message);
    }, 1800)
}


