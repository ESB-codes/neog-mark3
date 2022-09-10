let line=require("readline-sync");
let score=0;

let x= line.question("your name pls? ");
console.log("hi "+ x+", Let's see how well you know ekam.");

function play(sawaal, jawaab){
  let question= line.question(sawaal)
  if(question.toLowerCase()===jawaab.toLowerCase()){
    console.log("you're right")
    score++;
  }
  else{
    console.log("wrong")
    score --;
  }
    console.log("-----")


}

let questions=[
  {
    ques: "favourite animal? ",
    ans: "majj"
    
  },

   {
    ques: "favourite food? ",
    ans: "pizza"
    
  },

   {
    ques: "hobby? ",
    ans: "dance"
    
  },
  {
    ques: "job? ",
    ans: "Amazon"
    
  },
  {
    ques: "hobby2 ? ",
    ans: "swimming"
    
  },
  
]

let highScore=[
  {
    name: "batman",
    score: 10
  },

  {
    name: "Spider-man",
    score: 5
  }
]

for (let i=0; i<questions.length; i++){
  play(questions[i].ques, questions[i].ans)
  // console.log("final score: ", score)
  }

function displayScore(){
                        
  console.log("youre score is ", score)
  console.log("-----------------------")
  // console.log(highScore[0].name+"has"+highScore[0].score)

  for (let i=0; i<highScore.length; i++){
    console.log(highScore[i].name+" has "+highScore[i].score)
  }
}
displayScore()

if (score>=3){
  let q=line.question("you have qualified for round 2. Wanna play more? ")

  if (q==="yes"){
    console.log("here we begin");
    round2("birth month? ", "jan");
  }else{
    return 0;
  } 
}
else{
    console.log("Game over, Dhanyawaad")
  }

function round2(sawaal, jwaab){
  let i=line.question(sawaal)
  if(i===jwaab){
    console.log("Winner!!!!!!!!!!!!")
  }
}