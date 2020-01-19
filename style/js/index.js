$(function() {
	// 头部PC端下拉列表
	$("header ul li:has(ul)").hover(function() {
		$(this).children("ul").slideDown("1500");
	}, function() {
		$(this).children("ul").slideUp("1500");
	});
	//头部手机端下拉列表
	$("#navBtn").on("click", function() {
		$("#navBtnUl").slideToggle(500);
		$("html,body").animate({
			scrollTop: 0
		}, 500);
	});
	//选项卡1
	$('.tab_menu li').mouseover(function() {
		var _index = $(this).index();
		$(this).addClass('on').siblings().removeClass('on');
		$('.tab_content>div').eq(_index).show().siblings().hide();
	});
	//选项卡2
	$('#tab_menu2 li').mouseover(function() {
		var _index = $(this).index();
		$(this).addClass('on').siblings().removeClass('on');
		$('#tab_content2>div').eq(_index).show().siblings().hide();
	});

	//您的需求:网页加载动画
	$(window).scroll(function() { 
		if ($(window).scrollTop() > 3700 && $(window).scrollTop() < 4500) {
			$("#demandL").addClass("item-01");
			$("#demandR").addClass("item-02");
		}
	});
})
