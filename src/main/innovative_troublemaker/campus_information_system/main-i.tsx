import React from 'react';
import ReactDOM from 'react-dom/client';
import * as MUI from '@mui/material';

import SimpleDashboardLayout from "@innovative_troublemaker/campus_information_system/component/layout/SimpleDashboardLayout.tsx";

import "@innovative_troublemaker/campus_information_system/resource/css/main.css";

const container = document.getElementById('root');

if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(
        <React.StrictMode>
            <MUI.StyledEngineProvider injectFirst={true}>
                <div className={`relative overflow-hidden`}>
                    <div className={'flex flex-col place-items-center bg-black text-yellow-300 fixed top-[0rem] z-[100000] w-full '}>
                        <MUI.Typography className="text-[0.8rem] md:text-[1.5rem]">This is a test conducted solely for educational purposes.</MUI.Typography>
                    </div>
                    <div className={`temp-padding pt-[1.5rem] md:pt-[2rem] w-full `}></div>
                <SimpleDashboardLayout title={`Saint John Paull II College of Davao`} miniTitle={`SJP2CD`} />
                </div>
            </MUI.StyledEngineProvider>
        </React.StrictMode>
    );
}
