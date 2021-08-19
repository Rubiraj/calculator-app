import React, { useState } from 'react'
import operation_result from './operation'
import checkDecimal from './checkDecimal'
import { negative, empty, decimal_sign, check_number } from './button_arr'

export const context = React.createContext()

function ContextProvider(props) {
    const [screen, setScreen] = useState('')
    const [variableA, setVariableA] = useState('')
    const [operation, setOperation] = useState('')
    var arrayOfNumbers = []
    var displayNumber, resultReturned, decimal

    function display(value) {
        if (value === decimal_sign) {
            decimal = checkDecimal(Number(screen))
        }
        if (!decimal) {
            (check_number.includes(screen))
                ? arrayOfNumbers.push(value)
                : arrayOfNumbers.push(screen, value)

            arrayOfNumbers.filter(item => item)
            displayNumber = arrayOfNumbers.join(empty)
            setScreen(displayNumber)
            arrayOfNumbers = []
            displayNumber = " "
        }
    }

    function arithmeticClicked(operation_arg) {
        if (screen !== empty) {
            setVariableA(check_number.includes(screen)
                ? 0
                : Number(screen)
            )
            setOperation(operation_arg)
            setScreen(empty)
        }
        else {
            (screen === empty) && (operation_arg === negative)
                ? display(operation_arg)
                : setOperation(operation_arg)
        }
    }

    function result() {
        if (!(Number.isNaN(Number(screen)))) {
            resultReturned = operation_result(variableA, Number(screen), operation)
            setScreen(resultReturned)
        }
    }

    function resetCalculator() {
        setVariableA(empty)
        setOperation(empty)
        setScreen(empty)
    }
    return (
        <context.Provider value={{ display, arithmeticClicked, operation, result, resetCalculator, screen }}>
            {props.children}
        </context.Provider>
    )
}

export default ContextProvider