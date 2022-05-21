let computerGuess;
let userGuess=[];
let userGuessUpdate=document.getElementById("message");
let userNumberUpdate=document.getElementById("textBox");
const init=()=>{
    computerGuess=Math.floor(Math.random()*100);
    document.getElementById("congrats").style.display="none";
    document.getElementById("sorry").style.display="none";
    document.getElementById("attemptLabel1").innerHTML="NO.OF.ATTEMPTS";
    document.getElementById("count").innerHTML=10;
}

const check=()=>{
    compareGuess();
}

const compareGuess = ()=>{
    maxGuess=2;
    let maxGuess1=maxGuess;
    
    const userNumber=Number(document.getElementById("textBox").value);
    userGuess=[...userGuess,userNumber];
    if(maxGuess1-userGuess.length<10){
        document.getElementById("attemptLabel1").innerHTML="REMAINING ATTEMPTS";
    }
    if(userGuess.length<maxGuess){
        if(userNumber>computerGuess){
            userGuessUpdate.innerHTML="GUESSED NUMBER IS BIG";
            userNumberUpdate.value="";
        }
        else if(userNumber<computerGuess){
            userGuessUpdate.innerHTML="GUESSED NUMBER IS SMALL";
            userNumberUpdate.value="";
        }
        else{
            document.getElementById("congrats").style.display="block";
            document.getElementById("Welcome").style.display="none";
            document.getElementsById("attemptCount").style.display="none";
            userNumberUpdate.value="";
            userGuessUpdate.style.display="none";
            document.getElementById("count2").style.display="none";
            document.getElementById("attemptLabel1").style.display="none";
        }
    }
    else{
        if(userNumber>computerGuess){
            document.getElementById("sorry").style.display="block";
            document.getElementById("Welcome").style.display="none";
            document.getElementsById("attemptCount").style.display="none";
            userGuessUpdate.style.display="none";
            document.getElementById("count2").style.display="none";
            document.getElementById("attemptLabel1").style.display="none";
            
        }
        else if(userNumber<computerGuess){
            document.getElementById("sorry").style.display="block";
            document.getElementById("Welcome").style.display="none";
            document.getElementsById("attemptCount").style.display="none";
            userGuessUpdate.style.display="none";
            document.getElementById("count2").style.display="none";
            document.getElementById("attemptLabel1").style.display="none";
    
        }
        else{
            document.getElementById("congrats").style.display="block";
            document.getElementById("Welcome").style.display="none";
            document.getElementsById("attemptCount").style.display="none";
            userGuessUpdate.style.display="none";
            document.getElementById("count2").style.display="none";
            document.getElementById("attemptLabel1").style.display="none";
        
        }
    }

    

    document.getElementById("count").innerHTML=maxGuess1-userGuess.length;
}