import { useState } from "react";
import { Input } from "antd";
import styles from "./Main.module.scss";
import { Sidebar } from "@/components/Sidebar";
import { ClientsList, TariffsList } from "@/components/ContentList";
import { UserData } from "@/modules/UserData";

export const Main = () => {
  const [isActivePlus, setIsActivePlus] = useState(false);
  const [value, setValue] = useState("");
  const [currentSelection, setCurrentSelection] = useState(0);

  return (
    <div className={styles.main}>
      <Sidebar setCurrentSelection={setCurrentSelection} />
      <div>
        <Input
          placeholder="Поиск типоу"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className={styles.main}>
          {currentSelection === 0 ? (
            <ClientsList setIsActivePlus={setIsActivePlus} />
          ) : (
            <TariffsList />
          )}
          {isActivePlus && <UserData />}
        </div>
      </div>
    </div>
  );
};
