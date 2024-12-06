
import * as React from "react";
import * as MUI from "@mui/material";


const ViewAcademicVicePresidentOffice: React.FC = () => {
    return(<>
        <div style={{ width: '100%', height: '100vh' }}>
            <iframe
                src="/resources/administrative/academic_vice_president_office/AVP.HTML"
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

export default ViewAcademicVicePresidentOffice;
