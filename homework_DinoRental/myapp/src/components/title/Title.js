import s from "./Title.module.css"
import din from './media/din 1.png'



function Title() {
  return (
    <div className={s.sect_title}>

        <div className={s.title}>
            <h2 className={s.text_title}>Веломастерская “Велозар”</h2>
        <p className={s.p_title}>Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.</p>

        </div>

       <div className={s.dino_img}>
       <img src={din} alt='#'/>
       </div>
       
    </div>
  )
}
export default Title
