
# <span style="color: #26B260">**Notre premier composant**</span>

[Sommaire](./00-Sommaire.md)

Dans le dossier app, créé un dossier composant puis à l'intérieur créé un dossier app, sélectionné les fichiers app.component.

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

## <span style="color: #aaffff">Créer un component avec </span><span style="color: yellow">**ng generate component**</span>

Tapez dans le terminal.

ng generate component nomDuComponent

exemple: ng generate component about

Raccourci : <span style="color: yellow">*ng g c about*</span>

Le CLI a créé un nouveau sous-dossier **about** et a créé quatre fichiers

<span style="color: yellow">*about.component.html*</span>, pour la page html

<span style="color: yellow">*about.component.scss*</span>, une feuille de styles

<span style="color: yellow">*about.component.ts*</span>, un fichier component

<span style="color: yellow">*about.component.spec.ts*</span>, un fichier spec pour les tests

# <span style="color: #26B260">**Interpolation**</span>

[Sommaire](./00-Sommaire.md)

L'interpolation c'est le fait d'afficher une variable dans le html ou une méthode grâce à deux accolades <span style="color: yellow">**{{ title }}**</span> entre les balises.

![img_25.png](images/img_25.png)

La variable title par interpolation.

![img_23.png](images/img_23.png)

méthode getTitle( ) par interpolation.

![img_24.png](images/img_24.png)
# <span style="color: #aaffff">**6. Property binding**</span>

## <span style="color: #aaffff">**7. event binding**</span>

<span style="color: yellow">*couleur*</span>

## <span style="color: #aaffff">**two way data binding**</span>

## <span style="color: #aaffff">**ngif**</span>

## <span style="color: #aaffff">**ngfor**</span>

## <span style="color: #aaffff">**Découpage des composants**</span>

## <span style="color: #aaffff">**Partages des données à un composant enfant - Input decorator**</span>

## <span style="color: #aaffff">**Émettre des données au composant parent**</span>

## <span style="color: #aaffff">**Modules**</span>

### <span style="color: #aaffff">**routing**</span>

### <span style="color: #aaffff">**routing params**</span>

### <span style="color: #aaffff">**routing router service**</span>

### <span style="color: #aaffff">**component licycle**</span>

### <span style="color: #aaffff">**Programmation réactive avec la librairie RxJs**</span>

### <span style="color: #aaffff">**Services et injection des dépendances**</span>

### <span style="color: #aaffff">**Services et observable**</span>

### <span style="color: #aaffff">**Reactive Forms - PARTIE 1**</span>

### <span style="color: #aaffff">**reactive forms - partie 2**</span>

### <span style="color: #aaffff">**Effectuer des requêtes http à notre api**</span>

### <span style="color: #aaffff">**Envoyer des données au serveur avec la méthode post**</span>

### <span style="color: #aaffff">**Gérer nos requêtes grâce aux services**</span>

### <span style="color: #aaffff">**21. a faire**</span>
