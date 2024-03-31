import { getItem } from "./getItem";
import type { MenuProps } from "antd";

export const items: MenuProps["items"] = [
  getItem("Клиенты", "0"),
  getItem("Тарифы", "1"),
];
