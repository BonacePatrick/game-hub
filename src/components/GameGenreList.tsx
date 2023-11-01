import { HStack, Image, List, ListItem, Spinner, Text} from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImage from "./Image-Url";


const GameGenreList = () => {
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
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GameGenreList;
