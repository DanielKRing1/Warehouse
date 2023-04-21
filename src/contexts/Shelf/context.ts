import { createContext } from "react";

// TYPES
export type Shelf = {
    id: string;
    name: string;
};

// CONTEXT
type ShelfContextValueType = {
    // Index is zoneId
    // Value is Shelf id and name
    // [ [ Shelf ] ]
    ownedShelves: Shelf[][];
    // Set of ALL shelf names
    shelfNameSet: Set<string>;
    addShelf: (zoneId: number, newShelfName: string) => void;
    rmShelf: (zoneId: number, shelfIndex: number, shelfId: string) => void;
    setShelfName: (
        zoneId: number,
        shelfIndex: number,
        newShelfName: string,
        shelfId: string
    ) => void;
};
const DEFAULT_CONTEXT_VALUE: ShelfContextValueType = {
    ownedShelves: new Array(12).fill(undefined).map(() => []),
    shelfNameSet: new Set(),
    addShelf: () => {},
    rmShelf: () => {},
    setShelfName: () => {},
};
const ShelfContext: React.Context<ShelfContextValueType> =
    createContext<ShelfContextValueType>(DEFAULT_CONTEXT_VALUE);
export default ShelfContext;
