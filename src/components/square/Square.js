import React, { useState } from 'react'

const Square = ({value,changeValue,index,wincol}) => {
     const [status,setStatus] = useState(true)
    const changePlayer = () => {
        changeValue(index)
        
    }
    const checkBoxWin = () => { //KAZANN İNDEX SATILARINI BOYAMA
        for (let i = 0; i < 3; i++) {
          if (wincol[i] === index) {
            let still = "box win"
            return still
          }
        }
      }
      let style = checkBoxWin()
     
  return (
    <div>
        <button className={style !==undefined ? "square win" : "square"} onClick={changePlayer}><span className={value ==="X" ? "X" : "O"}>{value}</span></button>
    </div>
  )
}

export default Square
