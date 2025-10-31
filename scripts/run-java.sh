#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEFAULT_MAIN_CLASS="helloworld.App"
OUT_ROOT="$ROOT_DIR/out/java"
mkdir -p "$OUT_ROOT"

usage() {
  cat <<USAGE
Usage:
  ${0##*/}                      # デフォルトの $DEFAULT_MAIN_CLASS を実行
  ${0##*/} --id <ID>            # 例: --id 128 → LeetCode75/128_* ディレクトリ内の Java を実行
  ${0##*/} --dir <PATH>         # 任意のディレクトリ内の Java を実行
  [--class <MainClass>]         # 実行するメインクラス名（省略時は自動検出→なければ Main）

備考:
  - ディレクトリ直下の .java をコンパイル対象にします（再帰しません）。
  - パッケージがある場合は自動検出し、FQCN を組み立てて実行します。
USAGE
}

TARGET_DIR=""
MAIN_CLASS=""

while [[ $# -gt 0 ]]; do
  case "$1" in
    -h|--help)
      usage; exit 0 ;;
    --id)
      shift; ID="${1:-}" || true
      if [[ -z "${ID:-}" ]]; then echo "--id の引数が空です"; exit 1; fi
      # LeetCode75 直下で ID_ から始まるディレクトリを検索（空白含む名前に対応）
      mapfile -t CANDIDATES < <(find "$ROOT_DIR/LeetCode75" -maxdepth 1 -type d -name "${ID}_*" | sort)
      if [[ ${#CANDIDATES[@]} -eq 0 ]]; then echo "ID=${ID} のディレクトリが見つかりません"; exit 1; fi
      TARGET_DIR="${CANDIDATES[0]}" ;;
    --dir)
      shift; TARGET_DIR="${1:-}" || true
      if [[ -z "$TARGET_DIR" ]]; then echo "--dir の引数が空です"; exit 1; fi
      if [[ ! -d "$TARGET_DIR" ]]; then echo "ディレクトリが存在しません: $TARGET_DIR"; exit 1; fi ;;
    --class)
      shift; MAIN_CLASS="${1:-}" || true ;;
    *)
      echo "不明な引数: $1"; usage; exit 1 ;;
  esac
  shift
done

# デフォルト動作（Hello World）
if [[ -z "$TARGET_DIR" ]]; then
  local_out="$OUT_ROOT/default"
  rm -rf "$local_out" && mkdir -p "$local_out"
  # src/main/java をビルドして既定のクラスを起動
  SRC_DIR="$ROOT_DIR/src/main/java"
  mapfile -t JAVA_FILES < <(find "$SRC_DIR" -type f -name "*.java" | sort)
  if [[ ${#JAVA_FILES[@]} -eq 0 ]]; then echo "Java ソースが見つかりません: $SRC_DIR"; exit 1; fi
  javac -d "$local_out" "${JAVA_FILES[@]}"
  exec java -cp "$local_out" "$DEFAULT_MAIN_CLASS"
fi

# 問題ディレクトリをビルド・実行
local_out="$OUT_ROOT/$(basename "$TARGET_DIR")"
rm -rf "$local_out" && mkdir -p "$local_out"

# 直下の .java を対象（空白対応のため配列化）
mapfile -t JAVA_FILES < <(find "$TARGET_DIR" -maxdepth 1 -type f -name "*.java" | sort)
if [[ ${#JAVA_FILES[@]} -eq 0 ]]; then
  echo "Java ファイルが見つかりません: $TARGET_DIR"
  echo "このディレクトリ直下に Main.java 等を置いてください。"
  exit 1
fi

javac -d "$local_out" "${JAVA_FILES[@]}"

# MAIN_CLASS が未指定なら自動検出: public static void main を含む public class を探す
if [[ -z "$MAIN_CLASS" ]]; then
  DETECTED_CLASS=""
  DETECTED_PKG=""
  for f in "${JAVA_FILES[@]}"; do
    if grep -q "public[[:space:]]\+static[[:space:]]\+void[[:space:]]\+main[[:space:]]*([[:space:]]*String\[\]" "$f"; then
      # パッケージ名
      if grep -q "^package[[:space:]]\+" "$f"; then
        DETECTED_PKG=$(sed -n 's/^package[[:space:]]\+\([^;]\+\);/\1/p' "$f" | head -n1)
      else
        DETECTED_PKG=""
      fi
      # public class 名
      CLASS_NAME=$(sed -n 's/^public[[:space:]]\+class[[:space:]]\+\([A-Za-z0-9_\$]\+\).*/\1/p' "$f" | head -n1)
      if [[ -n "$CLASS_NAME" ]]; then
        if [[ -n "$DETECTED_PKG" ]]; then
          DETECTED_CLASS="$DETECTED_PKG.$CLASS_NAME"
        else
          DETECTED_CLASS="$CLASS_NAME"
        fi
        break
      fi
    fi
  done
  if [[ -z "$DETECTED_CLASS" ]]; then
    # フォールバック: Main（パッケージなし想定）
    DETECTED_CLASS="Main"
  fi
  MAIN_CLASS="$DETECTED_CLASS"
fi

exec java -cp "$local_out" "$MAIN_CLASS"


