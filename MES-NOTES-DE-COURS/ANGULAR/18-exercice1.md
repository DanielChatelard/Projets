# <div style="color: #26B260">**Exercice 1**</div>

[Sommaire](./00-Sommaire.md)

## <div style="color: #26B260">*fichier Index.html*</div>

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>MyApp</title>
        <base href="/">
        <link rel="icon" type="image/x-icon" href="favicon.ico">
    </head>
    <body>
        <app-root></app-root>
    </body>
</html>
```

## <div style="color: #26B260">*fichier app.component.html*</div>

```html
<div class="container">
  <div class="my-5">
    <h1>Exercices : Les utilisateurs</h1>
    <p>N'oubliez pas de typer votre code</p>
  </div>

  <div class="my-5">
    <h2>Exercice 1 : Components</h2>
    <p>Créer et déclarer les components suivants :</p>
    <ol>
      <li>"users" : Gère la logique (ajout, affichage, etc) des utilisateurs</li>
      <li>"user" : Affiche le (nom) de l'utilateur</li>
      <li>"user-add" : (Un formulaire permettant d'ajouter un utilisateur)</li>
      <li>"user-info" : (Affichera les informations de l'utilisateur sélectionné)</li>
    </ol>
    <p class="bg-warning p-3 m-2">N'oubliez pas d'appeler le composant "users" à la fin de ce composant, pour voir l'avancement de votre exercice</p>
  </div>

  <hr>

  <div class="my-5">
    <h2>Exercice 2 : Utiliser les composants</h2>
    <p>Via leur selector, appelez dans l'ordre les composants "user-add", "user" et "user-info" dans le template du
      composant "users"</p>
    <p class="bg-info text-white p-3 mb-2">Remarque : le composant "users" est le parent des composants "user-add",
      "user" et "user-info" (qui sont ses enfants)</p>
    <p>Le composant "users" doit avoir un template qui ressemble à ça :</p>
    <pre><code>
      &lt;app-user-add&gt;

      &lt;app-user&gt;
      &lt;app-user&gt;
      &lt;app-user&gt;

      &lt;app-info&gt;
    </code>
    </pre>

  </div>

  <hr>

  <div class="my-5">
    <div class="mb-3">
      <h2>Exercice 3 : le composant "users"</h2>
      <p>Dans cet exercice nous allons travailler dans le composant "users"</p>
    </div>

    <div class="mb-5">
      <h3>Un tableau d'utilisateur</h3>
      <p>Dans le composant "users"</p>
      <ol>
        <li>Déclarer une variable "users" qui contiendra un tableau d'objet, chacun des objets de ce tableau aura les
          propriétés suivantes
          <ul>
            <li>firstName</li>
            <li>lastName</li>
          </ul>
        </li>
        <li>Typez correctement la variables "users"</li>
        <li>Assignez une valeur par défaut à la variable users, par exemple :
          <pre>{{ "[\n    {firstName: 'John', lastNme: 'Doe'},\n    {firstName: 'Jeanne', lastNme: 'Doe'}\n]" }}</pre>
        </li>
      </ol>
    </div>

    <div class="mb-5">
      <h3>Afficher le nom des utilisateurs</h3>
      <p>Dans le template du composant "users"</p>
      <ol>
        <li>Ajouter au composant enfant "user" la directive *ngFor et boucler dans le tableau "users"</li>
        <li>Dans le composant "user" (user.component.ts) déclarer une variable qui sera une entrée du composant "user"
        </li>
        <li>Pour chaque itération donnée au composant "user" (sur lequel on boucle) la variable "user" en entrée</li>
        <li>Affichez dans le template du composant "user" le prénom de l'utilisateur qu'on lui a donnée en entrée</li>
      </ol>

      <p class="bg-info text-white p-3 mb-2">L'idée est de communiquer une donnée à partir du parent jusqu'à l'enfant.
        Je vous renvoie vers la vidéo sur l'<strong>input decorator</strong></p>
    </div>

    <div class="mb-5">
      <h3>Afficher le détail de l'utilisateur "user" cliqué</h3>
      <p>Dans le template du composant "users"</p>
      <ol>
        <li>Déclarer une variable "userSelected" et typez la comme étant un objet avec les propriétés firstName et
          lastName. Elle n'a aucune valeur initial
        </li>
        <li>Lorsqu'on clique sur un utilisateur, enregistrez les données de l'utilisateur sélectionnez dans la variable
          "userSelected"
        </li>
        <li>Passer au composant "user-info" la variable "userSelected"</li>
        <li>Le template du composant "user-info" ressemble à cela :
          <!-- Copier/Coller dans le template du composant "user-info"-->
          <!-- DÉBUT DU TEMPLATE DE "user-info" -->
          <div class="card bg-light p-3 m-2">
            <h6>Informations de l'utilisateur séléctionné</h6>
            <p>Prénom : SON_PRÉNOM</p>
            <p>Nom : SON_NOM</p>
          </div>
          <!-- FIN DU TEMPLATE DE "user-info" -->
        </li>
        <li>Affichez dans le template du composant "user-info" les données de l'utilisateur</li>
        <li>Ajouter une condition sur le composant "user-info" qui vérifie que la variable "userSelected" est différent
          de null

          <p class="bg-info text-white p-3 m-2">Dans le cas où la variable userSelected est null ou undefined on ne dois
            pas afficher le composant "user-info"</p>
        </li>
      </ol>
    </div>
  </div>

  <hr>

  <div class="my-5">
    <div class="mb-3">
      <h2>Exercice 4 : le composant "user-add"</h2>
      <p>Dans cet exercice, nous allons travailler principalement dans le composant "user-add"</p>
    </div>

    <div class="mb-5">
      <h3>Copier le template</h3>
      <p>Copier/Coller le html suivant dans le template du composant "user-add"</p>

      <!-- Copier/Coller dans le template du composant "user-add"-->
      <!-- DÉBUT DU TEMPLATE DE "user-add" -->
      <div class="form-group">
        <label for="lastName">Nom</label>
        <input id="lastName" type="text" class="form-control" placeholder="Nom">
      </div>
      <div class="form-group">
        <label for="firstName">Prénom</label>
        <input id="firstName" type="text" class="form-control" placeholder="Prénom">
      </div>
      <button class="btn btn-primary">Enregistrer</button>
      <!-- FIN DU TEMPLATE DE "user-add" -->
    </div>
    <div class="mb-5">
      <h3>Two way data binding</h3>
      <p>Déclarer dans le user-add.component.ts les propriétés suivantes :</p>
      <ul>
        <li>"firstName" : qui est une <strong>string</strong> et qui doit être lié à l'input qui porte l'id "<strong>firstName</strong>"
          en two way data binding
        </li>
        <li>"lastName" : qui est une <strong>string</strong> et qui doit être lié à l'input qui porte l'id "<strong>lastName</strong>"
          en two way data binding
        </li>
      </ul>
    </div>
    <div class="mb-5">
      <h3>Enregistrer le nouvel utilisateur</h3>
      <p>Lorsqu'on clique sur le boutton "Enregistrer", communiquer au composant parent le nom et le prénom inséré dans
        l'input par l'utilisateur.</p>
      <ol>
        <li>Lorsqu'on clique sur le boutton "Enregistrer", communiquer au composant parent le nom et le prénom inséré
          dans l'input par l'utilisateur.
        </li>
        <li>Dans le composant "users" enregistrer dans le tableau d'utilisateurs un nouvel objet contenant les
          propriétés <strong>firstName</strong> et <strong>LastName</strong> transmis par le composant enfant "user-add"
        </li>
      </ol>
    </div>
  </div>

  <p class="bg-danger text-white p-3 m-2">N'oubliez pas d'appelez le composant "users" pour voir l'avancement de votre exercice</p>
</div>

```
