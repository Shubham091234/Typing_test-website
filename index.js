const data = [ "Type this random sentence to assess your typing skills: 'The quick brown fox jumps over the lazy dog.' Challenge yourself to improve your typing speed and accuracy with our timed test.",
"Ready to test your typing prowess? Take our typing test and see how fast and accurately you can type. Challenge yourself to improve your typing speed and precision in this timed exercise.",
"Put your typing skills to the test and see how fast and accurately you can type the given text. Challenge yourself with our typing test and improve your typing speed and precision.",
"Test your typing speed and accuracy with our challenging typing test. Improve your keyboarding skills as you race against the clock to type accurately and swiftly."]

const start= document.getElementById("startButton");
const submit= document.getElementById("submitButton");
const error= document.getElementById("errors");
const time= document.getElementById("timer");
const correct= document.getElementById("correct-words");
const wordPer= document.getElementById("wpm");
const givenText= document.getElementById("text");
const userText= document.getElementById("input");

let userWord,correctWord=0,errorWord=0,interval,timeNow=0,count=0;


start.addEventListener(('click'), ()=> {
     
    start.disabled= true;
    
    correct.textContent=0;
    error.textContent=0;
    wordPer.textContent=0;
    time.textContent=0;
    timeNow=0;

const randomText = Math.floor(Math.random()*data.length);
const text = data[randomText];
givenText.textContent=text;
userText.value="";
userText.disabled = false;
userText.focus();
startTimer();
})


function startTimer (){
interval = setInterval(function () {
    timeNow++;
    time.textContent=timeNow ;
},1000);
}




submit.addEventListener(("click"),()=>{
    
const userData = userText.value.trim().split(" ");
const givenData = givenText.textContent.split(" ");
correctWord = 0;
errorWord = 0;

userData.forEach((userWord, i) => {
    if( userWord === givenData[i]){
correctWord++;
    }
    else {
        errorWord++;
    }

});

correct.textContent=correctWord;
error.textContent=errorWord;

const words = Math.round((correctWord / timeNow) * 60);
wordPer.textContent = words;
userText.disabled=true;
start.disabled=false;

clearInterval(interval)
});