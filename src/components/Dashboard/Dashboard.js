import NavMenu from '../Navigation/Navigation';
import s from './Dashboard.module.css';

export default function DashBoard() {
  return (
    <div className="baseBox">
      <aside className={s.sideBar}>
        <NavMenu />
      </aside>
    </div>
  );
}
