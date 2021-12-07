import random
randomlist = []
for i in range(0,1000):
    n = random.randint(0,100)
    randomlist.append(n)
    a = " ".join(map(str,randomlist)) 
print(randomlist)
