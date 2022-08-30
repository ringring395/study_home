<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  
  
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>list</title>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="/resources/js/list.js"></script>		
</head>
<body>
<h1>👻게시판 목록 리스트👻</h1>
<div style="font-size:20px;">
<%
	if(session.getAttribute("id")!=null){
%>
<a href="/member/memberdetail"><button>${boardVO.getId()}</button></a>님 로그인중입니다.
	<a href="/board/write"><button>글쓰기</button></a>
<%		
	}else{
%>
	<span>로그인하셔야 상세글 보기 가능합니다.</span>
<%		
	}
%>	
	<a href="/"><button>🏠메인으로</button></a>
</div>	
	<form id="searchForm" action="/board/list">
		<select name="type">
			<option value="T">제목</option>
			<option value="C">내용</option>
			<option value="TC">제목+내용</option>
			<option value="W">id(작성자)</option>
		</select>
		<input type="text" name="keyword" placeholder="검색어를 입력하세요">
		<input type="text" name="pageNum" value="${paging.cri.pageNum}">
		<input type="text" name="amount" value="${paging.cri.amount}">
		<input type="button" value="검색">
	</form>	

	<table border="1">
		<tr>
			<th>번호</th><th>제목</th><th>내용</th><th>날짜</th><th>조회수</th><th>id</th>
		</tr>
		<!-- for문 시작 -->
		<c:forEach items="${list}" var="boardlist">
		<tr>
			<td>${boardlist.bno}</td>
			<td><a href="/board/detail?bno=${boardlist.bno}">${boardlist.title}</a></td>
			<td>${boardlist.content}</td><td>${boardlist.regdate}</td>
			<td>${boardlist.count}</td><td>${boardlist.id}</td>
		</tr>
		</c:forEach>
		<!-- for문 끝 -->

	</table>

	
<!-- prev(이전)이 true이면 이전버튼 활성화 -->
		<c:if test="${paging.prev}">
			<a href="/board/list?type=${paging.cri.type}&keyword=${paging.cri.keyword}&pageNum=${paging.startPage-1}&amount=${paging.cri.amount}">이전</a>
		</c:if>
		
<!-- for문 시작 : begin(1)이 end(10)될 동안 반복 -->
		<c:forEach begin="${paging.startPage}" end="${paging.endPage}" var="num">	
			<a href="/board/list?type=${paging.cri.type}&keyword=${paging.cri.keyword}&pageNum=${num}&amount=${paging.cri.amount}">${num}</a>
		</c:forEach>
<!-- for문 끝 -->
		
<!-- next(다음)이 true이면 다음버튼 활성화 -->
		<c:if test="${paging.next}">
			<a href="/board/list?type=${paging.cri.type}&keyword=${paging.cri.keyword}&pageNum=${paging.endPage+1}&amount=${paging.cri.amount}">다음</a>
		</c:if>

</body>

</html>