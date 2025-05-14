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
polyitem0.setAttribute("button-index",0);
var polyitem1 = document.getElementById("polyitem1");
polyitem1.setAttribute("button-index",1);
var polyitem2 = document.getElementById("polyitem2");
polyitem2.setAttribute("button-index",2);
var polyitem3 = document.getElementById("polyitem3");
polyitem3.setAttribute("button-index",3);

const polyAnswerButtons = [polyitem0,polyitem1,polyitem2,polyitem3];

/**
 * Variables for the mono-text-grid
 */
var monoTextGrid = document.getElementById("mono-text-grid");

var monoTextButtonContent0 = document.getElementById("mono-text-item0");
monoTextButtonContent0.setAttribute("button-index",0);
var monoTextButtonContent1 = document.getElementById("mono-text-item1");
monoTextButtonContent1.setAttribute("button-index",1);
var monoTextButtonContent2 = document.getElementById("mono-text-item2");
monoTextButtonContent2.setAttribute("button-index",2);
var monoTextButtonContent3 = document.getElementById("mono-text-item3");
monoTextButtonContent3.setAttribute("button-index",3)

const monoTextAnswerButtons = [monoTextButtonContent0,monoTextButtonContent1,monoTextButtonContent2,monoTextButtonContent3];

const monoGridQuestionText = document.getElementById("mono-textbox");
/**
 * Variable for the start-page-grid:
 */


const endScreenTextbox= document.getElementById("end-screen-textbox");

let polyPictureGrid = document.getElementById("poly-picture-grid");
let monoPictureGrid = document.getElementById("mono-picture");
const startButton = document.getElementById("startbutton");
const startpage= document.getElementById("start-page");
const ToStartPageButton = document.getElementById("to-start-page-button")
const restartButton = document.getElementById("restartbutton");

const nextButton = document.getElementById("nextbutton");
const highScoreElement = document.getElementById("high-score");
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

let questionData;

/**
 * End-screen
 */

const endscreen = document.getElementById("end-screen");

/**
 * End-screen
 */



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
    localStorage.setItem("quiz-data",questionData);
    
    //Såhär komplar man en array till en JSON-fil där man efterkräver ett en viss data.
    //const images = questionData.map(item => item.bild).flat();
    //const quizNumber = questionData.map(item=> item.nummer).flat();
    //const userOptions = questionData.map(item => item.svar);
    //const quizQuestions = questionData.map(item => item.fraga)

   
  
    //anwsersAmount = quizNumber.length;

    //localStorage.setItem("quiz-images",JSON.stringify(images));
    //localStorage.setItem("quiz-number",JSON.stringify(quizNumber));
    //localStorage.setItem("quiz-userOptions",JSON.stringify(userOptions));
    //localStorage.setItem("quiz-questions",JSON.stringify(quizQuestions));
  
    /**
     * Detta är för individuella egenskaper från Json-filen
     * const firstImagePath = questionData[0].bild;
    const test = questionData[0].nummer;
  
     */   
    return data
    })

    .catch(error => console.error('Failed to fetch data:', error)); 
};









let quizQuestions;
//Ändra till 0 efter du har testat
let currentQuestion=15 ;

document.addEventListener("DOMContentLoaded", async function () {
   
    await fetchQuestionData();

   
    startButton.addEventListener("click",async () => {
 
        polyPictureGrid.style.display ="none";
        startpage.style.display="none";
        monoPictureGrid.style.display="none"; 
        monoTextGrid.style.display = "none";  
        highScoreElement.style.display="none";
        //endscreen.style.display="none";

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
                totalCorrectAnswers.innerHTML = `<p><h2>Korrekta svar: ${correctanswers}</h2></p>`;
             
            }
            else{
                button.disabled=true;
                nextButton.style.display = "flex";
                button.style.backgroundColor = "#D86C70";
               
            }

            
            
            
        });
       

    
    });

    polyAnswerButtons.forEach((button,j) => {
       
        button.addEventListener ("click",(e)=>
        {
      
           
            const rightAnswer = questionData[currentQuestion].korrekt;
       
            chosenButton = parseInt(button.getAttribute("button-index")) ;
         

            polyAnswerButtons.forEach(button => button.disabled = true);

            if(chosenButton==rightAnswer)
            {
                
                button.style.backgroundColor = "#2E6E43";
            
                nextButton.style.display = "flex";

                correctanswers++;
       
                totalCorrectAnswers.innerHTML = `<p><h2>Korrekta svar: ${correctanswers}</h2></p>`;
            
            }
            else{
                button.disabled=true;
                nextButton.style.display = "flex";
                button.style.backgroundColor = "#D86C70";
               
            }

            
            
            
        });
       
    
    
    });

    monoTextAnswerButtons.forEach((button,j) => {
       
        button.addEventListener ("click",(e)=>
        {
      
           
            const rightAnswer = questionData[currentQuestion].korrekt;
      
            chosenButton = parseInt(button.getAttribute("button-index")) ;
         

            monoTextAnswerButtons.forEach(button => button.disabled = true);

            if(chosenButton==rightAnswer)
            {
                
                button.style.backgroundColor = "#2E6E43";
            
                nextButton.style.display = "flex";

                correctanswers++;
          
                totalCorrectAnswers.innerHTML = `<p><h2>Korrekta svar: ${correctanswers}</h2></p>`;
               
            }
            else{
                button.disabled=true;
                nextButton.style.display = "flex";
                button.style.backgroundColor = "#D86C70";
               
            }

            
            
            
        });
       
    
    
    });

    function ResetButtons(){
        answerButtons.forEach((button,i) =>{
            button.disabled=false;
            button.style.backgroundColor= "";
            /**
             * Denna metod återställer inta alla knappar till deras ursprungliga färg.
             */
        })
        polyAnswerButtons.forEach((button,i) =>{
            button.disabled=false;
            button.style.backgroundColor= "";
            /**
             * Denna metod återställer inta alla knappar till deras ursprungliga färg.
             */
        })
        monoTextAnswerButtons.forEach((button,i) =>{
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
            monoGridQuestionText.textContent ="Quiz Klargjord";
            nextButton.style.display = "none";
            monoPictureGrid.style.display="none";
            monoTextGrid.style.display="none";
            polyPictureGrid.style.display="none";
            startpage.style.display="none";
            ToStartPageButton.style.display="flex";
            startButton.style.display="none";
            endScreenTextbox

            const endtext = endscreen.querySelector("p");
            endtext.textContent = `Resultat ${Number(correctanswers)}/ ${questionData.length}`;  
            //console.log( endtext.textContent);
            endscreen.style.display="flex";
            
            const highscore= correctanswers;
            localStorage.setItem("rekord",highscore);
       

            //Här bör jag egentligen jämföra tidigare världen
            const record = highScoreElement.querySelector("p");
             //Detta måste fixas. Den visar inte värdet
            record.innerHTML = `<h2>Rekord: ${highscore}</h2>`;
            //console.log(record.innerHTML);
         
           
   
        }
    });
});



function showQuestion(index){

  
    if(questionData[index].typ=="mono-image")
    {
        monoTextGrid.style.display = "none";
        polyPictureGrid.style.display ="none";
        monoPictureGrid.style.display="grid";
    
        monoQuestionText.innerHTML = `<p><h1>Fråga ${questionData[index].nummer}: ${questionData[index].fraga}</h1></p>`;
        monoImage.src = questionData[index].bild;
    
      

    
      
        
        
        answerButtons.forEach((button,i)=> {
            button.disabled =false;      
            const flexbox = button.querySelector(".buttoncontent");    
            flexbox.textContent = questionData[index].svar[i];


        });
    }

   
    if(questionData[index].typ=="poly-image"){
        monoTextGrid.style.display = "none";
        monoPictureGrid.style.display = "none";
        polyPictureGrid.style.display ="grid";
        
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

    if(questionData[index].typ=="mono-text"){
        polyPictureGrid.style.display ="none";
        monoPictureGrid.style.display = "none";
        monoTextGrid.style.display = "grid";
        monoGridQuestionText.innerHTML = `<p><h1>Fråga ${questionData[index].nummer}: ${questionData[index].fraga}</h1></p>`;

        //Fixa så att frågan synkas
        //Testa sedan så att antalet korrekta svar fungerar
         
        monoTextAnswerButtons.forEach((button,i)=> {
            button.disabled =false;      
            //console.log(monoTextAnswerButtons);
            const flexbox = button.querySelector(".button-content-mono-text");    
            flexbox.textContent = questionData[index].svar[i];


        });
    }
    
  
    nextButton.style.display ="none";
};

/**
 * restartButton.addEventListener("click", ()=>{
    startpage.style.display="none";
    polyPictureGrid.style.display ="none";
    monoPictureGrid.style.display = "none";
    monoTextGrid.style.display = "none";
    endscreen.style.display = "none";
    currentQuestion=0;
    
});
 */


ToStartPageButton.addEventListener("click",()=>{
    ToStartPageButton.style.display="flex";
    polyPictureGrid.style.display ="none";
    monoPictureGrid.style.display = "none";
    monoTextGrid.style.display = "none";
    endscreen.style.display = "none";
    currentQuestion=0;
    correctanswer=0;
    startButton.style.display="flex"
    startpage.style.display="flex"
    highScoreElement.style.display="flex";

});

