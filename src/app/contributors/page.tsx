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
      imageUrl: "/contributors/hide.jpeg",
      username: "hide",
    },
  ];

  const frontend: Contributors[] = [
    {
      link: "https://github.com/justinecua",
      imageUrl: "/contributors/cua.jpeg",
      username: "Justine Cua",
    },
    {
      link: "https://github.com/Yncy0",
      imageUrl: "/contributors/yncy0.png",
      username: "Yncy0",
    },
    {
      link: "https://github.com/xhide341",
      imageUrl: "/contributors/hide.jpeg",
      username: "hide",
    },
  ];

  return (
    <main className="flex h-full lg:w-[1200px] flex-col items-start text-latte-text dark:text-mocha-text p-10">
      <section className="mt-20 lg:mt-0 flex flex-col gap-2">
        <h1 className=" text-2xl md:text-3xl lg:text-5xl font-bold">Contributors</h1>
        <p className="text-sm lg:text-lg">iloveportfolio is a collaboration project made by a small developer community ranging from veterans to newbies.</p>
      </section>

      <section className="mt-8 lg:mt-14">
        <section className="flex flex-col gap-2">
          <h2 className="text-lg md:text-xl lg:text-3xl font-bold">Back-end</h2>
          <p className="text-sm lg:text-lg">Contributors that develop back-end systems such as A.I. systems and Authentication systems.</p>
        </section>
        <section className="flex lg:w-[1200px] flex-row flex-wrap gap-5">
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

      <section className="mt-8 lg:mt-12">
        <section className="flex flex-col gap-2">
          <h2 className="text-lg md:text-xl lg:text-3xl font-bold">Front-end</h2>
          <p className="text-sm lg:text-lg">Contributors that develop an interactive GUI for the users.</p>
        </section>
        <section className="flex lg:w-[1200px] flex-row flex-wrap gap-5">
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
