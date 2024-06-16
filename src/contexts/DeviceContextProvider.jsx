import React, {createContext, useContext, useState} from 'react';

const DeviceContext = createContext();


export const DeviceContextProvider = ({children}) => {
    const [device, _] = useState(() => {
        try {
            if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.id) {
                document.body.classList.add('extension');
                return 'extension'
            }
        } catch (error) {
        }
        return ''
    });

    return (
        <DeviceContext.Provider value={{device}}>
            {children}
        </DeviceContext.Provider>
    );
};

export const useDevice = () => {
    return useContext(DeviceContext);
};
