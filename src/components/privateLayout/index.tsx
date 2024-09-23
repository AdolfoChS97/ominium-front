import { Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";
import { useResource } from "@refinedev/core";

const { Header, Sider, Content } = Layout;

const PrivateLayout = () => {

    const { resources } = useResource();
    console.log(resources);
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider collapsible>
                <div className="logo" style={{ color: "white", padding: "16px", textAlign: "center" }}>
                    Brand
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={["dashboard"]}>
                    { resources?.map((resource) => (
                        <Menu.Item key={resource?.name} icon={resource?.icon}>
                            <Link to={resource?.route as string}>{resource?.identifier}</Link>
                        </Menu.Item>
                        
                    ))}
                </Menu>
            </Sider>

            <Layout>
                <Header>
                    <div style={{ paddingLeft: "16px" }}>Brand y logout</div>
                </Header>
                <Content style={{ margin: "8px" }}>
                    <div style={{ padding: 24, background: "#fff", minHeight: "100%" }}>
                        <Outlet />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default PrivateLayout;
