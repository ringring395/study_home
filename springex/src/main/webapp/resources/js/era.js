/**
 * era js파일
 */
$(document).ready(function (){

	
	$("#y2e_year").on("blur", function(){
		var y2e_year = $("#y2e_year").val();
		console.log(y2e_year);
		var y2e_yearChk = /^\d{4}$/;
		if(y2e_yearChk.test(y2e_year)){
			$("#y2e_era").html("");
			y2e(y2e_year);
		}else{
			$("#y2e_era").html("4자리 숫자만 입력 가능합니다.").css("color","red");
		}
	})

//연호 명칭 함수 선언
	function y2e(year){
		console.log(year);
		//레이와
		if(year>2019){
			$("#y2e_era").html("레이와").css("color","black");
			rei(year);
		}
		//레이와&헤이세이
		else if(year==2019){
			$("#y2e_era").html("레이와1년 / 헤이세이31년").css("color","black");
		}
		//헤이세이
		else if(year>1989 && year<2019){
			$("#y2e_era").html("헤이세이").css("color","black");
			hei(year);
		}	
		//헤이세이&쇼와
		else if(year==1989){
			$("#y2e_era").html("헤이세이1년 / 쇼와64년").css("color","black");
		}	
		//쇼와
		else if(year>1926 && year<1989){
			$("#y2e_era").html("쇼와").css("color","black");
			sho(year);
		}	
		//쇼와&다이쇼	
		else if(year==1926){
			$("#y2e_era").html("쇼와1년 / 다이쇼15년").css("color","black");
		}	
		//다이쇼
		else if(year>1912 && year<1926){
			$("#y2e_era").html("다이쇼").css("color","black");
			dai(year);
		}	
		//다이쇼&메이지	
		else if(year==1912){
			$("#y2e_era").html("다이쇼1년 / 메이지45년").css("color","black");
		}	
		//메이지
		else if(year>=1868 && year<1912){
			$("#y2e_era").html("메이지").css("color","black");
			mei(year);
		}			
	}//y2e 닫음

//연호별 숫자계산 함수 선언
//레이와 rei
	function rei(year){
		var rei_year = 2019;
		var num = 0;
		for(rei_year; rei_year<year+1; rei_year++){
			num++;	
			if(rei_year == year){
				$("#y2e_eraNum").html(num).css("color","red");
			}
		}
	}//rei 닫음
//헤이세이 hei
	function hei(year){
		var hei_year = 1989;
		var num = 0;
		for(hei_year; hei_year<year+1; hei_year++){
			num++;	
			if(hei_year == year){
				$("#y2e_eraNum").html(num).css("color","red");
			}
		}
	}//hei 닫음	
//쇼와 sho
	function sho(year){
		var sho_year = 1926;
		var num = 0;
		for(sho_year; sho_year<year+1; sho_year++){
			num++;	
			if(sho_year == year){
				$("#y2e_eraNum").html(num).css("color","red");
			}
		}
	}//sho 닫음		
//다이쇼 dai
	function dai(year){
		var dai_year = 1912;
		var num = 0;
		for(dai_year; dai_year<year+1; dai_year++){
			num++;	
			if(dai_year == year){
				$("#y2e_eraNum").html(num).css("color","red");
			}
		}
	}//dai 닫음		
//메이지 mei
	function mei(year){
		var mei_year = 1868;
		var num = 0;
		for(mei_year; mei_year<year+1; mei_year++){
			num++;	
			if(mei_year == year){
				$("#y2e_eraNum").html(num).css("color","red");
			}
		}
	}//dai 닫음		
	
	
	
	
	
	
	
	
	
	
})//전체 닫음