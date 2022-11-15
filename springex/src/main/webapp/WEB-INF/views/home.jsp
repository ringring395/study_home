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
<script type="text/javascript" src="../../../resources/js/era3.js"></script>
	<title>Home</title>
</head>
<body>
<h5>
	Hello world!  Have a Good day 'ㅅ'
</h5>

<P>  The time on the server is ${serverTime}. </P>
<a href="/member/login"><button><h5>🐬로그인🐬</h5></button></a>
<a href="/board/list"><button><h5>👻게시판 목록 리스트👻</h5></button></a>
<br><br>
<!-- js: era -->
<div id="only_year" style="background:#dac;width:300px;padding:5px;margin:5px;">
	<div id="y2e">
		<h6>년도를 입력하세요👇👇👇</h6>
		<input type="text" id="y2e_year">년
		<button id="y2e_btn">✨✨</button><br>
		<span id="y2e_era"></span>
		<span id="y2e_eraNum"></span>
	</div>	
	<br>
	<div id="e2y" >
		<input type="text" id="e2y_era"><br>
		<input type="text" id="e2y_eraNum">년<br>
		<input type="text" id="e2y_age">세 (올해)
	</div>
</div>

<!-- js: era2 -->
<div id="full_date" style="background:#fca;width:300px;padding:5px;margin:5px;">
	<div id="d2e">
		<h6>년월일을 선택하세요 👇👇</h6>
		<input type="text" id="d2e_year" placeholder="2002">년<br>
		<select id="d2e_month">
			<option value="01">1</option><option value="02">2</option>
			<option value="03">3</option><option value="04">4</option>
			<option value="05">5</option><option value="06">6</option>
			<option value="07">7</option><option value="08">8</option>
			<option value="09">9</option><option value="10">10</option>
			<option value="11">11</option><option value="12">12</option>		
		</select>월	
		<input type="text" id="d2e_day" placeholder="01">일
		<button id="d2e_btn">🐬🐬</button>
	</div>
	<br>
	<div id="e2d">
		<input type="text" id="e2d_era" value=""><br>
		<input type="text" id="e2d_eraNum">년<br>
		<input type="text" id="e2d_age">세 (올해)<br>
		<input type="text" id="e2d_age2">세 (만)
	</div>
</div>

<!-- js : era3 -->
<div id="only_era" style="background:#aca;width:300px;padding:5px;margin:5px;">
	<div id="e2a">
		<h6>연호를 입력하세요.👇👇</h6>
		<select id="e2a_era">
			<option value="rei">레이와</option>
			<option value="hei">헤이세이</option>
			<option value="sho">쇼와</option>
			<option value="dai">다이쇼</option>
			<option value="mei">메이지</option>
		</select>
		<input type="text" id="e2a_eraNum">년
		<button id="e2a_btn">⚡⚡</button>
	</div>
	<br>
	<div id="e2a_answer">
		<span id="e2a_year"></span>
		<span id="e2a_age"></span>
	</div>
</div>

</body>
</html>
