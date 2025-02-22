import parsedDistros from "../../data/distro.yml";

export type DistroSetup = {
  name: string;
  slug?: string;
  logo: string;
  introduction: string;
  steps: { name: string; text: string }[];
  logo_dark?: string;
  translatedNameKey: string;
};

export async function fetchSetupInstructions() {
  const mappedDistros = parsedDistros.map((instruction: DistroSetup) => {
    return {
      ...instruction,
      logo: `img/distro/${instruction.logo}`,
      logo_dark: instruction.logo_dark
        ? `img/distro/${instruction.logo_dark}`
        : null,
      translatedNameKey: instruction.name,
    };
  });

  return mappedDistros;
}
