<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
<meta charset="UTF-8">
	<title>Home</title>
</head>
<body>
<h1>
	Hello world!  Have a Good day 'ㅅ'
</h1>

<P>  The time on the server is ${serverTime}. </P>
<a href="/member/login"><button>로그인</button></a>
<br><br>
<a href="/board/list"><button>게시판 목록 리스트</button></a>
</body>
</html>
