
# <span style="color: #26B260">**Notre premier composant**</span>

[Sommaire](./00-Sommaire.md)

Dans le dossier app, crée un dossier composant puis à l'intérieur crée un dossier app, sélectionné les fichiers app.component.

![img_18.png](images/img_18.png)

puis couper/coller et les déplacer dans le nouveau dossier app.
Vérifier dans le fichier app.module.ts qu'il importe bien nos fichiers que nous avons déplacés.
![img_19.png](images/img_19.png)

Dans le fichier app.component.ts.

Un component est une classe que l'on exporte et qui est annoté d'une directive qui s'appelle @Component.Elle est importée à partir du core d'angular 

![img_20.png](images/img_20.png)

à l'intérieur du décorateur @Component, on trouve :

<span style="color: yellow">*selector*</span> : il s'agit du nom qu'on utilisera comme balise HTML pour afficher ce component. Ce nom doit être unique et ne doit pas être un nom réservé HTML de type div, body, etc. On utilisera donc très souvent un préfixe comme app.
ici 'app-root'.

<span style="color: yellow">*templateUrl*</span>: le chemin vers le code HTML à injecter, './app.component.html',

![img_22.png](images/img_22.png)

On peut aussi écrire du html entre des backticks.

![img_21.png](images/img_21.png)

<span style="color: yellow">*styleUrls*</span> : un array contenant un ou plusieurs chemins vers les feuilles de styles qui concernent ce component, 'app.component.scss'.

## <span style="color: #aaffff">Créer un component avec</span><span style="color: yellow">**ng generate component**</span>

Tapez dans le terminal.

ng generate component nomDuComponent

exemple: ng generate component about

Raccourci : <span style="color: yellow">*ng g c about*</span>

Le CLI a créé un nouveau sous-dossier **about** et a créé quatre fichiers

<span style="color: yellow">*about.component.html*</span>, pour la page html

<span style="color: yellow">*about.component.scss*</span>, une feuille de styles

<span style="color: yellow">*about.component.ts*</span>, un fichier component

<span style="color: yellow">*about.component.spec.ts*</span>, un fichier spec pour les tests
