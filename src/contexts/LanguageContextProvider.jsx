import React, {createContext, useContext, useEffect, useState} from 'react';

const LanguageContext = createContext();


export const LanguageContextProvider = ({children}) => {
    const [language, setLanguage] = useState(function findLanguage() {
        const storedValue = localStorage.getItem('language');
        if (storedValue !== null) {
            return storedValue;
        }
        const userLanguage = navigator.language || 'en';
        if (userLanguage.startsWith('ko')) {
            return 'ko';
        }
        return 'en';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    return (
        <LanguageContext.Provider value={{language, setLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    return useContext(LanguageContext);
};
