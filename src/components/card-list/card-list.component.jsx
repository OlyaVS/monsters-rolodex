import { Component } from "react";
import "./card-list.styles.css"
import Card from "../card/card.component";

class CardList extends Component {
  render() {
    const { list } = this.props;

    return (
      <ul className="card-list">
        {list.map((monster) => {return <Card monster={monster}/>})}
      </ul>
    )
  }
}

export default CardList;