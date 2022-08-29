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
<a href="/member/login"><button><h2>🐬로그인🐬</h2></button></a>
<a href="/board/list"><button><h2>👻게시판 목록 리스트👻</h2></button></a>
</body>
</html>
