import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "~/components/ui/card";

type Props = {
  imageUrl: string;
  link: string;
  username: string;
};

export default function UserCard(props: Props) {
  return (
    <Card className="shadow-none border-none p-7 flex-1 bg-latte-crust dark:bg-mocha-crust text-latte-text dark:text-mocha-text">
      <CardContent>
        <Link href={props.link} className="flex flex-col items-center gap-5">
          <Image src={props.imageUrl} alt={props.imageUrl} width={100} height={100} className="rounded-[50%]" />
          <p>{props.username}</p>
        </Link>
      </CardContent>
    </Card>
  );
}
