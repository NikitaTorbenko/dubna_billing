import { useState } from "react";
import styles from "./UserData.module.scss";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";

type SizeType = Parameters<typeof Form>[0]["size"];

export const UserData = () => {
  // const handleChange = (value: string) => {
  //   console.log(`selected ${value}`);
  // };

  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default"
  );

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  return (
    <div className={styles.root}>
      {/* <div className={styles.item}>
        <span>Тип: </span>
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
            { value: "Yiminghe", label: "yiminghe" },
            // { value: "disabled", label: "Disabled", disabled: true },
          ]}
        />
      </div> */}
      <Form
        labelCol={{ span: 40 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize as SizeType}
        // style={{ width: "fit-content" }}
      >
        <Form.Item label="Input">
          <Input />
        </Form.Item>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
      </Form>
    </div>
  );
};
