/**
 * 좋아요 기능 연습
 */

$(document).ready(function (){
	//리스트 페이지 열자마자
	
//	var bno = $("#bno").val();
	var bno = $("input[name='bno']").val();
	var id = $("input[name='user']").val();
	var mylike;
	
	//페이지 시작하자마자 likeChk 호출
	likeChk(bno);
	alert(id);
	
	$("#mylikeBtn").on("click", function(){
		likeCli({"bno":"bno", "id":"id"});
		likeChk(bno);
		alert("눌럿냐");
	})
	
//좋아요 눌렀는지 여부 체크	
function likeChk(bno){
	$.getJSON("/board/likeChk/"+bno+".json",function(data){
		mylike = data;
		var str="";
		if(data == 0){
			str+="<button id='mylikeBtn'>"
			str+="<img id='mylikeImg' src='../../resources/img/mylike_no.png'>"
			str+="</button>"	
		}else{
			str+="<button id='mylikeBtn'>"
			str+="<img id='mylikeImg' src='../../resources/img/mylike.png'>"
			str+="</button>"
		}
	})
}
	
//좋아요 클릭하자
function likeCli(bno){
	if(likeChk == 0){
		$.ajax({
			type:"put",
			url: "/board/likeUp",
			contentType: "application/json; charset=utf-8",
			success: function(result){
				if(result == "success"){
					alert("좋아요");
					$("#mylikeImg").attr("src","../../resources/img/mylike.png");
				}
			}
		})
	}else{
		$.ajax({
			type:"put",
			url: "/board/likeDown",
			contentType: "application/json; charset=utf-8",
			success: function(result){
				if(result == "success"){
					alert("좋아요 취소됨");
					$("#mylikeImg").attr("src","../../resources/img/mylike_no.png");
				}
			}
		})		
	}
}

})