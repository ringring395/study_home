<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>write</title>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="/resources/js/uploadAjax.js"></script>
</head>
<body>
<h2>✍글쓰기 페이지 입니다.✍</h2>
<a href="/board/list"><button><h2>👻글목록👻</h2></button></a>
<form id="form" action="/board/write" method="post">
	<table border="1">
		<tr>
			<th>제목</th>
			<td><input type="text" name="title"></td></tr>
		<tr>
			<th>내용</th>
			<td><textarea rows="10" cols="40" name="content"></textarea>
			</td></tr>
		<tr>
		<th><input type="button" id="uploadBtn" value="등록"></th>
		<th><input type="file" name="uploadFile" multiple></th></tr>
	</table>
</form>
<div id="uploadResult">
	<ul>
		
	</ul>	
</div>
</body>
</html>