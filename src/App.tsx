import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GameGenreList from "./components/GameGenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";

function App() {
  const [selectedGenres, setSelectedGenres] = useState<Genre | null>(null)
  
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: '1fr',
          lg: '15rem 1fr'
        }}
      >
        <GridItem area={`nav`}>
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} marginX={6} >
            <GameGenreList selectedGenres={genre => setSelectedGenres(genre)}/>
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <GameGrid selectedGenres={selectedGenres}/>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
