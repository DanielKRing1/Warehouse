import { useState } from "react";

import ErrorContext from "./context";

const genZoneShelfId = (zoneId: number, shelfId: string) =>
    `${zoneId}-${shelfId}`;

// PROVIDER
type ProviderProps = {
    children: React.ReactNode;
};
const ErrorContextProvider = ({ children }: ProviderProps) => {
    // STATE
    // Set of 'zoneId-shelfId'
    const [duplicateZoneShelves] = useState<Record<string, Set<string>>>({});

    // HANDLERS
    const hasAnyDuplicateZoneShelves = () =>
        Object.values(duplicateZoneShelves).some((v) => v.size > 1);
    const isDuplicateZoneShelf = (
        zoneId: number,
        shelfId: string,
        shelfName: string
    ) =>
        duplicateZoneShelves[shelfName] &&
        duplicateZoneShelves[shelfName].size > 1;
    const trackDuplicateZoneShelf = (
        zoneId: number,
        shelfId: string,
        oldShelfName: string,
        newShelfName: string
    ) => {
        // Rm old shelf name
        rmDuplicateZoneShelf(zoneId, shelfId, oldShelfName);

        // Add new shelf name
        if (!duplicateZoneShelves[newShelfName])
            duplicateZoneShelves[newShelfName] = new Set();
        duplicateZoneShelves[newShelfName].add(genZoneShelfId(zoneId, shelfId));
    };
    const rmDuplicateZoneShelf = (
        zoneId: number,
        shelfId: string,
        shelfName: string
    ) => {
        if (duplicateZoneShelves[shelfName])
            duplicateZoneShelves[shelfName].delete(
                genZoneShelfId(zoneId, shelfId)
            );
        if (
            duplicateZoneShelves[shelfName] &&
            duplicateZoneShelves[shelfName].size === 0
        )
            delete duplicateZoneShelves[shelfName];
    };

    return (
        <ErrorContext.Provider
            value={{
                hasAnyDuplicateZoneShelves,
                isDuplicateZoneShelf,
                trackDuplicateZoneShelf,
                rmDuplicateZoneShelf,
            }}
        >
            {children}
        </ErrorContext.Provider>
    );
};

export default ErrorContextProvider;
