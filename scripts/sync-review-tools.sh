#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Default to printing usage if no argument is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <target_directory>"
  echo "Example: $0 ../tech-dancer"
  exit 1
fi

TARGET="$1"

if [ ! -d "$TARGET" ]; then
  echo "Error: Target directory '$TARGET' does not exist."
  exit 1
fi

echo "Syncing review tools to $TARGET..."

# Ensure target directories exist
mkdir -p "$TARGET/scripts"
mkdir -p "$TARGET/.github/actions/impact-analysis"

# Copy files
echo "Copying scripts/send-jules-impact.py..."
cp "scripts/send-jules-impact.py" "$TARGET/scripts/send-jules-impact.py"

echo "Copying .github/actions/impact-analysis/action.yml..."
cp ".github/actions/impact-analysis/action.yml" "$TARGET/.github/actions/impact-analysis/action.yml"

echo "Done! The files have been successfully synced to $TARGET."
