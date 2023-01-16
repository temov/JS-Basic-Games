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
    let createdUl;
    let correctWord;

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
        createdUl = document.createElement('ul');
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
      this.setAttribute("style", "background-color:rgba(72, 252, 17, 0.8); color:white;")
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          geusses[i].innerHTML = guess;
          counter += 1;
        } 
      }
      var j = (word.indexOf(guess));
      if (j === -1) {
        life -= 1;
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
        counter = 0;
        space = 0;
        geusses = [];

        guessedWord();
        showLives();
        selectCat();
        
       


    }

    startPlay();

    // Hint

    showHint.onclick = function() {

      let hints = [
        ["Noucamp", "Piazza Duomo", "Native city of the Beatles", "Biggest river in Macedonia", "Coming from Portugal", "Red Devils", "Gazza's first club"],
        ["Tom Cruise in leading role", "Oposite of freeze", "Historical drama", "Fishes are the main characters", "Bart and Lisa"],
        ["The capital city of Macedonia", "Home of AC Milan and Inter", "Spanish capital", "Austrian capital", "Portugal capital"]
    ];

    let categoryIndex = categories.indexOf(chosenCategory);
    let hintIndex = chosenCategory.indexOf(word);
    clueText.innerHTML = "Clue: - " +  hints [categoryIndex][hintIndex];
  };

   // Reset - Play again

   document.getElementById('reset').onclick = function() {
    correctWord.parentNode.removeChild(correctWord);
    createdUl.parentNode.removeChild(createdUl);
    clueText.innerHTML = "";
    startPlay();
  }
}

