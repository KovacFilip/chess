import React, { useEffect } from "react";
import { BLACK, WHITE } from "../constants";
import { useBoardStore } from "../store/boardSlice";
import classes from "./Square.module.css";

interface squareProps {
    square: Square;
    children?: React.ReactNode;
}

export const Square: React.FC<squareProps> = ({ square }) => {
    const textColor = square.color === BLACK ? WHITE : BLACK;

    useEffect(() => {
        const unsubscribe = useBoardStore.subscribe(() => {});

        return () => {
            unsubscribe();
        };
    }, [square.x, square.y]);

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
