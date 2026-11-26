import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Corivo. Sheet metal parts and enclosures. Quote in 2 business days.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          color: "#0f172a",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", fontSize: 28, letterSpacing: 6, fontWeight: 700 }}>CORIVO</div>
          <div style={{ display: "flex", fontSize: 20, color: "#92400e", letterSpacing: 2 }}>2 BUSINESS DAYS</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 700, lineHeight: 1.1, maxWidth: 980 }}>
            Sheet metal parts and enclosures.
          </div>
          <div style={{ display: "flex", marginTop: 24, fontSize: 28, color: "#334155" }}>
            Quote in 2 business days, with a manufacturability note.
          </div>
        </div>
        <div style={{ display: "flex", height: 8, width: 160, background: "#f59e0b" }} />
      </div>
    ),
    { ...size },
  );
}
