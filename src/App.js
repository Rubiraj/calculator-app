import Button from "./Button"
import DisplayResult from "./DisplayResult"
import React from "react"
import ResetButton from "./ResetButton"
function App() {
    return (
        <div className="main">
            <DisplayResult />
            <Button />
            <ResetButton />
        </div>
    )
}

export default App