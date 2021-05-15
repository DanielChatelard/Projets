# Le HTML

[Sommaire](./00-Sommaire.md)

    Le HTML est un langage de description qui utilise des balises pour structurer la page et organiser son contenu.

    Ces balises sont imbriquées entre elles, à la manière de poupées russes.

    On peut y ajouter du style pour modifier le design de la page web grâce au langage CSS, et ainsi la rendre plus agréable à la navigation.

## L'histoire du HTML

En 1990, Tim Berners-Lee et son équipe inventent un nouveau langage afin de faciliter la manière dont les chercheurs des différents pays s'échangent des données : le HTML, pour HyperText Markup Language.

L'idée est de structurer les documents à s'échanger de façon standardisée et de faciliter la communication.

Ils proposent alors de stocker ces fichiers HTML sur un ordinateur connecté à Internet : un serveur.

Malgré le fait que HTML signifie Hypertext Markup Language, ce n'est pas un langage de programmation à proprement parler. Il s'agit d'un langage de description : il décrit la structure de la page et l'organisation de son contenu, un peu comme le squelette de notre page.

Ce langage utilise des balises qui permettent de décrire la manière dont est organisée et formatée la page en HTML.

```markdown
Une balise est l'élément de structure principal du HTML. Il est représenté par un mot placé entre deux chevrons : <balise>. Chaque balise ouverte doit être refermée en utilisant une syntaxe similaire, mais en plaçant un slash "/" avant le nom : </balise>. Une balise permet ainsi de délimiter du texte et de lui donner un sens.
Certaines balises, très particulières, ne nécessitent pas de contenu textuel et donc ne doivent pas être refermées : on les appelle balises auto-fermantes. Deux syntaxes existent pour ces balises spéciales :
<br/>
<br>
Dans le premier cas, on remarque la présence du slash de fermeture à la fin du nom. Dans le second cas, rien n'indique la fermeture, le développeur sait juste qu'en HTML, la balise br (qui indique un saut de ligne, et donc ne nécessite pas de contenu) est auto-fermante.
```

## Habiller HTML avec style

C'est ainsi que le langage CSS (pour Cascading Style Sheet) a permis d'ajouter de la couleur et des effets sur les sites web pour les rendre plus modernes.

```markdown
Le CSS permet de définir le style (couleur, bordure, marges...) de chaque balise HTML. C'est un langage à part, qui peut se placer soit dans une balise <style> HTML, soit dans un fichier externe recommandé.
```
