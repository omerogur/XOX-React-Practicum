import React, { useEffect, useState } from 'react'
import Square from '../square/Square'

const Board = () => {
    const [board,setBoard] = useState(Array(9).fill(""))
    const [winner, setWinner] = useState("")
    const [wincol, setWincol] = useState([])
    const [counter,setCounter] = useState(0)
    const winnerLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

    const changeValue = (index) => {
        let newBoard = [...board]
        
        if(newBoard[index] == ""){
            newBoard[index] ="X"
            setCounter(prev => prev+1)
            setBoard(newBoard)
            autoPlayer(newBoard)
        }else{
          alert("Please Select Another Square")
        }
    }
    
    const autoPlayer = (newBoard) => {
        const x = Math.floor(Math.random() * 8)
        if (newBoard[x] === "") {
            newBoard[x] = "O"
            setBoard(newBoard)
            
        } else {
            autoPlayer(newBoard)
        }
    }
    useEffect(() => {
        win()
        if (!board.includes("")) { // Eğer tüm kareler doluysa başka ihtimal olmadığından oyunu sıfırlıyoruz
            setWinner("No one wins draw")
          }
        
    },[board])
    
    //Kazanma durumunu kontrol
  const win = () => { 
      for (let i = 0; i < winnerLines.length; i++) { //önceden hazırladığımız arrayi dönüyoruz
        let control = winnerLines[i]//kanazacak olan her arrayi geçici bir değişkene atıyoruz doldurduğumuz arrayda eşleşen array var mı diye kontrol ediyoruz.
        if (board[control[0]] === board[control[1]] && board[control[1]] === board[control[2]] && board[control[0]]) {
          let value = [control[0], control[1], control[2]] 
          console.log("kazanan array indeksi", value); //eşleşen değer olursa geçici olarak value değişkenine atıyoruz ve statelerin içine yolluyoruz
          setWinner(board[value[0]])
          setWincol(value)
      }
    }
  }
  

  const resetGame = () => {
     setBoard(Array(9).fill(""))
     setWinner("")
    setWincol([])
     
  }
    
  return (
    <>
    {!winner ? "" : <div className='gameOver'><h1>Winner  : "{winner}"</h1>
    <button onClick={resetGame}>RESET GAME</button></div>}
    <div className='container'>
    <h1 style={{color:"red"}}>XOX GAME</h1>
         <div className='row'>
         <Square value={board[0]} changeValue={changeValue} index={0} wincol={wincol}  />
         <Square value={board[1]} changeValue={changeValue} index={1} wincol={wincol}/>
         <Square value={board[2]} changeValue={changeValue} index={2} wincol={wincol}/>
         </div>


         <div className='row'>
         <Square value={board[3]} changeValue={changeValue} index={3} wincol={wincol}/>
         <Square value={board[4]} changeValue={changeValue} index={4} wincol={wincol}/>
         <Square value={board[5]} changeValue={changeValue} index={5} wincol={wincol}/>
         </div>

         <div className='row'>
         <Square value={board[6]} changeValue={changeValue} index={6} wincol={wincol}/>
         <Square value={board[7]} changeValue={changeValue} index={7} wincol={wincol}/>
         <Square value={board[8]} changeValue={changeValue} index={8} wincol={wincol}/>
         </div>
  
    </div>
          </>
  )
}

export default Board
