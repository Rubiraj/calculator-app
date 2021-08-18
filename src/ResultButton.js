import { result_sign } from "./button_arr"
import { context } from "./Context"
import React, { useContext } from "react"

function ResultButton() {
    const { result} = useContext(context)
    return (
        <button
            className="button"
            value={result_sign}
            onClick={() => result()} >
            {result_sign}
        </ button>
    )
}

export default ResultButton