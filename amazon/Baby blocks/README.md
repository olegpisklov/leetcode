You have a collection of baby blocks (cubes with single upper-case letters of the alphabet on each side).

Each block could have up to six different letters on it (or even more if we're in a universe with more than 3 dimensions),
but for the sake of simplicity, we'll assume for now that each block only has two distinct letters.

The problem is to write a function that takes a collection of blocks and a target word and
returns true or false depending on whether or not you can spell the target word with the collection of blocks.

Example:
(B,A),(A,B),(X,Y),(A,B): "BABY" => true
(B,A),(A,B),(L,E),(A,B): "ABLE" => false (since L and E are on the same block).

