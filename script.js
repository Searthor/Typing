
let words =Englishs;
const typingText = document.querySelector(".typing-text p"),
inpField = document.querySelector(".wrapper .input-field"),
tryAgainBtn = document.querySelector(" #reload"),
timeTag = document.querySelector("#seconds"),

mistakeTag = document.querySelector(".mistake span"),
wpmTag = document.querySelector(".wpm span"),
cpmTag = document.querySelector(".cpm span"),
laos = document.querySelector("#lao"),
English = document.querySelector("#English"),
time120=document.querySelector('#time120'),
time30=document.querySelector('#time30');
time60=document.querySelector('#time60');

let timer,
maxTime = time,
timeLeft = maxTime,
charIndex = mistakes = isTyping = 0;
let lag1 = document.querySelector('.Languages');
let timemenu = document.querySelector('.timer');

let timebar =document.getElementById('time').onclick =() =>{
    timemenu.classList.add('active');
}
let lag =document.getElementById('Languages').onclick =() =>{
    lag1.classList.add('active');

}
const menubar = document.querySelector(".menu");
const openBar = document.getElementById("openBar").onclick =() =>{
     menubar.classList.add("active");
 }

const closeBar =document.getElementById("closebar").onclick =() =>{
    menubar.classList.remove("active");
}

// console.log(words);


function english(){
    words=Englishs;
    resetGame();
    lag1.classList.remove('active');
    menubar.classList.remove("active");
}

function laofuntiokn(){
    words=lao;
    resetGame();
    console.log(words);
    lag1.classList.remove('active');
    menubar.classList.remove("active");
}

function functiontime120(){
    const time=120;
    maxTime = time,
    timeLeft = maxTime,
    charIndex = mistakes = isTyping = 0;
    timeTag.innerHTML=maxTime; 
    timemenu.classList.remove('active');
    menubar.classList.remove("active");
   
}

function functiontime30(){
    const time=30;
    maxTime = time,
    timeLeft = maxTime,
    charIndex = mistakes = isTyping = 0;
    timeTag.innerHTML=timeLeft; 
    timemenu.classList.remove('active');  
    menubar.classList.remove("active");
}

function functiontime60(){
    const time=60;
    maxTime = time,
    timeLeft = maxTime,
    charIndex = mistakes = isTyping = 0;
    timeTag.innerHTML=timeLeft; 
    timemenu.classList.remove('active');  
    menubar.classList.remove("active");
}


function loadParagraph() {
    const ranIndex = Math.floor(Math.random() * words.length);
    typingText.innerHTML = "";
    words[ranIndex].split("").forEach(char => {
        let span = `<span>${char}</span>`
        typingText.innerHTML += span;
    timeTag.innerHTML=maxTime;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
    
    let characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if(charIndex < characters.length - 1 && timeLeft > 0) {
        if(!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if(typedChar == null) {
            if(charIndex > 0) {
                charIndex--;
                if(characters[charIndex].classList.contains("incorrect")) {
                    mistakes--;
                }
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            if(characters[charIndex].innerText == typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        let wpm = Math.round(((charIndex - mistakes)  / 5) / (maxTime - timeLeft) * 60).toFixed(2) + "wpm" ;
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
        
        wpmTag.innerText = wpm;
        mistakeTag.innerText = mistakes;
        cpmTag.innerText = charIndex - mistakes;
    } else {
        clearInterval(timer);
        inpField.value = "";
    }   
}
if(timeLeft>60){
    document.querySelector("#minute").style.display="block";

}
function initTimer() {
    
    if(timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
        let wpm = Math.round(((charIndex - mistakes)  / 5) / (maxTime - timeLeft) * 60).toFixed(2) + "wpm";
        wpmTag.innerText = wpm;
    } else {
        clearInterval(timer);
    }
}

function resetGame() {
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    inpField.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    mistakeTag.innerText = 0;
    cpmTag.innerText = 0;
}

loadParagraph();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);
laos.addEventListener("click",laofuntiokn);
English.addEventListener("click",english);
time120.addEventListener('click',functiontime120);
time30.addEventListener('click',functiontime30);
time60.addEventListener('click',functiontime60);