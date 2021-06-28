# <div style="color: #26B260">**Introduction à PHP**</div>

[Sommaire](./00-Sommaire.md)

    PHP est un langage de scripts exécutés côté serveur : c'est le serveur qui va interpréter le code PHP et générer la page web renvoyée au navigateur web.

    Le code PHP n'est pas visible par l'internaute. Contrairement au code JavaScript ou HTML, il n'est à aucun moment possible pour l'internaute de voir le code PHP qui a été écrit pour générer sa page, ce code étant interprété côté serveur et non côté client.

En plus des pages web, PHP est capable de générer des images, des PDF, etc., et également de se connecter à de nombreux systèmes de gestion de bases de données.

PHP, dont l'acronyme récursif est PHP Hypertext Preprocessor, est un langage de programmation open source créé en 1994 par Rasmus Lerdorf.

    L'extension utilisée pour créer les fichiers PHP est .php (ex : index.php).

    Pour écrire du code PHP, il faut insérer celui-ci entre une balise ouvrante <?php et une balise fermante ?>. C'est uniquement le code présent entre ces balises qui sera interprété.

    S'il contient uniquement du PHP, il est préférable de ne pas mettre de balise fermante ?> afin d'éviter d'éventuelles erreurs.

    Chaque ligne de code se termine par un point-virgule (;).

Afficher un message :

```php
 <?php
 echo 'Hello Word !';
 ?>
```

[Documentation Balises PHP](https://www.php.net/manual/fr/language.basic-syntax.phptags.php)
