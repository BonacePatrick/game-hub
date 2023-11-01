import { HStack, Skeleton, SkeletonText, VStack } from "@chakra-ui/react"


const GenreSkeleton = () => {
  return (

    <>
    <VStack>
        <Skeleton boxSize='32px' />
        <SkeletonText/>
    </VStack>
    </>
  )
}

export default GenreSkeleton