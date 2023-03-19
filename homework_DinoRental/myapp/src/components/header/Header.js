import Nav from '../nav/Nav'
import s from './Header.module.css'
import logo from './media/logo.png'

function Header() {
  return (
    <div className={s.header}>
        <img src={logo} alt='#'/>
        <Nav/>
        <button className={s.btn_header}>Связаться</button>
    </div>
  )
}
export default Header