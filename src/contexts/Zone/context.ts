import { createContext } from "react";

// CONTEXT
type ZoneContextValueType = {
    // Index is zone id - Zone name at each index
    zoneNames: string[];
    setZoneName: (zoneId: number, newZoneName: string) => void;
};
const DEFAULT_CONTEXT_VALUE: ZoneContextValueType = {
    zoneNames: [],
    setZoneName: () => {},
};
const ZoneContext: React.Context<ZoneContextValueType> =
    createContext<ZoneContextValueType>(DEFAULT_CONTEXT_VALUE);
export default ZoneContext;
