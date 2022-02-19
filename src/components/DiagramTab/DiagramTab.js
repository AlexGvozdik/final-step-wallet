import Chart from '../Chart/Chart';
import s from './DiagramTab.module.css';
import Table from './Table';

function DiagramTab() {
  return (
    <div className={s.diagramTab}>
      <h1 className={s.diagramHeader}>Статистика</h1>
      <div className={s.diagramTabConteiner}>
        <Chart />
      </div>
      <Table />
    </div>
  );
}

export default DiagramTab;
