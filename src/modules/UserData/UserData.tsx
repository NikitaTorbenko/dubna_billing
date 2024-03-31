import { useState } from "react";
import styles from "./UserData.module.scss";
import { DatePicker, Form, Input, Button, Select, Spin } from "antd";
import { mainApi } from "@/api/servises";
import type { IClientTypes } from "@/types";

export const UserData = () => {
  const { data: types, isLoading: isLoadingTypes } =
    mainApi.useGetClientTypesQuery();

  const [selectValue, setSelectValue] = useState<IClientTypes>({
    id: 0,
    key: "individual",
    value: "Физическое лицо",
  });

  const handleChange = (val: number) => {
    setSelectValue({
      ...selectValue,
      id: val,
    });
  };

  if (isLoadingTypes) return <Spin />;

  return (
    <div className={styles.root}>
      <Form
        labelCol={{ span: 40 }}
        wrapperCol={{ span: 140 }}
        layout="horizontal"
      >
        <Form.Item label="Тип">
          <Select onChange={handleChange}>
            {types?.map((el) => (
              <Select.Option value={el.id} key={el.id}>
                {el.value}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label={
            selectValue.key === "individual" ? "ФИО" : "Название организации"
          }
        >
          <Input />
        </Form.Item>
        <Form.Item label="Лимит">
          <Input />
        </Form.Item>
        <Form.Item label="Email">
          <Input />
        </Form.Item>
        <Form.Item label="Телефон">
          <Input />
        </Form.Item>
        <Form.Item label="Адрес">
          <Input />
        </Form.Item>
        <Form.Item label="Дата рождения">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Создать">
          <Button onClick={() => {}}>Создать</Button>
        </Form.Item>
      </Form>
    </div>
  );
};
