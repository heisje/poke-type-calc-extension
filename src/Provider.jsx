import {LanguageContextProvider} from "./contexts/LanguageContextProvider.jsx";
import {DeviceContextProvider} from "./contexts/DeviceContextProvider.jsx";
import {BrowserRouter} from "react-router-dom";

export const Provider = ({children}) => {
    return <LanguageContextProvider>
        <DeviceContextProvider>
            <BrowserRouter>
                {children}
            </BrowserRouter>
        </DeviceContextProvider>
    </LanguageContextProvider>
}