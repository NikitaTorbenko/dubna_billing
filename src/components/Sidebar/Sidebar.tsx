import type { MenuProps } from "antd";
import { Menu } from "antd";
import { items } from "./model";

interface SidebarProps {
  setCurrentSelection: (num: number) => void;
}

export const Sidebar = ({ setCurrentSelection }: SidebarProps) => {
  const onClick: MenuProps["onClick"] = (e) => {
    setCurrentSelection(+e.key);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={["0"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};
