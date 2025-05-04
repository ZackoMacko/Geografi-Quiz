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
var answerGridItem1 = document.getElementById("item1");
var answerGridItem2 = document.getElementById("item2");
var answerGridItem3 = document.getElementById("item3");

/**
 * Variables for the images for the poly-image-grid:
 */
var polyPicture0 = document.getElementById("poly-image-0");
var polyPicture1 = document.getElementById("poly-image-1");
var polyPicture2 = document.getElementById("poly-image-2");
var polyPicture3 = document.getElementById("poly-image-3");

let polyPictures = [polyPicture0,polyPicture1,polyPicture3,polyPicture4];

/**
 * Variable for the start-page-grid:
 */

/**
 * var startButton= document.getElementById("startbutton");
var restartButton = document.getElementById("restartbutton");
 */


let images ;
let numbers ;
let type;

var answerText;
let answers ;
let answersAmount;
var correctanswer;

let userOptions= [];

var questionData;



function fetchQuestionData() {
   
    fetch("./data/questions.json")
    .then((response) =>  response.json())
    .then((data) => {
    questionData = data;   

    //Såhär komplar man en array till en JSON-fil där man efterkräver ett en viss data.
    const images = questionData.map(item => item.bild).flat();
    const quizNumber = questionData.map(item=> item.nummer).flat();
    const userOptions = questionData.map(item => item.svar);
    const quizQuestions = questionData.map(item => item.fraga)

    //console.log(data);

    anwsersAmount = quizNumber.length;

    localStorage.setItem("quiz-images",JSON.stringify(images));
    localStorage.setItem("quiz-number",JSON.stringify(quizNumber));
    localStorage.setItem("quiz-userOptions",JSON.stringify(userOptions));
    localStorage.setItem("quiz-questions",JSON.stringify(quizQuestions));
  
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


function UserOptions() {
    /*
    *userOptions = [answerGridItem0,answerGridItem1,answerGridItem2,answerGridItem3];
    */
};
const polyPictureGrid = document.getElementById("poly-picture-grid");
const monoPictureGrid = document.getElementById("mono-picture");
const startButton = document.getElementById("startbutton");
const startPage= document.getElementById("start-page");
const restartButton = document.getElementById("restartbutton");

startButton.addEventListener("click",StartQuiz);
restartButton.addEventListener("click",ResetQuiz);
let hasQuizStarted= false;

function StartQuiz()
{
   startPage.style.display = "none" 
}

function ResetQuiz()
{
    startPage.style.display = "none";
    polyPictureGrid.style.display = "none";
    monoPictureGrid.style.display= "none";
}

function DisplayStartPage()
{
    startPage.style.display = "flex";
    polyPictureGrid.style.display = "none";
    monoPictureGrid.style.display= "none";
}




function DisplayMonoPictureQuestion(nummer)
{
    polyPictureGrid.style.display = "none";
    monoPictureGrid.style.display= "grid";

    monoPictureGrid = questionData.bild[nummer];
    
};


function DisplayPolyPictureQuestion(nummer)
{
    monoPictureGrid.style.grid = "none";
    polyPictureGrid.style.display = "grid";

    
   
}

/**
 * Denna är inte implmenterad i HTML eller CSS
 */
function TextQuestion()
{

}

document.addEventListener("DOMContentLoaded", function () {
    fetchQuestionData();
    Main();
});


function Main()
{
    if(!hasQuizStarted)
    {
        DisplayStartPage();
    }
    else
    {
        for( let i=0; i<questionData.nummmer.length;i++)
            {
                if(questionData[i].typ==mono-image)
                {
                    DisplayMonoPictureQuestion(i);
                }
        
                else if (questionData[i].typ==poly-image)
                {
                    DisplayPolyPictureQuestion(i);
                }
                /**
                 * Detta är för den tredje typen av frågor
                 * else if()
                {
                    
                }
                 */
                
            }
    }

    
    

}
