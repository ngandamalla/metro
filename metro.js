/*
Date : Sep 1, 2012,
Framework : MetroStrap,
Description:Quick development of MetroStyling , Cross Platform, Cross Browser and All Device supported,
Author : Naveen Gandamalla,
Add me at twitter : @ngandamalla,
Git URL : https://github.com/ngandamalla/metro,
*/

$(document).ready(function(){
	$.get("metro.xml",{},function(xml){
		var trip=0;
		var tripSel;
		$('count',xml).each(function(i) {
			var countVal = 	$(this).text();	
			tripSel = countVal;
		});
		
		$('content',xml).each(function(i) {
			
			var newdiv = document.createElement("div");
			newdiv.id="div_"+i;
			newdiv.className = $(this).find("class").text() +' '+ $(this).find("type").text() ;
			newdiv.innerHTML = $(this).find("text").text();
			newdiv.style.display = "block";
			newdiv.style.background = $(this).find("background").text();
			newdiv.style.color = $(this).find("color").text();
			newdiv.style.width = $(this).find("width").text();
			newdiv.style.height = $(this).find("height").text();
			trip ++;
			
			if( trip <= tripSel ){
				var mainElem = document.getElementById('mainContent');	
				mainElem.appendChild(newdiv);
				
				
			}
		});
		
		$('input[type=checkbox]').click(function(){
													 
				 var isAdminChecked = $('#adminCheck').attr('checked')?true:false;
				 var isSuserChecked = $('#suserCheck').attr('checked')?true:false;
				 var isUserChecked  = $('#userCheck').attr('checked')?true:false;
				
				 $('.generic').fadeOut('slow');
				 if(isAdminChecked == true){					 
					 $('.admin').fadeIn('slow');
					 $('.admin').html('Admin');
				 }
				 if(isSuserChecked == true){					 
					 $('.superuser').fadeIn('slow');
					 $('.superuser').html('SuperUser');
				 }
				 if(isUserChecked == true){					 
					 $('.user').fadeIn('slow');
					 $('.user').html('user');
				 }
				 if ((isAdminChecked == false) && (isSuserChecked == false) && (isUserChecked == false))
				 {
					$('.generic').fadeIn('slow');
				 }
												   
			});
		
		if( trip <= tripSel ){		
			// Change the  'div id' and content here. 
			// $('#div_1').html('Update your content here');			
		}
		 
		
		
	});
});