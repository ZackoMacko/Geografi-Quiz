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

let polyPictures = [polyPicture0,polyPicture1,polyPicture2,polyPicture3];

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


//restartButton.addEventListener("click",ResetQuiz);
let hasQuizStarted;
let hasQuizEnded= false;

let monoImage = document.getElementById("mono-image");


let images ;
let numbers ;
let type;

var answerText;
let answers ;
let answersAmount;
var correctanswer;

let userOptions= [answerGridItem0,answerGridItem1,answerGridItem2,answerGridItem3];

const flexbox0 = document.getElementById("alternativetextbox0");
const flexbox1 = document.getElementById("alternativetextbox1");
const flexbox2 = document.getElementById("alternativetextbox2");
const flexbox3 = document.getElementById("alternativetextbox3");
let monoUserOptions= [flexbox0,flexbox1,flexbox2,flexbox3];
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

function UserOptions() {
    /*
    *userOptions = [answerGridItem0,answerGridItem1,answerGridItem2,answerGridItem3];
    */
};


function StartQuiz()
{
   startPage.style.display = "none" 
   hasQuizStarted=true;
   Main();
}


/**
 * function ResetQuiz()
{
    startPage.style.display = "none";
    polyPictureGrid.style.display = "none";
    monoPictureGrid.style.display= "none";
}
 */


function DisplayStartPage()
{
    startPage.style.display = "flex";
    polyPictureGrid.style.display = "none";
    monoPictureGrid.style.display= "none";
}


function SetAlternativsForUser(index)
{
    for(let i=0 ; i<userOptions.length; i++)
    {

    }
}

function DisplayMonoPictureQuestion(nummer)
{
    polyPictureGrid.style.display = "none";
    monoPictureGrid.style.display= "grid";

    //monoPictureGrid = questionData[nummer].bild;
    //console.log(answerGridItem0.firstChild.textContent);
    
    let image = monoImage.getAttribute("src");
    image = questionData[nummer].bild;
    monoImage.src=image;
    //console.log(monoImage);

    /**
     * Nu måste jag fixa så att Fråga: [vilken fråga vi är på just nu 1, 2, 3 etc]
     * Event listerners saknas fortfarande!
     */
    let lastElement;

    for(let i=0 ; i<monoUserOptions.length; i++)
    {
        lastElement=monoUserOptions[i].lastElementChild;
        lastElement.innerHTML = questionData[nummer].svar[i];
        
    }

   
    
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

const item0 = document.getElementById("item0");
//const item1 = document.getElementById("item1").addEventListener("click",CheckIfUSerAnswerIsCorrect(1));
//const item2 = document.getElementById("item2").addEventListener("click",CheckIfUSerAnswerIsCorrect(2));
//const item3 = document.getElementById("item3").addEventListener("click",CheckIfUSerAnswerIsCorrect(3));

function UserOptionHandler()
{

}

function CheckIfUSerAnswerIsCorrect(userNumber,i)
{
    if(userNumber== questionData[i].korrekt){
        /**
         * Score ++ och nästa fråga ska visas
         * 
         * En bool i Main() behövs för att avgöra om en fråga är besvarad eller inte.
         */
    }
    else{
        
    }
}

async function init() {
    await fetchQuestionData();
    
}

document.addEventListener("DOMContentLoaded", async function () {
    await fetchQuestionData();
    await init();
    startButton.addEventListener("click",StartQuiz);
   
});


function Main()
{
  //hasQuizStarted=false;
  hasQuizEnded=false;


    do{
        
       
        //console.log(questionData);

        for( let i=0; i<questionData.length;i++)
            {
                //console.log(questionData[i].nummer);
                //console.log(questionData[i].fraga);
                if(questionData[i].typ=="mono-image")
                {
                    DisplayMonoPictureQuestion(i);
                    /**
                     * Jag måste skapa en metod som hanterar när spelaren klickar på en av alternativen.
                     */
                }
        
                else if (questionData[i].typ=="poly-image")
                {
                    ///DisplayPolyPictureQuestion(i);
                }
                /**
                 * Detta är för den tredje typen av frågor: TextQuestion()
                 * else if()
                {
                    
                }
                    */
        
        }
        //Detta måste fixas PRIO !!! sedan kan jag fixa mono och poly picture questions metoderna.
        
                
            
            
    

    }
    while(hasQuizEnded!=true)

    
    
    
    

}
