# <div style="color: #26B260">**Mise en place de la nav**</div>

[Sommaire](./00-Sommaire.md)

## <div style="color: #26B260">*Insérer une liste à puce*</div>

```html
    <nav>
        <ul>
            <li>Acceuil</li>
            <li>Visite</li>
            <li>Contact</li>
        </ul>
    </nav>
```

## <div style="color: #26B260">*supprimer les puces de la liste à puce*</div>

```css
nav ul li {
    list-style: none;/* Enlève les puces de la liste */
}
```

## <div style="color: #26B260">*Neutraliser les marges de la liste à puce*</div>

```css
nav ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
}
```

## <div style="color: #26B260">*créer des liens sur les listes à puce*</div>

```html
    <nav>
        <ul>
            <li><a href="#">Acceuil</a></li>
            <li><a href="#">Visite</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
```

## <div style="color: #26B260">*Changer la couleur des listes à puce et le soulignement*</div>

```css
nav ul li a {
    color: #ff0;
    text-decoration: none;/* Enlève le soulignement */
    font-size: 20px;
    font-weight: bold;/* mets en gras */
}
```

## <div style="color: #26B260">*centrer les liens*</div>

```css
nav ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;/* centrer les liens*/
}
```

## <div style="color: #26B260">*Aérer les liens*</div>

```css
nav ul li {
    list-style: none;/* Enlève les puces de la liste */
    padding: 20px;
}
```

## <div style="color: #26B260">*Au survole de la souris sur les liens*</div>

```css
8min8
```
