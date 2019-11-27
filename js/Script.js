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
				
			/* $("button").click(function() { 
                var t = $(this).attr('id'); 
                $('#GFG_DOWN').text("ID = " + t); 
            }); 

            */        
}); 
//глобальные переменные
var ActivPeople; 
var InfoPlanets;
var infoStarships;

function setBackPeople(){
        

   var backPeople;
		$.ajax({
		url:ActivPeople.previous,
		type : "get",
		success: function(data){
			 
			 backPeople = data;
			 	 creatPeopleTable(backPeople.results); 
			 	 ActivPeople=backPeople;    
           }
       
		});
	
    

}

function setNextPeople(){
        

   var nextPeople;
		$.ajax({
		url:ActivPeople.next,
		type : "get",
		success: function(data){
			 
			 nextPeople = data;
			 	 creatPeopleTable(nextPeople.results); 
			 	 backPeople = ActivPeople;
			 	 ActivPeople=nextPeople;    
           }
       
		});
	
    

}
//Функция для удаления строк таблицы
function cleanTabElement(tableBody) {
    tableBody.find("tr").remove();
}

function creatPeopleTable(results){
//эта переменная хранит в мебе всю таблицу
			   var peopletable = $('#people-table'); 
			   var htmlTR="";
        
    cleanTabElement(peopletable);

      //цикл по перебору всех имен на странице
					   $.each(results,function(i,result){ 
					   	         
					   	          htmlTR="<tr>"+
					                  "<td>"+"<button style='height:40px; width:250px' class='btn btn-dark' onClick='showInfoPerson(this.id);' id="+i+">"+result.name+
					                  "</button>"+"</td>"+ 
					                  "</tr>";
					               peopletable.find('tbody').append(htmlTR);
					               
									});       
}
//Выводит информацию по выбранному персонажу
function showInfoPerson (id)
            {
               
               var people=ActivPeople.results[id];
               var rezume = $('#rezume'); 
			   cleanTabElement(rezume);
			   var htmlTR="";
                htmlTR="<tr>"+"<td>"+ 'Name:'+"</td>"+
                       "<td>"+people.name+"</td>"+
                       "</tr>"+
                       "<tr>"+"<td>"+ 'height:'+"</td>"+
                       "<td>"+people.height+"</td>"+
                       "</tr>"+
                       "<tr>"+"<td>"+ 'mass'+"</td>"+
                       "<td>"+people.mass+"</td>"+
                       "</tr>"+
                       "<tr>"+"<td>"+ 'hair_color'+"</td>"+
                       "<td>"+people.hair_color+"</td>"+
                       "</tr>"+
                       "<tr>"+"<td>"+ 'skin_color'+"</td>"+
                       "<td>"+people.skin_color+"</td>"+
                       "</tr>"+
                       "<tr>"+"<td>"+ 'eye_color'+"</td>"+
                       "<td>"+people.eye_color+"</td>"+
                       "</tr>"+
                       "<tr>"+"<td>"+ 'gender'+"</td>"+
                       "<td>"+people.gender+"</td>"+
                       "</tr>"+
                       "<tr>"+"<td>"+ 'homeworld'+"</td>"+
                       "<td>"+people.homeworld+"</td>"+
                       "</tr>";
                                      
					                  rezume.find('tbody').append(htmlTR);
            }
//Загрузка имен людей в таблицу
function loaderPeople () {
		$.ajax({
		url:"https://swapi.co/api/people/",
		type : "get",
		success: function(data){
			 ActivPeople = data;
			 var count = ActivPeople.count;
			 var next = ActivPeople.previous;
			 var results = ActivPeople.results;
			 
	                creatPeopleTable(results);
	      
   
								
             /*loaderObjectPeople();*/
			}	
  
		});
	};

function showInfoPlanets (id)
            {
               
               var planet=InfoPlanets.results[id];
               var rezume = $('#rezume'); 
               cleanTabElement(rezume);
			   var htmlTR="";
                htmlTR="<tr>"+"<td>"+ 'Name:'+"</td>"+
                       "<td>"+planet.name+"</td>"+
                       "</tr>"+
                       "<tr>"+"<td>"+ 'rotation_period:'+"</td>"+
                       "<td>"+planet.rotation_period+"</td>"+
                       "</tr>"+
                       "<tr>"+"<td>"+ 'orbital_period:'+"</td>"+
                       "<td>"+planet.orbital_period+"</td>"+
                       "</tr>"+
                       "<tr>"+"<td>"+ 'diameter:'+"</td>"+
                       "<td>"+planet.diameter+"</td>"+
                       "</tr>"+
                       "<tr>"+"<td>"+ 'climate:'+"</td>"+
                       "<td>"+planet.climate+"</td>"+
                       "</tr>"+
                       "<tr>"+"<td>"+ 'gravity'+"</td>"+
                       "<td>"+planet.gravity+"</td>"+
                       "</tr>"+
                       "<tr>"+"<td>"+ 'terrain'+"</td>"+
                       "<td>"+planet.terrain+"</td>"+
                       "</tr>"+
                       "<tr>"+"<td>"+ 'surface_water'+"</td>"+
                       "<td>"+planet.surface_water+"</td>"+
                       "</tr>"+
                       "<tr>"+"<td>"+ 'population'+"</td>"+
                       "<td>"+planet.population+"</td>"+
                       "</tr>";
                                      
					                  
					               rezume.find('tbody').append(htmlTR);
            }
//Загрузка всех планет 
function loaderPlanets () {
		$.ajax({
		url:"https://swapi.co/api/planets/",
		type : "get",
		success: function(data){
			 InfoPlanets = data;
			 var results = InfoPlanets.results;
			 
			 
   //эта переменная хранит в мебе всю таблицу
			   var peopletable = $('#people-table'); 
			   var htmlTR="";
        
        cleanTabElement(peopletable);
      //цикл по перебору всех имен на странице
					   $.each(results,function(i,result){ 
					          htmlTR="<tr>"+
					                  "<td>"+"<button class='btn btn-dark' onClick='showInfoPlanets(this.id);' id="+i+">"+result.name+
					                  "</button>"+"</td>"+ 
					                  "</tr>";
					               peopletable.find('tbody').append(htmlTR);
					               
									}
       
								);
			}	

		});
	};


function showInfoStarships (id)
            {
               
               var starships=infoStarships.results[id];
               var rezume = $('#rezume'); 
               cleanTabElement(rezume);
			   var htmlTR="";
                htmlTR="<tr>"+"<td>"+ 'Name:'+"</td>"+
                       "<td>"+starships.name+"</td>"+
                       "</tr>"+
                       "<tr>"+"<td>"+ 'model:'+"</td>"+
                       "<td>"+starships.model+"</td>"+
                       "</tr>"+
                       "<tr>"+"<td>"+ 'manufacturer:'+"</td>"+
                       "<td>"+starships.manufacturer+"</td>"+
                       "</tr>"+
                       "<tr>"+"<td>"+ 'cost_in_credits:'+"</td>"+
                       "<td>"+starships.cost_in_credits+"</td>"+
                       "</tr>"+
                       "<tr>"+"<td>"+ 'length:'+"</td>"+
                       "<td>"+starships.length+"</td>"+
                       "</tr>"+
                       "<tr>"+"<td>"+ 'max_atmosphering_speed'+"</td>"+
                       "<td>"+starships.max_atmosphering_speed+"</td>"+
                       "</tr>"+
                       "<tr>"+"<td>"+ 'crew'+"</td>"+
                       "<td>"+starships.crew+"</td>"+
                       "</tr>"+
                       "<tr>"+"<td>"+ 'passengers'+"</td>"+
                       "<td>"+starships.passengers+"</td>"+
                       "</tr>"+
                       "<tr>"+"<td>"+ 'cargo_capacity'+"</td>"+
                       "<td>"+starships.cargo_capacity+"</td>"+
                       "</tr>"+
                       "<tr>"+"<td>"+ 'consumables'+"</td>"+
                       "<td>"+starships.consumables+"</td>"+
                       "</tr>"+
                       "<tr>"+"<td>"+ 'hyperdrive_rating'+"</td>"+
                       "<td>"+starships.hyperdrive_rating+"</td>"+
                       "</tr>"+
                       "<tr>"+"<td>"+ 'MGLT'+"</td>"+
                       "<td>"+starships.MGLT+"</td>"+
                       "</tr>"+
                       "<tr>"+"<td>"+ 'starship_class'+"</td>"+
                       "<td>"+starships.starship_class+"</td>"+
                       "</tr>";
                                      
					                  
					               rezume.find('tbody').append(htmlTR);
            }
	//Загрузка всех кораблей 
function loaderStarships () {
		$.ajax({
		url:"https://swapi.co/api/starships/",
		type : "get",
		success: function(data){
			  infoStarships = data;
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
					                  "<td>"+"<button class='btn btn-dark' onClick='showInfoStarships(this.id);' id="+i+">"+result.name+
					                  "</button>"+"</td>"+ 
					                  "</tr>";
					               peopletable.find('tbody').append(htmlTR);
					               
									}
       
								);
			}	

		});
	};

   

	 /*function loaderObjectPeople () {
		$.ajax({
		url:"https://swapi.co/api/people",
		type : "get",
		success: function(data){
			 PeopleArray = data;
			 var People = PeopleArray.results;
			 
			 var idActivPersen =getidbutton(button);
               name= People[idActivPersen].name; 
                alert(name);
			 
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
             
             //table.find('tbody').append(m1);... 
  
		});
	};
			}	*/