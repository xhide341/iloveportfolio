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
    <Card>
      <CardContent>
        <Link href={props.link}>
          <Image src={props.imageUrl} alt={props.imageUrl} width={250} height={250}/>
          <p>{props.username}</p>
        </Link>
      </CardContent>
    </Card>
  );
}
