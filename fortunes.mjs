const results = [
    '大吉', '中吉', '小吉', '凶'
];

function draw() {
    const key = Math.floor(Math.random() * 100);
    const fortune = document.getElementById("fortune");

    if (key < 10) {
        fortune.textContent = '大吉';
    } else if (key < 45) {
        fortune.textContent = '中吉';
    } else if (key < 80) {
        fortune.textContent = '小吉';
    } else {
        fortune.textContent = '凶';
    }

    console.log(key);
}
