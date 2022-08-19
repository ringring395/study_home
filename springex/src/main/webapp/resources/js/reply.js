/**
 * 댓글 기능
 */

$(document).ready(function(){	//jQuery 준비
	//함수 호출
	//detail.jsp가 시작되자마자 bno값을 가져오려면 $(document).ready아래에 선언
	var bnoValue = $("input[name='bno']").val();
	
	//댓글 쓰기 버튼을 클릭하면 
	$("#add").on("click",function(){
		//댓글등록 버튼을 클릭했을 때!! : 댓글내용 가져오려면 $("#add").on("click",function(){ 아래에 선언
		var replyValue = $("#reply").val();
		var idValue = "hhh888";	//임의로 id입력해둠, 세션값으로 받아오면됨

		add({bno:bnoValue,reply:replyValue,id:idValue});	//댓글 쓰기를 하기 위한 함수 호출
	})	
})

//함수 선언
//댓글 쓰기를 위한 함수
function add(reply){
	$.ajax({			//ajax준비 (비동기식 처리)
		type:"post",	//method방식(get,post,put,delete)
		url:"/replies/new",
		data:JSON.stringify(reply), //js이 값을 ajax에서 필요한 형태로 바꾸는 함수
		//contentType 생략하면 웹브라우저에 위임하게됨
		contentType:"application/json; charset=utf-8",	//입력되는 데이터의 형식
		success:function(result){
			if(result=="success"){
				alert("댓글쓰기 성공");
			}
			
		}
	})
}

