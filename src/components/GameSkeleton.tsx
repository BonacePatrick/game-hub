import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"


const GameSkeleton = () => {

  return (

    <Card width='20rem' overflow= "hidden">
        <Skeleton height='10rem'/>
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card>
  )
}

export default GameSkeleton