function search_pokemon_name() {
    let input = document.getElementById('pokemon_name').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('pokemon');
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}