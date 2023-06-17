import classes from "./App.module.css";
import { Board } from "./board/Board";

function App() {
    return (
        <div className={classes.container}>
            <Board />
        </div>
    );
}

export default App;
