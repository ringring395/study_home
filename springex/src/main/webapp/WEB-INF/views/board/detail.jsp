<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>     
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>🥕detail</title>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="/resources/js/reply.js"></script>
<script type="text/javascript" src="/resources/js/attach.js"></script>
<style type="text/css">

th{
	background-color:#ffc299;
}
#reply22{
	margin:20px 0;
}
</style>
</head>
<body>
<h2>🥕게시글 상세보기🥕</h2>
<div id="bbtt">
	<div>
		<a href="/member/memberdetail"><button>${boardVO.getId()}</button></a>님 로그인중입니다.
	</div>
	<div>
		<a href="/"><button>🏠메인으로</button></a>
		<a href="/board/list"><button>👉게시판 목록으로👈</button></a>
	</div>	
</div>
<form method="post">
<table border="1">
	<tr>
		<th>제목</th>
		<td><input type="text" name="title" value="${detail.title}">
			<input type="hidden" name="bno" value="${detail.bno }">
			|조회수${detail.count}</td>
	</tr>
	<tr><th>작성자</th><td>${detail.id }</tr>
	<tr>
		<th>내용</th>
		<td><textarea rows="10" cols="55" name="content">${detail.content }</textarea>
		<div id="uploadResult"><table></table></div></td>
	</tr>
	<tr>
		<th>작성일자</th><td>${detail.regdate }</td>
	</tr>
	<c:if test="${boardVO.getId()==detail.id }"><!-- if문 시작 -->
		<tr><th colspan="2">			
			<input type="submit" value="수정" formaction="/board/modify">
			<input type="submit" value="삭제" formaction="/board/delete"></th></tr>	
	</c:if><!-- if문 닫음 -->
</table>
</form>
	<div id="reply22">
		<span>댓글쓰기✍<br></span>
		<textarea rows="2" cols="65" id="reply"></textarea>
		<div><input type="button" value="댓글등록" id="add">
		</div>
	</div>
	<div id="chat">
		<table id="replyTable" border="1">
		</table>
	</div>
</body>
</html>