/**
 * 目的
 * targetの文字列の出現箇所の要素を返す問題
 * 
 * 処理
 * まずは、過去の処理からどのような処理にしているのか把握
 * 
 * # mapsAreEqual
 * 	- sMapとpMapを引数として受け取っている
 * 
 * # findAnagrams
 * - pの文字頻度をpMapに記録
 * - sの文字列を管理
 *  - なぜ、sの文字列を管理するのか
 * - pMap
 *  - pの文字頻度を管理
 * - ウィンドウサイズを超えたら、左端の文字を除外
 *  - sMapの中に、outCharが存在すしない場合
 *   - sMapからdelete
 *  - それ以外
 *  	- sMapにset
 * - pと同じサイズのウィンドウに達したとき、sMapとpMapを比較
 *  - もし、等しい時はresultに結果をpush
 * 
 */