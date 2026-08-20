#!/usr/bin/env bash
set -Eeuo pipefail

# Setup agent script for the portfolio repository.
# Prepares Node.js, pnpm, Python virtual environment, and dependencies.

log() { echo "[setup-agent] $*"; }
warn() { echo "[setup-agent] WARNING: $*" >&2; }
err() { echo "[setup-agent] ERROR: $*" >&2; exit 1; }
have() { command -v "$1" >/dev/null 2>&1; }

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]:-$0}")" && pwd -P)"
cd "$REPO_ROOT"

PNPM_VERSION="10.28.2"
SKIP_PLAYWRIGHT="${SKIP_PLAYWRIGHT:-0}"

log "Setting up agent environment in $REPO_ROOT..."

# 1. Ensure Node.js and pnpm
have node || err "node is required. Please install Node.js."
log "Node version: $(node --version)"

if ! have pnpm; then
  log "pnpm not found. Installing pnpm@$PNPM_VERSION..."
  npm install -g "pnpm@$PNPM_VERSION" || err "Failed to install pnpm."
fi
log "pnpm version: $(pnpm --version)"

# 2. Install Node dependencies
log "Installing Node.js dependencies..."
if [ -f "pnpm-lock.yaml" ]; then
  pnpm install --frozen-lockfile || pnpm install --no-frozen-lockfile
else
  pnpm install
fi

# 3. Setup Python virtual environment
VENV_PATH="$REPO_ROOT/.venv"
if [ ! -d "$VENV_PATH" ]; then
  log "Creating virtual environment in $VENV_PATH..."
  python3 -m venv "$VENV_PATH" || err "Failed to create python virtual environment."
fi

log "Installing Python dependencies..."
# Upgrade core packaging tools
"$VENV_PATH/bin/pip" install --upgrade pip setuptools wheel

# Install required python tools
"$VENV_PATH/bin/pip" install requests python-dotenv pydantic click PyGithub boomtick-cli

# 4. Install Playwright browsers if needed
if [ "$SKIP_PLAYWRIGHT" = "1" ]; then
  log "SKIP_PLAYWRIGHT=1; skipping playwright browser installation."
else
  log "Installing Playwright browsers..."
  pnpm exec playwright install --with-deps || npx --yes playwright install --with-deps || warn "Playwright browser installation failed."
fi

log "Agent environment setup complete."
log "To activate virtual environment, run: source .venv/bin/activate"
