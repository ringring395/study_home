<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
<meta charset="UTF-8">
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="../../../resources/js/era.js"></script>
	<title>Home</title>
</head>
<body>
<h5>
	Hello world!  Have a Good day 'ㅅ'
</h5>

<P>  The time on the server is ${serverTime}. </P>
<a href="/member/login"><button><h5>🐬로그인🐬</h5></button></a>
<a href="/board/list"><button><h5>👻게시판 목록 리스트👻</h5></button></a>
<br><br><br>

<div id="year2era">
	<p>년도를 입력하세요👇👇👇연호를 알려드릴게요😋😋</p>
	<input type="text" id="y2e_year">년<br>
	<span id="y2e_era"></span>
	<span id="y2e_eraNum"></span>
</div>

<br><br>

<div id="era2year">
	<input type="text" id="e2y_era"><br>
	<input type="text" id="e2y_eraNum">년
</div>

</body>
</html>
