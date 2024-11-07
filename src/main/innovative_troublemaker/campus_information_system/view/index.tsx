
import * as React from "react";
import * as MUI from "@mui/material";

import {
    $innovative_troublemaker$campus_information_system$model$heading as $model$heading
} from "@innovative_troublemaker/campus_information_system/model/heading/pkg-info.mjs";

import {
    $innovative_troublemaker$campus_information_system$model$theme as $model$theme
} from "@innovative_troublemaker/campus_information_system/model/theme/pkg-info.mjs";

import CONTEXT_0x0003, { IStateContextType } from "@innovative_troublemaker/campus_information_system/component/layout/context/Context0x0003.tsx";



//REM: [TODO, DO_WE_NEED_NAMESPACE]
export function view_welcome(
    props: $model$heading.IHeaderProp & $model$theme.IThemeProp
): React.ReactElement {
    // const CONTEXT: IStateContextType | undefined
    // = React.useContext(CONTEXT_0x0003);

    return (
        <MUI.Container maxWidth="lg" className="p-4">
            {/* Hero Section */}
            <MUI.Paper
                elevation={3}
                className="flex flex-col items-center justify-center p-10 bg-cover bg-center mb-8 transition-transform duration-500 hover:scale-105"
                style={{ backgroundImage: "url('/path/to/hero-banner.jpg')" }}
            >
                <h1 className="text-4xl md:text-6xl font-bold">Welcome to  Campus Information System</h1>
                <p className="mt-4 text-lg md:text-xl text-center max-w-xl">
                    Discover our rich history, diverse community, and vibrant academic life.
                </p>
            </MUI.Paper>

            {/* Mission & Vision */}
            <MUI.Grid container spacing={4} className="mb-8">
                <MUI.Grid item xs={12} md={6}>
                    <MUI.Paper elevation={3} className="p-6 text-center">
                        <h2 className="text-2xl font-semibold">Our Mission</h2>
                        <p className="mt-2 text-base">
                            To educate, empower, and inspire future leaders with integrity, knowledge, and purpose.
                        </p>
                    </MUI.Paper>
                </MUI.Grid>
                <MUI.Grid item xs={12} md={6}>
                    <MUI.Paper elevation={3} className="p-6 text-center">
                        <h2 className="text-2xl font-semibold">Our Vision</h2>
                        <p className="mt-2 text-base">
                            A world where knowledge is accessible and inclusive, enabling everyone to make a difference.
                        </p>
                    </MUI.Paper>
                </MUI.Grid>
            </MUI.Grid>

            {/* Admission Link */}
            <MUI.Paper elevation={3} className="p-6 text-center">
                <MUI.Link href="/admission" className="text-blue-500 hover:underline text-lg">
                    Admissions
                </MUI.Link>
            </MUI.Paper>
        </MUI.Container>
    );
}

const ViewWelcome = view_welcome;
export default ViewWelcome;