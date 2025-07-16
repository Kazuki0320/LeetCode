import { findAnagrams } from './438_Find_All_Anagrams_in_a_String'

describe('findAnagrams', ()=> {
	test('アナグラムを見つける', ()=> {
		const s = 'cbaebabacd';
		const p = 'abc';
	
		const result = findAnagrams(s,p);
		expect(result).toEqual([0, 6]);
	})
})

