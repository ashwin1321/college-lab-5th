def rowColumnEncryption(key,message):
    remaningLetter=0
    cipherText=''
    key_len=len(key)
    message.replace(" ","")
    message=list(message)
    #checking the length of message and if necessary adding x
    if(len(message)%key_len!=0):
        remaningLetter=key_len-(len(message)%7)
        for i in range(remaningLetter):
            message.append('x')
    totalRow=len(message)//key_len
    matrixMessage=[[0 for i in range(key_len)] for j in range(totalRow)] 
    count=0
    
    # converting message to matrix accoding to size of key
    for i in range(totalRow):
        for j in range(key_len):
            matrixMessage[i][j]=message[count]
            count+=1
        if count ==len(message):
            break   
    # finding the key position
    keyposition=[]
    count=0
    for i in range(1,key_len+1):
        keyIndex=key.index(i)
        keyposition.append(keyIndex)
    for i in range(len(keyposition)):
        for j in range(totalRow):
            cipherText+=matrixMessage[j][keyposition[i]]
    print("\nCipherText: "+cipherText)

def rowColumnDecryption(key,message):
    plainText=''
    key_len=len(key)
    message.replace(" ","")
    message=list(message)
    totalRow=len(message)//key_len
    print(str(totalRow)+"\n")
    matrixMessage=[[0 for i in range(key_len)] for j in range(totalRow)] 
    count=0
    keyposition=[]
    count=0
    for i in range(1,key_len+1):
        keyIndex=key.index(i)
        keyposition.append(keyIndex)
    for i in range(len(keyposition)):
        for j in range(totalRow):
            matrixMessage[j][keyposition[i]]=message[count]
            count+=1
    for i in range(totalRow):
        for j in range(key_len):
            plainText+=matrixMessage[i][j]
    print("PlainText: "+plainText)

# key=[3,2,4,1,5]
key=[]
noKey=int(input("Enter number of Key: "))
print("Enter key: ")
for i in range(noKey):
    key.append(int(input("")))

choice = int(input("\nEnter your choice:\n1. Encrypt\n2. Decrypt\n3. Exit\n"))
if choice == 1:
    plainText=input("Enter plainText: ")
    rowColumnEncryption(key,plainText)
elif choice == 2:
    cipherText=input("Enter cipherText: ")
    rowColumnDecryption(key,cipherText)
elif choice == 3:
    exit()
else:
    print("Choose correct choice!!!!")