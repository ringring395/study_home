<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>detail</title>
</head>
<body>
게시글 상세보기
<form method="post">
<table border="1">
	<tr>
		<th>제목</th>
		<td><input type="text" name="title" value="${detail.title}">
			<input type="hidden" name="bno" value="${detail.bno }">
			|조회수${detail.count}</td>
	</tr>
	<tr>
		<th>내용</th>
		<td><textarea name="content">${detail.content }</textarea></td>
	</tr>
	<tr>
		<th>작성일자</th><td>${detail.regdate }</td>
	</tr>
	<tr><td colspan="2">
			<input type="submit" value="수정" formaction="/board/modify">
			<input type="submit" value="삭제" formaction="/board/delete"></td></tr>	
</table>
</form>
</body>
</html>