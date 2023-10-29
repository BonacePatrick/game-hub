import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: ` "nav" "main" `,
          lg: `"nav nav ""aside main"`,
        }}
      >
        <GridItem area={"nav"} bg={"coral"} color={"white"}>
          Nav
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} bg={"blue"} color={"white"}>
            Aside
          </GridItem>
        </Show>
        <GridItem area={"main"} bg={"black"} color={"white"}>
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
