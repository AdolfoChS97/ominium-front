import { Layout, Menu, Typography } from "antd";
import { Link, Outlet } from "react-router-dom";
import { useLogin, useLogout, useResource } from "@refinedev/core";
import UserMenu from "./components/UserMenu";

const { Header, Sider, Content } = Layout;

const PrivateLayout = () => {

    const { mutate: logout } = useLogout();


  const goSettings = () => {
    console.log("Ir a Configuración");
  };

  const handleLogout = () => {
    logout({
        
    });
  };

  const { resources } = useResource();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible>
        <div
          className="logo"
          style={{ color: "white", padding: "16px", textAlign: "center" }}
        >
          Brand
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["dashboard"]}>
          {resources?.map((resource) => (
            <Menu.Item key={resource?.name} icon={resource?.icon}>
              <Link to={resource?.route as string}>{resource?.identifier}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>

      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            padding: "0 24px",
          }}
        >
          <Typography>
            Brand
          </Typography>
          <UserMenu
            userName="NombreUsuario"
            onSettingsClick={goSettings}
            onLogoutClick={handleLogout}
          />
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
