"use client";

import Script from "next/script";

export function CookiebotScript() {
  const id = process.env.NEXT_PUBLIC_COOKIEBOT_ID;

  if (!id || id === "00000000-0000-0000-0000-000000000000") {
    return null;
  }

  return (
    <Script
      id="Cookiebot"
      src="https://consent.cookiebot.com/uc.js"
      data-cbid={id}
      data-blockingmode="auto"
      strategy="afterInteractive"
      type="text/javascript"
    />
  );
}
