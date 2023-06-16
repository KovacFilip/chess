import React from "react";
import { BLACK, WHITE } from "../constants";

interface squareProps {
    square: Square;
    children?: React.ReactNode;
}

export const Square: React.FC<squareProps> = ({ square }) => {
    const textColor = square.color === BLACK ? WHITE : BLACK;

    console.log("xxx", square);

    return (
        <div
            style={{
                backgroundColor: square.color,
                color: textColor,
                width: "70px",
                height: "70px",
            }}
        >
            {square.piece}
        </div>
    );
};
