//start of greeting

const greeting = document.getElementById("greeting");
const hour = new Date().getHours();
const welcomeTypes = ["Good morning", "Good afternoon", "Good evening"];
let welcomeText = "";

if (hour < 12) welcomeText = welcomeTypes[0];
else if (hour < 18) welcomeText = welcomeTypes[1];
else welcomeText = welcomeTypes[2];


//end of greeting



//start of clock

const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    clockTitle.innerText = `${ hours < 10 ? `0${hours}` : hours}:${ minutes < 10 ? `0${minutes}` : minutes}`;

}

function init() {
    getTime();
    setInterval(getTime, 60000);
}

init();

//end of clock



//start of edit name

greeting.innerHTML = [welcomeText + "!" ];
  
function addName() {

    const greeting = document.getElementById("greeting");
    const hour = new Date().getHours();
    const welcomeTypes = ["Good morning, ", "Good afternoon, ", "Good evening, "];
    let welcomeText = "";

    if (hour < 12) welcomeText = welcomeTypes[0];
    else if (hour < 18) welcomeText = welcomeTypes[1];
    else welcomeText = welcomeTypes[2];


    let name = document.querySelector("#name");

    if(name.value == null || name.value == "" ) {
        alert("REQUIRED!");}
     else {        
        greeting.innerHTML = [welcomeText + `${name.value}` + "!" ];
        hideFunction();
  
    }

}

function editName() {

    const greeting = document.getElementById("greeting");
    const hour = new Date().getHours();
    const welcomeTypes = ["Good morning, ", "Good afternoon, ", "Good evening, "];
    let welcomeText = "";

    
    if (hour < 12) welcomeText = welcomeTypes[0];
    else if (hour < 18) welcomeText = welcomeTypes[1];
    else welcomeText = welcomeTypes[2];


    let name = document.querySelector("#name");

    if(name.value == null || name.value == "" ) {
        alert("REQUIRED!");}
     else 
    {        
        greeting.innerHTML = [welcomeText  + `${name.value}` + "!" ];
  
    }
  
   
}

document.getElementById("editButton").addEventListener("click", editName);
document.getElementById("editButton").hidden = true;


function hideFunction()

{   
    document.getElementById("addButton").hidden = true;
    document.getElementById("editButton").hidden = false; 
}



//end of edit





//start of add task

function addTask() 
{
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value;
    const taskList = document.getElementById("taskList");


    if(taskInput.value == null || taskInput.value == "" ) 
    {
        alert("REQUIRED!");
    }
        
    else {            
    
    const listItem = document.createElement("div");
    const label = document.createElement("label");
    label.textContent = taskText;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function() 
    {
         label.classList.toggle("completed");
    }

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    taskList.appendChild(listItem);
    taskInput.value = "";
    }
}

document.getElementById("taskButton").addEventListener('click', addTask);

//end of add task 



//start of quote

const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. – Nelson Mandela",
    "The way to get started is to quit talking and begin doing. – Walt Disney",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "Get busy living or get busy dying. – Stephen King",
    "You have within you right now, everything you need to deal with whatever the world can throw at you. – Brian Tracy",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "The only impossible journey is the one you never begin. – Tony Robbins"
];

document.getElementById("quoteText").hidden =true;
document.getElementById("quoteButton2").hidden = true;

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}


window.onload = () => 
{
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = getRandomQuote();
};



function hideQuote()
{ 
        document.getElementById("quoteText").hidden = false;
        document.getElementById("quoteButton").hidden = true;
        document.getElementById("quoteButton2").hidden = false;
}



function addQuote()

{
        let newQuote = document.querySelector('#quoteText');
        let newquoteBtn = document.querySelector('quoteButton2');

        if(newQuote.value == null || newQuote.value == "" ) {
            alert("REQUIRED!");}
         else {        
            quotes.push(`${newQuote.value}`);
            console.log(quotes[quotes.length-1]);
            const quoteElement = document.getElementById('quote');
            quoteElement.innerHTML = quotes[quotes.length-1].toString(), "";
            newQuote.disabled = true;
    
      
        }
     
}

document.getElementById("quoteButton2").addEventListener("click", addQuote);
disQuoteBtn();



//end of quote

