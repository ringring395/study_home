/**
 * 게시판 페이징 + 검색창
 */

$(document).ready(function (){
	//리스트 페이지 열자마자
	//좋아요 테이블의 불리언값이 0이면 
	
	//빈하트 보여주고
	//좋아요 테이블의 불리언값이 1이면
	//꽉찬하트 보여줘라
	
	
	
    //빈하트 누르면
    $("#mylike_no").on("click",function(){
    	alert("좋아요클릭함");
    	$("#mylike_no").hide();
    	$("#mylike").show();   	
    })
    
    //꽉찬하트 누르면
    $("#mylike").on("click",function(){
    	alert("좋아요빼주세요");
    	$("#mylike_no").show();
    	$("#mylike").hide();	
    })    
	
	
	//검색버튼을 클릭하면
    $("input[type='button']").on("click",function (){
    	//alert("aa");
    	//pageNum에 1을 초기화
        $("input[name='pageNum']").val("1");
        //form태그를 submit
        $("#searchForm").submit();
    })
   
    
})