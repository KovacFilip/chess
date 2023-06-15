import { Square } from "../components/Square";
import { BLACK, WHITE } from "../constants";

interface rowProps {
    id: number;
    starting_color: string;
}

export const Row: React.FC<rowProps> = ({ id, starting_color }) => {
    const cols = ["a", "b", "c", "d", "e", "f", "g", "h"];
    let currentColor = starting_color;
    const squares = cols.map((col, index) => {
        if (currentColor === WHITE) {
            currentColor = BLACK;
            return <Square key={index} col_id="col" row_id={index} />;
        } else {
            currentColor = WHITE;

            return (
                <div>
                    <Square
                        isBlack={true}
                        key={index}
                        col_id="col"
                        row_id={index}
                    />
                </div>
            );
        }
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
