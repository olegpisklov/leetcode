A librarian would like to count the number of enclosed items in row that are between two dividers. A row is represented by a string s, each item is a *, and a divider is represented as |. A list of range tuples are given that represent each substring to consider, and the number of enclosed items for each substring must be returned in a list.

* = ascii number 42
| = ascii number 124
Example 1:
Input: s = |**|*|*, ranges = [[0, 4], [1, 6]]
Output: [1, 2]
Explanation:
The first range to consider is [0, 4] which corresponds to |**|*. There are 2 items in the first enclosed part.

For the second range, [1, 6], the substring is **|*|*, which contain only one enclosed part with one item inside it.

Both of the answers are returned in an array, ie. [2, 1].

Example 2:
Input: s = *|*|, ranges = [[1, 3]]
Output: [1]
Explanation:
The substring from index = 1 to index = 3 is |*|. There is only one item and it is surrounded by two dividers. Therefore, the output is [1].

Constraints:
There are no invalid characters, and each range is non-zero in size and always increasing. The ranges provided are always within the string bounds.