import { BoxInfo, TitleCard } from './styles'
import './styles.css'

function Homework09 () {

  return (
    <div  className="homework09-container">
     <BoxInfo primary>
       <TitleCard>VIP Пользователь</TitleCard>
         <p> Доступ к эксклюзивным функциям, персональный менеджер и приоритетная поддержка.</p>
     </BoxInfo>
     <BoxInfo>
       <TitleCard> Обычный Пользователь</TitleCard>
         <p>Стандартный доступ, базовые функции и поддержка в порядке очереди.</p>
      </BoxInfo>
    
    </div>
  )
}

export default Homework09 