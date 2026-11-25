const numberInput = document.getElementById('numberInput');
const calculateBtn = document.getElementById('calculateBtn');
const equartionDisplay = document.getElementById('equationDisplay');
const resultDisplay = document.getElementById('resultDisplay');

function sumEven(n){
    let sum = 0
    for (let i = 0; i < n; i++){
        let evenNumber = i * 2;
        sum = sum + evenNumber
    }
    return sum;
}

function makeEquation(n){
    let text = '';
    for (let i = 0; i < n; i++){
        text = text + (i * 2);
        if (i < n - 1){
            text = text + ' + '
        }
    }
    return text;
}

function calculate(){
    let n = Number(numberInput.value);

    if (n < 1){
        alert('กรุณากรอกตัวเลขตั้งเเต่ 1 ขึ้นไป');
        return;
    }
    equartionDisplay.innerText = 'รูปเเบบการบวก :' + makeEquation(n);
    resultDisplay.innerText = 'ผลรวมทั้งหมด :' + sumEven(n);
}

calculateBtn.addEventListener('click', calculate);