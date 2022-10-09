//=================================
//This function searches through the pokemons names and returns the first 5 matches
//=================================
var pokemon_list = [];


const pokemonName = [];

var universalCounter = 0;
let counter = 0;


const PokemonNumbers = [];


const allList = document.getElementById("allList")
var oldUl = document.querySelector(".pokedex")
var container = document.createElement('div');
container.id = "popUp";
var searchList = document.createElement('ul');
searchList.id = "popUpList";
document.body.appendChild(container);

allList.insertBefore(container,oldUl);
container.appendChild(searchList);

const box=document.getElementById('popUpList');
const div = document.getElementById('popUp');

//=====================================================
function search_pokemon_name(inputtxt) {

  
  
  

    let input = document.getElementById('pokemonName').value;
    input=input.toLowerCase();
    let x = document.getElementsByClassName('pokemon_name');//returns an array of all the pokemons names
    let des = document.getElementsByClassName('description');
    let y = document.getElementsByClassName('pokemon_num');
   
    

    let picture = document.getElementById('poki').getElementsByTagName('img');
    var img = document.createElement('img');
    
   
   
    let p = document.createElement('p');
    const allImages = [];
    
  

  
    
    
     container.style.border = "none";
     removeSearch();
     
     
      counter = 0;
       if(allLetter(inputtxt)){
    for (i = 0; i < x.length; i++) {   
        if (!x[i].innerHTML.toLowerCase().includes(input)) {

       
        }
        else {
            pokemon_list[counter] = x[i].innerHTML + "  " + des[i].innerHTML;
            pokemonName[counter] = x[i].innerHTML +" "+ y[i].innerHTML+"  " + des[i].innerHTML; //x[i].innerHTML;
            
            allImages[counter] = picture[i].cloneNode(true);
            counter++;                 
        }
    }
  }
  
for(j=0; j<allImages.length;j++){
  var li = document.createElement('li');
  li.className = "child";
  li.id=pokemonName[j];
  p = pokemonName[j] ;

  img = allImages[j];

  box.appendChild(li);
  
  li.append(p);
  li.appendChild(img);
  

  
  
 
}




    if(counter==0){
      container.style.border = "none";
    }

  
}


function removeSearch(){
  const temp =document.querySelector('ul');
  let children = document.querySelectorAll('.child');
for(let c of children){
  
  temp.removeChild(c);

}
container.style.border = "thick solid #000000";
}


//=================================
//This function takes input from the user and make sure that the user does
//not try to enter a number
//=================================
function allLetter(inputtxt)
  {

    var input = document.getElementById('pokemonName').value;

   if(/^[a-zA-Z]+$/.test(input))
     {
      return true;
     }
   else
     {
        document.getElementById('pokemonName').value =  input.slice(0, -1);
     }
  }

  //function Alert_fun() {

//alert(pokemon_list);
 // }

//=================================
//This function searches through the pokemons numbers and returns the first 5 matches
//=================================
  function search_pokemon_number(inputtxt) {
    let input = document.getElementById('pokemonNumber').value
  
    let x = document.getElementsByClassName('pokemon_num');//returns an array of all the pokemons numbers
    let y = document.getElementsByClassName('pokemon_name');
    let des = document.getElementsByClassName('description');
 
    let counter = 0;
    let picture = document.getElementById('poki').getElementsByTagName('img');
    var img = document.createElement('img');
    let p = document.createElement('p');
    const allImages = [];
   
   
    removeSearch();
  

counter = 0;
    if(!allNumbers(inputtxt)){
    
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.includes(input)) {
          
        }
        else {
            pokemon_list[counter] = y[i].innerHTML + "  " + des[i].innerHTML;
           
            PokemonNumbers[counter] =y[i].innerHTML+" " + x[i].innerHTML + "  " + des[i].innerHTML;
            allImages[counter] = picture[i].cloneNode(true);
          
            counter++;      
         
        }
       
    }
  }
    for(j=0; j<allImages.length;j++){
   
      var li = document.createElement('li');
      li.className = "child";
      li.id=PokemonNumbers[j];
      p = PokemonNumbers[j] ;
      img = allImages[j];
    
      box.appendChild(li);
      
      li.append(p);
      li.appendChild(img);
 
}

if(counter==0){
  container.style.border = "none";
}

  
 
}
//=================================
//This function takes input from the user and make sure that the user does
//not try to enter a letter or a number above 20
//=================================
function allNumbers(inputtxt)
  {
    var input = document.getElementById('pokemonNumber').value
   var letters = /^[0-9]+$/;
   
   if(/^[0-9]+$/.test(input))
     {
        if(inputtxt>0 && inputtxt<20){
      
            return true;
        }
    
     }
   else
     {
    
        document.getElementById('pokemonNumber').value =  input.slice(0, -1);
        return true;
     }
  }