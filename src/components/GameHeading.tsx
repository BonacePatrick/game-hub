import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"

interface Props {
    gameQuery: GameQuery | null
}

const GameHeading = ({gameQuery}:Props) => {
    const heading = `${gameQuery?.genre?.name || ''} ${gameQuery?.platform?.name || ''} Games`
  return (
    <Heading as='h1' marginY={5} fontSize={{
        base: 'xl',
        lg: '5xl'
    }}>{heading}</Heading>
  )
}

export default GameHeading