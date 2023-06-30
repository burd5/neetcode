# English Twist on a Japanese Classic

"""
Your Task:
You will be given a list of strings, a transcript of an English Shiritori match. Your task is to find out if the game ended early, and return a list that contains every valid string until the mistake. If a list is empty return an empty list. If one of the elements is an empty string, that is invalid and should be handled.

Examples:
All elements valid:
The array {"dog","goose","elephant","tiger","rhino","orc","cat"}

should return {"dog","goose","elephant","tiger","rhino","orc","cat"}

An invalid element at index 2:
The array {"dog","goose","tiger","cat", "elephant","rhino","orc"}

should return ("dog","goose") since goose ends in 'e' and tiger starts with 't'

An invalid empty string at index 2:
The array {"ab","bc","","cd"}

should return ("ab","bc")

All invalid empty string at index 0:
The array {"","bc","","cd"}

should return An Empty List

"""

def game(words):
    if not words or words[0] == '': return []
    res = [words[0]]
    for i in range(len(words) - 1):
        if words[i] == '' or words[i + 1] == '':
            return res
        elif words[i][-1] == words[i + 1][0]:
            res.append(words[i + 1])
        else:
            return res
    return res