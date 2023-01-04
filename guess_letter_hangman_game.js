function guess_letter(letter) {
  current_hangman_game.guess(letter);

  if (current_hangman_game.game_sentence.includes(letter)) {
    for (let i = 0; i < current_hangman_game.game_feedback.length; i++) {
      document.getElementById(`letter${i}`).innerHTML =
        current_hangman_game.game_feedback[i];

      if (document.getElementById(`letter${i}`).innerHTML !== "*") {
        document.getElementById(`letter${i}`).style.color = "#464646";
      }
    }

    if (current_hangman_game.game_status === "won") {
      document.getElementById("attemps_counter").src =
        "https://bocaditosespanol.com/wp-content/uploads/2022/10/hangman-you-won.svg";
    }
    document.getElementById(`button_${letter}`).style.color = "#6DEEBB";
  }

  if (!current_hangman_game.game_sentence.includes(letter)) {
    document.getElementById(`button_${letter}`).style.color = "#DB4D89";
    document.getElementById(
      "attemps_counter"
    ).src = `https://bocaditosespanol.com/wp-content/uploads/2022/10/hangman-${current_hangman_game.attempts_left}-lives.svg`;
  }

  if (current_hangman_game.game_status === "lost") {
    for (let i = 0; i < current_hangman_game.game_feedback.length; i++) {
      if (document.getElementById(`letter${i}`).innerHTML === "*") {
        document.getElementById(`letter${i}`).style.color = "#DB4D89";
        document.getElementById(`letter${i}`).innerHTML =
          current_hangman_game.game_sentence[i];
      }
    }
  }

  document.getElementById(`button_${letter}`).style.backgroundColor = "#BBBDC1";
  document.getElementById(`button_${letter}`).style.cursor = "default";
  document.getElementById(`button_${letter}`).removeAttribute("onclick");

  if (current_hangman_game.game_status !== "in progress") {
    document.getElementById("translation_container").innerHTML =
      current_hangman_game.sentence_translation;

    const clues = document.querySelectorAll(".clues");
    clues.forEach((clue) => {
      clue.style.cursor = "default";
      clue.removeAttribute("onclick");
    });

    const keys = document.querySelectorAll(".keys");
    keys.forEach((key) => {
      key.style.cursor = "default";
      key.removeAttribute("onclick");
    });
  }
}
