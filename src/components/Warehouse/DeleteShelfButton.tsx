import { useContext } from "react";

import ShelfContext, { Shelf } from "../../contexts/Shelf/context";
import Button from "../Button/Button";

type DeleteShelfButtonProps = {
    zoneId: number;
    index: number;
    shelf: Shelf;
};
const DeleteShelfButton = (props: DeleteShelfButtonProps) => {
    const { zoneId, index, shelf } = props;

    const { rmShelf } = useContext(ShelfContext);

    return (
        <>
            <Button onClick={() => rmShelf(zoneId, index, shelf.id)}>X</Button>
        </>
    );
};

export default DeleteShelfButton;
