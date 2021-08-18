import { useContext } from "react"
import { context } from "./Context"

function Result() {
    const { screen } = useContext(context)
    return (
        <div className="result">
            <p>
                {screen}
            </p>           
        </div>
    )
}

export default Result