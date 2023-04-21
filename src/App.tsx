import "./App.css";

import Warehouse from "./components/Warehouse/index";
import ErrorContextProvider from "./contexts/Errors/Provider";
import ShelfContextProvider from "./contexts/Shelf/Provider";
import ZoneContextProvider from "./contexts/Zone/Provider";

function App() {
    return (
        <div className="App">
            <ErrorContextProvider>
                <ZoneContextProvider>
                    <ShelfContextProvider>
                        <Warehouse />
                    </ShelfContextProvider>
                </ZoneContextProvider>
            </ErrorContextProvider>
        </div>
    );
}

export default App;
