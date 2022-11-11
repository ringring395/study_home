<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
<meta charset="UTF-8">
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="../../../resources/js/era.js"></script>
<script type="text/javascript" src="../../../resources/js/era2.js"></script>
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
<!-- js: era -->
<div id="only_year" style="background:#dac;width:300px;padding:10px;margin:10px;">
	<div id="year2era">
		<p>년도를 입력하세요👇👇👇</p>
		<input type="text" id="y2e_year">년
		<button id="y2e_btn">✨✨</button><br>
		<span id="y2e_era"></span>
		<span id="y2e_eraNum"></span>
	</div>
	
	<br><br>
	
	<div id="era2year" >
		<input type="text" id="e2y_era"><br>
		<input type="text" id="e2y_eraNum">년
	</div>
</div>

<!-- js: era2 -->
<div id="full_date" style="background:#fca;width:300px;padding:10px;margin:10px;">
	<div id="date2era">
		<p>년월일을 선택하세요 👇👇</p>
		<input type="text" id="d2e_year">년<br>
		<input type="text" id="d2e_month">월<br>		
		<input type="text" id="d2e_day">일
		<button id="d2e_btn">✨✨</button>
	</div>
	<br><br>
	<div id="era2date">
		<input type="text" id="e2d_era" value=""><br>
		<input type="text" id="e2d_eraNum">년
	</div>
</div>



</body>
</html>
