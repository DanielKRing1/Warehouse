import { useCallback, useContext, useState } from "react";
import ShelfContext, { Shelf } from "./context";
import { getId } from "../../utils/id";
import ErrorContext from "../Errors/context";

// PROVIDER
type ProviderProps = {
    children: React.ReactNode;
};
const ShelfContextProvider = ({ children }: ProviderProps) => {
    // CONTEXT
    const { trackDuplicateZoneShelf, rmDuplicateZoneShelf } =
        useContext(ErrorContext);

    // STATE
    const [ownedShelves, setOwnedShelves] = useState<Shelf[][]>(
        new Array(12).fill(undefined).map(() => [])
    );
    const [shelfNameSet] = useState<Set<string>>(new Set());

    // HANDLERS
    const addShelf = (zoneId: number, newShelfName: string) => {
        const shelfId = getId();
        setOwnedShelves((prev) => {
            prev[zoneId].push({ id: shelfId, name: newShelfName });
            prev[zoneId] = [...prev[zoneId]];
            return [...prev];
        });
        shelfNameSet.add(newShelfName);
    };

    const rmShelf = (zoneId: number, shelfIndex: number, shelfId: string) => {
        rmDuplicateZoneShelf(
            zoneId,
            shelfId,
            ownedShelves[zoneId][shelfIndex].name
        );
        shelfNameSet.delete(ownedShelves[zoneId][shelfIndex].name);

        setOwnedShelves((prev) => {
            prev[zoneId].splice(shelfIndex, 1);
            prev[zoneId] = [...prev[zoneId]];
            return [...prev];
        });
    };

    const setShelfName = (
        zoneId: number,
        shelfIndex: number,
        newShelfName: string,
        shelfId: string
    ): void => {
        const oldShelfName: string = ownedShelves[zoneId][shelfIndex].name;
        trackDuplicateZoneShelf(zoneId, shelfId, oldShelfName, newShelfName);

        shelfNameSet.delete(oldShelfName);
        setOwnedShelves((prev) => {
            prev[zoneId][shelfIndex].name = newShelfName;
            prev[zoneId] = [...prev[zoneId]];
            return [...prev];
        });
        shelfNameSet.add(newShelfName);
    };

    return (
        <ShelfContext.Provider
            value={{
                ownedShelves,
                shelfNameSet,
                addShelf,
                rmShelf,
                setShelfName,
            }}
        >
            {children}
        </ShelfContext.Provider>
    );
};

export default ShelfContextProvider;
