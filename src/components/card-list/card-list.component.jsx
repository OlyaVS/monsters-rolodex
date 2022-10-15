import "./card-list.styles.css"
import Card from "../card/card.component";

const CardList = ({ list }) => (
  <ul className="card-list">
    {list.map((monster) => {return <Card monster={monster}/>})}
  </ul>
)

export default CardList;