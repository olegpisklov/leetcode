Find the most frequently used keyword that is not in a list of ignored_keywords that is used within a paragraph. The paragraph is a single line of words that may contain punctuation, mixed with uppercase and lowercase. The word comparisons should not be case sensitive, and the output is expected to be lowercase.

Examples
Example 1:
Input:
paragraph = "If this book was written today in the midst of the slew of dystopian novels that come out, it may not have stood out. But, this book was way ahead of its time." ignored_keywords = ["of", "was", "the"]

Output: "book"
Explanation:
"of" appears three times and "was", "the" appear twice, but they are part of the ignored_keywords list. The next most popular word is "book", which appears twice.

Constraints
There is always at least one word in the paragraph and at least one word in the list of excluded keywords. The most common keyword usage count that is not ignored will always be unique. Keywords in the exclusion list only consist of lowercase alphabetical characters.