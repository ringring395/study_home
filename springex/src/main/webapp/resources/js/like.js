/**
 * 좋아요 연습3
 */

$(document).ready(function (){
	//상세 페이지 열자마자
	var bno = $("input[name='bno']").val();
	var id = $("input[name='user']").val();
	var likeValue;

	//좋아요 눌러져 있는 확인하는 함수호출
	likeChk(bno, id);
	
	//하트 누르면 클릭이벤트 실행
	$("#mylikeBtn").on("click", function(){
		alert("하트눌럿냐");
		likeBtn({bno:bno, id:id});
		likeChk(bno, id);
	})

//좋아요 눌러져있는지 확인 (누른상태면 1 / 아니면 0)
function likeChk(bno, id){
	alert(bno);
	alert(id);
	$.getJSON("/board/likeChk/"+bno+"/"+id+".json", function(data){
		likeValue = data;
		console.log(likeValue);	
		//0은 안누른 상태라서 빈하트 보여줘!
		if(likeValue === 0){
			$("#mylikeImg").attr("src","../../resources/img/mylike_no.png");
		}
		//1은 누른 상태라서 꽉찬하트 보여줘!
		else{
			$("#mylikeImg").attr("src","../../resources/img/mylike.png");
		}
		
	})
}//likeChk닫음	

//하트 버튼 누르면 실행하는 함수
function likeBtn(like){
	//빈하트라면
	if(likeValue === 0){  
		$.ajax({
			type:"post",
			url:"/board/likeUp",
			data : JSON.stringify(like),
			contentType: "application/json; charset=utf-8",
			success: function(result){
				if(result == "success"){
					alert("좋아요 _꽉찬하트로");
				}
			}
		})
	}
	//꽉찬하트라면
	else{
		$.ajax({
			type:"post",
			url:"/board/likeDown",
			data : JSON.stringify(like),
			contentType: "application/json; charset=utf-8",
			success: function(result){
				if(result == "success"){
					alert("좋아요 취소_빈하트로");
				}
			}
		})
	}
}







})//docu 전체 닫음