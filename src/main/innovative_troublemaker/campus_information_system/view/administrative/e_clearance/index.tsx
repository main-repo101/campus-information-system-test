import React from "react";
import * as MUI from "@mui/material";

import IFrame from "@innovative_troublemaker/campus_information_system/component/IFrame.tsx";

export default function ViewEClearance(

): React.ReactElement {
    const E_CLEARANCE_URL = `https://ict-clearance.infinityfreeapp.com`;
    return <>
        <MUI.Box
            component={`h3`}
        >
            Is it not properly loaded?&nbsp;
            <MUI.Box
                component={`a`}
                href={E_CLEARANCE_URL}
                target={`_blank`}
            >
                Click this.
            </MUI.Box>
        </MUI.Box>
        <IFrame src={E_CLEARANCE_URL} title={`e-clearance`} height={`100vh`} />
    </>;
}