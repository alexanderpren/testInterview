
def mergingLetters(s, t):
    first_string_len = len(s)
    second_string_len = len(t)
    
    if first_string_len == 0 and second_string_len != 0:
        s = t
    else:
        if second_string_len == 0  and first_string_len != 0:
            t = s
    new_string = ""
    if first_string_len > second_string_len:
        for i in range(first_string_len):
            another_char = None
            try: 
               
                another_char = t[i]
            except:
                pass
            if another_char:
                new_string += s[i] + another_char
            else:
                new_string += s[i]
    return new_string
            

     
s = "aaaaa"
t = "bbb"

print(mergingLetters(s,t))
