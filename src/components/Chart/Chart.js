import { Doughnut } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";

import s from "./Chart.module.css";

import { useSelector } from "react-redux";
import authSelectors from "../../redux/categories/categories-selectors";

ChartJS.register(ArcElement, Tooltip);

const data = {
  labels: [
    "Основные расходы",
    "Продукты",
    "Машина",
    "Забота о себе",
    "Забота о детях",
    "Товары для дома",
    "Образование",
    "Досуг",
    "Другие расходы",
  ],
  datasets: [
    {
      data: [7, 8, 3, 5, 2, 3, 7, 6, 8],
      backgroundColor: [
        "#FED057",
        "#FFD8D0",
        "#FD9498",
        "#C5BAFF",
        "#6E78E8",
        "#4A56E2",
        "#81E1FF",
        "#24CCA7",
        "#00AD84",
      ],
      borderColor: "transparent",
    },
  ],
};
function Chart() {
  const categories = useSelector(authSelectors.getAllUserCategory);
  console.log(categories);

  return (
    <div className={s.chart}>
      <Doughnut data={data} options={{ cutout: "75%" }} />
      <b className={s.sum}>₴ 24 000.00</b>
    </div>
  );
}

export default Chart;
