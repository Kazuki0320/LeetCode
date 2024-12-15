<?php
	class Solution {
		/**
		 * @param string $str1
		 * @param string $str2
		 * @return string
		 */

		function gcdOfStrings($str1, $str2) {
			if ("{$str1}{$str2}" != "{$str2}{$str1}") {
				return "";
			}

			$gcdLength = $this->gcd(a: strlen(string: $str1), b: strlen(string: $str2));
			return substr(string: $str1, offset:0, length: $gcdLength);
		}

    /**
     * ユークリッドの互除法で最大公約数を求める
     * @param int $a
     * @param int $b
     * @return int
     */
    function gcd($a, $b) {
        return $b == 0 ? $a : $this->gcd($b, $a % $b);
    }
	}