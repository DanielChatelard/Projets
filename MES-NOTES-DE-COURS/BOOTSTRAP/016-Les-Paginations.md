
# <div style="color: #26B260">**Les paginations.**</div>

[Sommaire](./00-Sommaire.md)

<span style="color: yellow">*.pagination*</span>: permet d'initialiser le composant

```html
    <!-- pagination sur ul. -->
    <nav aria-label="Pagination">
        <ul class="pagination">
            
        </ul>
        
    </nav>
```

<span style="color: yellow">*.page-item*</span> : permet d'indiquer qu'il s'agit d'un élément de navigation

```html
    <!-- page-item sur li. -->
    <nav aria-label="Pagination">
        <ul class="pagination">
            <li class="page-item">
                
            </li>
        </ul>
        
    </nav>
```

<span style="color: yellow">*.page-link*</span> : permet d'indiquer qu'il s'agit d'un lien vers une page

```html
    <!-- page-link sur le lien (a). -->
    <nav aria-label="Pagination">
        <ul class="pagination">
            <li class="page-item">
                <a href="#" class="page-link">
                    <svg>icons chevron-left à mettre</svg>
                    Précédent
                </a>
                <a href="#" class="page-link">
                    1
                </a>
                <a href="#" class="page-link">
                    2
                </a>
                <a href="#" class="page-link">
                    3
                </a>
                <a href="#" class="page-link">
                    Suivant
                    <svg>icons chevron-right à mettre</svg>
                </a>
            </li>
        </ul>        
    </nav>
```

<span style="color: yellow">*.disabled*</span> : permet d'empêcher d'accéder à un élément.

<span style="color: yellow">*.active*</span> : pour indiquer la page courante.
