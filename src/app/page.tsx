import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold text-yellow">Next-Tenpureeto</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 font-[family-name:var(--font-geist-mono)]">
          <div>
            <h2 className="font-bold mb-4">Stack</h2>
            <ul className="list-disc">
              <li className="mb-2">Next.js</li>
              <li className="mb-2">Tailwind</li>
              <li className="mb-2">Shadcn</li>
              <li className="mb-2">usehooks-ts</li>
              <li className="mb-2">Biome</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-4">Get Started</h2>
            <ol className="list-inside list-decimal text-sm text-center sm:text-left">
              <li className="mb-2">
                Get started by editing{" "}
                <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                  src/app/page.tsx
                </code>
                .
              </li>
              <li>Save and see your changes instantly.</li>
            </ol>
          </div>
        </div>
      </main>
    </div>
  );
}
