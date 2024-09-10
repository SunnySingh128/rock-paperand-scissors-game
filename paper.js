let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");
let userpara=document.querySelector("#user-score");
let comppara=document.querySelector("#comp-score");
const genCompChoice= () =>{
    const options=["rock","paper","scissors"];
    const randidx= Math.floor(Math.random()* 3);
    return options[randidx];
}
let drawgame= () =>{
 
    msg.innerText="game draw";
    msg.style.backgroundColor="#081b31";
    
}
let showwinner= (userwin,userchoice,compchoice)=>{
    if(userwin){
        userScore++;
        userpara.innerText=userScore;
     
        msg.innerText=(`you win! ${userchoice} beats ${compchoice}`);
        msg.style.backgroundColor="green";
     
    }else{
        compScore++;
        comppara.innerText=compScore;
        msg.innerText=(`you Lost. ${compchoice} beats ${userchoice}`);
        msg.style.backgroundColor="red";
       
    }
}
const playGame=(userchoice)=> {
    console.log("userchoice =",userchoice);
    // generate computer choice
    const compchoice=genCompChoice();
    console.log("comp choice =",compchoice);
    if(userchoice===compchoice){
    // drawgame
  drawgame();
    }else{
        let userwin= true;
        if(userchoice=="rock"){
            // scissors,paper
            userwin= compchoice== "paper" ?false:true;
        }else if(userchoice ==="paper"){
            // rock,scissors
            userwin=compchoice ==="scissors" ?false:true;
        }else{
        // rock,paper
        userwin= compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const ChoiceId=choice.getAttribute("id");
     playGame(ChoiceId);
    })
});
