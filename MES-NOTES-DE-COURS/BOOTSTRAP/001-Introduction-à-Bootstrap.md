
# <div style="color: #26B260">**1. Introduction à Bootstrap**</div>

[Sommaire](./00-Sommaire.md)

Bootstrap est un framework CSS, crée par Mark Otto et Jacob Thornton de la socièté Twitter Le 19 Août 2011 pour la première version.

Un framework est une collection d'outils qui va constituer le "squelette" d'une application ou d'un site.

Apportent un bon nombre de classes préconfigurées facilitant la mise en page et la mise en forme de l'application.

- Les aspects "layout" : gestion des colonnes, du responsive, grille d'affichage.
- Les aspects "contenus" : classes préconfigurées pour l'affichage du texte, des tableaux, des images.
- L'affichage de certains composants : mise en forme des boutons, des éléments de formulaires.

Tous ces éléments permettent donc de gagner en temps et en uniformité.

Bootstrap est donc un framework proposant une bibliothèque d'outils HTML, CSS et JavaScript, qui vont nous aider à concevoir nos applications web.

## <span style="color: #aaffff">**Sans installation via un CDN.**</span>

CDN (Content Delivery Network), ou réseau de diffusion de contenu (RDC) en français, est un ensemble d'ordinateurs (serveurs) mettant du contenu à disposition d'utilisateurs.

Pour utiliser BootstrapCDN, on insère les chemins des fichiers dans avec la balise link dans le head de notre code HTML avant nos propres fichiers, et on insère jQuery avant le fichier JavaScript de Bootstrap le tout avant la balise de fin de body <span style="color: red"><**/body**></span>.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Bootstrap</title>
    <!-- Bootstrap CDN CSS -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <!-- Votre  CSS -->
    <link href="style.css" rel="stylesheet" type="text/css">
  </head>
  <body>
    <h1>Hello world</h1>
    

    <!-- jQuery CDN -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <!-- Bootstrap CDN JavaScript -->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js" integrity="sha384-6khuMg9gaYr5AxOqhkVIODVIvm9ynTT5J4V1cfthmT+emCG6yVmEZsRHdxlotUnm" crossorigin="anonymous"></script>
    <!-- Our JavaScript -->
    <script src="script.js"></script>
  </body>
</html>
```

## <span style="color: #aaffff">**Avec installation.**</span>

Pour installer Bootstrap manuellement sur nos projets, nous devons :

- Télécharger le fichier ZIP de Bootstrap et le décompresser dans notre projet.
- Télécharger jQuery et le placer dans notre projet.
- Inclure le fichier CSS de Bootstrap dans notre fichier HTML, avant nos propres feuilles de styles.
- Inclure jQuery avant le fichier JavaScript de Bootstrap.
- Inclure le fichier JavaScript de Bootstrap avant nos fichiers JavaScript.

```html

<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Bootstrap</title>
        <!-- Bootstrap CSS -->
        <link href="bootstrap-4.4.1-dist/css/bootstrap.min.css" rel="stylesheet">
        <!-- Our CSS -->
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <div class="container">
        <h1>Hello World !</h1>
        <div class="alert alert-success" role="alert">
            Si vous voyez ce message en vert foncé dans un encart vert alors bravo, vous avez réussi à installer Bootstrap !
        </div>
    </div>
    
    <!-- jQuery -->
    <script src="jquery-3.4.1.min.js"></script>
    <!-- Bootstrap JavaScript -->
    <script src="bootstrap-4.4.1-dist/js/bootstrap.bundle.min.js"></script>
    <!-- Our JavaScript -->
    <script src="script.js"></script>
    </body>
</html>
```
