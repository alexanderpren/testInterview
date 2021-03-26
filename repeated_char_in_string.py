import re
def solution(s):
    find = ""
    for i in s:
        twice = s.count(i)
        if twice == 2:
            find = i 

    
    
    return find



s = "abcdfgah"

print(solution(s))
