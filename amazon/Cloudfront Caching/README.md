AWS CloudFront wants to build an algorithm to measure the efficiency of its caching network. The network is represented as a number of nodes and a list of connected pairs. The efficiency of this network can be estimated by first summing the cost of each isolated set of nodes where each individual node has a cost of 1. To account for the increase in efficiency as more nodes are connected, update the cost of each isolated set to be the ceiling of the square root of the original cost and return the final sum of all costs. 

Example:

n = 10 nodes 
edges = [[1 2], [1 3], [2 4], [3 5], [7 8]] 

There are 2 isolated sets with more than one node, {1, 2, 3, 4, 5} and {7, 8}. The ceilings of their square roots are 51/2 = 2.236 and ceil(2.236) = 3, 21/2 = 1.414 and ceil(1.414) = 2. The other three isolated nodes are separate and the square root of their weights is 11/2 = 1 respectively. The sum is 3 + 2 + (3 * 1) = 8.

https://leetcode.com/discuss/interview-question/1073460/Amazon-OA-Question-Cloudfront-Caching