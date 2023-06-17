import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ColumnIdsRow } from "./ColumnIdsRow";
import { Row } from "./Row";

export const Board = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <div style={{ borderStyle: "solid" }}>
                <ColumnIdsRow />
                <Row id={8} />
                <Row id={7} />
                <Row id={6} />
                <Row id={5} />
                <Row id={4} />
                <Row id={3} />
                <Row id={2} />
                <Row id={1} />
            </div>
        </DndProvider>
    );
};
