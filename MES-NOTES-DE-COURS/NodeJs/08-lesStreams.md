# <div style="color: #26B260">**Les streams**</div>

[Sommaire](./00-Sommaire.md)

## <div style="color: #26B260">**Comprendre le rôle des streams.**</div>

Le but des streams va être de séquentialiser nos opérations.

## <div style="color: #26B260">**Assimiler la notion de streams.**</div>

Les streams permettent de scinder une opération I/O en séquences asynchrones, optimisation de temps et de ressources.

il y a quatres types de streams.

readable, permet de lire un gros volumes de données et de le transformer en un stream de petit volume.

writable, va récupérer un tas de petits volumes de données qui auront été streamées par un stream readable et il va les assembler en une source.

duplex.

transform.

les streams émettent des évènements.

Close.

Data, lors qu'ils ont une donnée à émettre.

End, lors qu'ils ont terminé.

Error, lorsqu'il y a une erreur.

## <div style="color: #26B260">**Utiliser un stream existant.**</div>

process.stdin, voir doc sur nodejs.org.

process.stdin.pipe().

## <div style="color: #26B260">**Implémenter ses propres streams.**</div>
