#!/usr/bin/env bash
set -euo pipefail

echo "== Lint (markdownlint if available) =="
if command -v markdownlint >/dev/null 2>&1; then
  markdownlint "**/*.md" || true
else
  echo "markdownlint not found, skipping."
fi

echo "== YAML lint =="
if command -v yamllint >/dev/null 2>&1; then
  yamllint . || true
else
  echo "yamllint not found, skipping."
fi

echo "== Done =="
