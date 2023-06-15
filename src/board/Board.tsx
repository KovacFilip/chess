import { BLACK, WHITE } from "../constants";
import { ColumnIdsRow } from "./ColumnIdsRow";
import { Row } from "./Row";

export const Board = () => {
    return (
        <div style={{ borderStyle: "solid" }}>
			<ColumnIdsRow />
            <Row id={1} starting_color={BLACK} />
            <Row id={2} starting_color={WHITE} />
            <Row id={3} starting_color={BLACK} />
            <Row id={4} starting_color={WHITE} />
            <Row id={5} starting_color={BLACK} />
            <Row id={6} starting_color={WHITE} />
            <Row id={7} starting_color={BLACK} />
            <Row id={8} starting_color={WHITE} />
        </div>
    );
};
