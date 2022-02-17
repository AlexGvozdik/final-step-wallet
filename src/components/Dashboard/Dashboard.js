import NavMenu from '../Navigation/Navigation';
import s from './Dashboard.module.css';
import CurrencyRatesPanel from '../CurrencyRatesPanel/CurrencyRatesPanel';
import Balance from '../Balance/Balance';

export default function DashBoard() {
  return (
    <div className="baseBox">
      <aside className={s.sideBar}>
        <NavMenu />
        <Balance />
        <CurrencyRatesPanel />
      </aside>
    </div>
  );
}
