

let tossResult=document.getElementById('tossResult')
let randToss;
let secondInnings=0;
let secondInningsScore=0;
let myFIStatus,mySIStatus;
let callOptions=["Heads","Tails"];
let batBowl=["Bat","Bowl"]
let computerbatbowl=batBowl[Math.floor(Math.random()*2)]

let youWin=document.getElementsByClassName("batbowl")


function toss(){
    let yourCall=document.getElementById('call').value;
    tossResult.style.display='block';
    randToss=callOptions[Math.floor(Math.random()*2)];
    if (yourCall==randToss) {
        tossResult.innerHTML=`Its ${yourCall}!!! and You have won the toss`;
        document.getElementById('tosscontainer').style.display='none';
        document.getElementById('batbowl').style.display='block';
        
    }
    else{
        tossResult.innerHTML=`Computer have won the toss and elected to ${computerbatbowl} first`;
        document.getElementById('tosscontainer').style.display='none';
        document.getElementById('tossLoss').style.display='block';
     }
}
function comptoss(){
    if(computerbatbowl=='Bat'){
        battingbowling('Bowl');
    }
    else{
        battingbowling('Bat');
    }
    
}
// choose bat or bowl
function battingbowling(val){
    document.getElementById('tossSection').style.display='none';
    document.getElementById('mainSection').style.display='block';
    if(val=='Bowl'){
        myFIStatus='Bowl';
        document.getElementById('batStatus').innerHTML='Computer';
        document.getElementById('compbat').innerHTML='Computer';
        document.getElementById('bowlStatus').innerHTML='You';
        document.getElementById('status').innerHTML='Bowling';
    }
    else{
        myFIStatus='Bat';
    }
}


// Batting // Bowling

let choiceTextArea=document.getElementById('myChoice');
let totalRuns=0;
function choiceChoosen(val){
    let myChoice=val;
    choiceTextArea.innerHTML=myChoice;
    let computerChoosenValue=Math.floor(Math.random()*6+1);//computer choice
    document.getElementById('computerChoice').innerHTML=computerChoosenValue;//showing computer choice 
    if(secondInnings==1)
    {
    secondBallResult(computerChoosenValue,myChoice);
    }
    else{
        ballResult(computerChoosenValue,myChoice);
    }
}

function ballResult(computerChoosenValue,myChoice){
    let myValue=Number(myChoice);
    if (myValue!=computerChoosenValue) {
        if(myFIStatus=='Bat')
        {
            totalRuns=Number(myValue)+totalRuns;
            document.getElementById('totalRun').innerHTML=totalRuns;
            document.getElementById('ballResult').innerHTML=commentry(myValue);
        }
        else{
            totalRuns=computerChoosenValue+totalRuns;
            document.getElementById('totalRun').innerHTML=totalRuns;
            document.getElementById('ballResult').innerHTML=commentry(computerChoosenValue);
        }
        function commentry(commentry) {
            
        switch (commentry) {
            case 1:
                return "Single Taken";
                break;
            case 2:
                return "Runs Two";
                break;
            case 3:
                return "Its a misfield,and thats Three runs";
                break;
            case 4:
                return "Classyyyy! That's a Four";
                break; 
            case 5:
                return "OverThrough!!! Its Five run";
                break; 
            case 6:
                return "Bang!!! That's a Huge Six!";
                break;
        }
    }
    }
    else{
        document.getElementById('mainSection').style.display='none';
        document.getElementById('out').style.display='flex';
        document.getElementById('finalRun').innerHTML=totalRuns;
    }
}
                        // second innings
function secondinnings(){
    secondInnings=1;
    document.getElementById('out').style.display='none';
    document.getElementById('mainSection').style.display='block';
    document.getElementById('targetruns').style.display='flex';
    document.getElementById('Target').innerHTML=totalRuns+1;

    document.getElementById('myChoice').innerHTML=0;
    document.getElementById('computerChoice').innerHTML=0;
    document.getElementById('totalRun').innerHTML=secondInningsScore;
    document.getElementById('ballResult').innerHTML="All ready for the Second Innings";
    if(myFIStatus=='Bat'){
        mySIStatus='Bowl';
    }
    else{
        mySIStatus='Bat';
    }
        if(mySIStatus=='Bowl')
        {
            document.getElementById('batStatus').innerHTML='Computer';
            document.getElementById('compbat').innerHTML='Computer';
            document.getElementById('bowlStatus').innerHTML='You';
            document.getElementById('status').innerHTML='Bowling';
        }
        else{
            document.getElementById('batStatus').innerHTML='You';
            document.getElementById('compbat').innerHTML='';
            document.getElementById('bowlStatus').innerHTML='Computer';
            document.getElementById('status').innerHTML='Batting';
        }
}

function secondBallResult(computerChoosenValue,myChoice){
    let targetScore=totalRuns;
    if(secondInningsScore>targetScore){
        document.getElementById('matchResult').innerHTML=matchResult();
    }
    let myValue=Number(myChoice);
    if (myValue!=computerChoosenValue) {
        if(mySIStatus=='Bat')
        {
            secondInningsScore=Number(myValue)+secondInningsScore;
            document.getElementById('totalRun').innerHTML=secondInningsScore;
            document.getElementById('ballResult').innerHTML=commentry(myValue);
        }
        else{
            secondInningsScore=computerChoosenValue+secondInningsScore;
            document.getElementById('totalRun').innerHTML=secondInningsScore;
            document.getElementById('ballResult').innerHTML=commentry(computerChoosenValue);
        }
        function commentry(commentry) {
        switch (commentry) {
            case 1:
                return "Just Single";
                break;
            case 2:
                return "Good Call It's Two";
                break;
            case 3:
                return "Three runs";
                break;
            case 4:
                return "Four";
                break; 
            case 5:
                return "Oops! Mistake by the fielder Five run";
                break; 
            case 6:
                return "Wowwww! That's Huge Six!";
                break;
        }
    }
    }
    else{
        document.getElementById('matchResult').innerHTML=matchResult();
    }
    function matchResult() {
        const canvas=document.querySelector('#confetti');
        const jsConfetti =new JSConfetti();
        let secondBatter=document.getElementById('batStatus').textContent;
        let secondBowler=document.getElementById('bowlStatus').textContent;

        document.getElementById('mainSection').style.display='none';
        document.getElementById('out').style.display='none';
        document.getElementById('matchResult').style.display='block';
        document.getElementById('backButton').innerHTML='Play Again';
        if(secondInningsScore>targetScore){
            if(secondBatter==="You"){
            jsConfetti.addConfetti();
            return `Victory!!!!! <br >You have chased the target with ease`;
            }
            else{
                return `You Lose!!!!! <br> Computer have chased the target with ease`;  
            }
        }
        else if(secondInningsScore==targetScore)
        {
            return "Match Drawn! So Close! Both have Given their Best";
        }
        else{
            if(secondBowler==="You"){
            jsConfetti.addConfetti();
            return `Win!! Good Bowling! <br> You have defended the runs Successfully`;
            }
            else{
            return `Lose! Computer have defended the runs Successfully`;   
            }
        }
    }    
}
