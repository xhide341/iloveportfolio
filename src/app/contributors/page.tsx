import UserCard from "~/components/contributors/card/card";

export default function ContributorsPage() {
  type Contributors = {
    imageUrl: string;
    link: string;
    username: string;
  };

  const backend: Contributors[] = [
    {
      link: "https://github.com/xhide341",
      imageUrl: "/contributors/hide.png",
      username: "hide",
    },
  ];

  const frontend: Contributors[] = [
    {
      link: "https://github.com/justinecua",
      imageUrl: "/contributors/hide.png",
      username: "Justine Cua",
    },
    {
      link: "https://github.com/Yncy0",
      imageUrl: "/contributors/hide.png",
      username: "Yncy0",
    },
    {
      link: "https://github.com/xhide341",
      imageUrl: "/contributors/hide.png",
      username: "hide",
    },
  ];

  return (
    <main className="flex h-full w-[1200px] flex-col items-start justify-center ">
      <h1>Contributors</h1>

      <section>
        <h2>Back-end</h2>
        <section className="flex flex-row">
          {backend.map((item, index) => (
            <UserCard
              key={index}
              imageUrl={item.imageUrl}
              link={item.link}
              username={item.username}
            />
          ))}
        </section>
      </section>

      <section>
        <h2>Front-end</h2>
        <section className="flex flex-row">
          {frontend.map((item, index) => (
            <UserCard
              key={index}
              imageUrl={item.imageUrl}
              link={item.link}
              username={item.username}
            />
          ))}
        </section>
      </section>
    </main>
  );
}
