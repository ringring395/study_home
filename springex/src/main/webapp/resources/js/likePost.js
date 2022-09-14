/**
 * 좋아요 기능 연습
 */

$(document).ready(function (){
	//리스트 페이지 열자마자
	var userid = $("input[name='user']").val();
	console.log(userid);
	
	var likebool = $("input[name='likebool']").val();
	console.log(likebool);
	
	$("#mylikeImg").attr("src","../../resources/img/mylike_no.png" );
	$("#mylikeTd").attr("src","../../resources/img/mylike_no.png" );
	
	$("#mylikeTd").on("click", function(){
		alert("하트클릭햇냐");
		
		if($("#mylikeImg").attr('src') == "../../resources/img/mylike_no.png"){
			$("#mylikeImg").attr("src","../../resources/img/mylike.png" );
		}else{
			$("#mylikeImg").attr("src","../../resources/img/mylike_no.png" );
		}
		
	})
	
	
	
//	$("#nolike").on("click", function(){
//		$("#nolike").hide();
//		$("#like").show();		//꽉찬하트를 보여주자
//	})
//	
//	
//	$("#like").on("click",function(){
//		$("#nolike").show();	//빈하트를 보여주자.
//		$("#like").hide();
//	})
	
		
//	//하트 칸 클릭이벤트
//	$("#mylikeTd").on("click",function(){
//		if(userid != null){	//로그인된 아이디가 있을때,
//			if("#nolike"){		//빈하트였으면
//				$("#nolike").hide();
//				$("#like").show();		//꽉찬하트를 보여주자
//				
//			}else{				//꽉찬하트였으면
//				$("#nolike").show();	//빈하트를 보여주자.
//				$("#like").hide();
//			}
//					
//		//로그인된 아이디가 없을때,
//	}else{
//		alert("로그인하셔야 찜 가능합니다");
//		$("#nolike").show();	//빈하트를 보여주자.
//		$("#like").hide();			
//				
//	}//if 닫음
//	})//클릭이벤트 닫음
 

})