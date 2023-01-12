// add letters






window.onload = function(){
    let letter = document.getElementById('letters');
    letter.innerHTML += '<ul>';
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
                    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                    't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    
    

    for(let i=0; i<alphabet.length; i++){

        letter.innerHTML+=`<li>${alphabet[i]}</li>`;
    }
   
    letter.innerHTML += '</ul>';
    
    console.log(letter);
}
