const ITEMS = [
  { href: "/link1", title: "タイトル1", description: "説明1" },
  { href: "/link2", title: "タイトル2", description: "説明2" },
  { href: "/link3", title: "タイトル3", description: "説明3" },
  { href: "/link4", title: "タイトル4", description: "説明4" },
];

export default function Home() {
  return (
    <main>
      {ITEMS.map((item) => (
        <a key={item.href} href={item.href}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </a>
      ))}
    </main>
  )
}