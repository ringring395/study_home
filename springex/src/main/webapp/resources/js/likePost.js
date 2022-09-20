/**
 * 좋아요 기능 연습
 */

$(document).ready(function (){
	//리스트 페이지 열자마자
	var bno = $("input[name='bno']").val();
	var id = $("input[name='user']").val();
	var mylike;
	
	//페이지 시작하자마자 likeChk 호출
//	likeChk(bno);
	alert(id);
	
$("#mylikeBtn").on("click", function(){
	alert(bno);

	var likeChk = 0;
	alert("눌럿냐");
	
		$.ajax({
			type:"post",
			url: "/board/likeUp/"+bno,
			data:JSON.stringify({bno:bno, id:id}),
			contentType: "application/json; charset=utf-8",			
			success: function(result){
					alert("좋아요");
					$("#mylikeImg").attr("src","../../resources/img/mylike.png");
			}
		})		
	
})
	
//좋아요 눌렀는지 여부 체크	
//function likeChk(bno){
//	$.getJSON("/board/likeChk/"+bno+".json",function(data){
//		mylike = data;
//	})
//}
	
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