<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원가입</title>
</head>
<body>
	<h2>🐱‍🐉회원가입🐉🍋회원가입🍋</h2>
<form action="/signup" method="post">	
<table border="1">
	<tr>
		<td>id</td>
		<td><input type="text" name="id"></td>
	</tr>	
	<tr>
		<td>비번</td>
		<td><input type="text" name="pw"></td>
	</tr>
	<tr>
		<td>주소</td>
		<td><input type="text" name="addr"></td>
	</tr>
	<tr>
		<td>전화번호</td>
		<td><input type="text" name="phone"></td>
	</tr>
	<tr>
		<td>이메일</td>
		<td><input type="email" name="email"></td>
	</tr>
	<tr>
		<td>이름</td>
		<td><input type="text" name="name"></td>
	</tr>
	<tr>
		<td>나이</td>
		<td><input type="text" name="age"></td>
	</tr>
	<tr>
		<th colspan="2"><input type="submit" value="회원가입"></th>
	</tr>					
</table>
</form>

</body>
</html>