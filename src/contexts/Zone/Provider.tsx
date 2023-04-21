import { useState } from "react";
import ZoneContext from "./context";

// PROVIDER
type ProviderProps = {
    children: React.ReactNode;
};
const ZoneContextProvider = ({ children }: ProviderProps) => {
    /**
     * A list of all zone names
     * Index is id, value is name
     *
     * Ex : [zone1Name, ..., zone12Name]
     */
    const [zoneNames, setZoneNames] = useState<string[]>(
        new Array(12).fill(undefined).map((v, i) => i + 1 + "")
    );
    const setZoneName = (zoneId: number, newZoneName: string) => {
        setZoneNames((prev) => {
            prev[zoneId] = newZoneName;
            return [...prev];
        });
    };

    return (
        <ZoneContext.Provider
            // @ts-ignore
            style={{ flex: 1 }}
            value={{
                zoneNames,
                setZoneName,
            }}
        >
            {children}
        </ZoneContext.Provider>
    );
};

export default ZoneContextProvider;
