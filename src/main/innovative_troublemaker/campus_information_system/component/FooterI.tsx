
import * as React from "react";
import * as ReactRouterDOM from "react-router-dom";
import * as MUI from "@mui/material";

const FooterI: React.FC = () => {

    return (<>
        <MUI.Stack spacing={2} maxWidth="lg" className="flex flex-col items-center justify-center">
            <MUI.Typography variant="h4" gutterBottom>
                Contact Us
            </MUI.Typography>
            <MUI.Typography variant="body1">
                For more information, feel free to contact us at:
                <br />
                Email: <a href="mailto:info@campus.edu.ph">info@campus.edu.ph</a>
                <br />
                Phone: (82) 123-1234 | +63 912-1234-123
            </MUI.Typography>

            {/*REM: Footer Section */}
            <MUI.Box mt={8}>
                <MUI.Typography variant="caption" color="textSecondary" className="text-gray-300">
                    © {new Date().getFullYear()} [Campus Name]. All rights reserved.
                </MUI.Typography>
            </MUI.Box>
        </MUI.Stack>
    </>);
}

export default FooterI;