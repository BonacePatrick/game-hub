import { HStack, Image} from "@chakra-ui/react"
import Logo from '../assets/logo.webp'
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"

interface Props {
  onSearch: (searchField: string) => void
}

const Navbar = ({onSearch}:Props) => {
  return (
    <>
    <HStack padding={'0.9rem'} >
        <Image src={Logo} boxSize={'60px'}/>
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch/>
    </HStack>
    </>
  )
}

export default Navbar