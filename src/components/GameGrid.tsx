
import { SimpleGrid, Text } from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import GameCard from "./GameCard"
import GameSkeleton from "./GameSkeleton"


const GameGrid = () => {

    const {games,errors,isLoading} = useGames()
    const skeletons = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    
  return (
    <>
    {errors && <Text>{errors}</Text>}
    <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} padding={'0.9rem'} borderRadius={10} spacing={10}>
        {isLoading && skeletons.map(sk => <GameSkeleton key={sk}/>)}
        {games.map(game => (
          <GameCard key={game.id} game={game}/>
        ))}
    </SimpleGrid>
    </>
  )
}

export default GameGrid