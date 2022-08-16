<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>list</title>
</head>
<body>
<h1>게시판 목록 리스트</h1>
	<table border="1">
		<tr>
			<th>번호</th><th>제목</th><th>내용</th><th>날짜</th><th>조회수</th><th>id</th>
		</tr>
		<!-- for문 시작 -->
		<c:forEach items="${list}" var="boardlist">
		<tr>
			<td>${boardlist.bno}</td>
			<td><a href="/board/detail?bno=${boardlist.bno}">${boardlist.title}</td>
			<td>${boardlist.content}</td><td>${boardlist.regdate}</td>
			<td>${boardlist.count}</td><td>${boardlist.id}</td>
		</tr>
		</c:forEach>
		<!-- for문 끝 -->
		<tr>
			<td><a href="/board/write"><button>글쓰기</button></a></td>
		</tr>
	</table>
			<a href="/board/list?pageNum=1&amount=10">1</a>
			<a href="/board/list?pageNum=2&amount=10">2</a>
			<a href="/board/list?pageNum=3&amount=10">3</a>
</body>
</html>