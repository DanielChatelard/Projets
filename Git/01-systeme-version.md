# Les systèmes de gestion de version

[Sommaire](./00-Sommaire.md)

Un système de gestion de versions, ou VCS, permet de gérer les versions de nos fichiers en permettant d'accéder à leur historique à un instant T, de sauvegarder notre travail sur un serveur distant ou même de collaborer avec d'autres développeurs.

Il existe plusieurs familles de VCS :

1. Les VCS locaux (que nous n'utiliserons pratiquement jamais, puisque nous aurons besoin de stocker une copie de notre base de données de versions sur un serveur distant),

2. Les CVCS ou CVS centralisés, qui nous permettent de sauvegarder notre base de données sur un serveur distant et de travailler collaborativement,

3. Les DCVS, ou CVS distribués, qui nous permettent d'avoir une copie locale de la base de données en cas de corruption du serveur distant et de pouvoir travailler en local sans connexion.

Exercice:

Quel est l'intérêt d'un système de gestion de versions ?

1. Garder une copie de son travail à un instant T
2. Savoir qui a modifié un fichier et quand
3. Récupérer du travail perdu
4. Travailler de façon collaborative

Quelles architectures impliquent l'utilisation d'un serveur distant pour stocker la base de données du VCS ?

1. CVCS
2. DVCS
