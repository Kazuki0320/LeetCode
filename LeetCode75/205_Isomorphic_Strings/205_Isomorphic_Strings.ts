function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const mapST = new Map<string, string>(); // s → t のマッピング
    const mapTS = new Map<string, string>(); // t → s の逆マッピング

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        // s → t のマッピングがすでにある場合
        if (mapST.has(charS)) {
            if (mapST.get(charS) !== charT) return false; // 一貫性がない場合
        } else {
            mapST.set(charS, charT);
        }

        // t → s のマッピングがすでにある場合
        if (mapTS.has(charT)) {
            if (mapTS.get(charT) !== charS) return false; // 一貫性がない場合
        } else {
            mapTS.set(charT, charS);
        }
    }

    return true;
}

console.log(isIsomorphic("egg", "add")); // true


/**
 * 2つの Map を用意
 *  - s の文字 → t の文字 のマッピング
 *  - t の文字 → s の文字 のマッピング（逆方向のチェック）
 * s の文字を 1文字ずつ t の文字に対応させる
 *  - 既にマッピングされているか確認
 *  - 矛盾がある場合は false
 * すべての文字で一意なマッピングが可能なら true

 */
