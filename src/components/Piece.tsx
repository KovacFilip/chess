import React from "react";
import classes from "./Piece.module.css";

interface squareInfo {
    square: Square;
}

export const Piece: React.FC<squareInfo> = ({ square }) => {
    return (
        <div>
            {<img src={square.piece} alt="piece" className={classes.piece} />}
        </div>
    );
};
