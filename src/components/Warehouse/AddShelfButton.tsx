import { useContext } from "react";

import ShelfContext from "../../contexts/Shelf/context";
import Button from "../Button/Button";
import { getId } from "../../utils/id";

type AddShelfButtonProps = {
    atCapacity: boolean;
    zoneId: number;
};
const AddShelfButton = (props: AddShelfButtonProps) => {
    const { atCapacity, zoneId } = props;

    const { addShelf } = useContext(ShelfContext);

    return (
        <>
            <Button
                disabled={atCapacity}
                onClick={() => addShelf(zoneId, getId() + "")}
            >
                {!atCapacity
                    ? `Add Shelf to zone ${zoneId}`
                    : `Cannot add anymore shelves to this zone`}
            </Button>
        </>
    );
};

export default AddShelfButton;
