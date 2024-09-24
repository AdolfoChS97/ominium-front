import { Menu, Dropdown, Button } from "antd";
import { UserOutlined, SettingOutlined, LogoutOutlined } from "@ant-design/icons";
import { UserMenuProps } from "../dataTypes";

const UserMenu = ({ userName, onSettingsClick, onLogoutClick }: UserMenuProps) => {
  const menu = (
    <Menu>
      <Menu.Item key="settings" icon={<SettingOutlined />} onClick={onSettingsClick}>
        {'Profile Settings'}
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={onLogoutClick}>
        {'Logout'}
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <Button type="text" icon={<UserOutlined />} style={{ marginLeft: 'auto' }}>
        {userName}
      </Button>
    </Dropdown>
  );
};

export default UserMenu;
