import styles from "./ContentList.module.scss";
import { List, Spin } from "antd";
import { mainApi } from "@/api/servises";

export const TariffsList = () => {
  const { data, isLoading } = mainApi.useGetTariffsQuery();

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
            <div>period: {item.period}</div>
            <div>price: {item.price}</div>
            <div>type: {item.type.value}</div>
          </div>
        </List.Item>
      )}
    />
  );
};
