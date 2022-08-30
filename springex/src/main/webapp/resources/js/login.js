/**
 * spring 로그인 정규식 작업
 */

$(document).ready(function(){
	//아이디 키업 이벤트
	$("#ii").on("keyup",function(){
		var pattern1 = $("#ii").val().length;
		if(pattern1>=5 && pattern1<=20){
			$("#si").html("올바른 ID형식입니다 'ㅅ'").css("color","blue");
		}else{
			$("#si").html("올바르지 않은 ID형식입니다 ;ㅅ;").css("color","red");
		}
	})
	
	//비밀번호 키업 이벤트
	$("#ip").on("keyup",function(){
		var pattern2=/^(?=.*[0-9]){4,6}$/g;
		if(pattern2.test($("#ip").val())){
			$("#sp").html("올바른 비밀번호 형식입니다 'ㅅ'").css("color","blue");
		}else{
			$("#sp").html("올바르지 않은 비밀번호 형식입니다 ;ㅅ;").css("color","red");	
			} 
		})
})