def page_rank():
    from random import choice
    web = [[1, 2], [4], [0, 3], [0, 4], [0]]
    passages = [0, 0, 0, 0, 0]
    page = 2
    for i in range (10):
        page = choice(web[page])
        print (page)
        passages[page] = passages[page] + 1
        print (passages)

# page_rank()

nbr1 = int(input("Entrez un nombre positif ou négatif : "))
nbr2 = int(input("Entrez un autre nombre positif ou négatif : "))
if nbr1 > 0 and nbr2 > 0 or nbr1 < 0 and nbr2 < 0:
    print("Le produit sera positif.")
else:
    print("Le produit sera négatif.")