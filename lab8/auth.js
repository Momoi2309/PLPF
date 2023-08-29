class Auth {
    constructor() {
        //document.querySelector("body").style.display = "none";  // white screen in case
        const auth = localStorage.getItem("auth");
        this.validateAuth(auth);
        document.getElementById("username").innerHTML = localStorage.getItem("username");
    }

    validateAuth(auth) {
        if (auth != 1) {
            window.location.replace("/");
        }
        // redirect back to login screen
        //  else {
        //     document.querySelector("body").style.display = "block";
        // }
    }

    logOut() {
        localStorage.removeItem("auth");
        window.location.replace("/");
    }
}