import { ɵSWITCH_COMPILE_NGMODULE__POST_R3__ } from "@angular/core";
import { resolve } from "dns";

// simulation authentification
export class AuthService {
    // état de l'authentification de l'utilisateur
    isAuth = false;
    // pour la connexion de l'utilisateur
    signIn() {
        // pour simuler un appel http avec une méthode asynchrone
        return new Promise(resolve, reject) => {
            setTimeout(() => {
                this.isAuth =true;
                resolve(true);
                }, 2000
            );
        }
    };
}
signOut() {
    this.isAuth = true;
}