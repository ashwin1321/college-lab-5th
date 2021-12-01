def gen(string,key):            
    key = list(key)
    if len(string) == len(key):
        return (key)
    else:
        for i in range(len(string)-len(key)):
            key.append(key[i % len(key)])
    return ("".join(key))


def Encrypt(string,key):
    text = []
    for i in range(len(string)):
        X = (ord(string[i])+ord(key[i])) % 26
        X += ord('A')
        text.append(chr(X))
    return ("".join(text))

def Decrypt(text,key):
    plaintext = []
    for i in range(len(text)):
        Y =(ord(text[i])-ord(key[i]) +26) % 26
        Y += ord('A')
        plaintext.append(chr(Y))
    return("".join(plaintext))

if __name__ == "__main__":

    entered_text = input("Enter the text: ")
    entered_key = input("Enter the key: ")
    key = gen(entered_text,entered_key)
    text = Encrypt(entered_text,key)
    dec = Decrypt(text,key)

    print(f"The encrypted text is: {text}")
    print(f"The decrypted text is: {dec}")