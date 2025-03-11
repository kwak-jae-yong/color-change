const box = document.querySelector('#container')
const title = document.querySelector('h1.title')
const playBtn = document.querySelector('.play')
const stopBtn = document.querySelector('.stop')

let play = setInterval(bgChange, 2000)

// 16진수 코드 만들기
function getRandomColor() {
    let hex = "#" + Math.random().toString(16).slice(2, 8).padEnd(6, '0')

    /*
Math.random() → 0 ~ 1 사이의 난수를 생성 (0.84521345234)
.toString(16) → 16진수 문자열로 변환 ("0.d802b1f8e5")
.slice(2, 8) → 앞의 "0." 제거 후 6자리 추출 ("d802b1")  
    */

    return hex
}



// 초기 값 설정
box.style.backgroundColor = getRandomColor()


// 배경색 변경 함수, title 변경
function bgChange() {

    let randomColor = getRandomColor()

    box.style.backgroundColor = randomColor
    title.textContent = randomColor.toUpperCase()
}


// event

playBtn.addEventListener('click', function () {
    play = setInterval(bgChange, 2000)
})
stopBtn.addEventListener('click', function () {
    clearInterval(play)
})
