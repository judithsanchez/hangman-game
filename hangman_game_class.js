class HangmanGame {
  constructor(objects_array) {
    this.original_sentence = this.get_random_object(objects_array).spanish;
    this.sentence_translation = this.get_random_object(objects_array).english;

    this.separated_sentence = this.original_sentence.split(" ");

    this.game_sentence = this.delete_special_characters(
      this.remove_white_spaces(this.original_sentence)
    )
      .toLowerCase()
      .split("");

    this.game_feedback = this.words_to_stars(this.game_sentence);

    this.attempts_left = 10;

    this.game_status = "in progress";

    this.no_duplicated_characters = this.remove_duplicated_characters(
      this.game_sentence
    );

    this.to_guess = this.no_duplicated_characters;

    this.guessed_letters = [];
  }

  get_random_object(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  remove_white_spaces(sentence) {
    return sentence.replace(/\s/g, "");
  }

  delete_special_characters(string) {
    return string.replace(/[^\w\sáéíóúüÁÉÍÓÚÜ]/g, "");
  }

  words_to_stars(array) {
    let modifiedArr = [];
    for (var i = 0; i < array.length; i++) {
      var modifiedString = array[i].replace(/[a-zA-Z]/g, "*");
      modifiedArr.push(modifiedString);
    }
    return modifiedArr;
  }

  remove_duplicated_characters(string) {
    let single_characters = [...new Set(string)];
    return single_characters;
  }

  guess(letter) {
    if (!this.game_sentence.includes(letter)) {
      this.attempts_left--;

      if (this.attempts_left <= 0) {
        this.game_status = "lost";
        return this.game_status;
      }
      return this.game_feedback;
    }

    if (this.game_sentence.includes(letter)) {
      this.guessed_letters.push(letter);

      let letter_index = this.to_guess.indexOf(letter);
      this.to_guess.splice(letter_index, 1);

      for (let i = 0; i < this.game_sentence.length; i++) {
        if (this.game_sentence[i] === letter) {
          this.game_feedback.splice(i, 1, letter);
        }
      }
    }

    if (!this.game_feedback.includes("*")) {
      this.game_status = "won";
      return this.game_status;
    }

    return this.game_feedback;
  }

  give_clue() {
    const index =
      this.to_guess[Math.floor(Math.random() * this.to_guess.length)];
    return index;
  }
}
