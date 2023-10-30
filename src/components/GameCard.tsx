import { Card, CardBody, Heading, Image} from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import GameIconsList from "./GameIconsList"


interface Props {
    game: Game
}

const GameCard = ({game}:Props) => {

  return (
    <>
    <Card overflow= "hidden">
        <Image src={game.background_image}/>
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
            <GameIconsList platforms={game.parent_platforms.map(g => g.platform)}/>
        </CardBody>
    </Card>
    </>
  )
}

export default GameCard