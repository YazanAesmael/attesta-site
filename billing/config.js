// attesta.cc/billing — client config.
//
// These are PUBLIC client identifiers, safe to ship in the page:
//   * the Supabase anon key is RLS-protected (see Attesta docs/SECURITY.md),
//   * the Paddle client-side token is a browser token with limited access.
//
// SANDBOX values below. Switch to LIVE for production (live client token + live
// price ids + PADDLE_ENV="production"). The price ids MUST match the server
// (PADDLE_PRICE_* secrets on the paddle-webhook / paddle-prices functions).
window.ATTESTA_BILLING_CONFIG = {
  // ── Supabase (same project the app uses) ──────────────────────────────────
  SUPABASE_URL: "https://zpgqtfrtrckyidbmgrah.supabase.co",
  // TODO: paste your app's supabase.anonKey (public, RLS-protected) — it has to
  // be in the page for auth to work.
  SUPABASE_ANON_KEY: "YOUR_SUPABASE_ANON_KEY",
  EDGE_BASE: "https://zpgqtfrtrckyidbmgrah.supabase.co/functions/v1",

  // ── Paddle (sandbox) ──────────────────────────────────────────────────────
  // TODO: Developer Tools → Authentication → client-side token (starts with test_).
  PADDLE_CLIENT_TOKEN: "test_YOUR_PADDLE_CLIENT_TOKEN",
  PADDLE_ENV: "sandbox",

  // Paddle price ids (sandbox) — wired 2026-07-15.
  PRICE_PRO_MONTHLY: "pri_01kxkbpkh1w6zvpgrfbt8ayz7r",
  PRICE_PRO_ANNUAL: "pri_01kxkbvh31w4g4apzs5hhcr6af",
  PRICE_MINUTES_30: "pri_01kxkbyfwqbhh4w6pyrhmqxv7q",
};
