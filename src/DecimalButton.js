import {decimal_sign} from "./button_arr"
import { context } from "./Context"
import React, {useContext, useState} from "react"
function DecimalButton(){
    const {display} = useContext(context)
    return (
        <input
            type="button"
            className="button decimalbutton"
            value={decimal_sign}
            onClick={() => display(decimal_sign)} />
    )
}

export default DecimalButton