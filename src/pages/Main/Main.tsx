import { useState } from "react";
import styles from "./Main.module.scss";
import { Sidebar } from "@/components/Sidebar";
import { ClientsList, TariffsList } from "@/components/ContentList";

export const Main = () => {
  const [currentSelection, setCurrentSelection] = useState(0);

  return (
    <div className={styles.main}>
      <Sidebar setCurrentSelection={setCurrentSelection} />
      {currentSelection === 0 ? <ClientsList /> : <TariffsList />}
    </div>
  );
};
