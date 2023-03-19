import s from './Nav.module.css'

function Nav() {
  return (
    <div>
        <ul className={s.nav}>
            <li className={s.li_item}> <a className={s.li_active}href='#'>О нас</a></li>
            <li className={s.li_item}> <a href='#'></a>Услуги</li>
            <li className={s.li_item}> <a href='#'></a>Аренда</li>
        </ul>
    </div>
  )
}
export default Nav