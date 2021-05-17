
# <div style="color: #26B260">**Les cartes.**</div>

[Sommaire](./00-Sommaire.md)

<span style="color: yellow">*.card*</span> : pour initialiser le composant

```html
<!-- card, pour crée un carte -->
<div class="container"><!-- contient le tout -->
    <div class="card">
        
    </div>
</div>
```

<span style="color: yellow">*.card-img-top*</span> : pour placer une image en haut de la carte.

```html
    <!-- card-img-top, pour l'image en haut -->
    <div class="container"><!-- contient le tout -->
        <div class="card">
            <img src="#" alt="" class="card-img-top">
        </div>
    </div>
```

<span style="color: yellow">*.card-body*</span> : le bloc contenu principal de la carte

```html
<!-- card-body, pour mettre du texte -->
<div class="container">
    <div class="card">
        <img src="#" alt="" class="card-img-top">
        <div class="card-body">
                        
        </div>     
    </div>
</div>
```

<span style="color: yellow">*.card-title*</span> : pour le titre de la carte

```html
<!-- card-title, pour mettre le titre -->
<div class="container">
    <div class="card">
        <img src="#" alt="" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">titre</h5>
                        
        </div>     
    </div>
</div>
```

<span style="color: yellow">*.card-text*</span> : pour le texte de la carte.

```html
<!-- card-text, pour mettre le texte que l'on souhaite -->
<div class="container">
    <div class="card">
        <img src="#" alt="" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">titre</h5>
            <p class="card-text">texte</p>
            <button type="button" class="btn btn-primary">ok</button>
            
        </div>     
    </div>
</div>
```

<span style="color: yellow">*button*</span> : ajout d'un bouton valider.

```html
<!-- ajout d'un bouton, pour valider -->
<div class="container">
    <div class="card">
        <img src="#" alt="" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">titre</h5>
            <p class="card-text">texte</p>
            <button type="button" class="btn btn-primary">valider</button>            
        </div>     
    </div>
</div>
```

<span style="color: yellow">*avec un lien en forme de bouton*</span> : avec la class btn et btn-secondary, pour la couleur du bouton.

```html
    <div class="row">
        <h2 class="col-12">Mes actus</h2>
        <div class="col-4">
            <!-- Déclaration du composant -->
            <div class="card">
                <!-- Image située en haut -->
                <img src="https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_960_720.jpg" class="card-img-top" alt="Méditation">
                <!-- Corps de la carte -->
                <div class="card-body">
                    <!-- Titre -->
                    <h5 class="card-title">La méditation, bonne pour la santé</h5>
                    <!-- Contenu de la carte -->
                    <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque semper mi est, ac molestie nibh laoreet in.
                        Pellentesque massa orci, vulputate et condimentum vitae, pellentesque eget ipsum.
                    </p>
                    <a href="#" class="btn btn-secondary">Lire la suite...</a>
                </div>
            </div>
        </div>
        <!-- Deux autres cartes -->
    </div>
```
