import axios from "axios";
import { serverUrl } from "../config/server";
import { Shelf } from "../contexts/Shelf/context";

export const postToEndpoint = (zones: string[], ownedShelves: Shelf[][]) => {
    axios
        .post(serverUrl, {
            // The structure is [ zone1Name, zone2Name, ... ],
            zones,
            // The structure is [ [ { id: arbitraryShelfId, name: shelfName } ] ],
            // where the index of the outer array is the zone number
            // and each zone index owns an arrray of shelves with an (arbitrary id) and name
            ownedShelves,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
};
