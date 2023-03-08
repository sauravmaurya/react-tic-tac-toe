import { useState, useMemo } from "react"
import './styles.css';
import BoxList from "./BoxList";

function App() {
    const [turn, setTurn] = useState("X")
    const [msg, setMsg] = useState("")
    const [turnArr, setTurnArr] = useState(["", "", "", "", "", "", "", "", ""])
    const [counter, setCounter] = useState(0);
    const [isWon, setIsWon] = useState(false);
    const winArray = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]]

    const checkWinner = () => {
        if (counter === 9 && msg === "") {
            setMsg("Draw")
        }
        for (let i = 0; i < 8; i++) {
            let checkValue = winArray[i];
            let first = checkValue[0]
            let second = checkValue[1]
            let third = checkValue[2]
            console.log(first, second, third)

            if (turnArr[first] === "" || turnArr[second] === "" || turnArr[third] === "") {
                continue;
            }

            if (turnArr[first] === turnArr[second] && turnArr[second] === turnArr[third]) {
                if (turn === "X")
                    setMsg("O Won")
                else {
                    setMsg("X Won")
                }
                setIsWon(true)
            }
        }
    }


    const handleClick = (id) => {

        if (counter <= 9) {
            console.log(counter)
            if (turnArr[id] !== "" && counter > 0) {
                return
            }
            setCounter(counter + 1)
            let newTurnarr = turnArr.map((item, index) => {
                if (index === id) {
                    return turn
                }
                return item
            })
            setTurnArr(newTurnarr)
            if (turn === "X") {
                setTurn("O")
                console.log(1)
            }
            else {
                setTurn("X")
                console.log(1)
            }

        }
    }

    const handleReset = () => {
        setCounter(0);
        setTurn("X")
        setMsg("")
        setTurnArr(["", "", "", "", "", "", "", "", ""])
    }

    useMemo(() => {
        checkWinner()
    }, [turnArr])

    let content = msg === "" ? `${turn}'s turn` : msg

    return (
        <div className="wrapper" >
            <h1>Tic Tac Toe</h1>
            <BoxList won={isWon} boxes={turnArr} onChange={handleClick} msg={msg}></BoxList>
            <div className="message-area">{content}</div>
            <button className="btn-reset" onClick={handleReset}>Reset</button>
        </div>
    )
}


export default App
