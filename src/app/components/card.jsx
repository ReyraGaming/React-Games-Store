import { games } from "../../../public/games";
import Image from 'next/link'

const Card = () => {
    const cardList = games.map((game) => (
        <div className="flex flex-col gap-3 rounded-lg font-fireSans" key={game.title}>
            <p>{game.genre}</p>
            <h2>{game.title}</h2>
            <p>{game.price}</p>
            <p>{game.discount}</p>
        </div>
    ))
}

export default Card;