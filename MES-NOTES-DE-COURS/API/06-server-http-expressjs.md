
# <span style="color: #26B260">**Créer un server http avec ExpressJs.**</span>

[Sommaire](./00-Sommaire.md)

Crée un nouveau fichier nommé index.js, puis récupérer la librairie express avec le mot clé (require).

![img_56.png](images/img_56.png)

Créer un serveur dans le fichier index.js, on invoque express dans la const server.

![img_57.png](images/img_57.png)

Pour activé le serveur on va utiliser (.listen(le port, et une fonction callback)).

![img_58.png](images/img_58.png)

Pour executer le serveur, on va dans le terminal et on tape (node index.js)

Comment indiquer une route en GET?

Sur notre serveur on va lui indiquer la méthode (.get(URL, fonction callback avec la request, response))

![img_59.png](images/img_59.png)

On peut renvoyer un titre avec h1.

![img_60.png](images/img_60.png)

On rajoute une deuxième route ('/users').

![img_61.png](images/img_61.png)

On rajoute une route post('users').

![img_62.png](images/img_62.png)

Sur Insomnia.

![img_63.png](images/img_63.png)
