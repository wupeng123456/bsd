<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<title>波司登云门户</title>
<link rel="stylesheet" href="<c:url value='/resources/css/sys/animate.css'/>">
<style type="text/css">
body {
	background-image: url("<c:url value='/resources/images/sys/bg.png'/>");
}

* {
	margin: 0;
	padding: 0;
}

ul {
	list-style-type: none;
}

body {
	font: 14px "Microsoft Yahei";
	overflow-x: hidden;
	background-color: #2B2B2B;
}

h1 {
	width: 900px;
	margin: 40px auto 100px;
	font: 32px "Microsoft Yahei";
	text-align: center;
	color: #D3D3D3;
}

.footer {
	text-align: center;
	position: fixed;
	bottom: 0px;
	width: 100%;
	height: 50px;
	z-index: 9999;
}
</style>
</head>
<body>
	<img alt="" src="<c:url value='/resources/images/sys/logo.png'/>" style="margin-left: 20%; margin-top: 1%;">
	<div class="well" style="margin-top: 3%;">
		<div class="well-item" id="pos">
			<div class="correct">
				<img class="s" src="<c:url value='/resources/images/sys/pos.png'/>" />
			</div>
			<div class="opposite">
				<div class="">
					<div class="opposite-content">
						<div class="opposite-content-text">门店销售系统</div>
					</div>
				</div>
			</div>
		</div>
		<div class="well-item" id="scm">
			<div class="correct">
				<img class="s" src="<c:url value='/resources/images/sys/scm.png'/>" />
			</div>
			<div class="opposite">
				<div class="">
					<div class="opposite-content">
						<div class="opposite-content-text">分销系统</div>
					</div>
				</div>
			</div>
		</div>
		<div class="well-item" id="channel">
			<div class="correct">
				<img class="s" src="<c:url value='/resources/images/sys/channel.png'/>" />
			</div>
			<div class="opposite">
				<div class="">
					<div class="opposite-content">
						<div class="opposite-content-text">渠道工程系统</div>
					</div>
				</div>
			</div>
		</div>
		<div class="well-item" id="crm">
			<div class="correct">
				<img class="s" src="<c:url value='/resources/images/sys/crm.png'/>" />
			</div>
			<div class="opposite">
				<div class="">
					<div class="opposite-content">
						<div class="opposite-content-text">会员系统</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="footer">
		<span>版权所有&nbsp;<label class="time"></label>&nbsp;波司登国际控股有点公司&nbsp;保留所有权利
		</span> <br> <span>波司登信息部</span>
	</div>
	<script type="text/javascript" src="<c:url value='/resources/js/jquery.min.js'/>"></script>
	<script>
		$(function() {
			var $animate = $('#animate');
			var $opposite = $('#opposite');
			$(".wrap").hover(function() {
				$animate.removeClass();
				$opposite.removeClass();
				$animate.addClass("test");
				$opposite.addClass('test2');
			}, function() {
				$animate.removeClass();
				$opposite.removeClass();
				$animate.addClass("test2");
				$opposite.addClass('test');
			});

			$(".well-item").hover(function() {
				$(this).find(".correct").children().removeClass();
				$(this).find(".opposite").children().removeClass();
				$(this).find(".correct").children().addClass("test");
				$(this).find(".opposite").children().addClass('test2');
			}, function() {
				$(this).find(".correct").children().removeClass();
				$(this).find(".opposite").children().removeClass();
				$(this).find(".correct").children().addClass("test2");
				$(this).find(".opposite").children().addClass('test');
			});

		});
	</script>
	<script type="text/javascript">
		$(function() {
			var myDate = new Date();
			var year = myDate.getFullYear();
			$(".time").html(year);
			$('.s').mouseover(function(e) {
				$(this).siblings().stop().fadeTo(100, 0.4);
			});

			$('.s').mouseout(function(e) {
				$(this).siblings().stop().fadeTo(100, 1);
			});
		})
		function getCookie(name) {
			var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
			if (arr = document.cookie.match(reg))
				return unescape(arr[2]);
			else
				return null;
		}
		var getRandomColor = function() {
			return '#' + (function(color) {
				return (color += '0123456789abcdef'[Math.floor(Math.random() * 16)]) && (color.length == 6) ? color : arguments.callee(color);
			})('');
		}
		$(function() {
			$(".s").each(function() {
				var colorStr = getRandomColor();
				$(this).css("background-color", colorStr);
			})
		});
	</script>
	<script type="text/javascript">
		$(function() {
			$("#pos").click(function() {
				window.open("http://localhost:8080/sym/portal?cookieUser=" + getCookie("BSD_PORTAL_USER_AUTH"));
			});
			$("#scm").click(function() {
				window.open("http://localhost:9090/sym/portal?cookieUser=" + getCookie("BSD_PORTAL_USER_AUTH"));
			});
			$("#channel").click(function() {
				window.open("http://localhost:8093/sym/portal?cookieUser=" + getCookie("BSD_PORTAL_USER_AUTH"));
			});
			$("#crm").click(function() {
				window.open("http://localhost:8090/sym/portal?cookieUser=" + getCookie("BSD_PORTAL_USER_AUTH"));
			});
		});
	</script>
</body>
</html>