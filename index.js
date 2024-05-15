const grid = document.querySelector(".grid")
const playerId = document.getElementById("player_id")
let playedSquares=[]
let playedSquaresId1=[]
let playedSquaresId2=[]

const columns=7
const rows=6


let player=1
// creating the game:
for ( let i =0; i<42 ;i++){
    const square= document.createElement("div")
    grid.append(square)
}
for ( let i =0; i<7;i++){
    const takenSquares= document.createElement("div")
    takenSquares.setAttribute("class","taken")
    grid.append(takenSquares)
}
const squares= document.querySelectorAll("div") 

// creating players and play


for (let i = 0 ; i < squares.length ; i++){
   squares[i].onclick= ()=>{
    if (squares[i+7].classList.contains("taken")){        
        if (player==1){
            squares[i].classList.add("taken")
            squares[i].classList.add("player_one")
            playerId.innerHTML=2
            player=2
           squares[i].onclick=null    //remove the listener
           playedSquares.push( squares[i].classList[1])
           playedSquaresId1.push( i)
           console.log("player1",playedSquaresId1)
        }
         else if (player==2){
            squares[i].classList.add("taken")
            squares[i].classList.add("player_two")
            playerId.innerHTML=1
            player=1
            squares[i].onclick=null
            playedSquares.push( squares[i].classList[1])
            playedSquaresId2.push( i)

            console.log("player2",playedSquaresId2)
         }
         else{
            alert("that's wrong!")
         }
          //console.log(playedSquares)
          //console.log("played",playedSquares)
    
    }
  /*if (squares[40].classList[1]==="player_one"&&squares[39].classList[1]==="player_one"&&squares[41].classList[1]==="player_one"&&squares[42].classList[1]==="player_one"){
    alert("you win")
  }*/

}
}


