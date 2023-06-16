import { create } from "zustand";
import {
    BLACK,
    BLACK_BISHOP_URL,
    BLACK_KING_URL,
    BLACK_KNIGHT_URL,
    BLACK_PAWN_URL,
    BLACK_QUEEN_URL,
    BLACK_ROOK_URL,
    WHITE,
    WHITE_BISHOP_URL,
    WHITE_KING_URL,
    WHITE_KNIGHT_URL,
    WHITE_PAWN_URL,
    WHITE_QUEEN_URL,
    WHITE_ROOK_URL,
} from "../constants";

interface boardState {
    board: Board;
    getSquare: (x: string, y: number) => Square | undefined;
    getRow: (y: number) => Square[];
    move: (
        srcSquare: Square | undefined,
        destSquare: Square | undefined
    ) => void;
}

const INIT_BOARD: Board = {
    squares: [
        {
            y: 1,
            x: "a",
            piece: WHITE_ROOK_URL,
            isOccupied: true,
            color: BLACK,
        },
        {
            y: 1,
            x: "b",
            piece: WHITE_KNIGHT_URL,
            isOccupied: true,
            color: WHITE,
        },
        {
            y: 1,
            x: "c",
            piece: WHITE_BISHOP_URL,
            isOccupied: true,
            color: BLACK,
        },
        {
            y: 1,
            x: "d",
            piece: WHITE_QUEEN_URL,
            isOccupied: true,
            color: WHITE,
        },
        {
            y: 1,
            x: "e",
            piece: WHITE_KING_URL,
            isOccupied: true,
            color: BLACK,
        },
        {
            y: 1,
            x: "f",
            piece: WHITE_BISHOP_URL,
            isOccupied: true,
            color: WHITE,
        },
        {
            y: 1,
            x: "g",
            piece: WHITE_KNIGHT_URL,
            isOccupied: true,
            color: BLACK,
        },
        {
            y: 1,
            x: "h",
            piece: WHITE_ROOK_URL,
            isOccupied: true,
            color: WHITE,
        },

        {
            y: 2,
            x: "a",
            piece: WHITE_PAWN_URL,
            isOccupied: true,
            color: WHITE,
        },
        {
            y: 2,
            x: "b",
            piece: WHITE_PAWN_URL,
            isOccupied: true,
            color: BLACK,
        },
        {
            y: 2,
            x: "c",
            piece: WHITE_PAWN_URL,
            isOccupied: true,
            color: WHITE,
        },
        {
            y: 2,
            x: "d",
            piece: WHITE_PAWN_URL,
            isOccupied: true,
            color: BLACK,
        },
        {
            y: 2,
            x: "e",
            piece: WHITE_PAWN_URL,
            isOccupied: true,
            color: WHITE,
        },
        {
            y: 2,
            x: "f",
            piece: WHITE_PAWN_URL,
            isOccupied: true,
            color: BLACK,
        },
        {
            y: 2,
            x: "g",
            piece: WHITE_PAWN_URL,
            isOccupied: true,
            color: WHITE,
        },
        {
            y: 2,
            x: "h",
            piece: WHITE_PAWN_URL,
            isOccupied: true,
            color: BLACK,
        },

        { y: 3, x: "a", piece: "", isOccupied: false, color: BLACK },
        { y: 3, x: "b", piece: "", isOccupied: false, color: WHITE },
        { y: 3, x: "c", piece: "", isOccupied: false, color: BLACK },
        { y: 3, x: "d", piece: "", isOccupied: false, color: WHITE },
        { y: 3, x: "e", piece: "", isOccupied: false, color: BLACK },
        { y: 3, x: "f", piece: "", isOccupied: false, color: WHITE },
        { y: 3, x: "g", piece: "", isOccupied: false, color: BLACK },
        { y: 3, x: "h", piece: "", isOccupied: false, color: WHITE },

        { y: 4, x: "a", piece: "", isOccupied: false, color: WHITE },
        { y: 4, x: "b", piece: "", isOccupied: false, color: BLACK },
        { y: 4, x: "c", piece: "", isOccupied: false, color: WHITE },
        { y: 4, x: "d", piece: "", isOccupied: false, color: BLACK },
        { y: 4, x: "e", piece: "", isOccupied: false, color: WHITE },
        { y: 4, x: "f", piece: "", isOccupied: false, color: BLACK },
        { y: 4, x: "g", piece: "", isOccupied: false, color: WHITE },
        { y: 4, x: "h", piece: "", isOccupied: false, color: BLACK },

        { y: 5, x: "a", piece: "", isOccupied: false, color: BLACK },
        { y: 5, x: "b", piece: "", isOccupied: false, color: WHITE },
        { y: 5, x: "c", piece: "", isOccupied: false, color: BLACK },
        { y: 5, x: "d", piece: "", isOccupied: false, color: WHITE },
        { y: 5, x: "e", piece: "", isOccupied: false, color: BLACK },
        { y: 5, x: "f", piece: "", isOccupied: false, color: WHITE },
        { y: 5, x: "g", piece: "", isOccupied: false, color: BLACK },
        { y: 5, x: "h", piece: "", isOccupied: false, color: WHITE },

        { y: 6, x: "a", piece: "", isOccupied: false, color: WHITE },
        { y: 6, x: "b", piece: "", isOccupied: false, color: BLACK },
        { y: 6, x: "c", piece: "", isOccupied: false, color: WHITE },
        { y: 6, x: "d", piece: "", isOccupied: false, color: BLACK },
        { y: 6, x: "e", piece: "", isOccupied: false, color: WHITE },
        { y: 6, x: "f", piece: "", isOccupied: false, color: BLACK },
        { y: 6, x: "g", piece: "", isOccupied: false, color: WHITE },
        { y: 6, x: "h", piece: "", isOccupied: false, color: BLACK },

        {
            y: 7,
            x: "a",
            piece: BLACK_PAWN_URL,
            isOccupied: true,
            color: BLACK,
        },
        {
            y: 7,
            x: "b",
            piece: BLACK_PAWN_URL,
            isOccupied: true,
            color: WHITE,
        },
        {
            y: 7,
            x: "c",
            piece: BLACK_PAWN_URL,
            isOccupied: true,
            color: BLACK,
        },
        {
            y: 7,
            x: "d",
            piece: BLACK_PAWN_URL,
            isOccupied: true,
            color: WHITE,
        },
        {
            y: 7,
            x: "e",
            piece: BLACK_PAWN_URL,
            isOccupied: true,
            color: BLACK,
        },
        {
            y: 7,
            x: "f",
            piece: BLACK_PAWN_URL,
            isOccupied: true,
            color: WHITE,
        },
        {
            y: 7,
            x: "g",
            piece: BLACK_PAWN_URL,
            isOccupied: true,
            color: BLACK,
        },
        {
            y: 7,
            x: "h",
            piece: BLACK_PAWN_URL,
            isOccupied: true,
            color: WHITE,
        },

        {
            y: 8,
            x: "a",
            piece: BLACK_ROOK_URL,
            isOccupied: true,
            color: WHITE,
        },
        {
            y: 8,
            x: "b",
            piece: BLACK_KNIGHT_URL,
            isOccupied: true,
            color: BLACK,
        },
        {
            y: 8,
            x: "c",
            piece: BLACK_BISHOP_URL,
            isOccupied: true,
            color: WHITE,
        },
        {
            y: 8,
            x: "d",
            piece: BLACK_QUEEN_URL,
            isOccupied: true,
            color: BLACK,
        },
        {
            y: 8,
            x: "e",
            piece: BLACK_KING_URL,
            isOccupied: true,
            color: WHITE,
        },
        {
            y: 8,
            x: "f",
            piece: BLACK_BISHOP_URL,
            isOccupied: true,
            color: BLACK,
        },
        {
            y: 8,
            x: "g",
            piece: BLACK_KNIGHT_URL,
            isOccupied: true,
            color: WHITE,
        },
        {
            y: 8,
            x: "h",
            piece: BLACK_ROOK_URL,
            isOccupied: true,
            color: BLACK,
        },
    ],
};

export const useBoardStore = create<boardState>()((set, get) => ({
    board: INIT_BOARD,
    getSquare: (x, y) => {
        const squares = get().board.squares;

        for (let i = 0; i < squares.length; i++) {
            const currentSquare = squares[i];

            if (currentSquare.x === x && currentSquare.y === y) {
                return currentSquare;
            }
        }

        return;
    },
    getRow: (y) => {
        const squares = get().board.squares;
        const result: Square[] = [];

        for (let i = 0; i < squares.length; i++) {
            const currentSquare = squares[i];

            if (currentSquare.y === y) {
                result.push(currentSquare);
            }
        }

        return result;
    },
    move: (srcSquare, destSquare) =>
        set((state) => {
            if (srcSquare === undefined || destSquare === undefined) {
                return state;
            }

            if (!srcSquare.isOccupied || destSquare.isOccupied) {
                return state;
            }

            const pieceToMove = srcSquare.piece;

            const newState = state.board.squares.map((square) => {
                if (square.x === srcSquare.x && square.y === srcSquare.y) {
                    square.isOccupied = false;
                    square.piece = "";
                }

                if (square.x === destSquare.x && square.y === destSquare.y) {
                    square.isOccupied = true;
                    square.piece = pieceToMove;
                }

                return square;
            });

            console.log(state);
            return { ...state, board: { squares: newState } };
        }),
}));
