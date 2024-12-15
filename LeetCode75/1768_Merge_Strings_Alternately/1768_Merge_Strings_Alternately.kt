class Solution {
    fun mergeAlternately(word1: String, word2: String): String {
        val sb = StringBuilder()
        val len1 = word1.length
        val len2 = word2.length
        val maxLen = maxOf(len1, len2)
        
        for (i in 0 until maxLen) {
            if (i < len1) sb.append(word1[i])
            if (i < len2) sb.append(word2[i])
            println("${sb}")
        }
        
        return sb.toString()
    }
}

