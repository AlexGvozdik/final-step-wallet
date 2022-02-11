import NavMenu from '../Navigation/Navigation';
import s from './Dashboard.module.css'

export default function DashBoard() {
    return (
        <aside className={s.aside}>
            <NavMenu/>
      </aside>
  )
}
