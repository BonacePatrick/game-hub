import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GameGenreList from "./components/GameGenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformList from "./components/PlatformList";
import { Platform } from "./hooks/useGames";
import GameSort from "./components/GameSort";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchField: string;
  
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
          <Navbar
            onSearch={(searchField) =>
              setGameQuery({ ...gameQuery, searchField })
            }
          />
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
          <Box paddingLeft={3}>
            <GameHeading gameQuery={gameQuery} />
            <Flex marginBottom={3}>
              <Box
                marginRight={{
                  base: "4",
                  lg: "5",
                }}
              >
                <PlatformList
                  selectedPlatform={gameQuery.platform}
                  onSelectedPlatform={(platform) =>
                    setGameQuery({ ...gameQuery, platform })
                  }
                />
              </Box>

              <Box
                width={{
                  base: "18%",
                  lg: "100%",
                }}
              >
                <GameSort
                  sortTitle={gameQuery.sortOrder}
                  onSelectSortOrder={(sortOrder) =>
                    setGameQuery({ ...gameQuery, sortOrder })
                  }
                />
              </Box>
            </Flex>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
