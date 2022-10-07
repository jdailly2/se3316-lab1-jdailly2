//=================================
//This function searches through the pokemons names and returns the first 5 matches
//=================================
const pokemon_list = [];

function search_pokemon_name(inputtxt) {
    let input = document.getElementById('pokemonName').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('pokemon_name');//returns an array of all the pokemons names
    let des = document.getElementsByClassName('description')
    let pic = document.getElementsByClassName('pokemon');
    let num = document.getElementsByClassName('pokemon_num');

    
    let counter = 0;
    
    let picture = document.getElementsByTagName('img')
    var img = document.createElement('img')
    var li = document.createElement('li')
    const box=document.getElementById('popUpList')
    const allImages = [];

    
    
       if(allLetter(inputtxt)){
    for (i = 0; i < x.length; i++) {   
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
          
        }
        else {
            pokemon_list[counter] = x[i].innerHTML + "  " + des[i].innerHTML;
           // x[i].style.visibility = 'hidden';
           // num[i].style.visibility = 'hidden';
            
            
            allImages[counter] = picture[i].cloneNode(true);
           
            
            
            counter++;  
           // if(counter >4){
           //     break;
          //  }                  
        }
    }
  }
for(j=0; j<allImages.length;j++){
  li = pic[j].innerHTML ;
img = allImages[j]
box.appendChild(img)
box.append(li)
}

    if(counter>0){
    return(pokemon_list);
    }
}
//=================================
//This function takes input from the user and make sure that the user does
//not try to enter a number
//=================================
function allLetter(inputtxt)
  {

    var input = document.getElementById('pokemonName').value

   if(/^[a-zA-Z]+$/.test(input))
     {
      return true;
     }
   else
     {
        document.getElementById('pokemonName').value =  input.slice(0, -1);
     }
  }

  function Alert_fun() {

alert(pokemon_list);
  }

//=================================
//This function searches through the pokemons numbers and returns the first 5 matches
//=================================
  function search_pokemon_number() {
    let input = document.getElementById('pokemonNumber').value
  
    let x = document.getElementsByClassName('pokemon_num');//returns an array of all the pokemons numbers
    let y = document.getElementsByClassName('pokemon_name');
    let des = document.getElementsByClassName('description');
    const pokemon_list = [];
    let counter = 0;
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.includes(input)) {
        }
        else {
            pokemon_list[counter] = y[i].innerHTML + "  " + des[i].innerHTML;
            counter++;
            if(counter >4){
                break;
            }               
        }
    }
    if(counter>0){
    alert(pokemon_list);
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
     }
  }