$(document).ready(
function() {
	            $('#Planets').click(function() {
			     
			     loaderPlanets();    
			});
				$('#People').click(function() {
			     
			     loaderPeople();    
			});
				$('#Starships').click(function() {
			     
			     loaderStarships();    
			});
}); 


//глобальные переменные
var PeopleArray; 


//Функция для удаления строк таблицы
function cleanTabElement(tableBody) {
    tableBody.find("tr").remove();
}

//Загрузка имен людей в таблицу
function loaderPeople () {
		$.ajax({
		url:"https://swapi.co/api/people/",
		type : "get",
		success: function(data){
			 PeopleArray = data;
			 var count = PeopleArray.count;
			 var next = PeopleArray.previous;
			 var results = PeopleArray.results;
			 
	 
	      loaderObject();
   //эта переменная хранит в мебе всю таблицу
			   var peopletable = $('#people-table'); 
			   var htmlTR="";
        
    cleanTabElement(peopletable);
      //цикл по перебору всех имен на странице
					   $.each(results,function(i,result){ 
					   	          htmlTR="<tr>"+
					                  "<td>"+"<button class='btn btn-dark' id="+i+">"+result.name+
					                  "</button>"+"</td>"+ 
					                  "</tr>";
					               peopletable.find('tbody').append(htmlTR);
					               
									}
       
								);

			}	
  
		});
	};

//Загрузка всех планет 
function loaderPlanets () {
		$.ajax({
		url:"https://swapi.co/api/planets/",
		type : "get",
		success: function(data){
			 var infoPlanets = data;
			 var count = infoPlanets.count;
			 var next = infoPlanets.previous;
			 var results = infoPlanets.results;
			 var name = results[0].name;
			 
   //эта переменная хранит в мебе всю таблицу
			   var peopletable = $('#people-table'); 
			   var htmlTR="";
        
        cleanTabElement(peopletable);
      //цикл по перебору всех имен на странице
					   $.each(results,function(i,result){ 
					          htmlTR="<tr>"+
					                  "<td>"+"<a href='https://swapi.co/api/people/'>"+result.name+"</a>"+"</td>"+ 
					                  "<td> </td>"+ 
					                  "<td> </td>"+
					               "</tr>";
					               peopletable.find('tbody').append(htmlTR);
					               
									}
       
								);
			}	

		});
	};



	//Загрузка всех кораблей 
function loaderStarships () {
		$.ajax({
		url:"https://swapi.co/api/starships/",
		type : "get",
		success: function(data){
			 var infoStarships = data;
			 var count = infoStarships.count;
			 var next = infoStarships.previous;
			 var results = infoStarships.results;
			 
			 
   //эта переменная хранит в мебе всю таблицу
			   var peopletable = $('#people-table'); 
			   var htmlTR="";
        
        cleanTabElement(peopletable);
      //цикл по перебору всех имен на странице
					   $.each(results,function(i,result){ 
					          htmlTR="<tr>"+
					                  "<td>"+"<a href='https://swapi.co/api/people/'>"+result.name+"</a>"+"</td>"+ 
					                  "<td> </td>"+ 
					                  "<td> </td>"+
					               "</tr>";
					               peopletable.find('tbody').append(htmlTR);
					               
									}
       
								);
			}	

		});
	};

   

	function loaderObject () {
		$.ajax({
		url:"https://swapi.co/api/people",
		type : "get",
		success: function(data){
			 PeopleArray = data;
			 var People = PeopleArray.results;
			 var name = People[0].name;
			/*  
			 var peopletable = $('#rezume'); 
			 var htmlTR="";

			  $.each(results,function(i,result){ 
					          htmlTR="<tr>"+
					                  "<td>"+"<a href='https://swapi.co/api/people/'>"+result.name+"</a>"+"</td>"+ 
					                  "<td> </td>"+ 
					                  "<td> </td>"+
					               "</tr>";
					               peopletable.find('tbody').append(htmlTR);
					               
									}
             
             //table.find('tbody').append(m1);... */
			}	
  
		});
	};