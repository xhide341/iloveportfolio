import UserCard from "~/components/contributors/card/card";

export default function ContributorsPage() {
  type Contributors = {
    imageUrl: string;
    link: string;
    username: string;
    role?: string;
  };

  const backend: Contributors[] = [
    {
      link: "https://github.com/Frostzeichen",
      imageUrl: "/contributors/Frostzeichen.jpeg",
      username: "Frostzeichen",
      role: "AI/ML Developer",
    },

    {
      link: "https://github.com/xhide341",
      imageUrl: "/contributors/hide.jpeg",
      username: "xhide341",
      role: "Back-end Developer",
    },
  ];

  const frontend: Contributors[] = [
    {
      link: "https://github.com/justinecua",
      imageUrl: "/contributors/cua.jpeg",
      username: "justinecua",
      role: "Fronte-end Developer",
    },
    {
      link: "https://github.com/Yncy0",
      imageUrl: "/contributors/yncy0.png",
      username: "Yncy0",
      role: "Fronte-end Developer",
    },
    {
      link: "https://github.com/xhide341",
      imageUrl: "/contributors/hide.jpeg",
      username: "xhide341",
      role: "Fronte-end Developer",
    },
  ];

  return (
    <main className="text-latte-text dark:text-mocha-text flex h-full flex-col items-start p-10 lg:w-[1200px]">
      <section className="mt-20 flex flex-col gap-2 lg:mt-0">
        <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
          Contributors
        </h1>
        <p className="text-sm lg:text-lg">
          iloveportfolio is a collaboration project made by a small developer
          community ranging from veterans to newbies.
        </p>
      </section>

      <section className="mt-8 lg:mt-14">
        <section className="flex flex-col gap-2">
          <h2 className="text-lg font-bold md:text-xl lg:text-3xl">Back-end</h2>
          <p className="text-sm lg:text-lg">
            Contributors that develop back-end systems such as A.I. systems and
            Authentication systems.
          </p>
        </section>
        <section className="flex flex-row flex-wrap gap-5 lg:w-[1200px]">
          {backend.map((item, index) => (
            <UserCard
              key={index}
              imageUrl={item.imageUrl}
              link={item.link}
              username={item.username}
              role={item.role}
            />
          ))}
        </section>
      </section>

      <section className="mt-8 lg:mt-12">
        <section className="flex flex-col gap-2">
          <h2 className="text-lg font-bold md:text-xl lg:text-3xl">
            Front-end
          </h2>
          <p className="text-sm lg:text-lg">
            Contributors that develop an interactive GUI for the users.
          </p>
        </section>
        <section className="flex flex-row flex-wrap gap-5 lg:w-[1200px]">
          {frontend.map((item, index) => (
            <UserCard
              key={index}
              imageUrl={item.imageUrl}
              link={item.link}
              username={item.username}
              role={item.role}
            />
          ))}
        </section>
      </section>
    </main>
  );
}
