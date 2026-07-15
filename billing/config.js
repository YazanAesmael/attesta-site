// attesta.cc/billing — client config.
//
// Every value here is a PUBLIC client identifier — and unavoidably public once
// deployed: a Supabase web client exposes its anon key, and Paddle.js exposes its
// client-side token, by design. Neither is a secret:
//   * SUPABASE_ANON_KEY is RLS-protected (see Attesta docs/SECURITY.md),
//   * PADDLE_CLIENT_TOKEN is a limited-access browser token.
// The SECRET Paddle API key + webhook secret live in Supabase, NEVER here.
//
// SANDBOX values below. For LIVE: swap the client token + price ids and set
// PADDLE_ENV="production". Price ids MUST match the server PADDLE_PRICE_* secrets.
window.ATTESTA_BILLING_CONFIG = {
  // ── Supabase (same project the app uses) ──────────────────────────────────
  SUPABASE_URL: "https://zpgqtfrtrckyidbmgrah.supabase.co",
  SUPABASE_ANON_KEY:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwZ3F0ZnJ0cmNreWlkYm1ncmFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyNzkyNjIsImV4cCI6MjA5NDg1NTI2Mn0.eOxQHe0qHXNWzSa9A2QwhTRA9vCoDdJkYsf6apd_ftc",
  EDGE_BASE: "https://zpgqtfrtrckyidbmgrah.supabase.co/functions/v1",

  // ── Paddle (sandbox) ──────────────────────────────────────────────────────
  PADDLE_CLIENT_TOKEN: "test_eabf70c2d06ecef1ee875f1f46f",
  PADDLE_ENV: "sandbox",

  // Paddle price ids (sandbox) — wired 2026-07-15.
  PRICE_PRO_MONTHLY: "pri_01kxkbpkh1w6zvpgrfbt8ayz7r",
  PRICE_PRO_ANNUAL: "pri_01kxkbvh31w4g4apzs5hhcr6af",
  PRICE_MINUTES_30: "pri_01kxkbyfwqbhh4w6pyrhmqxv7q",
};
