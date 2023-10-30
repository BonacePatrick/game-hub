import { Card, CardBody, HStack, Heading, Image} from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import GameIconsList from "./GameIconsList"
import GameScore from "./GameScore"
import croppedImage from "./Image-Url"


interface Props {
    game: Game
}

const GameCard = ({game}:Props) => {

  return (
    <>
    <Card>
        <Image src={ croppedImage(game.background_image)}/>
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
            <HStack justifyContent='space-between'>
            <GameIconsList platforms={game.parent_platforms.map(g => g.platform)}/>
            <GameScore score={game.metacritic}/>
            </HStack>
        </CardBody>
    </Card>
    </>
  )
}

export default GameCard