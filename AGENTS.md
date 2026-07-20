# AGENTS.md - AI Agent Operating Rules

## Project Context
- Static Hugo site for AWS internship report (bilingual EN/VI).
- Primary goal: keep content accurate, build stable, and deployable to GitHub Pages.

## Core Stack
- Hugo Extended `0.137.1`
- Theme: `hugo-theme-learn`
- Content: Markdown (`content\`)
- Config: TOML (`config.toml`)
- CI/CD: GitHub Actions (`.github\workflows\hugo.yml`)
- CLI optimization: RTK (`rtk`) for token-efficient terminal output

## Project Structure
```text
.
├── .github\workflows\
├── archetypes\
├── content\
│   ├── 1-Worklog\
│   ├── 2-Proposal\
│   ├── 3-BlogsTranslated\
│   ├── 4-EventParticipated\
│   ├── 5-Workshop\
│   ├── 6-Self-evaluation\
│   ├── 7-Feedback\
│   ├── _index.md
│   └── _index.vi.md
├── layouts\
│   ├── partials\
│   └── shortcodes\
├── static\
│   ├── css\
│   ├── fonts\
│   ├── images\
│   └── js\
├── themes\hugo-theme-learn\
├── AGENTS.md
├── ARCHITECTURE.md
├── README.md
└── config.toml
```

## Critical Rules

### Editing Rules
- Read repo layout first (`fd --max-depth 2`) before making changes.
- Make minimal, scoped edits only for current request.
- Follow existing project style.
- Prefer overrides in `layouts\`, `static\`, `content\`, `config.toml`; avoid direct theme edits unless necessary.
- Do not remove or weaken important technical constraints.

### Git Rules (Critical)
- **Do NOT use** broad staging commands:
  - `git add .`
  - `git add -A`
- Stage files explicitly by path.
- **Do NOT stage `AGENTS.md`** in normal tasks.
- Only stage `AGENTS.md` when user explicitly asks, using:
  - `git add AGENTS.md`
- Use non-interactive git output commands:
  - `git --no-pager status --short --branch`
  - `git --no-pager diff --stat`
  - `git --no-pager log --oneline --decorate --max-count=8`

### Hugo Rules
- Recommended version: Hugo Extended `0.137.1`.
- Build with `hugo`.
- Run local dev with:
  - `hugo server -D`
  - or `hugo server -D --baseURL http://localhost:1313/`
- Keep `baseURL` in `config.toml` aligned with production custom domain.
- Do not commit generated artifacts:
  - `public\`
  - `.hugo_build.lock`
  - `resources\_gen\`

### Content Rules
- Keep section structure stable unless explicitly requested.
- Front matter should stay consistent (`title`, `date`, `weight`, `chapter`, `pre`).
- Keep internal links compatible with Hugo structure.

### Bilingual Rules
- `defaultContentLanguage = "en"`; Vietnamese files use `.vi.md` suffix.
- When updating core profile/project info, update both EN and VI counterparts.

## Workflow
1. Inspect repo structure and relevant files.
2. Check git status/diff.
3. Apply minimal changes.
4. Use RTK-wrapped commands when relevant (`rtk git status`, `rtk git diff`, `rtk read .\file`).
5. Run Hugo build (`hugo`) when relevant.
6. Re-check diff and report clearly.

## Deployment
- Deploy via `.github\workflows\hugo.yml`.
- Trigger: push to `main` or `workflow_dispatch`.
- GitHub Pages source must be **GitHub Actions** (artifact deployment).
- Build step in workflow should run `hugo --minify` and rely on `config.toml` for `baseURL` (do not override `--baseURL` in CI unless explicitly required).

## Constraints
- OS: Windows; shell: PowerShell 7 (`pwsh`).
- Use backslash paths (`\`) in local Windows context.
- Prefer `rg` for content search and `fd` for file discovery.
- Use `Get-Content`/`type` instead of `cat`.
- Prefer RTK-wrapped terminal commands for compact output and token savings; if RTK is unavailable, fall back to native commands.

## Agent Behavior
- Keep responses to project owner in Vietnamese (technical terms can remain English).
- Preserve strict, actionable errors; do not silently swallow failures.
- Solve root causes, not symptoms.
- Always apply skill `karpathy-guidelines` by default for every prompt.

```id="d1fx2h"
For full project details → see ARCHITECTURE.md
```
