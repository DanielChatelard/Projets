// il faut importer le module http de node.
const http = require('http');
// Créer un serveur HTTP, avec createServer()
const server = http.createServer(function(request, response) {
    console.log('request');

    // retourné une réponse avec la méthode end()
    //response.end('hello World !')
    //response.end('<h1>hello World !</h1>') on peut envoyer du html.
    // toujours renvoyer un tableau, avec JSON.stringify(), pour convertir en JSON
    const users = [{user:'Daniel'}];
    response.end(JSON.stringify(users));

    // récupérer l'url' de la requête avec request.url
    console.log(request.url);
    if (request.url === '/users') {
        response.statusCode = 200;
        response.end(JSON.stringify(users));
    } else {
        response.statusCode = 404;
        response.end('aucune route trouvée');
    }
})//reprendre à 32min

// listen pour lancer le serveur qui écoute sur le port 8080 et qui pointe sur ma machine.
server.listen(8080, '127.0.0.1', function() {
    console.log('le serveur est accessible sur localhost http://localhost:8080');
});