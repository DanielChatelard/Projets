# <div style="color: #26B260">**Mise en place du header**</div>

[Sommaire](./00-Sommaire.md)

## <div style="color: #26B260">*Insérer l'image de fond du header*</div>

```css
header {
    background-color: #6cf;
    grid-area: header;
    background-image: url(media/img-header.png);/* image de fond*/
    background-repeat: no-repeat;/* évite de répéter l'image */
}

/* hauteur du header pour l'image 65px*/
.site {
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 65px;/* hauteur de ligne */
    grid-template-areas: 
        "header header"
        "nav section"
        "nav article"
        "footer footer";
}
```

## <div style="color: #26B260">*Mise en place du logo dans le header*</div>

```html
    <div class="site">
        <header>
            <div>
                <img src="media/logo.png" alt="logo">
            </div>
        </header>
        <section>section</section>
        <nav>nav</nav>
        <article>article</article>
        <footer>footer</footer>
    </div>
```

```css
header {
    background-color: #6cf;
    grid-area: header;
    background-image: url(media/img-header.png);
    background-repeat: 
    display: flex;/* tout les contenus sera alignés sur l'axe horizontale */
    flex-direction: row-reverse;/* positionnera le logo à droite*/
}

header div {
    width: 30%;/* alignement du logo à 30% de la droite*/ 
    display: flex; /* alignement sur l'axe principale */
    align-items: center;/* centrer le texte Gîte nature*/
    font-family: 'Courgette', cursive;/* Police importé de google-Fonts*/
    font-size: 20px;/* Taille de la police */
    color: #060;/* Couleur de la police*/
}
```

```css
/* import de la police courgette dans le fichier css*/
@import url('https://fonts.googleapis.com/css2?family=Courgette&display=swap');
```

## <div style="color: #26B260">*Pour les smartphones ne plus afficher l'images du header et centrer le logo*</div>

```css
@media screen and (max-width: 900px) {
    
.site {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 
        "header"
        "nav"
        "article"
        "footer";
}

header {
    background-image: none;/* ne pas afficher l'image de fond */    
}

header div {
    width: 100%;/* largeur 100% */ 
    display: flex; /* alignement sur l'axe principale */
    justify-content: center;/* centrer le contenu logo */
}
section {
    display: none; 
}
```
