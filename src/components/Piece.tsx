import React from "react";
import { useDrag } from "react-dnd/dist/hooks";
import classes from "./Piece.module.css";

interface squareInfo {
    square: Square;
}

export const Piece: React.FC<squareInfo> = ({ square }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "piece",
        collect: (monitor: any) => ({
            isDragging: monitor.isDragging(),
        }),
        item: () => square,
    }));

    return (
        <div>
            <img
                src={square.piece}
                alt="piece"
                className={classes.piece}
                ref={drag}
                style={{
                    opacity: isDragging ? 0.2 : 1,
                }}
            />
        </div>
    );
};
