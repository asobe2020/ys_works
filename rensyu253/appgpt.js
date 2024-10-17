const div = document.querySelector('div');
const body = document.querySelector('body');

function changeColor() {
    // ランダムなRGB値を再計算
    let randColorOne = Math.floor(Math.random() * 256);
    let randColorTwo = Math.floor(Math.random() * 256);
    let randColorThree = Math.floor(Math.random() * 256);
    let randColorText = `rgb(${randColorOne}, ${randColorTwo}, ${randColorThree})`;

    // 背景色を変更
    body.style.backgroundColor = randColorText;

    // h1要素に新しい色を表示
    h1.innerText = randColorText;
}

// ランダムな色を表示するためのh1要素を作成
let h1 = document.createElement('h1');
h1.innerText = 'Click the button to change color!';
div.appendChild(h1);

// ボタンを作成
const button = document.createElement('button');
button.innerText = 'クリックしてね';
div.appendChild(button);

// ボタンをクリックするたびに背景色を変更
button.addEventListener('click', changeColor);
