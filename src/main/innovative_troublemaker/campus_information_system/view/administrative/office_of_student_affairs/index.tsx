
import * as React from "react";
import * as MUI from "@mui/material";


const ViewOSA: React.FC = () => {
    return(<>
        <div style={{ width: '100%', height: '100vh' }}>
            <iframe
                src="/resources/administrative/office_of_student_affair/index.html"
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

export default ViewOSA;
