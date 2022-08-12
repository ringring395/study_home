<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>memberdetail</title>
</head>
<body>
<h1>🐬회원 정보 상세페이지🐬</h1>
<form method="post" >
<table border="1">
	<tr><th>아이디</th>
	<td><input readonly type="text" name="id" value="${memberdetail.id}"></td>
	</tr>
	<tr><th>비번</th>
	<td><input type="text" name="pw" value="${memberdetail.pw}">지금은비번오픈</td>
	</tr>
	<tr><th>addr</th>
	<td><input type="text" name="addr" value="${memberdetail.addr}"></td>
	</tr>
	<tr><th>name</th><td>${memberdetail.name }</td></tr>
	<tr><th>age</th><td>${memberdetail.age }</td></tr>
	<tr><td colspan="2">
			<input type="submit" value="정보 수정" formaction="/member/modify">
			<input type="submit" value="회원 탈퇴" formaction="/member/resign">
	</td></tr>	
</table>
</form>
</body>
</html>