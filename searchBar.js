function search_pokemon_name() {
    let input = document.getElementById('pokemonName').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('pokemon name');//returns an array of all the pokemons names
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