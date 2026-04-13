import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt =
  "CIRCUITA — Electrical engineering consulting that cuts field risk";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const profileBytes = await readFile(
    join(process.cwd(), "public", "images", "profile2.png"),
  );
  const profileSrc = `data:image/png;base64,${profileBytes.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#0d1c32",
          color: "#ffffff",
          padding: "72px 80px",
        }}
      >
        {/* Left column — brand + tagline */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            paddingRight: 48,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: 4,
                color: "#b9c7e4",
                marginBottom: 24,
              }}
            >
              CIRCUITA
            </div>
            <div
              style={{
                fontSize: 62,
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: -1.5,
                color: "#ffffff",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span>Electrical engineering</span>
              <span>consulting that</span>
              <span style={{ color: "#d0e1fb" }}>cuts field risk.</span>
            </div>
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#b9c7e4",
              lineHeight: 1.4,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Plan review · Lighting · EV &amp; Marina</span>
            <span>Florida &amp; the Southeast</span>
          </div>
        </div>
        {/* Right column — profile photo */}
        <div
          style={{
            width: 360,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={profileSrc}
            alt="Eddie — Electrical Engineering Consultant"
            width={340}
            height={440}
            style={{
              width: 340,
              height: 440,
              borderRadius: 20,
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
