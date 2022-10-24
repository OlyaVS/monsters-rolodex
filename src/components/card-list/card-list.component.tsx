import "./card-list.styles.css"
import Card from "../card/card.component";
import { Monster}  from '../../App'

type CardListProps = {
  list: Monster[]
}

const CardList = ({ list }: CardListProps) => (
  <ul className="card-list">
    {list.map((monster) => {return <Card monster={monster}/>})}
  </ul>
)

export default CardList;