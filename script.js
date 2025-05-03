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
var polyPicture0 = document.getElementById("questitem0");
var polyPicture1 = document.getElementById("questitem1");
var polyPicture2 = document.getElementById("questitem2");
var polyPicture3 = document.getElementById("questitem3");

/**
 * Variable for the start-page-grid:
 */
var startButton= document.getElementById("startbutton");
var restartButton = document.getElementById("restartbutton");

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

    console.log(data);

    anwsersAmount = quizNumber.length;

    localStorage.setItem("quiz-images",JSON.stringify(images));
    localStorage.setItem("quiz-images",JSON.stringify(quizNumber));
    localStorage.setItem("quiz-images",JSON.stringify(userOptions));
    localStorage.setItem("quiz-images",JSON.stringify(quizQuestions));
  
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
    userOptions = [answerGridItem0,answerGridItem1,answerGridItem2,answerGridItem3];
};


document.addEventListener("DOMContentLoaded", function () {
    Main();
});


function Main()
{
    fetchQuestionData();
}
