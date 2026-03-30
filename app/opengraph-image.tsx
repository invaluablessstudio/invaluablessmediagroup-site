import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "InvaluaBless Media Group";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0A0F1F",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontFamily: "serif",
        }}
      >
        {/* Gold glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,175,55,0.25) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(212,175,55,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.08) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "0 80px",
          }}
        >
          {/* Label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "32px",
            }}
          >
            <div style={{ width: "40px", height: "1px", background: "#D4AF37" }} />
            <span
              style={{
                color: "#D4AF37",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Digital Marketing Agency · San Antonio, TX
            </span>
            <div style={{ width: "40px", height: "1px", background: "#D4AF37" }} />
          </div>

          {/* Brand name */}
          <div
            style={{
              fontSize: "72px",
              fontWeight: 800,
              color: "#f0ede8",
              letterSpacing: "-0.02em",
              lineHeight: 1,
              marginBottom: "16px",
              display: "flex",
            }}
          >
            <span>Invalua</span>
            <span style={{ color: "#D4AF37" }}>Bless</span>
            <span style={{ color: "rgba(240,237,232,0.3)", marginLeft: "20px" }}>
              Media Group
            </span>
          </div>

          {/* Divider */}
          <div
            style={{
              width: "80px",
              height: "2px",
              background: "#D4AF37",
              marginBottom: "24px",
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: "24px",
              color: "rgba(240,237,232,0.55)",
              fontWeight: 300,
              letterSpacing: "0.02em",
            }}
          >
            We Help Brands Grow, Scale &amp; Dominate Online
          </div>

          {/* Pills */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "40px",
            }}
          >
            {["Paid Ads", "Social Media", "GBP Optimization", "Lead Generation"].map(
              (tag) => (
                <div
                  key={tag}
                  style={{
                    border: "1px solid rgba(212,175,55,0.35)",
                    borderRadius: "2px",
                    padding: "8px 18px",
                    color: "#D4AF37",
                    fontSize: "13px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {tag}
                </div>
              )
            )}
          </div>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            color: "rgba(240,237,232,0.2)",
            fontSize: "14px",
            letterSpacing: "0.1em",
          }}
        >
          invaluablessmediagroup.com
        </div>
      </div>
    ),
    { ...size }
  );
}