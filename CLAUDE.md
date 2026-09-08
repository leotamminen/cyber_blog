```
# Breaking the Firewall — CLAUDE.md

## Project Overview

Personal cybersecurity learning blog. Posts are written as tutorials.

- **Live:** https://breaking-the-firewall.vercel.app
- **Repo:** https://github.com/leotamminen/cyber_blog
- **Stack:** Next.js 15, TypeScript, Tailwind CSS, MongoDB Atlas, Vercel

---

## Architecture

```
src/
  app/           # layout.tsx, globals.css, ThemeContext
  components/    # BlogCard, Footer, Navbar
  layouts/       # MainLayout, PostLayout
  pages/         # index, blogs, about, post/[id], support, see-also, learn, 404
  pages/api/     # posts.ts (list), posts/[id].ts (single)
  data/          # seedPosts.ts (one-time DB seeding script)
  styles/        # globals.css
  types/         # types.ts
  utils/         # navigation.tsx
public/          # static images (currently committed to repo)
```

## Blog Post Structure (MongoDB)

```json
{
  "_id": { "$oid": "..." },
  "id": "18",
  "title": "Post title",
  "author": "Leo Tamminen",
  "tags": "tag1, tag2",
  "new": true,
  "pinned": false,
  "summary": "Short description",
  "date": "2026-08-10",
  "edited": "2026-08-10",
  "content": [
    { "type": "h1", "content": "Heading" },
    { "type": "p", "content": "Paragraph text" },
    { "type": "code", "content": "code here" }
  ]
}
```

Post URL uses MongoDB `_id`: `/post/6a7a157a051e4ecf5249efc0`

---

## Development Workflow

- `master` → auto-deploys to production (Vercel)
- `dev` → auto-deploys to Vercel preview URL
- All work happens on `dev`, merge to `master` only when verified

### Local dev setup
```bash
vercel env pull .env.local   # pull env vars from Vercel
npm run dev                  # runs on localhost:3001
```

### Required env vars
```
MONGODB_URI=...
MONGODB_DB=...
```

---

## Critical Rules

- Never break the MongoDB Atlas connection. Test locally before merging.
- Never push directly to `master`.
- Never commit `.env.local`.
- `seedPosts.ts` is a one-time script, do not run it against production DB.

---

## Known Issues — Checklist

### Security
- [ ] 5 remaining npm vulnerabilities require Next.js major version upgrade (15 → 16)
- [ ] ESLint 8 deprecated, upgrade to ESLint 9

### Performance
- [ ] No caching on MongoDB fetches — every page load hits the DB
- [ ] No loading skeleton/spinner on blog list pages

### Bugs
- [x] Preview deployments broken: NEXT_PUBLIC_BASE_URL fetches production instead of preview — fixed by switching client-side API fetches to relative URLs
- [ ] Redundant manual `id` field alongside MongoDB `_id` in every post

### Content / Pages
- [ ] Support page is a stub
- [ ] See Also page is a stub
- [ ] Footer copyright year hardcoded as 2025

### Infrastructure
- [ ] Images stored in /public — require a git commit to add new blog images
  - Fix: migrate to Cloudinary free tier or similar

---

## Priorities

1. Fix preview deployment URL issue
2. Add caching to MongoDB API routes
3. Migrate images out of /public
4. Next.js major upgrade (separate session, high risk)
5. Fill stub pages
```