import random
randomlist = []
for i in range(0,10000):
    n = random.randint(0,1000)
    randomlist.append(n)
    a = randomlist
    a.sort()
print(a)

