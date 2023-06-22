function get_clue(id) {
  document.getElementById(id).style.cursor = 'default';
  document.getElementById(id).style.height = '32px';
  document.getElementById(id).style.width = '40px';
  document.getElementById(id).removeAttribute('onclick');
  document.getElementById(id).src =
    'https://cdn.bfldr.com/Z0BJ31FP/at/7ntkh338w9j6mbwz8h3prs2j/icon-exploded-heart.svg';

  guess_letter(current_hangman_game.give_clue());
}
