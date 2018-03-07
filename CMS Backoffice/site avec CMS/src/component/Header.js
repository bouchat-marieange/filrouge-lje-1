import React from "react"


const Header=()=>({
    render(){
        return(
            <div id="header">
                <div className="float">
                    <input id="mail-input" placeholder="votre adresse mail"></input>
                    <input id="password-input" placeholder="votre mot de passe"></input>
                    <button id="enregistrer-input">S'enregistrer</button>
                </div>
                
            </div>
        )
    }
});

export default Header;