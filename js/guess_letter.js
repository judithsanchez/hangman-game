const evil_wifi = [
  'https://cdn.bfldr.com/Z0BJ31FP/at/mtgmsm4cm9g3r9sqjt78wrs/hangman-wifi-lives-0.svg',
  'https://cdn.bfldr.com/Z0BJ31FP/at/sr6wtggfg3r3pb3rhxxmwbpr/hangman-wifi-lives-1.svg',
  'https://cdn.bfldr.com/Z0BJ31FP/at/2qrxm7kmfb57fghm5t67/hangman-wifi-lives-2.svg',
  'https://cdn.bfldr.com/Z0BJ31FP/at/cg3m6ptgxkqbjm8mq96pvfb/hangman-wifi-lives-3.svg',
  'https://cdn.bfldr.com/Z0BJ31FP/at/8xcvqh7gsvtj4vjf9t843zjt/hangman-wifi-lives-4.svg',
  'https://cdn.bfldr.com/Z0BJ31FP/at/7ms52n6t7wtxn4rxrpjrg5c6/hangman-wifi-lives-5.svg',
  'https://cdn.bfldr.com/Z0BJ31FP/at/vj54ntqjgt5t4vbg2wxv7jf6/hangman-wifi-lives-6.svg',
  'https://cdn.bfldr.com/Z0BJ31FP/at/2k89btc8kz2354pwb35bsgx7/hangman-wifi-lives-7.svg',
  'https://cdn.bfldr.com/Z0BJ31FP/at/gv95c5rkhvgccgxhgmqg83r/hangman-wifi-lives-8.svg',
  'https://cdn.bfldr.com/Z0BJ31FP/at/nk3zjvntfgx9bqwqbv2gmnsq/hangman-wifi-lives-9.svg',
  'https://cdn.bfldr.com/Z0BJ31FP/at/t92wb82b3b474fmsx3cbvh4/hangman-wifi-lives-10.svg',
];

function guess_letter(letter) {
  current_hangman_game.guess(letter);

  if (current_hangman_game.game_sentence.includes(letter)) {
    for (let i = 0; i < current_hangman_game.game_feedback.length; i++) {
      document.getElementById(`letter${i}`).innerHTML =
        current_hangman_game.game_feedback[i];

      if (document.getElementById(`letter${i}`).innerHTML !== '*') {
        document.getElementById(`letter${i}`).style.color = '#464646';
      }
    }

    if (current_hangman_game.game_status === 'won') {
      document.getElementById('attemps_counter').src =
        'https://cdn.bfldr.com/Z0BJ31FP/at/q5f4bngxqwfjn87shxw97g4/hangman-wifi-lives-won.svg';
    }
    document.getElementById(`button_${letter}`).style.color = '#6DEEBB';
  }

  if (!current_hangman_game.game_sentence.includes(letter)) {
    document.getElementById(`button_${letter}`).style.color = '#DB4D89';
    document.getElementById('attemps_counter').src = `${
      evil_wifi[current_hangman_game.attempts_left]
    }`;
  }

  if (current_hangman_game.game_status === 'lost') {
    for (let i = 0; i < current_hangman_game.game_feedback.length; i++) {
      if (document.getElementById(`letter${i}`).innerHTML === '*') {
        document.getElementById(`letter${i}`).style.color = '#DB4D89';
        document.getElementById(`letter${i}`).innerHTML =
          current_hangman_game.game_sentence[i];
      }
    }
  }

  document.getElementById(`button_${letter}`).style.backgroundColor = '#BBBDC1';
  document.getElementById(`button_${letter}`).style.cursor = 'default';
  document.getElementById(`button_${letter}`).removeAttribute('onclick');

  if (current_hangman_game.game_status !== 'in progress') {
    document.getElementById('translation_container').innerHTML =
      current_hangman_game.sentence_translation;

    const clues = document.querySelectorAll('.clues');
    clues.forEach((clue) => {
      clue.style.cursor = 'default';
      clue.removeAttribute('onclick');
    });

    const keys = document.querySelectorAll('.keys');
    keys.forEach((key) => {
      key.style.cursor = 'default';
      key.removeAttribute('onclick');
    });
  }
}
