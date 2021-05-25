# <div style="color: #26B260">**Mise en place de la section**</div>

[Sommaire](./00-Sommaire.md)

## <div style="color: #26B260">*Insérer du texte et le centrer*</div>

```html
<section>Gîte nature en centre Bretagne</section>
```

```css
section {
    background-color: #060;
    grid-area: section;
    text-align: center;/* centrer le texte de la section */
    font-family: 'Courgette', cursive;/* Police importé de google-Fonts*/
    font-size: 35px;
    color: #f2f2f2;
    padding-top: 10px;/* Marge intérieur au dessus du texte */
    padding-bottom: 10px;/* Marge intérieur au dessous du texte */
}

header {
    background-color: #86c8fc;
    grid-area: header;
    background-image: url(media/img-header.png);
    background-repeat: no-repeat;
    display: flex;
    flex-direction: row-reverse;
    border-bottom: 1px solid #000;/* Ajout d'une bordure noir au dessous du header, pour séparer le header de la section */
}
```
