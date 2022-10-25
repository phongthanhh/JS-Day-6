// custom Input

let getInputMain = document.querySelectorAll('input');

function validate(input) {
    if (input.value) {
        input.classList.add('fill-bg');
    } else {
        input.classList.remove('fill-bg');
    }
}
getInputMain.forEach((input) => {
    input.oninput = function() {
        validate(input)
    }
})


function showResultTrue(message, result, mess = '', result2 = '', mess2 = '') {
    message.classList.remove('false');
    message.classList.add('true');
    message.innerHTML = `Kết quả : ${mess} <b>${result}</b>  ${mess2} <b>${result2}</b>`;

}

function showResultFalse(message, result, mess = '', result2 = '', mess2 = '') {
    message.classList.remove('true');
    message.classList.add('false');
    message.innerHTML = `Thông báo : ${mess} <b>${result}</b>  ${mess2} <b>${result2}</b>`;
}

// EXE
// EXE1
function bt1() {
    const errorMessage = document.getElementById('errorMessage')

    let sum = 0;
    let n = 0;
    while (sum < 10000) {
        n++;
        sum += n;
    }
    showResultTrue(errorMessage, n)
}

// EXE2
function bt2() {
    const getX = +document.getElementById('exe2-num1').value
    const getN = +document.getElementById('exe2-num2').value
    const errorMessage2 = document.getElementById('errorMessage2')

    let S = 0;
    let n = 0;
    if (getX && getN) {
        while (n <= getN) {
            n++;
            S += getX ** n;
        }
        showResultTrue(errorMessage2, S)
    } else {
        showResultFalse(errorMessage2, 'Nhập dữ liệu đi má !')
    }
}

// EXE3

function bt3() {
    const getN = document.getElementById('exe3-num1').value;
    const errorMessage3 = document.getElementById('errorMessage3')
    let S = 1;
    if (getN) {
        for (let i = 1; i <= getN; i++) {
            S *= i;
        }
        showResultTrue(errorMessage3, S)
    } else {
        showResultFalse(errorMessage3, 'Nhập dữ liệu đi má !')

    }
}

// EXE4

function bt4() {
    const errorMessage4 = document.getElementById('errorMessage4')
    let content = '';
    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            content += '<div class="redRow"> Div chẵn </div>';
            showResultTrue(errorMessage4, content)
        } else {
            content += '<div class="blueRow" > Div lẻ </div>';
            showResultTrue(errorMessage4, content)
        }
    }
}

// EXE5
function checkSNT(n) {
    let ischeck = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            ischeck = false;
        }
    }
    return ischeck;
}

function bt5() {
    const getN = document.getElementById('exe5-num1').value;
    const errorMessage5 = document.getElementById('errorMessage5')
    if (getN) {
        let s = '';
        for (let n = 2; n <= getN; n++) {
            let ischeck = checkSNT(n)
            if (ischeck) {
                s = s + ' ' + n
                showResultTrue(errorMessage5, s)
            }
        }
    } else {
        showResultFalse(errorMessage5, 'Nhập dữ liệu đi má !')

    }

}