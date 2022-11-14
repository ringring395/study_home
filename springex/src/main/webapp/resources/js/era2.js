/**
 * date -> era 
 */
$(document).ready(function (){
//년월일 date -> 연호 era
	
	//결합한 날짜를 저장하는 변수
	var check="";
	
//버튼을 클릭하면.
	$("#d2e_btn").on("click", function(){
		//버튼 클릭하면 일단 리셋
		$("#e2d_era").val("");
		$("#e2d_eraNum").val("");
		
		//입력한 년도
		var year = $("#d2e_year").val();
		//입력한 월
		var month = $("#d2e_month").val();
		//입력한 일
		var day = $("#d2e_day").val();	
		//연호의 첫해 저장변수
		var standard_year;
		
		//입력한 날짜를 결합
		check = year + month + day;
		console.log(check);
		
		//레이와
		if(check >= 20190501){
			$("#e2d_era").val('레이와');
			standard_year = 2019;
			era2(year, standard_year);
		}
		//헤이세이
		else if(check>=19890108 && check<=20190430){
			$("#e2d_era").val("헤이세이");
			standard_year = 1989;
			era2(year, standard_year);			
		}
		//쇼와
		else if(check>19261225 && check<=19890107){
			$("#e2d_era").val("쇼와");	
			standard_year = 1926;
			era2(year, standard_year);	
		}
		//쇼와,다이쇼
		else if(check == 19261225){
			$("#e2d_era").val("쇼와1년 / 다이쇼15년");
		}
		//다이쇼
		else if(check>19120730 && check<19261225){
			$("#e2d_era").val("다이쇼");
			standard_year = 1912;
			era2(year, standard_year);	
		}
		//다이쇼,메이지
		else if(check == 19120730){
			$("#e2d_era").val("다이쇼1년 / 메이지45년");
		}
		//메이지
		else if(check>=18681023 && check<19120730){
			$("#e2d_era").val("메이지");
			standard_year = 1868;
			era2(year, standard_year);	
		}
	})
	
//연호의 햇수를 구하는 함수
function era2(year, standard_year){
		var num = 0;
		//기준년도부터 입력한 년도까지 for문 돌림.
		for(standard_year; standard_year<year+1; standard_year++){
			num++;
			if(standard_year == year){	//입력한 년도가 되면 출력함.
				$("#e2d_eraNum").val(num);
			}
		}
	}

})//전체 닫음