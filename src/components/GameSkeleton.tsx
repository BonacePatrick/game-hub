import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"


const GameSkeleton = () => {

  return (

    <Card>
        <Skeleton height='10rem'/>
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card>
  )
}

export default GameSkeleton