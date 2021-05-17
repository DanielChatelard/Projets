
# <div style="color: #26B260">**Les colonnes**</div>

[Sommaire](./00-Sommaire.md)

<span style="color: yellow">*.col*</span> : classe de base pour les colonnes, elle occupera toute la place disponible en fonction de la présence ou non d'autres colonnes (ex : toute la place si elle est seule, la moitié s'il y en a deux, etc.).

<span style="color: yellow">*.col-{n}*</span> : permet de spécifier le nombre de colonnes que nous voulons utiliser parmi les douze possibles par ligne. Par exemple, si nous voulons 2 colonnes, dont une est beaucoup plus grande, nous pouvons lui donner la classe <span style="color: yellow">*.col-10*</span>.

<span style="color: yellow">*.col-{breakpoint}*</span> : les points de rupture de la grille sont basés sur des medias queries de largeur minimale, c'est-à-dire qu'ils s'appliquent à ce point de rupture et à tous ceux qui se trouvent au-dessus (par exemple, <span style="color: yellow">*.col-sm-4*</span>  s'applique aux appareils de petite, moyenne, grande et très grande taille, mais pas au premier point de rupture xs).

<span style="color: yellow">*.col-{breakpoint}-{n}*</span> : permet de spécifier un nombre de colonnes en fonction d'un point de rupture donné.
