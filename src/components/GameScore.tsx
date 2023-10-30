import { Badge } from "@chakra-ui/react";

const GameScore = ({ score }: { score: number }) => {
    
  const color = score > 80 ? "green" : score > 85 ? "green" : "";

  return (
    <>
      <Badge borderRadius="0.3rem" paddingX="0.4rem" colorScheme={color}>
        {score}
      </Badge>
    </>
  );
};

export default GameScore;
