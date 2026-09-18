import { ImageResponse } from "next/og";

export const alt = "Janne Kujala – Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
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
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #312e81 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#93c5fd",
            marginBottom: 28,
          }}
        >
          Portfolio
        </div>

        <div
          style={{
            fontSize: 92,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.05,
          }}
        >
          Janne Kujala
        </div>

        <div
          style={{
            fontSize: 32,
            marginTop: 32,
            color: "#cbd5e1",
            maxWidth: 920,
            lineHeight: 1.4,
          }}
        >
          IT-tradenomiopiskelija · Liiketoiminta, data & automaatio
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
