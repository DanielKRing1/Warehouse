import { createContext } from "react";

// CONTEXT
type ErrorContextValueType = {
    hasAnyDuplicateZoneShelves: () => boolean;
    isDuplicateZoneShelf: (
        zoneId: number,
        shelfId: string,
        shelfName: string
    ) => boolean;
    trackDuplicateZoneShelf: (
        zoneId: number,
        shelfId: string,
        oldShelfName: string,
        newShelfName: string
    ) => void;
    rmDuplicateZoneShelf: (
        zoneId: number,
        shelfId: string,
        shelfName: string
    ) => void;
};
const DEFAULT_CONTEXT_VALUE: ErrorContextValueType = {
    hasAnyDuplicateZoneShelves: () => false,
    isDuplicateZoneShelf: () => false,
    trackDuplicateZoneShelf: () => {},
    rmDuplicateZoneShelf: () => {},
};
const ErrorContext: React.Context<ErrorContextValueType> =
    createContext<ErrorContextValueType>(DEFAULT_CONTEXT_VALUE);
export default ErrorContext;
