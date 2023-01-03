function next_data() {
  game_data_counter === hangman_content_data_list.length - 1
    ? (game_data_counter = 0)
    : game_data_counter++;
  document.getElementById("character_bocadito").src =
    hangman_content_data_list[game_data_counter].content_image;
  new_game_content = hangman_content_data_list[game_data_counter];
}

function previous_data() {
  game_data_counter === 0
    ? (game_data_counter = hangman_content_data_list.length - 1)
    : game_data_counter--;
  document.getElementById("character_bocadito").src =
    hangman_content_data_list[game_data_counter].content_image;
  new_game_content = hangman_content_data_list[game_data_counter];
}
