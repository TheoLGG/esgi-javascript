export function home() {

    function homeP() {
        var firstName = 'maxime';
        var lastName = 'huet';
        var str = 'bonjour je suis la fonction camel case et j\'utilise aussi la fonction ucfirst' ;
        var machaine = "Type d'animal: {{ type.name }}";
        var animal = {type: {name: "chien"}};
        const element = Cpasreact.createElement("div", null,
            Cpasreact.createElement("h3", null, ['Bonjour', firstName.ucfirst(), lastName.ucfirst()].join(" ")),
            Cpasreact.createElement("h3", null, ['', str.camelCase()].join(" ")),
            Cpasreact.createElement("h3", null, ['', animal.prop_access("type.name")].join(" ")),
            Cpasreact.createElement("h3", null, ['', machaine.interpolate(animal) ].join(" ")),
            Cpasreact.createElement("h3", null, ['', firstName.interpolate(animal) ].join(" ")),
            Cpasreact.createElement("button", {onclick : () => homeS()}, ['Mes Informations' ].join(" ")),

        );
        Cpasreact.render(element, document.getElementById("root"));
    }

    function homeS() {
        const element = Cpasreact.createElement("div", null,
            Cpasreact.createElement("h1", null, ['Mes informations'].join(" ")),
            Cpasreact.createElement("p", null, ['Voici mes informations importantes'].join(" ")),
            Cpasreact.createElement("button", {onclick : () => homeP()}, ['Retour' ].join(" ")),
        );
        Cpasreact.render(element, document.getElementById("root"));
    }
    homeP();
}
