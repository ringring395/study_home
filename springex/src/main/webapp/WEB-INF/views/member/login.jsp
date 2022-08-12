<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>login</title>
</head>
<body>
<h3>💕로그인💕</h3>
<form action="/member/login" method="post">
<table>
	<tr><td><input type="text" name="id" placeholder="ID"></td>
	<tr><td><input type="password" name="pw" placeholder="password"></td></tr>
	<tr><td><input type="submit" value="로그인">
			<input type="button" value="회원가입"></td></tr>
</table>
</form>
</body>
</html>