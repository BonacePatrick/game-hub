import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImage from "./Image-Url";
import GenreSkeleton from "./GenreSkeleton";

const GameGenreList = () => {
  const { data , isLoading } = useGenre();
  const skeletons = [1,2]

  return (
    <>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id}>
            {isLoading && skeletons.map(skeleton => <GenreSkeleton key={skeleton}/>)}
            <HStack>
            <Image src={getCroppedImage(genre.image_background)} fit='cover' marginY={1} boxSize={'32px'} borderRadius={6}/>
            <Text fontSize='lg'>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GameGenreList;
