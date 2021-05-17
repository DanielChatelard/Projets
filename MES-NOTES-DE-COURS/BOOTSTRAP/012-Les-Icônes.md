
# <div style="color: #26B260">**Les icônes.**</div>

[Sommaire](./00-Sommaire.md)

Bootstrap 4 possède sa propre librairie d'icônes intégrées. Ces icônes sont téléchargeables et sont au format **svg**.
Pour utiliser les icônes, il suffit de cliquer sur une icône de la librairie et de copier-coller le code.

```html
    <button type="button" class="btn btn-danger">
        Delete
        <!-- code à copier sur Bootstrap-->
        <svg class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"/>
          <path fill-rule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clip-rule="evenodd"/>
        </svg>
        <!-- et à coller -->
    </button>
```

![delete-button-icon.png](images/delete-button-icon.png)

Il est possible de changer la taille de l’icône de plusieurs façons :

- Via les attributs width et height de la balise du svg (cf exemple)
- Via le CSS

```css
    .bi-trash {
       width: 1em;
       height: 1em;
    }
```

<span style="color: yellow">*.text-danger*</span>, met la couleur rouge sur icône.

```html
    <button type="button" class="btn btn-danger">
        Delete
        <!-- code à copier sur Bootstrap-->
        <svg class="bi bi-trash text-danger" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"/>
          <path fill-rule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clip-rule="evenodd"/>
        </svg>
        <!-- et à coller -->
    </button>
```
