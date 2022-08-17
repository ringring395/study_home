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

	
<!-- prev(이전)이 true이면 이전버튼 활성화 -->
		<c:if test="${paging.prev}">
			<a href="/board/list?pageNum=${paging.startPage-1}&amount=${paging.cri.amount}">이전</a>
		</c:if>
		
<!-- for문 시작 : begin(1)이 end(10)될 동안 반복 -->
		<c:forEach begin="${paging.startPage}" end="${paging.endPage}" var="num">	
			<a href="/board/list?pageNum=${num}&amount=${paging.cri.amount}">${num}</a>
		</c:forEach>
<!-- for문 끝 -->
		
<!-- next(다음)이 true이면 다음버튼 활성화 -->
		<c:if test="${paging.next}">
			<a href="/board/list?pageNum=${paging.endPage+1}&amount=${paging.cri.amount}">다음</a>
		</c:if>
		
</body>
</html>