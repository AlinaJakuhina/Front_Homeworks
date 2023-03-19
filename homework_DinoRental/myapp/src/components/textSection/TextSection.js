import s from './TextSection.module.css'


function TextSection() {
  return (
    <div>
        <div className={s.sect_description}>
            <p className={s.text_description}>Приехав к нам однажды, многие наши клиенты становятся <br/> постоянными, а часть из них даже друзьями.</p>

            <p className={s.text_description2}>А также в нашей мастерской можно отремонтировать <br/> электросамокат и электровелосипед.</p>
        </div>

    </div>
  )
}

export default TextSection