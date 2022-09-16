function search_pokemon_name() {
    let input = document.getElementById('pokemonName').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('pokemon_name');//returns an array of all the pokemons names
    const pokemon_list = [];
    let counter = 0;
    for (i = 0; i < x.length; i++) { 
        console.log(x[i]);
        console.log("here");
        
        if (!x[i].innerHTML.toLowerCase().includes(input)) {

        }
        else {
            pokemon_list[counter] = x[i].innerHTML;
            counter++;               
        }
    }
    if(counter>0){
    alert(pokemon_list);
    }
}

function allLetter(inputtxt)
  {
    var input = document.getElementById('pokemonName').value
   var letters = /^[a-zA-z]+$/;
   console.log(letters);
   if(/^[a-zA-Z]+$/.test(input))
     {
      return true;
     }
   else
     {
        document.getElementById('pokemonName').value =  input.slice(0, -1);
     }
  }

  function search_pokemon_number() {
    let input = document.getElementById('pokemonNumber').value
   // input=input.toLowerCase();
    let x = document.getElementsByClassName('pokemon_num');//returns an array of all the pokemons numbers
    let y = document.getElementsByClassName('pokemon_name')
    const pokemon_list = [];
    let counter = 0;
    for (i = 0; i < x.length; i++) { 
        console.log(x[i]);
        console.log("here");
        
        if (!x[i].innerHTML.includes(input)) {

        }
        else {
            pokemon_list[counter] = y[i].innerHTML;
            counter++;               
        }
    }
    if(counter>0){
    alert(pokemon_list);
    }
}