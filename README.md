# attesta-site

Static site for **Attesta** — landing page + legal copies, served at
[attesta.cc](https://attesta.cc) via Cloudflare Pages.

## What lives here

- `/` — landing page (Attesta. Catch every word. + App Store badge)
- `/privacy` — privacy policy
- `/terms` — terms of service

## Hosting

- **Source**: this GitHub repo (public, auditable, edits via PR)
- **Server**: Cloudflare Pages, auto-deploys on push to `main`
- **Domain**: `attesta.cc` (Cloudflare registrar)
- **Email**: `support@`, `legal@`, `hello@`, `admin@` all routed to
  `Attesta.app@proton.me` via Cloudflare Email Routing

## Email & DNS hardening (configured 2026-05-24)

- **SPF** — `v=spf1 include:_spf.mx.cloudflare.net -all` at apex.
  Auto-added by Cloudflare Email Routing. `-all` rejects any other
  sender impersonating `@attesta.cc`.
- **DKIM** — `cf2024-1._domainkey` (Cloudflare-managed key for
  forwarded mail signing).
- **DMARC** — `v=DMARC1; p=reject; rua=mailto:admin@attesta.cc;
  adkim=s; aspf=s; sp=reject` at `_dmarc`. Strict reject; aggregate
  reports land in `admin@attesta.cc`.
- **`www.attesta.cc` → apex 301** — proxied CNAME +
  Redirect Rule (`hostname eq "www.attesta.cc"` →
  `concat("https://attesta.cc", http.request.uri.path)`, query
  string preserved).

**Replies still come from `Attesta.app@proton.me`** — Proton's free
plan doesn't support custom-domain send-as. Upgrade to Mail Plus
(~$4/mo) to enable `support@attesta.cc` as a real send-as alias;
deferred until support volume justifies it.

## Related

- App repo: [YazanAesmael/Attesta](https://github.com/YazanAesmael/Attesta)
- Product strategy + brand voice: in the app repo under `docs/PRODUCT_STRATEGY.md`
