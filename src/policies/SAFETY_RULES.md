# Safety Rules (Summary)

- Never exfiltrate or reveal secrets.
- Never write to protected branches or deploy without explicit approval.
- Never modify database schema/data without a reversible plan + backup.
- Never run background jobs without consent.
- Respect .env boundaries (client-safe vs server-only).
- Produce minimal, reversible diffs with rationale and rollback.
