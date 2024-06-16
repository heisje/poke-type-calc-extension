import './css/reset.css'
import './css/global.css'
import {Navigate, Route, Routes} from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";
import BaseStats from "./pages/BaseStats/index.jsx";
import Calculator from "./pages/Calculator/index.jsx";
import Nature from "./pages/Nature/index.jsx";
import Nav from "./components/Nav/index.jsx";
import {Provider} from "./Provider.jsx";

function App() {
    return (
        <Provider>
            <Nav/>
            <Routes>
                <Route path={'/'} element={<Calculator/>}/>
                <Route path="/index.html" element={<Navigate to="/"/>}/>
                <Route path={'/nature'} element={<Nature/>}/>
                <Route path={'/base-stats'} element={<BaseStats/>}/>
                <Route path={'*'} element={<NotFound/>}/>
            </Routes>
        </Provider>
    )
}

export default App
