import random

def generate(length):
    position_key = [random.randint(0, 25) for i in range(length)]
    key = [chr(place+97) for place in position_key]
    print('Random key: ')
    print(''.join(key))
    return position_key

plaintext = str(input("Ente the plaintext: "))
plaintext = plaintext.lower()
plaintext = plaintext.replace(" ", "")

position_key = generate(len(plaintext))


def Encrypt():
    position_plain = [(ord(char)-97) for char in plaintext]

    ciphertext = list()
    ciphertext = [(chr(((position_key[i]+position_plain[i]) % 26)+97))
                   for i in range(len(position_plain))]
    return ciphertext

def Decrypt(ciphertext):
    cipherposition  = [(ord(char)-97) for char in ciphertext]

    plaintext = list()
    plaintext = [(chr(((cipherposition[i]-position_key[i]) % 26)+97))
                   for i in range(len(cipherposition))]
    return plaintext
    
ciphertext=Encrypt()
print("\nThe encrypted text is: ")
print(''.join(ciphertext))

plaintext=Decrypt(ciphertext)
print("\nThe decrypted text is: ")
print(''.join(plaintext))