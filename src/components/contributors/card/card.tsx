import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "~/components/ui/card";

type Props = {
  imageUrl: string;
  link: string;
  username: string;
  role?: string;
};

export default function UserCard(props: Props) {
  return (
    <Card className="bg-latte-crust dark:bg-mocha-crust text-latte-text dark:text-mocha-text flex-1 lg:basis-[20%] border-none p-7 shadow-none">
      <CardContent>
        <Link href={props.link} className="flex flex-col items-center gap-5">
          <Image
            src={props.imageUrl}
            alt={props.imageUrl}
            width={100}
            height={100}
            className="rounded-[50%]"
          />
          <p className="text-center">
            {props.username} <br /> <span>{props.role}</span>
          </p>
        </Link>
      </CardContent>
    </Card>
  );
}
