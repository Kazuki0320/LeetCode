class Solution {
    fun lengthOfLastWord(s: String): Int {
        val mlist = mutableListOf<Int>()
        
	    val array= s.trim().split(" ")
	    val strLength = array.last().length
        mlist.add(strLength)
        return mlist.max()
    }
}

/*
・空白で区切る
・文字列をカウントすること
 */
