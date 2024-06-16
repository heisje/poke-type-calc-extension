import {NavLink} from "react-router-dom";
import {useLanguage} from "../../contexts/LanguageContextProvider.jsx";
import {NavContainer} from "./NavStyle.js";
import {LANGUAGES, NATIVES, NAV_LANGUAGE} from "../../data/languages.js";
import {LuMenu} from "react-icons/lu";
import {useState} from "react";

const Nav = () => {
    const {language, setLanguage} = useLanguage();
    const [toggle, setToggle] = useState(false);

    return <NavContainer>
        <div onClick={() => setToggle(true)}
             id={'nav-toggle'}
             className={toggle ? 'toggled' : ''}>
            <LuMenu id={'nav-toggle-icon'}/>
        </div>

        <img id={'nav-logo'} src={'/logo.png'} alt="logo"/>
        <div id={'nav-list'}>
            <NavLink to="/" className={({isActive}) => (isActive ? 'active' : '')}>
                {NAV_LANGUAGE[language][0]}
            </NavLink>
            <NavLink to="/nature" className={({isActive}) => (isActive ? 'active' : '')}>
                {NAV_LANGUAGE[language][1]}
            </NavLink>
            <NavLink to="/base-stats" className={({isActive}) => (isActive ? 'active' : '')}>
                {NAV_LANGUAGE[language][2]}
            </NavLink>
            <select id="dropdown" name="dropdown" onChange={(e) => setLanguage(e.target.value)}>
                {LANGUAGES.map((l, idx) => <option key={l} value={l}>{NATIVES[idx]}</option>)}
            </select>
        </div>
    </NavContainer>
}

export default Nav