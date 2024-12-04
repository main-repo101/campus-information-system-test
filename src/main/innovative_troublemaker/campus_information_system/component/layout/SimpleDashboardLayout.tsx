
import * as React from "react";
import * as Toolpad from "@toolpad/core";
import * as MUI from "@mui/material";
import * as MUIIcon from "@mui/icons-material";

import ROUTES_GATE, { ROUTES } from "@innovative_troublemaker/campus_information_system/component/layout/context/route.tsx";

import TOOLPAD_THEME from "@innovative_troublemaker/campus_information_system/component/layout/theme/template-theme-ii.mts";

import FooterI from "@innovative_troublemaker/campus_information_system/component/FooterI.tsx";

import PageContent from "@innovative_troublemaker/campus_information_system/component/PageContent.tsx";


import iconCampusLogo from "@innovative_troublemaker/campus_information_system/resource/img/sjp2cd-logo-002.png";

type AuthProvider = {
    id: string;
    name: string;
};

const NAVIGATION: Toolpad.Navigation = [
    { kind: 'header', title: 'Academic' },
    ROUTES.LIBRARY.navigation,
    ROUTES.SCHOLARSHIP.navigation,
    {
        segment: 'academic',
        title: 'Department',
        icon: <MUIIcon.SchoolSharp />,
        children: [
            ROUTES.COLLEGE_OF_ICT.navigation,
            ROUTES.COLLEGE_OF_ENGINEERING.navigation,
            ROUTES.COLLEGE_OF_NURSING.navigation,
            ROUTES.COLLEGE_OF_CRIMINOLOGY.navigation,
            ROUTES.COLLEGE_OF_EDUCATION.navigation,
            ROUTES.COLLEGE_OF_BUSINESS_ADMINISTRATION.navigation,
        ],
    },
    { kind: 'divider' },
    { kind: 'header', title: 'Administrative' },
    ROUTES.ADMISSION.navigation,
    ROUTES.REGISTRAR.navigation,
    ROUTES.ACCOUNTING.navigation,
    ROUTES.OSA.navigation,
    ROUTES.CHAPEL.navigation,
    ROUTES.OFFICE_OF_VICE_PRESIDENT.navigation,
    ROUTES.SPORT.navigation,
    ROUTES.COMMUNITY_EXTENSION.navigation,
    {
        segment: 'administrative',
        title: 'E-Clearance',
        icon: <MUIIcon.ChecklistRtlRounded />,
        children: [
            ROUTES.E_CLEARANCE.navigation,
        ],
    },
    { segment: 'integrations', title: 'Integrations', icon: <MUIIcon.Layers /> },
];

interface ISimpleDashboardLayoutProps {
    title?: string;
    miniTitle?: string;
}

interface ISimpleDashboardLayoutState {
    pathname: string; 
    theTitle?: string;
}

export default class SimpleDashboardLayout extends React.Component<ISimpleDashboardLayoutProps, ISimpleDashboardLayoutState> {

    public constructor(props: ISimpleDashboardLayoutProps) {
        super(props);
        this.state = {
            pathname: window.location.pathname || '/',
            theTitle: window.innerWidth < 1024 ? this.props.miniTitle : this.props.title,
        };
    }

    componentDidMount() {
        this.updateDocumentTitle(this.state.pathname);
        //REM: Set up listener for popstate events (back/forward navigation)
        window.addEventListener('popstate', this.handlePopState);
        window.addEventListener("resize", this.handleResize);

    }

    componentDidUpdate(prevProps: any, prevState: any) {
        if (prevState.pathname !== this.state.pathname) {
            this.updateDocumentTitle(this.state.pathname);
        }
    }

    componentWillUnmount() {
        //REM: Clean up popstate listener when component unmounts
        window.removeEventListener('popstate', this.handlePopState);
        window.removeEventListener("resize", this.handleResize);

    }

    handlePopState = () => {
        this.setState({ pathname: window.location.pathname });
    };

    updateDocumentTitle(pathname: string | URL ) {
        const title = ROUTES_GATE[String(pathname)]?.navigation?.title ?? "Page Not Found";
        document.title = `${title} - Campus App`;
    }

    navigate = (path: string|URL) => {
        window.history.pushState(null, '', path);
        this.setState({
            pathname: String(path) 
        });
    };

    // handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     this.setState({ [event.target.name]: event.target.value });
    // };

    handleSignIn = (provider: AuthProvider) => {
        console.log(`Signing in with ${provider.name}`);
    };


    //REM: Update state on window resize
    handleResize = () => {
        this.setState((prev) => ({
            ...prev,
            theTitle: window.innerWidth < 1024 ? this.props.miniTitle : this.props.title,
        }));
    };

    render(): React.ReactElement {
        const { pathname } = this.state;
        const router = {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: this.navigate,
        };

        return (<>

            <Toolpad.AppProvider drawer={{
                    variant: "permanent",
                    collapsed: false,
                    open: true,
                }} //REM: [TODO] not working drawer disable collapse
                navigation={NAVIGATION}
                branding={{
                    logo: <><img src={iconCampusLogo}/></>,
                    title: this.state.theTitle??"<unknown>",
                }}
                router={router}
                theme={TOOLPAD_THEME}
            >
                <Toolpad.DashboardLayout sx={{}} drawer={{
                    variant: "permanent",
                    collapsed: false,
                    open: true,
                }}>
                    {/* <MUI.Drawer
                        variant="persistent" //REM: Set to persistent for collapsing behavior
                        open={false}
                        sx={{
                            width: 240,
                            '& .MuiDrawer-paper': {
                                width: 240,
                                boxSizing: 'border-box',
                            },
                        }}
                    >
                    </MUI.Drawer> */}

                    <MUI.Box sx={{ px: 2, }} className={`max-h-full`}>
                        {/* <ReactRouterDOM.BrowserRouter> */}
                        {/* <ReactRouterDOM.Routes> */}
                        <PageContent pathname={pathname} />
                        {/* <FooterI /> */}
                        {/* </ReactRouterDOM.Routes> */}
                        {/* </ReactRouterDOM.BrowserRouter> */}
                    </MUI.Box>
                </Toolpad.DashboardLayout>
            </Toolpad.AppProvider >
        </>);
    }
}