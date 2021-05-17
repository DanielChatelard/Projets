
# <span style="color: #26B260">**Paramètre de route et contenue de la requête.**</span>

[Sommaire](./00-Sommaire.md)

![img_64.png](images/img_64.png)

Pour accéder à la propriété de request, je dois utiliser body, il faut implémenter un middleware.

![img_65.png](images/img_65.png)

![img_66.png](images/img_66.png)

Maintenant, j'ai accès au contenu de ma requête.

![img_67.png](images/img_67.png)

De cette manière, je peux récuperer le contenu d'une requête.

![img_68.png](images/img_68.png)

![img_69.png](images/img_69.png)

Grâce aussi au middleware.

![img_70.png](images/img_70.png)

Cas où, on souhaite supprimer un route (users/:id).

:id, indique un paramètre dans l'URL.

![img_72.png](images/img_72.png)

On voit que user récupère bien l'id dans l'URL.

![img_73.png](images/img_73.png)

Mettre à jour un utilisateur avec la méthode put.

![img_74.png](images/img_74.png)

On fait dans Insomnia une requête put avec l'URL et la route (/users/) puis l'id (234) et on met à jour via l'onglet JSON les données.
![img_75.png](img_75.png)