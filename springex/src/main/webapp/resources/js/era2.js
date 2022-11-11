/**
 * date -> era 
 */
$(document).ready(function (){
//년월일 date -> 연호 era
	
	//결합한 날짜를 저장하는 변수
	var check="";
	
//버튼을 클릭하면.
	$("#d2e_btn").on("click", function(){
		$("#e2d_era").val("");
		$("#e2d_eraNum").val("");
		var year = $("#d2e_year").val();
		var month = $("#d2e_month").val();
		var day = $("#d2e_day").val();		
		//입력한 날짜를 결합
		check = year + month + day;
		console.log(check);
		//레이와
		if(check >= 20190501){
			$("#e2d_era").val('레이와');
		}
		//헤이세이
		else if(check>=19890108 && check<=20190430){
			$("#e2d_era").val("헤이세이");
		}
		//쇼와
		else if(check>19261225 && check<=19890107){
			$("#e2d_era").val("쇼와");
		}
		//쇼와,다이쇼
		else if(check == 19261225){
			$("#e2d_era").val("쇼와1년 / 다이쇼15년");
		}
		//다이쇼
		else if(check>19120730 && check<19261225){
			$("#e2d_era").val("다이쇼");
		}
		//다이쇼,메이지
		else if(check == 19120730){
			$("#e2d_era").val("다이쇼1년 / 메이지45년");
		}
		//메이지
		else if(check>=18681023 && check<19120730){
			$("#e2d_era").val("메이지");
		}
	})


})//전체 닫음