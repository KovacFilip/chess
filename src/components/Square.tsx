import React from "react";
import { BLACK, WHITE } from "../constants";

interface squareProps {
    col_id: string;
    row_id: number;
    isBlack?: boolean;
    children?: React.ReactNode;
}

export const Square: React.FC<squareProps> = ({
    isBlack,
    col_id,
    row_id,
    children,
}) => {
    const fillColor = isBlack ? BLACK : WHITE;
    const textColor = isBlack ? WHITE : BLACK;

    return (
        <div
            style={{
                backgroundColor: fillColor,
                color: textColor,
                width: "70px",
                height: "70px",
            }}
        >
            {children}
        </div>
    );
};
