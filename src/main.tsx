import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux";
import store from "./data/redux/store";
import {BrowserRouter} from "react-router-dom";
import "../src/assets/icon/weather/weathericons.css";
import "../src/assets/icon/typicons/typicons.css";
import "../src/assets/icon/fontawesome/css/fontawesome.min.css";
import "../src/assets/icon/fontawesome/css/all.min.css";
import "../src/assets/icon/ionic/ionicons.css";
import "../src/assets/icon/tabler-icons/webfont/tabler-icons.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/css/feather.css";
import "../src/index.scss";
import "../src/assets/icon/boxicons/boxicons/css/boxicons.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Router from "./app/router";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter basename={"/"}>
                <Router/>
            </BrowserRouter>
        </Provider>
    </StrictMode>
)
