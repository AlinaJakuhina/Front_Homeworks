import s from './Form.module.css'
// import arrow from './media/arrow.png'

function Form({submit_form}) {


  return (
    <div className={s.wrapper}>

            <form onSubmit={submit_form}>

                <div className={s.sectionForm}>

                    <div className={s.select_items}>

                        <div className={s.select_days}>
                            <select name='day' required>
                                <option value=''>Выберите день</option>
                                <option value='0'>ПН</option>
                                <option value='1'>ВТ</option>
                                <option value='2'>СР</option>
                                <option value='3'>ЧТ</option>
                                <option value='4'>ПТ</option>
                                <option value='5'>СБ</option>
                                <option value='6'>ВС</option>
                            </select>
                      
                        </div>
                        <div className={s.select_import}>
                            <select name='importance' required>
                                <option value=''>Выберите важность</option>
                                <option value='0'>Важно</option>
                                <option value='1'>Не очень</option>
                            </select>
                        </div>

                    </div>
                    <input type='text' name='description' placeholder='Описание' />
                </div>
                <button type='submit'>Добавить</button>
            </form>
        </div>
    )
}
export default Form