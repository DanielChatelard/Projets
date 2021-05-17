
# <span style="color: #26B260">**Component state.**</span>

[Sommaire](./00-Sommaire.md)

Différence entre les props et les states.

Rappel:

Création d'un composant fonctionnel.

![img_82.png](images/img_82.png)

Création d'un composant avec une classe.

![img_83.png](images/img_83.png)

Dans les deux cas, on peut passer des propriétés (props)mais au niveau d'un composant fonctionnel il n'aura pas d'état local. Pour cela il faut utiliser une classe.

Un state c'est l'état local d'un composant.

Initialiser un état (state).

![img_84.png](images/img_84.png)

Pour modifier le state il faut utiliser la méthode this.setState().

![img_86.png](images/img_86.png)

On modifie le name eu ajoutant un tiret et le nb à 1.

Code complet de la classe.

![img_87.png](images/img_87.png)

Créer un intervalle, toutes les secondes je change le nombre (nb) avec la méthode setState.

![img_88.png](images/img_88.png)

Les props sont faites pour être immutable, elle ne sont pas faites pour être changé.
