
# <div style="color: #26B260">**Les fenêtres modales.**</div>

[Sommaire](./00-Sommaire.md)

Elle servent à afficher un message dans une popup.
<span style="color: yellow">*.modal*</span> : pour initialiser le composant.

```html
    <div 
       class="modal">
       tabindex="-1"<!-- évite de la cibler avec la touche tab -->
       role="dialog"
       id="monid"
    </div>
```

<span style="color: yellow">*.modal-dialog*</span> et <span style="color: yellow">*.modal-content*</span>  : pour initialiser la fenêtre en elle-même.

```html
    <div 
       class="modal">
       tabindex="-1"<!-- évite de la cibler avec la touche tab -->
       role="dialog"
       id="monid"
    <!-- modal-dialog-centered, pour centrer la modal sur la page -->
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">titre</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    <!--( &times;) déssine une croix -->
                </button>
            </div>
            <div class="modal-body">
                confirmez-vous?
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Annuler</button>
                <button type="button" class="btn btn-success">Confirmer</button>
            </div>
        </div>
    </div>
    </div>
```

<span style="color: yellow">*.modal-header, .modal-body et .modal-footer*</span> : pour définir la structure de la fenêtre
