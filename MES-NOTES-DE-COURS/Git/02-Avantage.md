# Les avantages de Git

[Sommaire](./00-Sommaire.md)

Git est un système de gestion de version distribué, développé il y a 15 ans pour le projet du noyau Linux. Il a été depuis continuellement amélioré et convient à tous types de projet, même les plus importants.

Sa base de données locale et son système de gestion des instantanés le rendent très performant.

Son système de branches et les trois états de fichiers lui permettent d'être robuste lorsqu'il s'agit de travailler sur un projet, que ce soit seul ou à plusieurs.

Les trois états de fichiers

Git gère les modifications apportées aux fichiers selon trois états : modifié, validé et indexé.

    Modifié signifie que le fichier a été modifié en local, mais que ses modifications n'ont pas encore été ajoutées à la base de données locale.

    Indexé signifie que la version du fichier a été ajoutée au prochain lot de modifications qui seront intégrées à la base de données locale.

    Validé signifie que la version du fichier est présente dans la base de données locale.
Exercice:

Sur quelles architectures se base Git ?

VCS local, si utilisé en local pur, il sert de VCS standard (juste pour sauvegarder le code et en suivre les évolutions, sans le partager).

DVCS,si utilisé en collaboration (via github ou des dépôts d'entreprise).
