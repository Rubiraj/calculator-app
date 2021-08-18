import React from "react"
import NumberButton from "./NumberButton"
import ArithmeticButton from "./ArithmeticButton"
import DecimalButton from "./DecimalButton"
import ResultButton from "./ResultButton"
function Button() {
    return (
        <div className="typepad">
            <div className="numbers">
                <NumberButton />
                <DecimalButton />
                <ResultButton />
            </div>
            <ArithmeticButton />
        </div>
    )
}

export default Button