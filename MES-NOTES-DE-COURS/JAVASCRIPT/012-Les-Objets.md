
# <div style="color: #26B260">Les objets : Déclarer un objet:</div>

[Sommaire](./00-Sommaire.md)

Un objet c'est la représentation de données sous forme (clè:valeur).

Chaque caractéristique lié à un objet sera appelé une propriété.

Toutes les actions lié à un objet s'appelleront des méthodes.

```javascript
   //Déclaration d'un objet.
    let phone = {
        // propriétés
        name: 'Iphone',
        marque:'apple',
        largeur: 5,
        longueur: 6,
        
        // méthodes
        call: function () {
            console.log('Call Sam');
        },
        sendMsg: function (to) {
            console.log('Send sms to' + to);
        }
        
    };

    console.log(phone);
    
    // pour accéder à un propriété d'un objet.
    console.log('marque:', phone.marque);
    
    // accéder à une méthode dans un objet.
    phone.call();
    phone.sendMsg('Sam');
    
    // rajouter une valeur dans un objet.
    phone.color = red;
    console.log(phone.color, phone["marque"]);// on peut également accéder aux propriété avec les crochets, on donne la clé ["marque"].

    // On peut aussi y accéder avec une variable.
    let nomPropriété = "largeur";
    console.log(phone[nomPropriété]);

```

## <span style="color: #26B260"> Les objets : Accéder à l’objet courant dans une méthode:</span>

```javascript
    let student = {
        name: 'Sam',
        class:'Terminal',
        say: function (say) {
            // nom de l'étudiant qui dit bonjour.
            console.log(this.name + ': ' + say); //accés à name avec (this) qui fait référence à l'objet courant ici student.
        }
};
    let student2 = {
        name: 'Jean',
        class:'Seconde',
        say: function (say) {
            // nom de l'étudiant qui dit bonjour.
            console.log(this.name + ': ' + say); //accés à name avec (this) qui fait référence à l'objet courant ici student.
        },
        // méthode saveClass pour accéder ou modifié mon objet, qui prend en paramètre ClassName et qui enregistre la class dans mon oblet courant.
        saveClass: function (className) {
            this.class = className;// accés à class avec (this) de l'objet courant.
        }
};
    student2.say('Bonjour' + student.name);
    student.say('Bonjour');
    
    student2.saveClass('6ième');// va enregistrer dans this dans l'objet courant la propriété class avec se que j'ai donné en argument ici '6ième'.
    console.log('Classe de student2:', student2.class);    
```
