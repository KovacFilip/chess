export const ColumnIdsRow = () => {
    const rowIds = ["a", "b", "c", "d", "e", "f", "g", "h"];

    const row = rowIds.map((index) => {
        return (
            <div
                key={index}
                style={{
					display: "flex",
                    width: "70px",
                    alignItems: "center",
					justifyContent: "center",
                    borderBottom: "solid",
                }}
            >
                {index}
            </div>
        );
    });

    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    borderRight: "solid",
                    borderBottom: "solid",
                }}
            >
                &nbsp;&nbsp;
            </div>
            {row}
        </div>
    );
};
