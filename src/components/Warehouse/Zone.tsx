import { memo, useContext } from "react";
import ShelfContext, { Shelf as ShelfType } from "../../contexts/Shelf/context";
import Shelf from "./Shelf";
import { FlexRow } from "../Flex/FlexRow";
import ZoneContext from "../../contexts/Zone/context";
import AddShelfButton from "./AddShelfButton";
import InputWLabel from "../Input/InputWLabel";

type ZoneProps = {
    id: number;
    name: string;
};
const Zone = memo((props: ZoneProps) => {
    // Props
    const { id, name } = props;

    // Context
    const { setZoneName } = useContext(ZoneContext);
    const { ownedShelves } = useContext(ShelfContext);

    // Handlers
    const handleChangeZoneName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue: string = e.target.value;

        // Prop
        setZoneName(id, newValue);
    };

    return (
        <>
            <InputWLabel
                label={`Zone${id + 1}:`}
                placeholder={`Zone name...`}
                value={name}
                onChange={handleChangeZoneName}
            />
            <hr />
            {ownedShelves[id].map((shelf: ShelfType, i) => (
                <Shelf key={shelf.id} index={i} zoneId={id} shelf={shelf} />
            ))}

            <AddShelfButton
                atCapacity={ownedShelves[id].length >= 10}
                zoneId={id}
            />
        </>
    );
});

export default Zone;
