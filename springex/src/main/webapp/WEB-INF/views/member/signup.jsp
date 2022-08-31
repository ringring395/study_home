<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>signup</title>
<style type="text/css">
input{
	font-size:150%;
}
</style>
</head>
<body>
<h1>🐬회원가입🐬</h1>
<form action="/member/signup" method="post">
<table>
	<tr><td><input type="text" placeholder="ID" name="id">
		<span id="sid"></span></td></tr>
	<tr><td><input type="text" placeholder="PASSWORD" name="pw">
		<span id="spw"></span></td></tr>
	<tr><td><input type="text" placeholder="NAME" name="name">
		<span id="sna"></span></td></tr>
	<tr><td colspan="2"><input type="submit" value="가입하기"></td>
	</tr>
</table>
</form>
</body>
</html>