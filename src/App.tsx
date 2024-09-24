import { Authenticated, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { useNotificationProvider } from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import routerBindings, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { App as AntdApp } from "antd";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { authProvider } from "./providers/authProvider";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { Login } from "./pages/login";
import { Dashboard } from "./pages/dashboard";
import { AppResources } from "./resources";
import PrivateLayout from "./components/privateLayout";

function App() {
  const API_URL = process?.env?.API_URL as unknown as string;

  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <AntdApp>
            <DevtoolsProvider>
              <Refine
                dataProvider={{
                  default: dataProvider(API_URL),
                }}
                notificationProvider={useNotificationProvider}
                routerProvider={routerBindings}
                authProvider={authProvider}
                resources={AppResources}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "zdSJel-5YWNSz-pmCOfQ",
                }}
              >
                <Routes>
                  <Route path="/" element={<Login />} />
                  <Route
                    element={
                      <Authenticated key={""} fallback={<Navigate to="/" />}>
                        <PrivateLayout />
                      </Authenticated>
                    }
                  >
                    <Route path="/dashboard" element={<Dashboard />} />
                  </Route>
                </Routes>
                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
              <DevtoolsPanel />
            </DevtoolsProvider>
          </AntdApp>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
