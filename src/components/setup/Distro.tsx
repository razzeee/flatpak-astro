import type { DistroSetup } from "./distro-setup";
import { distroMap } from "./Distros";

export default function Distro({ distroData }: { distroData: DistroSetup }) {
  return (
    <>
      <div className="max-w-11/12 mx-auto w-11/12 space-y-10 pt-4 2xl:w-[1400px] 2xl:max-w-[1400px]">
        <div className="prose mx-auto dark:prose-invert prose-pre:rounded-xl">
          <div key={distroData.name} className="space-y-4">
            {distroMap.get(distroData.name?.replaceAll("/", ""))}
          </div>
        </div>
      </div>
    </>
  );
}
