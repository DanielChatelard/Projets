# <div style="color: #26B260">**Présentation d'AngularJS**</div>

[Sommaire](./00-Sommaire.md)

AngularJS est un framework JavaScript . Il peut être ajouté à une page HTML avec une balise 'script'.

AngularJS étend les attributs HTML avec des directives et lie les données au HTML avec des expressions .
AngularJS est un framework JavaScript

AngularJS est un framework JavaScript écrit en JavaScript.

AngularJS est distribué sous forme de fichier JavaScript et peut être ajouté à une page Web avec une balise de script:

```html
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>

```

## <div style="color: #26B260">*AngularJS étend le HTML*</div>

AngularJS étend le HTML avec des directives ng .

La directive ng-app définit une application AngularJS.

La directive ng-model lie la valeur des contrôles HTML (entrée, sélection, zone de texte) aux données d'application (.ts).

La directive ng-bind lie les données d'application (.ts) à la vue HTML (.html).

```html
<!DOCTYPE html>
<html>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js">
    </script>
    <body>
        <div ng-app="">
            <p>Name: <input type="text" ng-model="name"></p>
            <p ng-bind="name"></p>
        </div>
    </body>
</html>
```

Exemple expliqué:

AngularJS démarre automatiquement lorsque la page Web est chargée.

La directive ng-app indique à AngularJS que l'élément 'div' est le "propriétaire" d'une application AngularJS .

La directive ng-model lie la valeur du champ d'entrée au nom de la variable d'application .

La directive ng-bind lie le contenu de l'élément 'p' au nom de la variable d'application.

## <div style="color: #26B260">*Directives AngularJS*</div>

Les directives AngularJS sont des attributs HTML avec un préfixe ng .

La directive ng-init initialise les variables d'application AngularJS.

```html
<div ng-app="" ng-init="firstName='John'">
    <p>The name is <span ng-bind="firstName"></span></p>
</div> 
```

Alternativement avec du HTML valide:

```html
<div data-ng-app="" data-ng-init="firstName='John'">
    <p>The name is <span data-ng-bind="firstName"></span></p>
</div> 
```

Vous pouvez utiliser data-ng- , au lieu de ng- , si vous souhaitez rendre votre page HTML valide.

## <div style="color: #26B260">*Expressions AngularJS*</div>

Les expressions AngularJS sont écrites entre accolades doubles: {{expression}} .

AngularJS "sortira" les données exactement là où l'expression est écrite:

```html
<!-- Exemple AngularJS -->
<!DOCTYPE html>
<html>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
    <body>
        <div ng-app="">
            <p>My first expression: {{ 5 + 5 }}</p>
        </div>
    </body>
</html>
```

Les expressions AngularJS lient les données AngularJS au HTML de la même manière que la directive ng-bind .

```html
<!-- Exemple AngularJS -->
<!DOCTYPE html>
<html>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
    <body>
        <div ng-app="">
            <p>Name: <input type="text" ng-model="name"></p>
            <p>{{name}}</p>
        </div>
    </body>
</html>
```

## <div style="color: #26B260">*Applications AngularJS*</div>

Les modules AngularJS définissent les applications AngularJS.

AngularJS contrôleurs contrôlent les applications AngularJS.

La directive ng-app définit l'application, la directive ng-controller définit le contrôleur.

```html
 <div ng-app=" myApp" ng-controller=" myCtrl">
    First Name: <input type="text" ng-model="firstName"><br>
    Last Name: <input type="text" ng-model="lastName"><br>
    <br>
Full Name: {{firstName + " " + lastName}}
</div>
<script>
    var app = angular.module(' myApp', []);
    app.controller(' myCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
    });
</script> 
```

Les modules AngularJS définissent les applications:

```javascript
// Module AngularJS 
var app = angular.module('myApp', []);
```
