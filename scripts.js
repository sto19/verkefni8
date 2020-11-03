/**
 * Verkefni 8 – Caesar dulmál með vefviðmóti
 *
 * Verður að passa _nákvæmlega_ við gefið HTML, mun annars brotna.
 * Þ.e.a.s., ekki þarf að skrifa meðhöndlun á HTML elementum sem vantar
 */

/**
 * Kóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal kóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @param {string} alphabet Stafróf sem afkóða á út frá
 * @returns {string} Upprunalegi strengurinn hliðraður um n til hægri
 */
function encode(str, n, alphabet = '') {
  const upper = str.toLocaleUpperCase();

  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += LETTERS[(LETTERS.indexOf(upper[i]) + n) % LETTERS.length];
  }
  return result;
}


/**
 * Afkóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal afkóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @param {string} alphabet Stafróf sem afkóða á út frá
 * @returns {string} Upprunalegi strengurinn hliðraður um n til vinstri
 */
function decode(str, n, alphabet = '') {
  // dæmi sem notar „fallaforritun“
  return str
    .toLocaleUpperCase()
    .split('')
    .map(s => LETTERS.indexOf(s) - n) // hliðruð staðsetning stafs
    .map(i => i < 0 ? LETTERS.length + i : i) // ef i verður neikvætt, förum aftast í stafróf
    .map(i => LETTERS[i])
    .join('');
}

// const div = document.querySelector('div');
const alphabetInput = document.querySelector('input[id=alphabet]');
const userInput = document.querySelector('input[id=input]');
const range = document.querySelector('input[type=range]');
const rangeValue = document.querySelector('span[class=shiftValue]');
const radios = document.querySelectorAll('input[type=radio]');
let strengur = document.getElementById('input').value;
// const a = document.querySelector('a');

const setRangeValue = ((rValue) => {
  // rangeValue á að vera rValue. Passa að ef rValue er stærra en alphabet.length þá
  // verður rValue alphabet.length.
})

const Caesar = (() => {
  // Default stafróf, uppfært þegar slegið inn í "alphabet"
  let alphabet = 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ';

  // Default type, uppfært af radio input
  let type = 'encode';

  function radioChange(e) {
    console.log(`Radio value = ${e.target.value}`); 
  }

  for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', radioChange)
  }

  // Default hliðrun, uppfært af "shift"
  let shift = 3;
  range.addEventListener('input', (e) => {
    console.log(`range input, target =${e.target}, value =${e.target.value}`);
    rangeValue.innerHTML = e.target.value;
  });

  userInput.addEventListener('input', (e) => {
    console.log(`input input, target =${e.target}, value =${e.target.value}`);
  });

  alphabetInput.addEventListener('input', (e) => {
    console.log(`input alphabet, target =${e.target}, value =${e.target.value}`);
    range.setAttribute("max", e.target.value.length);
  });


  input.addEventListener('change', (e) => {
    console.log(`input change, target =${e.target}, value =${e.target.value}`);
  });

  input.addEventListener('click', (e) => {
    const { target } = e;
    console.log('target = ', target);
    e.stopPropagation();
  });

  input.addEventListener('keyup', (e) => {
    const { keyCode, key } = e;
    console.log(`input keyup, keyCode = ${keyCode}, key = ${key}`, e);
  });
  
  result.addEventListener('change', encode); {
    const str = document.getElementById('input').value;
    const n = document.getElementById('range').value;
  }


  function init(el) {
   
  }

  return {
    init,
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  const ceasarForm = document.querySelector('.ceasar');

  Caesar.init(ceasarForm);
});
