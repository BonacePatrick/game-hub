
import { SimpleGrid, Text } from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import GameCard from "./GameCard"


const GameGrid = () => {

    const {games,errors} = useGames()
    
  return (
    <>
    {errors && <Text>{errors}</Text>}
    <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} padding={'0.9rem'} borderRadius={10} spacing={10}>
        {games.map(game => (
          <GameCard key={game.id} game={game}/>
        ))}
    </SimpleGrid>
    </>
  )
}

export default GameGrid