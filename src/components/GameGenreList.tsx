import { Button, HStack, Heading, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImage from "./Image-Url";

interface Props {
  selectedGenres: (genre:Genre) => void
  highlightedGenre: Genre | null
}

const GameGenreList = ({selectedGenres,highlightedGenre}:Props) => {
  const { data, isLoading, errors } = useGenre();
  
  if(errors) return null
  
  return (
    <>
      <Heading marginBottom={3}>Genres</Heading>
      <List>

        {isLoading && <Spinner/>}
        {data.map((genre) => (
          <ListItem key={genre.id}>
            <HStack>
              <Image
                src={getCroppedImage(genre.image_background)}
                objectFit={'cover'}
                marginY={1.5}
                boxSize={"32px"}
                borderRadius={6}
                marginRight={1.5}
              />
              <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === highlightedGenre?.id ? 'bold': ''} onClick={() => selectedGenres(genre)} variant='link' fontSize="lg">{genre.name}</Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GameGenreList;
