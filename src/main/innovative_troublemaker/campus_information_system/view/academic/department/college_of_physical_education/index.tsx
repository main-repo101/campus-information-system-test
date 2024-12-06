
import * as React from "react";
import * as MUI from "@mui/material";


const ViewCollegeOfPhysicalEducation: React.FC = () => {
    return(<>
        <div style={{ width: '100%', height: '100vh' }}>
            <iframe
                src="/resources/academic/department/college_of_pe/public/index.html/index.html"
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

export default ViewCollegeOfPhysicalEducation;
