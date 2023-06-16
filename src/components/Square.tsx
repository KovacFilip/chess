import React from "react";
import { BLACK, WHITE } from "../constants";
import classes from "./Square.module.css";

interface squareProps {
    square: Square;
    children?: React.ReactNode;
}

export const Square: React.FC<squareProps> = ({ square }) => {
    const textColor = square.color === BLACK ? WHITE : BLACK;

    console.log(square.piece);

    return (
        <div
            className={classes.square}
            style={{
                backgroundColor: square.color,
                color: textColor,
            }}
        >
            {square.piece !== "" ? (
                <img src={square.piece} alt="piece" className={classes.piece} />
            ) : (
                ""
            )}
        </div>
    );
};
