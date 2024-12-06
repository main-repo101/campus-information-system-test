import React from "react";
import * as MUI from "@mui/material";

export interface IFrameProp {
    src: string;
    title: string;
    width?: string;
    height?: string;
}
export default function IFrame(
    { src, title, width = "100%", height="100%" }: IFrameProp
): React.ReactElement {
    return <>
    <MUI.Container maxWidth="xl">
        <MUI.Box
        sx={{
            bgColor: `background.paper`,
            borderRadius: 1,
            borderShadow: 3,
            overflowX: `hidden`,
            p: 2
        }}
        >
            <MUI.Box
            component={`iframe`}
            src={src}
            title={title}
            sx={{
                width: {width},
                height: {height},
                border: `none`,
                borderRadius: 1
            }}
            />
        </MUI.Box>
    </MUI.Container>
    </>;
}