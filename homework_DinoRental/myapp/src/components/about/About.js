import s from './About.module.css'
import velo from './media/aboutVelo.png'



function About() {
  return (
    <div className={s.section_about}>

        <div className={s.about_title}>
            <h2 className={s.about_name}>Что мы предлагаем</h2>
            <p className={s.about_text}>В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта.  Все работы выполняем качественно и с душой. </p>
        </div>

        <div className={s.about_img}>
            <img src={velo} alt='#' />
        </div>

    </div>
  )
}
export default About