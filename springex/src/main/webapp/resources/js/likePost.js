/**
 * 좋아요 기능 연습
 */

$(document).ready(function (){
	//리스트 페이지 열자마자
	var bno = $("input[name='bno']").val();
	var id = $("input[name='user']").val();
	var heart;
	
	//페이지 시작하자마자 likeChk 호출
	alert(id);
	alert(bno);
	likeChk(bno, id);

//하트누르면 클릭 이벤트 실행	
$("#mylikeBtn").on("click", function(){
	likeBtn({bno:bno, id:id});
	likeChk(bno, id);
})


//하트 상태 체크
function likeChk(bno, id){
	$.getJSON("/board/likeChk/"+bno+"/"+id+".json", function(data){
		heart = data;
		console.log(heart);
		if(heart === 0 ){
			$("#mylikeImg").attr("src","../../resources/img/mylike_no.png");
		}
		else{
			$("#mylikeImg").attr("src","../../resources/img/mylike.png");
		}
	})
}

//하트 클릭하면 바꿈
function likeBtn(like){
	if(heart === 0){
		$.ajax({
			type:"post",
			url:"/board/likeUp",
			data: JSON.stringify(like),
			contentType: "application/json; charset=utf-8",
			success:function(result){
				alert("좋아요");				
			}			
		})
	}
	else{
		alert("빈하트로");
	}
}
//	var likeChk = 0;
//	alert("눌럿냐");
//	
//		$.ajax({
//			type:"post",
//			url: "/board/likeUp/"+bno,
//			data:JSON.stringify({bno:bno, id:id}),
//			contentType: "application/json; charset=utf-8",			
//			success: function(result){
//					alert("좋아요");
//					$("#mylikeImg").attr("src","../../resources/img/mylike.png");
//			}
//		})		

	
//좋아요 클릭하자
//function likeCli(bno){
//	if(likeChk == 0){
//		$.ajax({
//			type:"post",
//			url: "/board/likeUp/${bno}",
//			contentType: "application/json; charset=utf-8",
//			success: function(result){
//				if(result == "success"){
//					alert("좋아요");
//					$("#mylikeImg").attr("src","../../resources/img/mylike.png");
//				}
//			}
//		})
//	}
//	else{
//		$.ajax({
//			type:"put",
//			url: "/board/likeDown",
//			contentType: "application/json; charset=utf-8",
//			success: function(result){
//				if(result == "success"){
//					alert("좋아요 취소됨");
//					$("#mylikeImg").attr("src","../../resources/img/mylike_no.png");
//				}
//			}
//		})		
//	}
//}

})