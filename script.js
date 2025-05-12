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
//var polyPicture0 = document.getElementById("poly-image-0");
//var polyPicture1 = document.getElementById("poly-image-1");
//var polyPicture2 = document.getElementById("poly-image-2");
//var polyPicture3 = document.getElementById("poly-image-3");

//let polyPictures = [polyPicture0,polyPicture1,polyPicture2,polyPicture3];

/**
 * Variable for the start-page-grid:
 */

/**
 * var startButton= document.getElementById("startbutton");
var restartButton = document.getElementById("restartbutton");
 */

//let polyPictureGrid = document.getElementById("poly-picture-grid");
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





function DisplayStartPage()
{
    startPage.style.display = "flex";
    polyPictureGrid.style.display = "none";
    monoPictureGrid.style.display= "none";
}


function SetAlternativsForUser(index)
{
   
}



function DisplayPolyPictureQuestion(questionNumber)
{
    //monoPictureGrid.style.grid = "none";
    //polyPictureGrid.style.display = "grid";

    
   
}

/**
 * Denna är inte implmenterad i HTML eller CSS
 */
function TextQuestion()
{

}


function UserOptionHandler()
{

}

function CheckIfUSerAnswerIsCorrect(userchoice,questionNumber)
{
    /**
     *      console.log(hej);
    }
    else{
        console.log(hej);
    }
     * 
     * 
     * 
     * if(userchoice == questionData[questionNumber].korrekt){
        /**
         * Score ++ och nästa fråga ska visas
         * 
         * En bool i Main() behövs för att avgöra om en fråga är besvarad eller inte.
         */ 
}

async function init() {
    await fetchQuestionData();
    
}

let quizQuestions;
let currentQuestion=0;

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

    if(questionData[index].typ=="poly-image"){
        polyPictureGrid.style.display ="grid";

    }
    
    //console.log("Buttons found:", answerButtons.length);
    nextButton.style.display ="none";
};


function Main()
{
  //hasQuizStarted=false;
  hasQuizEnded=false;
    /**
     * 
      do{

        //Fråga Jonas 07/05-2025 
        //om tips med vart eventlisterners ska ligga
        //Dilemma: Jag behöver eventlisteners före the nästkommande for-loopen men jag hur ska jag då jämföra värden
        for(let j=0 ; j<monoUserOptions.length; j++){
        
           
    
            //monoUserOptions[i].addEventListener("click", CheckIfUSerAnswerIsCorrect(i,questionData[i].nummer));
            monoUserOptions[j].addEventListener("click", () =>  {
                if(!hasUserAnswered){
                    hasUserAnswered=true
                    CheckIfUSerAnswerIsCorrect(j,questionData[i].nummer);
                }
            });
            
    
        };
       


        for( let i=0; i<questionData.length;i++)
            {
             

                
                if(questionData[i].typ=="mono-image")
                {
                    DisplayMonoPictureQuestion(i);
                    /**
                     * Jag måste skapa en metod som hanterar när spelaren klickar på en av alternativen.
                     */
                //}
        
                //else if (questionData[i].typ=="poly-image")
                //{
                    ///DisplayPolyPictureQuestion(i);
                //}
                /**
                 * Detta är för den tredje typen av frågor: TextQuestion()
                 * else if()
                {
                      while(hasQuizEnded!=true)
     * 
     */

        
   
}
