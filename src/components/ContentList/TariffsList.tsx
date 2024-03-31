import { List, Spin } from "antd";
import { mainApi } from "@/api/servises";

export const TariffsList = () => {
  const { data, isLoading } = mainApi.useGetTariffsQuery();

  if (isLoading) return <Spin />;

  console.log(data);

  return (
    <List
      style={{ width: "100%" }}
      header={<div>Header</div>}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <div>id: {item.id}</div>
          {/* <div>name: {item.name}</div>
          <div>balance: {item.balance}</div>
          <div>limit: {item.limit}</div>
          <div>address: {item.address}</div>
          <div>email: {item.email}</div>
          <div>phone: {item.phone}</div>
          <div>birth date: {item.birth_date}</div>
          <div>status: {item.status.value}</div> */}
          <div>type: {item.type.value}</div>
        </List.Item>
      )}
    />
  );
};
