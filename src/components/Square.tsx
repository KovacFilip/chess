import React, { useEffect } from "react";
import { useDrop } from "react-dnd/dist/hooks";
import { useBoardStore } from "../store/boardSlice";
import { Piece } from "./Piece";
import classes from "./Square.module.css";

interface squareProps {
    square: Square;
    children?: React.ReactNode;
}

export const Square: React.FC<squareProps> = ({ square }) => {
    const store = useBoardStore();

    const [, drop] = useDrop(() => ({
        accept: "piece",
        drop: (item: Square, monitor) => store.move(item, square),
    }));

    useEffect(() => {
        const unsubscribe = useBoardStore.subscribe(() => {});

        return () => {
            unsubscribe();
        };
    }, [square.x, square.y]);

    return (
        <div
            ref={drop}
            className={classes.square}
            style={{
                backgroundColor: square.color,
            }}
        >
            {square.piece !== "" ? <Piece square={square} /> : ""}
        </div>
    );
};
