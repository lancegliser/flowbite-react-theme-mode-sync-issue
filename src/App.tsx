import { DarkThemeToggle } from "flowbite-react";

function App() {
  return (
    <div className="flex min-h-screen flex-col gap-2 dark:bg-gray-800 dark:text-white">
      <main className="flex grow items-center justify-center gap-2">
        <h1 className="text-2xl">Flowbite React + Vite</h1>
        <DarkThemeToggle />
      </main>
      <div className="h-40 overflow-scroll">
        {new Array(10000).fill(0).map((_, index) => (
          <p key={index}>
            {index} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
