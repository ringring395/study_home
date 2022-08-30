<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>login</title>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="/resources/js/login.js"></script>
<style type="text/css">
#bodydiv{
	width:200px;	
	text-align:center;
}
input{
	font-size:150%;
}
</style>
</head>
<body>
<h1>💕👻로그인👻💕</h1>
<div id="bodydiv">
	<form action="/member/login" method="post">
		<table >
			<tr><td><input type="text" id="ii" name="id" placeholder="ID"></td></tr>
			<tr><td><span id="si"></span></td></tr>
			<tr><td><input type="password" id="ip" name="pw" placeholder="password"></td></tr>
			<tr><td><span id="sp"></span></td></tr>
			<tr><td><input type="submit" value="로그인">
					<input type="button" value="회원가입"></td></tr>
		</table>
	</form>
</div>
</body>
</html>