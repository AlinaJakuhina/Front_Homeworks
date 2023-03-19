import s from './FooterRental.module.css'
import rental from './media/rental.png'

function FooterRental() {
  return (
    <div className={s.rental_section}>

        <div className={s.img_rental}>
            <img src={rental} alt='#'/>
        </div>

        <div className={s.rental_title}>
            <h2 className={s.rental_name}>Прокат велосипедов</h2>

            <p className={s.rental_text}>У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!</p>
        </div>

    </div>
  )
}
export default FooterRental
