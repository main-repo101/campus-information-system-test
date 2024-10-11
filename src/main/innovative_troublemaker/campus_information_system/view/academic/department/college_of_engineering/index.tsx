import * as React from "react";
import * as MUI from "@mui/material";
import * as ReactRouterDOM from "react-router-dom";

import { ROUTES } from "@innovative_troublemaker/campus_information_system/component/layout/context/route.tsx";

import Layout0x0001 from "./layout/layout0x0001.tsx";
import ViewHome from "./view-home.tsx";
import { IsoTwoTone } from "@mui/icons-material";

const ViewCollegeOfEngineering: React.FC = () => {

    // const [isToggle, setToggle] = React.useState<boolean>(true);

    return (<>
        <ReactRouterDOM.BrowserRouter>
            <MUI.Typography className={`w-full`} 
            variant={`innovativeTroublemakerWarning`}
            sx={(theme) => ({})}>
                [Warning!] bugs found
            </MUI.Typography>
            <ReactRouterDOM.Routes>
                <ReactRouterDOM.Route path={ROUTES.COLLEGE_OF_ENGINEERING.path} element={<Layout0x0001 />}>
                    <ReactRouterDOM.Route index element={<ViewHome/>} />
                    <ReactRouterDOM.Route path={ROUTES.COLLEGE_OF_COMPUTER_ENGINEERING.path} element={
                        ROUTES.COLLEGE_OF_COMPUTER_ENGINEERING.component && <ROUTES.COLLEGE_OF_COMPUTER_ENGINEERING.component />
                    } />
                    <ReactRouterDOM.Route path={ROUTES.COLLEGE_OF_GEODETIC_ENGINEERING.path} element={
                        ROUTES.COLLEGE_OF_GEODETIC_ENGINEERING.component && <ROUTES.COLLEGE_OF_GEODETIC_ENGINEERING.component />
                    } />
                    <ReactRouterDOM.Route path={`*`} element={<><MUI.Typography>Page not found!</MUI.Typography></>} />
                </ReactRouterDOM.Route>
            </ReactRouterDOM.Routes>
        </ReactRouterDOM.BrowserRouter>
    </>);
};

export default ViewCollegeOfEngineering;
