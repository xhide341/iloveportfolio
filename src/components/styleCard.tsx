import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "./ui/card";

const StyleCard = () => {
  return (
    <Card className="m-0 w-[15%] w-full bg-[var(--latte-base)] p-0">
      <CardContent className="align-center m-0 flex flex-col justify-center p-4">
        <img className="mb-4" src="./assets/images/style-card.png" alt="" />
        <span className="text-[var(--latte-text)]">Style 1</span>
      </CardContent>
    </Card>
  );
};

export default StyleCard;
