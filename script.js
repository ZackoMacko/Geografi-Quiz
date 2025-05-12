/**
 * Title: Geography question/answer handler
 *
 * The intention of this file is to handle the input from the user.
 * Summarization of what the functions does:
 * When the user picks a wrong answer it clearly indicates it and moves on to the next question.
 * When the user picks a right answers i t clearly indicates it and moves on to the next question.
 * Indicates when the Quiz is over. 
 * Gives the user the choice to restart at the end.
 */

/**
 * Variables for the choice boxes the user can choose between:
 */
var answerGridItem0 = document.getElementById("item0");
answerGridItem0.setAttribute("button-index",0);
var answerGridItem1 = document.getElementById("item1");
answerGridItem1.setAttribute("button-index",1);
var answerGridItem2 = document.getElementById("item2");
answerGridItem2.setAttribute("button-index",2);
var answerGridItem3 = document.getElementById("item3");
answerGridItem3.setAttribute("button-index",3);



const answerButtons= [answerGridItem0,answerGridItem1,answerGridItem2,answerGridItem3];
var chosenButton;
/**
 * Variables for the images for the poly-image-grid:
 */


var polyPicture0 = document.getElementById("poly-image-0");
var polyPicture1 = document.getElementById("poly-image-1");
var polyPicture2 = document.getElementById("poly-image-2");
var polyPicture3 = document.getElementById("poly-image-3");

const polyPictures = [polyPicture0,polyPicture1,polyPicture2,polyPicture3];

/**
 * Variables for the answers in the poly-image-grid
 */

var polyitem0 = document.getElementById("polyitem0");
var polyitem1 = document.getElementById("polyitem1");
var polyitem2 = document.getElementById("polyitem2");
var polyitem3 = document.getElementById("polyitem3");

const polyAnswerButtons = [polyitem0,polyitem1,polyitem2,polyitem3];
/**
 * Variable for the start-page-grid:
 */

/**
 * var startButton= document.getElementById("startbutton");
var restartButton = document.getElementById("restartbutton");
 */

let polyPictureGrid = document.getElementById("poly-picture-grid");
let monoPictureGrid = document.getElementById("mono-picture");
const startButton = document.getElementById("startbutton");
const startPage= document.getElementById("start-page");
const restartButton = document.getElementById("restartbutton");
const nextButton = document.getElementById("nextbutton");
const highscore = document.getElementById("highscore");
//restartButton.addEventListener("click",ResetQuiz);
let hasQuizStarted;
let hasQuizEnded= false;
let hasUserAnswered = false;

let monoImage = document.getElementById("mono-image");
const monoQuestionText = document.getElementById("mono-text");

const polyQuestionText = document.getElementById("poly-question-text");

const totalCorrectAnswers = document.getElementById("correct-answers");
let correctanswers = 0;

let images ;
let numbers ;
let type;

var answerText;
let answers ;
let answersAmount;
var correctanswer;



//const flexbox0 = document.getElementById("alternativetextbox0");
//const flexbox1 = document.getElementById("alternativetextbox1");
//const flexbox2 = document.getElementById("alternativetextbox2");
//const flexbox3 = document.getElementById("alternativetextbox3");
//let answerButtons= [flexbox0,flexbox1,flexbox2,flexbox3];
let questionData;



function fetchQuestionData() {
   
    return fetch("./data/questions.json")
    .then(response => {
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    }) 
    .then((data) => {
    questionData = data;   
    
    
    //Såhär komplar man en array till en JSON-fil där man efterkräver ett en viss data.
    //const images = questionData.map(item => item.bild).flat();
    //const quizNumber = questionData.map(item=> item.nummer).flat();
    //const userOptions = questionData.map(item => item.svar);
    //const quizQuestions = questionData.map(item => item.fraga)

   
    //console.log(images);

    //anwsersAmount = quizNumber.length;

    //localStorage.setItem("quiz-images",JSON.stringify(images));
    //localStorage.setItem("quiz-number",JSON.stringify(quizNumber));
    //localStorage.setItem("quiz-userOptions",JSON.stringify(userOptions));
    //localStorage.setItem("quiz-questions",JSON.stringify(quizQuestions));
  
    /**
     * Detta är för individuella egenskaper från Json-filen
     * const firstImagePath = questionData[0].bild;
    const test = questionData[0].nummer;
    console.log(test);
    console.log("First image path:", firstImagePath);
     */   
    return data
    })

    .catch(error => console.error('Failed to fetch data:', error)); 
};



function StartQuiz()
{
   startPage.style.display = "none" 
   hasQuizStarted=true;
   Main();
}





let quizQuestions;
//Ändra till 0 efter du har testat
let currentQuestion=15;

document.addEventListener("DOMContentLoaded", async function () {
   
    await fetchQuestionData();

    //await startButton.addEventListener("click",StartQuiz);
    startButton.addEventListener("click",async () => {
        startPage.style.display="none";
        monoPictureGrid.style.display="none";   
        highscore.style.display="none";  
        showQuestion(currentQuestion);
    });

    answerButtons.forEach((button,j) => {
       
        button.addEventListener ("click",(e)=>
        {
            const rightAnswer = questionData[currentQuestion].korrekt;
            chosenButton = parseInt(button.getAttribute("button-index")) ;
 

            answerButtons.forEach(button => button.disabled = true);

            if(chosenButton==rightAnswer)
            {
                
                button.style.backgroundColor = "#2E6E43";
            
                nextButton.style.display = "flex";

                correctanswers++;
                //totalCorrectAnswers.innerHTML = correctanswers;
                totalCorrectAnswers.innerHTML = `<p><h2>Korrekta svar: ${correctanswers}</h2></p>`;
                //console.log(totalCorrectAnswers.innerHTML = ` <p><h1>Antal korrekta svar: ${correctanswers}</h1></p>`);
            }
            else{
                button.disabled=true;
                nextButton.style.display = "flex";
                button.style.backgroundColor = "#D86C70";
               
            }

            
            
            
        });
       
    //console.log(answerButtons);
    
});

function ResetButtons(){
        answerButtons.forEach((button,i) =>{
            button.disabled=false;
            button.style.backgroundColor= "";
            /**
             * Denna metod återställer inta alla knappar till deras ursprungliga färg.
             */
        })
}
    

    nextButton.addEventListener("click", ()=>{
        currentQuestion++;
        if(currentQuestion <questionData.length) {
            ResetButtons();
            showQuestion(currentQuestion);
        } else {
            monoQuestionText.textContent ="Quiz complete";
            answerButtons.forEach((button) => button.style.display = "none");
            nextButton.style.display = "none"
            restartButton.style.display ="flex";
            
        }
    });
});



function showQuestion(index){
    //quizQuestions = questionData[index];
  
    if(questionData[index].typ=="mono-image")
    {
        
        monoPictureGrid.style.display="grid";
        //monoQuestionText.textContent = $'{questionData[index].fraga}';
        monoQuestionText.innerHTML = `<p><h1>Fråga ${questionData[index].nummer}:${questionData[index].fraga}</h1></p>`;
        monoImage.src = questionData[index].bild;
        //console.log(monoImage);
        /**Lägg till så att bilden ändras här!!!! */

        //const answerButtons = document.querySelectorAll('.grid-item0, .grid-item1, .grid-item2, .grid-item3');
      
        
        
        answerButtons.forEach((button,i)=> {
            button.disabled =false;      
            const flexbox = button.querySelector(".buttoncontent");    
            flexbox.textContent = questionData[index].svar[i];


        });
    }
    console.log(currentQuestion);
    if(questionData[index].typ=="poly-image"){
        polyPictureGrid.style.display ="grid";
        monoPictureGrid.style.display = "none";
        //För bilderna
        polyQuestionText.innerHTML = `<p><h1>Fråga ${questionData[index].nummer}: ${questionData[index].fraga}</h1></p>`;

        polyPictures.forEach((image,j)=>{
            image.src = questionData[index].bilder[j];
            image.alt = "none";
          

        });
        //console.log(polyAnswerButtons);
        //Alternativen för användaren
        polyAnswerButtons.forEach((button,i)=> {
            button.disabled =false;      
            const flexbox = button.querySelector(".button-content1");    
            flexbox.textContent = questionData[index].svar[i];


        });
    }
    
    //console.log("Buttons found:", answerButtons.length);
    nextButton.style.display ="none";
};


