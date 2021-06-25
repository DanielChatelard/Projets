# <div style="color: #26B260">**Gérer les évènements**</div>

[Sommaire](./00-Sommaire.md)

## <div style="color: #26B260">**Appréhender la notion d'évènement.**</div>

Limites des fonctions avec callback, cas où plusieurs callback sont nécessaires :

Logique importante.

Peu lisible.

Avec les callbacks on a une assez mauvaise séparation des responsabilités.

## <div style="color: #26B260">**Aborder l'approche évènementielle.**</div>

Concept.

Différencier le callback et les opérations asynchrone.

D'un côté une opération asynchrone émet des évènements.

De l'autre côté des évènements appellent des listiners (callbacks).

Séparation des responsabilités (SoC).

## <div style="color: #26B260">**Utiliser la classe EventEmitter.**</div>

Méthodes clés.

eventEmitter.on()

evenEmitter.emit()

Une grande partie de l'API core fondée utilise/étend cette classe sur asynchronous event-driven.

## <div style="color: #26B260">**Ecouter un FileWatcher**</div>
