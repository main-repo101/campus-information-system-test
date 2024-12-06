
import * as MUI from "@mui/material";
import * as MUIIcon from "@mui/icons-material";

import { $innovative_troublemaker$campus_information_system$model as $model } from "@innovative_troublemaker/campus_information_system/model/pkg-info.mts"

import ViewCollegeOfEngineering from "@innovative_troublemaker/campus_information_system/view/academic/department/college_of_engineering/index.tsx";

import ViewCollegeOfNursing from "@innovative_troublemaker/campus_information_system/view/academic/department/college_of_nursing/index.tsx";

import ViewCollegeOfCriminology from "@innovative_troublemaker/campus_information_system/view/academic/department/college_of_criminology/index.tsx";

import ViewCollegeOfICT from "@innovative_troublemaker/campus_information_system/view/academic/department/college_of_information_and_communication_technology/index.tsx";

import ViewCollegeOfEduction from "@innovative_troublemaker/campus_information_system/view/academic/department/college_of_education/index.tsx";

import ViewOSA from "@innovative_troublemaker/campus_information_system/view/administrative/office_of_student_affairs/index.tsx";

import ViewChapel from "@innovative_troublemaker/campus_information_system/view/administrative/chapel/index.tsx";

import ViewSport from "@innovative_troublemaker/campus_information_system/view/administrative/sport/index.tsx";

import ViewLibrary from "@innovative_troublemaker/campus_information_system/view/academic/library/index.tsx";

import ViewAdmission from "@innovative_troublemaker/campus_information_system/view/administrative/admission/index.tsx";

import ViewScholarship from "@innovative_troublemaker/campus_information_system/view/academic/scholarship/index.tsx";

import ViewWelcome from "@innovative_troublemaker/campus_information_system/view/index.tsx";

import ViewAccounting from "@innovative_troublemaker/campus_information_system/view/administrative/accounting/index.tsx";

import ViewRegistrar from "@innovative_troublemaker/campus_information_system/view/administrative/registrar/index.tsx";

import ViewOfficeOfVicePresident from "@innovative_troublemaker/campus_information_system/view/administrative/office_of_vice_president/index.tsx";

import ViewCommunityExtension from "@innovative_troublemaker/campus_information_system/view/administrative/community_extension/index.tsx";

import ViewEClearance from "@innovative_troublemaker/campus_information_system/view/administrative/e_clearance/index.tsx";

import ViewCollegeOfBusinessAdministration from "@innovative_troublemaker/campus_information_system/view/academic/department/college_of_business_administration/index.tsx";
import ViewQualityManagementOffice from "../../../view/administrative/quality_management_office";
import ViewGuidanceOffice from "../../../view/administrative/guidance_office";
import ViewCollegeOfPhysicalEducation from "../../../view/academic/department/college_of_physical_education";
import ViewCollgeOfHospotalityAndTourismManagement from "../../../view/academic/department/collge_of_chtm";

export const ROUTES: { readonly [key: string]: $model.IRouteData } = Object.freeze({
    HOME: Object.freeze({
        ID: "HOME",
        path: "/",
        component: ViewWelcome,
        navigation: {
            segment: "home",
            title: "Home",
            icon: <MUIIcon.HomeSharp />
        }
    }),
    COLLEGE_OF_ENGINEERING: Object.freeze({
        ID: "COLLEGE_OF_ENGINEERING",
        path: "/academic/department/college-of-engineering",
        component: ViewCollegeOfEngineering,
        navigation: {
            segment: "department/college-of-engineering",
            title: "College of Engineering",
            icon: <MUIIcon.SchoolSharp />
        }
    }),
    COLLEGE_OF_COMPUTER_ENGINEERING: Object.freeze({
        ID: "COLLEGE_OF_COMPUTER_ENGINEERING",
        path: "/academic/department/college-of-engineering/computer-engineering",
        // component: ViewCollegeOfComputerEngineering,
        component: () => <>
            <MUI.Typography className={`w-full`} variant="innovativeTroublemakerWarning">[Warning!] bugs found</MUI.Typography>
            <MUI.Typography variant={`innovativeTroublemakerH1`}>Computer Engineering!</MUI.Typography>
        </>,
        navigation: {
            segment: "department/college-of-engineering/computer-engineering",
            title: "College of Computer Engineering",
            icon: <MUIIcon.SchoolSharp />
        }
    }),
    COLLEGE_OF_GEODETIC_ENGINEERING: Object.freeze({
        ID: "COLLEGE_OF_GEODETIC_ENGINEERING",
        path: "/academic/department/college-of-engineering/geodetic-engineering",
        // component: ViewCollegeOfGeodeticEngineering,
        component: () => <>
            <MUI.Typography className={`w-full`} variant={`innovativeTroublemakerWarning`}>[Warning!] bugs found</MUI.Typography>
            <MUI.Typography variant={`innovativeTroublemakerH1`}>Geodetic Engineering!</MUI.Typography></>,
        navigation: {
            segment: "department/college-of-engineering/geodetic-engineering",
            title: "College of Geodetic Engineering",
            icon: <MUIIcon.SchoolSharp />
        }
    }),
    COLLEGE_OF_NURSING: Object.freeze({
        ID: "COLLEGE_OF_NURSING",
        path: "/academic/department/college-of-nursing",
        component: ViewCollegeOfNursing,
        navigation: {
            segment: "department/college-of-nursing",
            title: "College of Nursing",
            icon: <MUIIcon.SchoolSharp />
        }
    }),
    COLLEGE_OF_CRIMINOLOGY: Object.freeze({
        ID: "COLLEGE_OF_CRIMINOLOGY",
        path: "/academic/department/college-of-criminology",
        component: ViewCollegeOfCriminology,
        navigation: {
            segment: "department/college-of-criminology",
            title: "College of Criminology",
            icon: <MUIIcon.SchoolSharp />
        }
    }),
    COLLEGE_OF_ICT: Object.freeze({
        ID: "COLLEGE_OF_ICT",
        path: "/academic/department/college-of-ict",
        component: ViewCollegeOfICT,
        navigation: {
            segment: "department/college-of-ict",
            title: "College of ICT",
            icon: <MUIIcon.SchoolSharp />
        }
    }),
    COLLEGE_OF_EDUCATION: Object.freeze({
        ID: "COLLEGE_OF_EDUCATION",
        path: "/academic/department/college-of-education",
        component: ViewCollegeOfEduction,
        navigation: {
            segment: "department/college-of-education",
            title: "College of Eduction",
            icon: <MUIIcon.SchoolSharp />
        }
    }),
    OSA: Object.freeze({
        ID: "OSA",
        path: "/administrative/office-of-student-affairs",
        component: ViewOSA,
        navigation: {
            segment: "administrative/office-of-student-affairs",
            title: "Office of Student Affairs",
            icon: <MUIIcon.AdminPanelSettingsSharp />
        }
    }),
    CHAPEL: Object.freeze({
        ID: "CHAPEL",
        path: "/administrative/chapel",
        component: ViewChapel,
        navigation: {
            segment: "administrative/chapel",
            title: "Chapel",
            icon: <MUIIcon.ChurchSharp />
        }
    }),
    SPORT: Object.freeze({
        ID: "SPORT",
        path: "/administrative/sport",
        component: ViewSport,
        navigation: {
            segment: "administrative/sport",
            title: "Sport",
            icon: <MUIIcon.SportsBaseballSharp />
        }
    }),
    LIBRARY: Object.freeze({
        ID: "LIBRARY",
        path: "/academic/library",
        component: ViewLibrary,
        navigation: {
            segment: "academic/library",
            title: "Library",
            icon: <MUIIcon.LibraryBooksSharp />
        }
    }),
    ADMISSION: Object.freeze({
        ID: "ADMISSION",
        path: "/adminstrative/admission",
        component: ViewAdmission,
        navigation: {
            segment: "adminstrative/admission",
            title: "Admission",
            icon: <MUIIcon.JoinFullSharp />
        }
    }),
    SCHOLARSHIP: Object.freeze({
        ID: "SCHOLARSHIP",
        path: "/academic/scholarship",
        component: ViewScholarship,
        navigation: {
            segment: "academic/scholarship",
            title: "Scholarship",
            icon: <MUIIcon.WorkspacePremium />
        }
    }),
    ACCOUNTING: Object.freeze({
        ID: "ACCOUNTING",
        path: "/administrative/accounting",
        component: ViewAccounting,
        navigation: {
            segment: "administrative/accounting",
            title: "Accounting",
            icon: <MUIIcon.AccountBalanceSharp />
        }
    }),
    REGISTRAR: Object.freeze({
        ID: "REGISTRAR",
        path: "/administrative/registrar",
        component: ViewRegistrar,
        navigation: {
            segment: "administrative/registrar",
            title: "Registrar",
            icon: <MUIIcon.FolderSharedSharp />
        }
    }),
    OFFICE_OF_VICE_PRESIDENT: Object.freeze({
        ID: "OFFICE_OF_VICE_PRESIDENT",
        path: "/administrative/office-of-Vice-president",
        component: ViewOfficeOfVicePresident,
        navigation: {
            segment: "administrative/office-of-Vice-president",
            title: "Office of Vice President",
            icon: <MUIIcon.BusinessCenterSharp />
        }
    }),
    COMMUNITY_EXTENSION: Object.freeze({
        ID: "COMMUNITY_EXTENSION",
        path: "/administrative/community-extension",
        component: ViewCommunityExtension,
        navigation: {
            segment: "administrative/community-extension",
            title: "Communit Extension",
            icon: <MUIIcon.BusinessCenterSharp />
        }
    }),
    E_CLEARANCE: Object.freeze({
        ID: "E_CLEARANCE",
        path: "/administrative/e-clearance/ict",
        component: ViewEClearance,
        navigation: {
            segment: "e-clearance/ict",
            title: "ICT",
            icon: <MUIIcon.SchoolRounded />
        }
    }),
    COLLEGE_OF_BUSINESS_ADMINISTRATION: Object.freeze({
        ID: "COLLEGE_OF_BUSINESS_ADMINISTRATION",
        path: "/academic/department/college-of-business-administration",
        component: ViewCollegeOfBusinessAdministration,
        navigation: {
            segment: "department/college-of-business-administration",
            title: "College of BA",
            icon: <MUIIcon.SchoolRounded />
        }
    }),
    QUALITY_MANAGEMENT_OFFICE: Object.freeze({
        ID: "QUALITY_MANAGEMENT_OFFICE",
        path: "/administrative/quality-management-office",
        component: ViewQualityManagementOffice,
        navigation: {
            segment: "administrative/quality-management-office",
            title: "Quality Management Office",
            icon: <MUIIcon.ManageAccountsRounded />
        }
    }),
    GUIDANCE_OFFICE: Object.freeze({
        ID: "GUIDANCE_OFFICE",
        path: "/administrative/guidance-office",
        component: ViewGuidanceOffice,
        navigation: {
            segment: "administrative/guidance-office",
            title: "Guidance Office",
            icon: <MUIIcon.ManageAccountsRounded />
        }
    }),
    COLLEGE_OF_PHYSICAL_EDUCATION: Object.freeze({
        ID: "COLLEGE_OF_PHYSICAL_EDUCATION",
        path: "/academic/department/college-of-physical-education",
        component: ViewCollegeOfPhysicalEducation,
        navigation: {
            segment: "department/college-of-physical-education",
            title: "College of PE",
            icon: <MUIIcon.SchoolRounded />
        }
    }),
    COLLEGE_OF_HOSTPITALITY_AND_TOURISM_MANAGEMENT: Object.freeze({
        ID: "COLLEGE_OF_HOSTPITALITY_AND_TOURISM_MANAGEMENT",
        path: "/academic/department/college-of-hospitality-and-tourism-management",
        component: ViewCollgeOfHospotalityAndTourismManagement,
        navigation: {
            segment: "department/college-of-hospitality-and-tourism-management",
            title: "College of CHTM",
            icon: <MUIIcon.SchoolRounded />
        }
    }),
});


export const ROUTES_GATE: Readonly<{ [key: string]: $model.IRouteData }> = (() => {
    const GATES: { [key: string]: $model.IRouteData } = {};

    Object.values(ROUTES).forEach(route => {
        GATES[route.path] = Object.freeze( route );
    });

    return Object.freeze(GATES);
})();


export default ROUTES_GATE;
