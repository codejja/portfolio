import { ImageResponse } from "next/og";

export const alt = "Janne Kujala – Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

async function loadGoogleFont(font, text) {
  const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(/src: url\(([^)]+)\) format\('(opentype|truetype)'\)/);

  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status === 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error(`Fontin ${font} lataus epäonnistui`);
}

export default async function Image() {
  const label = "// Portfolio";
  const name = "Janne Kujala";
  const role = "IT-tradenomiopiskelija · Liiketoiminta, data & automaatio";

  const [spaceGrotesk, spaceMono] = await Promise.all([
    loadGoogleFont("Space+Grotesk:wght@700", name),
    loadGoogleFont("Space+Mono:wght@400", label),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "90px",
          background:
            "radial-gradient(circle at 15% 15%, rgba(225,124,86,0.18) 0%, rgba(12,10,9,0) 45%), linear-gradient(135deg, #0c0a09 0%, #1c1917 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 4,
            color: "#e17c56",
            marginBottom: 28,
            fontFamily: "Space Mono",
          }}
        >
          {label}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 92,
            fontWeight: 700,
            color: "#f5f5f4",
            lineHeight: 1.05,
            fontFamily: "Space Grotesk",
          }}
        >
          {name}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 32,
            marginTop: 32,
            color: "#a8a29e",
            maxWidth: 920,
            lineHeight: 1.4,
          }}
        >
          {role}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Space Grotesk", data: spaceGrotesk, style: "normal", weight: 700 },
        { name: "Space Mono", data: spaceMono, style: "normal", weight: 400 },
      ],
    }
  );
}
