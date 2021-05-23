# <div style="color: #26B260">**Mise en page CSS Smartphone**</div>

[Sommaire](./00-Sommaire.md)

## <div style="color: #26B260">*Mise en place d'un média queries*</div>

```css
/* pour les écrans d'un maximum de 900px*/
@media screen and (max-width: 900px) {
    /* Mise en place de la grille en ciblant la class site, et modification de l'affichage*/
.site {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 
        "header"
        "nav"
        "article"
        "footer";
}
section {
    display: none; /* pour ne pas afficher la section */ 
}
}
```
