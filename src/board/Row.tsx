import { Square } from "../components/Square";
import { useBoardStore } from "../store/boardSlice";

interface rowProps {
    id: number;
}

export const Row: React.FC<rowProps> = ({ id }) => {
    const squaresObjs = useBoardStore().getRow(id);

    console.log(squaresObjs);
    const squares = squaresObjs.map((square) => {
        return <Square square={square} />;
    });

    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                    borderRight: "solid",
                }}
            >
                {id}
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                {squares}
            </div>
        </div>
    );
};
