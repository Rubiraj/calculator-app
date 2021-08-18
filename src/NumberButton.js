import { context } from "./Context"
import React, { useContext } from "react"

function NumberButton() {
  const { display } = useContext(context)
  var arrButtons = []

  for (let i = 0; i < 10; i++) { //Moved your loop outside render()'s return
    arrButtons.push(
      <input
        type="button"
        key={i}
        value={i}
        className="button"
        onClick={e => display(e.target.value)}/>
    )
  }
  return (arrButtons)
}

export default NumberButton