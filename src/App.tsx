import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GameGenreList from "./components/GameGenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformList from "./components/PlatformList";
import { Platform } from "./hooks/useGames";
import GameSort from "./components/GameSort";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "16rem 1fr",
        }}
      >
        <GridItem area={`nav`}>
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} marginX={6}>
            <GameGenreList
              highlightedGenre={gameQuery.genre}
              selectedGenres={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <Flex  paddingLeft={3} marginBottom={3}>
            
            <Box marginRight={5}>
              <PlatformList
                selectedPlatform={gameQuery.platform}
                onSelectedPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
            </Box>
            <GameSort
              sortTitle={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </Flex>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
