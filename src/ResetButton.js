import { reset } from "./button_arr"
import { context } from "./Context"
import React, { useContext } from "react"

function ResetButton() {
    const { resetCalculator } = useContext(context)

    return (
        <input
            type="button"
            className="button resetbutton"
            value={reset}
            onClick={() => resetCalculator()} />
    )
}

export default ResetButton