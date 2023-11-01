import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react"


const GenreSkeleton = () => {
  return (

    <>
    <HStack>
        <Skeleton boxSize='32px' />
        <SkeletonText/>
    </HStack>
    </>
  )
}

export default GenreSkeleton