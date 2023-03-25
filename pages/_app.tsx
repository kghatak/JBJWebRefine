import React from "react";
import { AppProps } from "next/app";
import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  RefineSnackbarProvider,
  CssBaseline,
  GlobalStyles,
  ReadyPage,
  ErrorComponent,
  AuthPage,
} from "@pankod/refine-mui";

import {
  AccountCircleOutlined,
  AccountTreeOutlined,
  PeopleAltOutlined,
  SchoolOutlined,
  DashboardOutlined,
  BookOutlined, 
  PodcastsOutlined,
  Diversity3Outlined,
  HomeWorkOutlined
} from '@mui/icons-material';

import Home from "./home";
import SchoolList from "./SchoolList";
import SchoolCreate from "./SchoolCreate";
import StudentList from "./StudentList";

import schoolDetails from "./schoolDetails";
import students from "./students";
import exams from "./exams";
import workflows from "./workflows"; 

import routerProvider from "@pankod/refine-nextjs-router";
import dataProvider from "@pankod/refine-simple-rest";
import { MuiInferencer } from "@pankod/refine-inferencer/mui";
import { ColorModeContextProvider } from "@contexts";
import { Title, Sider, Layout, Header } from "@components/layout";
import { authProvider } from "src/authProvider";

//const API_URL = "https://api.fake-rest.refine.dev";
const API_URL = "http://localhost:5010";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ColorModeContextProvider>
      <CssBaseline />
      <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
      <RefineSnackbarProvider>
        <Refine
          routerProvider={routerProvider}
          dataProvider={dataProvider(API_URL)}
          notificationProvider={notificationProvider}
          ReadyPage={ReadyPage}
          catchAll={<ErrorComponent />}
          resources={[
            // {
            //   name: "posts",
            //   list: MuiInferencer,
            //   edit: MuiInferencer,
            //   show: MuiInferencer,
            //   create: MuiInferencer,
            //   canDelete: true,
            //   icon: <PodcastsOutlined/>
              
            // },
            {
              name: "user",
              list: MuiInferencer,
              edit: MuiInferencer,
              show: MuiInferencer,
              create: MuiInferencer,
              canDelete: true,
              icon: <PeopleAltOutlined/>,

              
            },
            {
              name: "school",
              list: SchoolList,
              edit: MuiInferencer,
              show: MuiInferencer,
              create: SchoolCreate,
              canDelete: true,
              icon: <HomeWorkOutlined/>
              
            },
            // {
            //   name: "School",
            //   list: schools,
            //   show: schoolDetails,
            //   create: addModifySchools,
            //   edit: addModifySchools,
            //   icon: <SchoolOutlined/>
              
            // },
            {
              name: "Student",
              list: StudentList,
              icon: <Diversity3Outlined/>
              
            },
            {
              name: "Exam",
              list: MuiInferencer,
              icon: <BookOutlined/>
              
            },
            {
              name: "Workflow",
              list: MuiInferencer,
              icon: <AccountTreeOutlined/>
              
            }
          ]}
          Title={Title}
          Sider={Sider}
          Layout={Layout}
          Header={Header}
          authProvider={authProvider}
          LoginPage={AuthPage}
          DashboardPage={Home}
        >
          <Component {...pageProps} />
        </Refine>
      </RefineSnackbarProvider>
    </ColorModeContextProvider>
  );
}

export default MyApp;
