import React from "react";

interface info {
    name: string;
}

export const Piece: React.FC<info> = ({ name }) => {
    return <div>{name}</div>;
};
