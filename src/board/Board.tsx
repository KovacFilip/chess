import { ColumnIdsRow } from "./ColumnIdsRow";
import { Row } from "./Row";

export const Board = () => {
    return (
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
    );
};
