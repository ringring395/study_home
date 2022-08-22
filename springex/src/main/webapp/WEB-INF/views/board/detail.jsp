<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>🥕detail</title>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="/resources/js/reply.js"></script>
</head>
<body>
<h2>🥕게시글 상세보기🥕</h2>
<a href="/board/list"><button>👉게시판 목록으로👈</button></a>

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
	<div><label>댓글</label></div>
	<div>
		<textarea rows="10" cols="40" id="reply"></textarea>
	</div>
	<div>	
		<input type="button" value="댓글등록" id="add">
	</div>
	<div id="chat">
		<table id="replyTable" border="1">
		</table>
	</div>


</body>
</html>