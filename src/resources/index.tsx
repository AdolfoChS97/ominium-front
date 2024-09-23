import {
    DashboardOutlined,
} from "@ant-design/icons";
import { IResourceItem } from "@refinedev/core";

export const AppResources: IResourceItem[] = [
    {
        route: "/dashboard",
        name: "dashboard",
        identifier: "Dashboard",
        icon: <DashboardOutlined />,
        meta: {} 
    }
];