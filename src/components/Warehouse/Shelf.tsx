import { useContext } from "react";
import styled from "styled-components";

import ShelfContext, { Shelf as ShelfType } from "../../contexts/Shelf/context";
import InputWLabel from "../Input/InputWLabel";
import { FlexRow } from "../Flex/FlexRow";
import DeleteShelfButton from "./DeleteShelfButton";
import ErrorContext from "../../contexts/Errors/context";

type ShelfProps = {
    zoneId: number;
    shelf: ShelfType;
    index: number;
};
const Shelf = (props: ShelfProps) => {
    // Props
    const { zoneId, shelf, index } = props;

    // Context
    const { setShelfName } = useContext(ShelfContext);
    const { isDuplicateZoneShelf } = useContext(ErrorContext);

    // Handlers
    const handleChangeShelfName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue: string = e.target.value;

        // Prop
        setShelfName(zoneId, index, newValue, shelf.id);
    };

    return (
        <>
            <FlexRow>
                <InputWLabel
                    label={`Shelf ${index}:`}
                    placeholder={`Shelf name...`}
                    value={shelf.name}
                    onChange={handleChangeShelfName}
                />

                {isDuplicateZoneShelf(zoneId, shelf.id, shelf.name) && (
                    <p>Shelf name already used...</p>
                )}

                <DeleteShelfButton
                    zoneId={zoneId}
                    index={index}
                    shelf={shelf}
                />
            </FlexRow>
        </>
    );
};

export default Shelf;
