#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

usage() {
  cat <<USAGE
Usage:
  ${0##*/} --id <ID> [--name <Title_With_Underscores>]

例:
  ${0##*/} --id 128 --name Longest_Consecutive_Sequence

効果:
  LeetCode75/<ID>_<Name>/Main.java を作成（既存なら上書きしない）。
  パッケージは付けず、クラス名は Main で作成します。
USAGE
}

ID=""
NAME=""

while [[ $# -gt 0 ]]; do
  case "$1" in
    -h|--help) usage; exit 0 ;;
    --id) shift; ID="${1:-}" || true ;;
    --name) shift; NAME="${1:-}" || true ;;
    *) echo "不明な引数: $1"; usage; exit 1 ;;
  esac
  shift
done

if [[ -z "$ID" ]]; then echo "--id は必須です"; exit 1; fi

TARGET_BASE="$ROOT_DIR/LeetCode75"
if [[ -z "$NAME" ]]; then
  # 既存の <ID>_* を探す
  mapfile -t CANDS < <(find "$TARGET_BASE" -maxdepth 1 -type d -name "${ID}_*" | sort)
  if [[ ${#CANDS[@]} -gt 0 ]]; then
    TARGET_DIR="${CANDS[0]}"
  else
    echo "--name が指定されていないため、新規作成には名前が必要です。例: --name Longest_Consecutive_Sequence" >&2
    exit 1
  fi
else
  TARGET_DIR="$TARGET_BASE/${ID}_${NAME}"
  mkdir -p "$TARGET_DIR"
fi

MAIN_FILE="$TARGET_DIR/Main.java"
if [[ -e "$MAIN_FILE" ]]; then
  echo "既に存在します: $MAIN_FILE"; exit 0
fi

cat > "$MAIN_FILE" <<'JAVA'
public class Main {
    public static void main(String[] args) {
        System.out.println("Ready: Java Main for this problem");
    }
}
JAVA

echo "作成しました: $MAIN_FILE"
echo "実行: scripts/run-java.sh --dir \"$TARGET_DIR\""
