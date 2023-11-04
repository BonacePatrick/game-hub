import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import GameIconsList from "./GameIconsList";
import GameScore from "./GameScore";
import getCroppedImage from "./Image-Url";
import Emojis from "./Emojis";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card>
        <Image src={getCroppedImage(game.background_image)} />
        <CardBody>
          <HStack justifyContent="space-between">
            <GameIconsList
              platforms={game.parent_platforms.map((g) => g.platform)}
            />
            <GameScore score={game.metacritic} />
          </HStack>
           <Heading fontSize="lg">{game.name} <Emojis rating={game.rating_top}/> </Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
