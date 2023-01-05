function random_data() {
  new_game_content =
    hangman_content_data_list[
      Math.floor(Math.random() * hangman_content_data_list.length)
    ];
  start_game();
}

function start_game() {
  document.getElementById("hangman_select_content_data").style.display = "none";
  document.getElementById("hangman_game_screen").style.display = "grid";

  current_hangman_game = new HangmanGame(new_game_content.sentences);

  let letters_counter = 0;

  for (let i = 0; i < current_hangman_game.separated_sentence.length; i++) {
    const new_word = document.createElement("div");
    new_word.setAttribute("id", `word${i}`);
    new_word.setAttribute("class", `container_word`);
    document.getElementById("sentence_container").appendChild(new_word);

    for (
      let j = 0;
      j < current_hangman_game.separated_sentence[i].length;
      j++
    ) {
      const new_letter = document.createElement("p");
      const new_letter_text = document.createTextNode("*");
      new_letter.appendChild(new_letter_text);
      new_letter.setAttribute("id", `letter${letters_counter}`);
      letters_counter++;
      new_letter.setAttribute("class", `container_letter`);
      document.getElementById(`word${i}`).appendChild(new_letter);
    }
  }
}
