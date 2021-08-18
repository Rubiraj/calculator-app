import React, { useState, useEffect } from 'react'
import operation_result from './operation'
export const context = React.createContext()

function ContextProvider(props) {
    const [screen, setScreen] = useState('')
    const [variableA, setVariableA] = useState('')
    const [operation, setOperation] = useState('')
    var arrayOfNumbers = []
    var displayNumber, resultReturned, decimal


    function display(value) {
        if (value == ".") {
            decimal = (Number(screen) - Math.floor(Number(screen))) !== 0
        }
        if (!decimal) {
            arrayOfNumbers.push(screen, value)
            arrayOfNumbers.filter(item => item)
            displayNumber = arrayOfNumbers.join('')
            setScreen(displayNumber)
            arrayOfNumbers = []
            displayNumber = " "
        }
    }

    function arithmeticClicked(operation_arg) {
        if (Number(screen)) {
            setVariableA(Number(screen))
            setOperation(operation_arg)
            setScreen('')
        }
        else {
            setOperation(operation_arg)
        }
    }

    function result() {
        if (!(Number.isNaN(Number(screen)))) {
            resultReturned = operation_result(variableA, Number(screen), operation)
            setScreen(resultReturned)
        }

    }

    function resetCalculator() {
        setVariableA('')
        setOperation('')
        setScreen('')
    }
    return (
        <context.Provider value={{ display, arithmeticClicked, operation, result, resetCalculator, screen }}>
            {props.children}
        </context.Provider>
    )
}

export default ContextProvider