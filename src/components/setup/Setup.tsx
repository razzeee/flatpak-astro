import clsx from "clsx";
import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import type { DistroSetup } from "./distro-setup";
import { Input } from "../ui/input";

export default function Setup({
  instructions,
}: {
  instructions: DistroSetup[];
}) {
  // linux distros by approximate popularity or if setup is needed
  const distroOrder: { name: string; order: number }[] = [
    { name: "Ubuntu", order: 100 },
    { name: "Debian", order: 95 },
    { name: "Chrome OS", order: 90 },
    { name: "Fedora", order: 85 },
    { name: "Arch", order: 80 },
    { name: "Linux Mint", order: 75 },
    { name: "openSUSE", order: 70 },
    { name: "Manjaro", order: 65 },
  ];
  const [distroFilter, setDistroFilter] = useState<string>("");

  const instructionsFilteredAndSorted = instructions
    .filter((instruction) =>
      instruction.name.toLowerCase().includes(distroFilter.toLowerCase())
    )
    .sort((a, b) => {
      const aIndex = distroOrder.findIndex((distro) => distro.name === a.name);
      const bIndex = distroOrder.findIndex((distro) => distro.name === b.name);

      if (aIndex === -1 && bIndex === -1) {
        return 0;
      }

      if (aIndex === -1) {
        return 1;
      }

      if (bIndex === -1) {
        return -1;
      }

      return distroOrder[bIndex].order - distroOrder[aIndex].order;
    });

  return (
    <>
      <div className="max-w-11/12 mx-auto my-0 mt-12 w-11/12 space-y-10 2xl:w-[1400px] 2xl:max-w-[1400px]">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-2">
            <HiMagnifyingGlass className="size-5 text-flathub-spanish-gray" />
          </div>
          <Input
            type="text"
            placeholder={"Find your distribution"}
            className={clsx("ps-9")}
            onChange={(e) => {
              console.log(e.target.value);
              setDistroFilter(e.target.value);
            }}
          />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {instructionsFilteredAndSorted.length === 0 && (
            <div className="col-span-full text-center">
              <p className="text-flathub-dark-gunmetal/50 dark:text-flathub-sonic-silver">
                {"No results found"}
              </p>
            </div>
          )}
          {instructionsFilteredAndSorted.map((instruction, index) => (
            <a
              key={instruction.name}
              href={`/setup/${encodeURIComponent(
                instruction.slug ?? instruction.name
              )}`}
              className={clsx(
                "flex min-w-0 items-center gap-4 rounded-xl bg-flathub-white px-4 shadow-md duration-500 dark:bg-flathub-arsenic/70",
                "no-underline hover:cursor-pointer hover:bg-flathub-gainsborow/20 hover:shadow-xl dark:hover:bg-flathub-arsenic/90",
                "active:bg-flathub-gainsborow/40 active:shadow-sm active:dark:bg-flathub-arsenic",
                "px-8 py-6"
              )}
            >
              <picture>
                <source
                  srcSet={instruction.logo_dark}
                  media="(prefers-color-scheme: dark)"
                />
                <img
                  className="size-24"
                  src={instruction.logo}
                  width={96}
                  height={96}
                  alt={instruction.translatedNameKey}
                />
              </picture>
              <span className="text-lg font-semibold text-flathub-dark-gunmetal dark:text-flathub-gainsborow">
                {instruction.translatedNameKey}
              </span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
