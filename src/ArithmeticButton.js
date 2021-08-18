import {arithmeticArr} from "./button_arr"
import { context } from "./Context"
import React, { useContext } from "react"
function ArithmeticButton() {
    const { arithmeticClicked } = useContext(context)
    return (
        <div className="arithmetic">
            {arithmeticArr.map(arrValue => (
                <button key={arrValue.id}
                    className="button"
                    onClick={() => arithmeticClicked(arrValue)}>{arrValue}
                </button>
            ))}
        </div>
    )
}

export default ArithmeticButton