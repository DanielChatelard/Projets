# <div style="color: #26B260">**4. Les chemins.**</div>

[Sommaire](./00-Sommaire.md)

<span style="color: #26B260">**1. Chemin absolu.**</span>

Le chemin absolu est le chemin complet qui conduit à une ressource, depuis la racine.

```markdown
   C:\Users\John\Documents\Projets
```

<span style="color: #26B260">**2. Chemin relatif.**</span>

Le chemin relatif, est relatif au répertoire courant.

il faut employer le point "." et le double point "..".

Le point "." indique le dossier courant, et le double point ".." indique le dossier précédent.

Il est possible de remonter plusieurs fois en arrière en enchaînant les doubles points : "../../..". Dans ce cas, nous retournons trois dossiers en arrière par rapport au dossier dans lequel nous nous trouvions.

Si nous nous trouvons dans le dossier C:\Users\John\Documents\Projets\MonSiteVente et que nous souhaitons récupérer une ressource (une image, par exemple) dans le dossier "Projets", puis "MonBlog", il faut:

```markdown
   ../MonBlog/monImage.png , je recule dans Projets puis je vais dans MonBlog puis dans monImage.png.
```
