import styles from "./ContentList.module.scss";
import { List, Spin } from "antd";
import { mainApi } from "@/api/servises";

export const ClientsList = () => {
  const { data, isLoading } = mainApi.useGetClientsQuery();

  if (isLoading) return <Spin />;

  console.log(data);

  return (
    <List
      className={styles.list}
      header={<div>Header</div>}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <div>
            <div>id: {item.id}</div>
            <div>name: {item.name}</div>
            <div>balance: {item.balance}</div>
            <div>limit: {item.limit}</div>
            <div>address: {item.address}</div>
            <div>email: {item.email}</div>
            <div>phone: {item.phone}</div>
            <div>birth date: {item.birth_date}</div>
            <div>status: {item.status.value}</div>
            <div>type: {item.type.value}</div>
          </div>
        </List.Item>
      )}
    />
  );
};
