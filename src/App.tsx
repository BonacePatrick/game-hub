import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GameGenreList from "./components/GameGenreList";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={`nav`}>
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"}>
            <GameGenreList/>
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <GameGrid/>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
