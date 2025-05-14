import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Layout.jsx";
import Error from "./component/Error.jsx";
import Display from "./component/Display.jsx";
import ModalOpener from "./component/ModalOpener.jsx";

export default function App() {

    return (<BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Display/>}/>
                    <Route path="*" element={<Error type="404"/>}/>
                </Route>
            </Routes>
        </BrowserRouter>);
}