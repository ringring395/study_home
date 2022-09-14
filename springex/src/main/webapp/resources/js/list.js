/**
 * 게시판 페이징 + 검색창
 */

$(document).ready(function (){
	
	//검색버튼을 클릭하면
    $("input[type='button']").on("click",function (){
    	//alert("aa");
    	//pageNum에 1을 초기화
        $("input[name='pageNum']").val("1");
        //form태그를 submit
        $("#searchForm").submit();
    })
   
    
})