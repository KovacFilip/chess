interface Board {
    squares: Square[];
}

interface Square {
    y: number;
    x: string;
    piece: string;
    isOccupied: boolean;
    color: string;
}
