// attesta.cc/billing — client config.
//
// These are PUBLIC client identifiers, safe to ship in the page:
//   * the Supabase anon key is RLS-protected (see Attesta docs/SECURITY.md),
//   * the Paddle client-side token is a browser token with limited access.
//
// Fill these with your SANDBOX values first to test, then switch to LIVE for
// production. The price ids MUST match the server (PADDLE_PRICE_* env on the
// paddle-webhook function).
window.ATTESTA_BILLING_CONFIG = {
  // ── Supabase (same project the app uses) ──────────────────────────────────
  SUPABASE_URL: "https://YOUR-PROJECT.supabase.co",
  SUPABASE_ANON_KEY: "YOUR_SUPABASE_ANON_KEY",
  // Edge Functions base — usually <SUPABASE_URL>/functions/v1
  EDGE_BASE: "https://YOUR-PROJECT.supabase.co/functions/v1",

  // ── Paddle ────────────────────────────────────────────────────────────────
  // Developer Tools → Authentication → client-side token.
  PADDLE_CLIENT_TOKEN: "test_YOUR_PADDLE_CLIENT_TOKEN",
  // "sandbox" while testing, "production" when live.
  PADDLE_ENV: "sandbox",

  // Paddle price ids (Catalog → Products → Prices).
  PRICE_PRO_MONTHLY: "pri_YOUR_MONTHLY",
  PRICE_PRO_ANNUAL: "pri_YOUR_ANNUAL",
  PRICE_MINUTES_30: "pri_YOUR_MINUTE_PACK",
};
