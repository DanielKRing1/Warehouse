import { useContext, useMemo } from "react";
import styled from "styled-components";

import Zone from "./Zone";
import ZoneContext from "../../contexts/Zone/context";
import Button from "../Button/Button";
import ShelfContext from "../../contexts/Shelf/context";
import ErrorContext from "../../contexts/Errors/context";
import { postToEndpoint } from "../../api/post";

type WarehouseProps = {};
const Warehouse = (props: WarehouseProps) => {
    // Context
    const { zoneNames, setZoneName } = useContext(ZoneContext);
    const { ownedShelves } = useContext(ShelfContext);
    const { hasAnyDuplicateZoneShelves } = useContext(ErrorContext);

    const canSubmit = useMemo(
        () => hasAnyDuplicateZoneShelves(),
        [ownedShelves]
    );

    return (
        <Container>
            {zoneNames.map((name: string, i: number) => (
                <Zone key={i} id={i} name={name} />
            ))}

            <Button disabled={canSubmit} onClick={postToEndpoint}>
                Submit
            </Button>
        </Container>
    );
};

export default Warehouse;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
