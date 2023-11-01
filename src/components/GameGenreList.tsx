import { Button, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImage from "./Image-Url";

interface Props {
  selectedGenres: (genre:Genre) => void
}

const GameGenreList = ({selectedGenres}:Props) => {
  const { data, isLoading,errors } = useGenre();
  if(errors) return null
  
  return (
    <>
      <List>

        {isLoading && <Spinner/>}
        {data.map((genre) => (
          <ListItem key={genre.id}>
            <HStack>
              <Image
                src={getCroppedImage(genre.image_background)}
                fit="cover"
                marginY={1}
                boxSize={"32px"}
                borderRadius={6}
              />
              <Button onClick={() => selectedGenres(genre)} variant='link' fontSize="lg">{genre.name}</Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GameGenreList;
