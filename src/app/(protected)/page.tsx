import clsx from "clsx";

import { titleFont } from "@/assets/fonts";
import { Counter } from "@/components/_reduxExampleCounter/Counter";

import "./page.scss";

export default function Dashboard() {
  return (
    <div className={clsx(["protected-page", "dashboard-page"])}>
      <h1 className={titleFont.className}>Dashboard</h1>

      <Counter />
    </div>
  );
}
