
# <div style="color: #26B260">**Menu de navigation.**</div>

[Sommaire](./00-Sommaire.md)

<span style="color: yellow">*.navbar*</span> : pour déclarer le composant pour le menu de navigaation.

```html
    <body>
        <!-- déclaration du menu avec navbar -->
        <nav class="navbar">
            
        </nav>
    </body>
```

<span style="color: yellow">*navbar-dark bg-primary*</span>, modifier la couleur du menu appliquées sur l'élément <span style="color: lightblue"><**nav**></span>.

```html
    <body>
        <!-- navbar-dark (texte en blanc) bg-primary (fond bleu) -->
        <nav class="navbar navbar-dark bg-primary">
            
        </nav>
    </body>
```

![nav.png](images/nav.png)

<span style="color: yellow">*.navbar-brand*</span> : correspondra généralement au nom du site ou logo.

```html
    <body>
        <!-- navbar-brand dans la balise (a) -->
        <nav class="navbar navbar-dark bg-primary">
            <a href="#" class="navbar-brand">logo ou nom du site</a>
        </nav>
    </body>
```

<span style="color: yellow">*.navbar-nav*</span> : pour dire à bootstrap que c'est mon élément de menu.

```html
    <body>
        <!-- navbar-nav dans la balise (ul)-->
        <nav class="navbar navbar-dark bg-primary">
            <a href="#" class="navbar-brand">logo ou nom du site</a>
            <ul class="navbar-nav">
                
            </ul>
        </nav>
    </body>
```

<span style="color: yellow">*.nav-item*</span>: pour déclarer un élément de navigation, généralement suivi d'un lien disposant de la classe <span style="color: yellow">*.nav-link*</span>.

```html
    <body>
        <!-- nav-item dans la balise (li) et nav-link dans la balise (a) pour le lien-->
        <nav class="navbar navbar-dark bg-primary">
            <a href="#" class="navbar-brand">logo ou nom du site</a>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="#" class="nav-link">Home</a>
                    <a href="#" class="nav-link">Compétences</a>
                    <a href="#" class="nav-link">Projets</a>
                    <a href="#" class="nav-link">Contact</a>
                </li>
            </ul>
        </nav>
    </body>
```

<span style="color: yellow">*.navbar-expand-lg*</span>, pour le responsive.(lg, écran d'ordinateur portable).Change l'affichage en dessous de se point de rupture.

```html
    <body>
        <!-- navbar-expand-lg dans la balise nav-->
        <nav class="navbar navbar-dark bg-primary navbar-expand-lg">
            <a href="#" class="navbar-brand">logo ou nom du site</a>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="#" class="nav-link">Home</a>
                    <a href="#" class="nav-link">Compétences</a>
                    <a href="#" class="nav-link">Projets</a>
                    <a href="#" class="nav-link">Contact</a>
                </li>
            </ul>
        </nav>
    </body>
```

<span style="color: yellow">*.collapse.navbar-collapse*</span> : pour gérer le menu dans sa version responsive.

```html
    <body>
        <!-- collapse navbar-collapse dans la balise (div) qui englobe (ul)-->
        <nav class="navbar navbar-dark bg-primary navbar-expand-lg">
            <a href="#" class="navbar-brand">logo ou nom du site</a>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="#" class="nav-link">Home</a>
                        <a href="#" class="nav-link">Compétences</a>
                        <a href="#" class="nav-link">Projets</a>
                        <a href="#" class="nav-link">Contact</a>
                    </li>
                </ul>
            </div>    
        </nav>
    </body>
```

<span style="color: yellow">*ajout d'un bouton et d'un icons*</span> :

```html
    <body>
        <!-- ajout d'un bouton et d'un icons-->
        <nav class="navbar navbar-dark bg-primary navbar-expand-lg">
            <a href="#" class="navbar-brand">logo ou nom du site</a>
            <button 
                type="button"
                class="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="#navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
             <!-- icons Three dots vertical -->   
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
             </svg>    
            </button>
            <div class="collapse navbar-collapse" id="#navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="#" class="nav-link active">Home</a>
                        <a href="#" class="nav-link">Compétences</a>
                        <a href="#" class="nav-link">Projets</a>
                        <a href="#" class="nav-link">Contact</a>
                    </li>
                </ul>
            </div>    
        </nav>
    </body>
```

<span style="color: yellow">*.navbar-text*</span> : pour ajouter du texte qui ne serait pas un lien de navigation

<span style="color: yellow">*.breadcrumb*</span>, pour initialiser le composant

```html
    <!-- breadcrumb, mis dans (nav et ol) -->
    <div class="row">
        <nav class="col-12" aria-label="breadcrumb">
            <!-- Déclaration du composant -->
            <ol class="breadcrumb">
                <!-- Item du fil d'ariane -->
                <li class="breadcrumb-item"><a href="#">Accueil</a></li>
                <li class="breadcrumb-item active" aria-current="page">Mon espace</li>
            </ol>
        </nav>
    </div>
```

<span style="color: yellow">*.breadcrumb-item*</span>, pour déclarer une étape dans le cheminement

```html
    <body>
        <!-- ajout d'un bouton et d'un icons-->
        <nav class="navbar navbar-dark bg-primary navbar-expand-lg">
            <a href="#" class="navbar-brand">logo ou nom du site</a>
            <button 
                type="button"
                class="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="#navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
             <!-- icons Three dots vertical -->   
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
             </svg>    
            </button>
            <div class="collapse navbar-collapse" id="#navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="#" class="nav-link active">Home</a>
                        <a href="#" class="nav-link">Compétences</a>
                        <a href="#" class="nav-link">Projets</a>
                        <a href="#" class="nav-link">Contact</a>
                    </li>
                </ul>
            </div>    
        </nav>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="#">Home</a>
                </li>
                <li class="breadcrumb-item">
                    <a href="#">Science</a>
                </li>
                <li class="breadcrumb-item">
                    <a href="#">2018</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                    Molecular structures made simple
                </li>
            </ol>            
        </nav>
    </body>
````
