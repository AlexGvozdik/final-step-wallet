import NavMenu from '../Navigation/Navigation';
import s from './Dashboard.module.css';
import CurrencyRatesPanel from '../CurrencyRatesPanel/CurrencyRatesPanel';
import Balance from '../Balance/Balance';
import HeaderNav from '../HeaderNav/HeaderNav'
import AddTransactionBtn from '../AddTransactionBtn'
import ModalAddTransaction from '../ModalAddTransaction';
export default function DashBoard() {
  return (
    <div className="baseBox">
      <aside className={s.sideBar}>
        <HeaderNav/>
        <NavMenu />
        <Balance />
        <CurrencyRatesPanel />
        <AddTransactionBtn />
        <ModalAddTransaction/>
      </aside>
    </div>
  );
}
