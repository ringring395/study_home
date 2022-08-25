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
<form action="/board/write" method="post">
제목 : <input type="text" name="title"><br>
내용 : <input type="text" name="content">
<input type="button" id="uploadBtn" value="등록"><br>
<input type="file" name="uploadFile" multiple><br>
<!-- insert 연결되고 나면, type을 hidden으로 수정하면 된다. --> 
<input type="text" name="fileName"><br>
<input type="text" name="uuid"><br>
<input type="text" name="uploadPath"><br>
<input type="text" name="image">

</form>
<div id="uploadResult">
	<ul>
		
	</ul>	
</div>
</body>
</html>