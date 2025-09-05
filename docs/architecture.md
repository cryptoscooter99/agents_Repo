# Architecture (High-Level)

- **Policy:** `AGENTS.md` (source of truth for behavior/permissions)
- **Config:** `src/config/agent.config.json` (consent toggles & paths)
- **Workflows:** `src/workflows/` (proposal → diff → approval → execute → validate)
- **Policies:** `src/policies/` (safety rules snapshot)
- **Artifacts/Logs:** `artifacts/`, `logs/` (git-ignored by default)

## Data Flow
1. User provides a task and explicit consent tokens.
2. Agent drafts a plan and proposed diff.
3. On approval, agent runs local commands (linters/tests/build).
4. Agent writes changes, validates, and emits artifacts/logs.
