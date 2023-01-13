// add letters


window.onload = function () {

    let chosenCategory;
    let categories;
    let word;
    let life;
    let showWord;
    let geusses;
    let counter;
    let liElem;
    let space;

    //get elements


    let lives = document.getElementById('lives');
    let clueText = document.getElementById('clue');
    let showHint = document.getElementById('hint');
    let categoryName = document.getElementById('categoryName')

    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

    //create ul of alphabet elements
    let keys = function () {

        let letter = document.getElementById('letters');
        let createdUl = document.createElement('ul');
        for (let i = 0; i < alphabet.length; i++) {
            createdUl.id = 'alphabet';
            liElem = document.createElement('li');
            liElem.innerHTML = alphabet[i];
            check();
            letter.appendChild(createdUl);
            
            createdUl.appendChild(liElem);
            console.log(letter.innerHTML);
        }


    }

    //selecting a category
    let selectCat = function () {
        if (chosenCategory === categories[0]) {
            categoryName.innerHTML = "The Chosen Category Is Football Teams";
        } else if (chosenCategory === categories[1]) {
            categoryName.innerHTML = "The Chosen Category Is Movies";
        } else if (chosenCategory === categories[2]) {
            categoryName.innerHTML = "The Chosen Category Is Cities";
        }
    }


    //show guessed word
    let guessedWord = function () {

        showWord = document.getElementById('word');
        correctWord = document.createElement('ul');

        for (let i = 0; i < word.length; i++) {
            correctWord.setAttribute('id', 'words');

            guess = document.createElement('li');

            guess.setAttribute('class', 'guess');

            if (word[i] === "-") {
                guess.innerHTML = "-";
                space = 1;
            } else {
                guess.innerHTML = "_";
            }

            geusses.push(guess);
            showWord.appendChild(correctWord);
            correctWord.appendChild(guess);
        }

    }
     // Show lives
   showLives = function () {
    lives.innerHTML = "You have " + life + " lives";
    if (life < 1) {
      lives.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        lives.innerHTML = "You Win!";
      }
    }
  }

  // OnClick Function - checking word
  let check = function () {
    liElem.onclick = function () {
      let guess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          geusses[i].innerHTML = guess;
          counter += 1;
        } 
      }
      var j = (word.indexOf(guess));
      if (j === -1) {
        lives -= 1;
        showLives();
        
      } else {
        showLives();
      }
    }
  }


    let startPlay = function () {
        categories = [
            ["barcelona", "milan", "liverpool", "vardar", "benfica", "manchester-city", "newcastle-united"],
            ["topgun", "heat", "gladiator", "finding-nemo", "the-simpsons"],
            ["skopje", "milano", "madrid", "vienna", "lisabon"]
        ];

        chosenCategory = categories[Math.floor(Math.random() * categories.length)];
        word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
        word = word.replace(/\s/g, "-");

        keys();

        life = 10;
        counter =0;
        space = 0;
        geusses = [];

        guessedWord();
        showLives();
        selectCat();
        
       


    }

    startPlay();


}

