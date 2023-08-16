
import { useEffect, useState } from "react"
import Cell from "./components/Cell"



const App = () => {

  const [cells, setCells] = useState(["", "", "","", "", "","", "", ""]);
  const [turn, setTurn] = useState("O");
  const [won, setWon] = useState(null);

  const message = `${turn}'s turn!`


  const checkScore = () =>{
    const winningCombo = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    winningCombo.forEach(combo => {
      let OWins = combo.every(cell => cells[cell]==="O")
      if(OWins) {
        setWon("O Won!!!")
        document.querySelector("p").classList.add("won")
        for (let i = 0; i < 9; i++){
          if(!(combo.includes(i))){
            document.getElementById(i).style.opacity = "0.5"
          }else{
            document.getElementById(i).style.color = "green"
          }
        }
        return 
      }

      let XWins = combo.every(cell => cells[cell]==="X")
      if(XWins) {
        setWon("X Won!!!")
        document.querySelector("p").classList.add("won")
        for (let i = 0; i < 9; i++){
          if(!(combo.includes(i))){
            document.getElementById(i).style.opacity = "0.5"
          }else{
            document.getElementById(i).style.color = "green"
          }
        }
        return 
      }

    })

    
  }


useEffect(() => {
  checkScore()
},[cells])

const handleReset = () => {
  setTurn("O")
  setWon(null)
  setCells(["","","","","","","","",""])  
  document.querySelector("p").classList.remove("won")
  document.getElementById("app").classList.remove("reset")
  setTimeout(() => {
    document.getElementById("app").classList.add("reset");
  }, 10)
  document.querySelectorAll(".square").forEach(box => {
    box.style.opacity = "1"
    box.style.color = "black"
  })

}


  return (
    <div className="app reset" id = "app">
   <div className="gameboard">
      {cells.map((cell, index) => {
        return <Cell 
        key={index}
        id={index} 
        cell={cell}
        cells={cells}
        setCells={setCells}
        turn = {turn}
        setTurn = {setTurn}
        won = {won} 

        />
      })}

   </div>
   <p>{won || message}</p>

   <button onClick={handleReset}> Reset </button>
    </div>
  )
}

export default App
