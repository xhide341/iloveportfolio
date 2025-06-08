export default function ResultsPage() {
  type Foo = {
    instructions: string
  }

  const foo: Foo[] = [
    { instructions: "Instructions 1" },
    { instructions: "Instructions 2" },
    { instructions: "Instructions 3" }
  ]

  return (
    <main>
      <h1>Your portfolio website is ready</h1>
      <section>
        <ul className="flex flex-row justify-center align-center gap-10">
          {foo.map((item, index) => (
            <li key={index}>{item.instructions}</li>
          ))}
        </ul>
      </section>
    </main>
  )
}
