import classes from "./App.module.css";
import { Board } from "./board/Board";
import { useBoardStore } from "./store/boardSlice";

function App() {
    const board = useBoardStore();
    const square1b = board.getSquare("b", 1);
    const square3c = board.getSquare("c", 3);

    return (
        <div className={classes.container}>
            <Board />
            <button onClick={() => board.move(square1b, square3c)}>
                Click me
            </button>
        </div>
    );
}

export default App;
