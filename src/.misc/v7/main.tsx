import React from 'react';
import ReactDOM from 'react-dom/client';
import * as ReactRouterDOM from "react-router-dom";
import * as MUI from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import { AppProvider, Navigation } from '@toolpad/core';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import * as MUIIcon from "@mui/icons-material";
import { LIGHT_THEME, DARK_THEME } from "./template-theme.mts";
import FooterI from "@innovative_troublemaker/campus_information_system/component/FooterI.tsx";

import ROUTES_GATE, { ROUTES } from "./route.tsx";

import "@innovative_troublemaker/campus_information_system/resource/css/main.css";


//REM: Navigation configuration
const NAVIGATION: Navigation = [
    { kind: 'header', title: 'Academic' },
    ROUTES.LIBRARY.navigation,
    ROUTES.SCHOLARSHIP.navigation,
    {
        segment: 'academic',
        title: 'Department',
        icon: <MUIIcon.SchoolSharp />,
        children: [
            ROUTES.COLLEGE_OF_ENGINEERING.navigation,
            ROUTES.COLLEGE_OF_NURSING.navigation,
        ],
    },
    { kind: 'divider' },
    { kind: 'header', title: 'Administrative' },
    ROUTES.ADMISSION.navigation,
    ROUTES.REGISTRAR.navigation,
    ROUTES.ACCOUNTING.navigation,
    ROUTES.OSA.navigation,
    ROUTES.CHAPEL.navigation,
    ROUTES.SPORT.navigation,
    { segment: 'integrations', title: 'Integrations', icon: <MUIIcon.Layers /> },
];

//REM: Theme configuration
const demoTheme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: { light: LIGHT_THEME, dark: DARK_THEME },
    breakpoints: {
        values: {
            xs: 0,
            sm: 960,
            md: 960,
            lg: 1200,
            xl: 1536,
        },
    },
});



//REM: Page Content Component
class PageContent extends React.Component<{ pathname: string }> {
    render() {

        const { pathname } = this.props;
        const ROUTES_GATEX = ROUTES_GATE[pathname];
        let ContentComponent: React.ComponentClass | React.FC;

        if (ROUTES_GATEX && ROUTES_GATEX.component) {
            ContentComponent = ROUTES_GATEX.component;
        }
        else {
            ContentComponent = () => <><MUI.Typography variant={`h2`}>Page Not Found!</MUI.Typography></>;
        }

        return (
            <Box sx={{ py: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <Typography sx={{ width: `100%`, textAlign: `start`, justifyContent: `center` }}>
                    &gt; Page content for {pathname}
                </Typography>
                <ContentComponent />
            </Box>
        );
    }
}

//REM: Main Component - Class-Based Implementation
class SimpleDashboardLayout extends React.Component {
    state = {
        pathname: window.location.pathname || '/',
    };

    componentDidMount() {
        this.updateDocumentTitle(this.state.pathname);

        //REM: Set up listener for popstate events (back/forward navigation)
        window.addEventListener('popstate', this.handlePopState);
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        if (prevState.pathname !== this.state.pathname) {
            this.updateDocumentTitle(this.state.pathname);
        }
    }

    componentWillUnmount() {
        //REM: Clean up popstate listener when component unmounts
        window.removeEventListener('popstate', this.handlePopState);
    }

    handlePopState = () => {
        this.setState({ pathname: window.location.pathname });
    };

    updateDocumentTitle(pathname: string) {
        const title = ROUTES_GATE[pathname]?.navigation?.title ?? "Page Not Found";
        document.title = `${title} - Campus App`;
    }

    navigate = (path: string | URL) => {
        window.history.pushState(null, '', path);
        this.setState({ pathname: path });
    };

    render(): React.ReactElement {
        const { pathname } = this.state;
        const router = {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: this.navigate,
        };

        return (<>
            <AppProvider
                navigation={NAVIGATION}
                branding={{ 
                    logo: `[LOGO]`, 
                    title: `CAMPUS`,
                }}
                router={router}
                theme={demoTheme}
            >
                <DashboardLayout>
                    {/* <ReactRouterDOM.BrowserRouter> */}
                    {/* <ReactRouterDOM.Routes> */}
                    <PageContent pathname={pathname} />
                    <FooterI/>
                    {/* </ReactRouterDOM.Routes> */}
                    {/* </ReactRouterDOM.BrowserRouter> */}
                </DashboardLayout>
            </AppProvider>
        </>);
    }
}

const container = document.getElementById('root');

if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(
        <React.StrictMode>
            <MUI.StyledEngineProvider injectFirst>
                <SimpleDashboardLayout />
            </MUI.StyledEngineProvider>
        </React.StrictMode>
    );
}
