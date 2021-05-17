
# <div style="color: #26B260">**Introduction à JavaScript**</div>

[Sommaire](./00-Sommaire.md)

## <span style="color: #aaffff">**Présentation**</span>

javascript est un langage de script,le premier moteur javascript  était spydermankey crée en 1995 par Brendan Eich pour la socièté nescape navigator, l'objectif est de dynamiser les sites web grâce aux interaction et des animations. Anciennement appelé lavscript, il s'utilise (principalement) côté client mais aussi côté serveur.

Son évolution est gérée par le groupe ECMA International qui se charge de publier les standards de ce langage.

Le JavaScript est un langage dynamique, c'est un langage interprété et orienté objet.

## <span style="color: #aaffff">**Polyfill**</span>

Un polyfill est un bout de code permettant de fournir des fonctionnalitées récente sur un ancien navigateur qui ne les supportent pas nativement.

## <span style="color: #aaffff">**Transpiler**</span>

C'est un type de compilateur qui prend le code source de programmation et le compile dans un autre langage, exemple babel et webpack.

## <span style="color: #aaffff">**Outil et framework**</span>

Angular et React côté client.

Node.js côté serveur.

## <span style="color: #aaffff">**Où écrire du code JavaScript**</span>

Soit on crée un fichier point js ou dans une balise script dans le fichier html.

```html
<body>Dans le fichier.html
    <script type="test/javascript">
        let name = "Daniel";
        console.log('contenu de la variable name:', name);
    </script>
</body>    

```

```html
<body>appele du fichier.js
    <script src="fichier.js"></script>
</body>    

```

## <span style="color: #aaffff">**Instruction et bloc d'instruction**</span>

Une ligne de code se termine toujours par un point-virgule.

Un bloc d'intruction est déliité par des accolades {}.
