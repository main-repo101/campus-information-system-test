
import * as React from "react";
import * as MUI from "@mui/material";


const ViewPropertyCustodian: React.FC = () => {
    return(<>
        <div style={{ width: '100%', height: '100vh' }}>
            <iframe
                src="/resources/administrative/property_custodian/index.html"
                style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                }}
                title="Embedded HTML"
            ></iframe>
        </div>
    </>);
}

export default ViewPropertyCustodian;
