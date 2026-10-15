#!/bin/bash
# Installs dependencies for project skills (webapp-testing) in Claude Code cloud sessions.
# Local sessions skip this; install Playwright yourself there.
[ "$CLAUDE_CODE_REMOTE" = "true" ] || exit 0

cd "$CLAUDE_PROJECT_DIR" || exit 0
[ -d node_modules ] || npm install --no-audit --no-fund >/dev/null 2>&1

python3 -c "import playwright" 2>/dev/null || python3 -m pip install -q playwright >/dev/null 2>&1
python3 -m playwright install --with-deps chromium >/dev/null 2>&1 \
  || python3 -m playwright install chromium >/dev/null 2>&1

exit 0
