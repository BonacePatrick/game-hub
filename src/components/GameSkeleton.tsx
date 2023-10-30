import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"


const GameSkeleton = () => {

  return (

    <Card>
        <Skeleton width={{
            sm: '50%',
            md: '200px',
            lg: '300px'
        }} height='200px'/>
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card>
  )
}

export default GameSkeleton