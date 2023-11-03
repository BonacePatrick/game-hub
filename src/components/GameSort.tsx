import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"


const GameSort = () => {
  return (

    <>
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
            Order by: Relevance
        </MenuButton>
        <MenuList>
            <MenuItem>Relevance</MenuItem>
            <MenuItem>Date added</MenuItem>
            <MenuItem>Name</MenuItem>
            <MenuItem>Release Date</MenuItem>
            <MenuItem>Populality</MenuItem>
        </MenuList>
    </Menu>
    </>
  )
}

export default GameSort