// Récupère l'élément HTML avec l'ID "nb_illu"
var nb_illu = document.getElementById("nb_illu");

// Récupère l'élément HTML avec l'ID "form"
var formulaire = document.getElementById("form");

// Récupère l'élément HTML avec l'ID "info_illu"
var info_illu = document.getElementById("info_illu");

// Attache un événement "input" à l'élément HTML "nb_illu"
nb_illu.addEventListener("input",function(){

    // Efface le contenu de l'élément HTML "info_illu"
    info_illu.innerText = "";

    // Boucle pour créer des éléments HTML en fonction de la valeur de "nb_illu"
    for(var k=0;k<this.value;k++){
        
        // Crée un numéro pour chaque illustration
        var i = k+1;

        // Crée un élément "p" pour le numéro d'illustration
        var num_of_illu = document.createElement("p");

        // Crée un élément "br" pour insérer une ligne blanche
        var linebreak = document.createElement("br");

        // Crée des labels pour chaque champ de saisie
        var label_fond_carto = document.createElement("label");
        var label_zoom_level = document.createElement("label");
        var label_center_pos = document.createElement("label");

        // Crée des champs de saisie pour chaque champ
        var input_fond_carto = document.createElement("input");
        var input_zoom_level = document.createElement("input");
        var input_center_pos = document.createElement("input");

        // Donne un nom unique à chaque champ de saisie en ajoutant le numéro de l'illustration
        input_fond_carto.setAttribute("name","fond_carto_"+i);
        input_zoom_level.setAttribute("name","zoom_level_"+i);
        input_center_pos.setAttribute("name","center_point_"+i);

        // Affiche le numéro d'illustration
        num_of_illu.innerText = "Illustration numéro " +i+" :";

        // Affiche le label pour le fond cartographique
        label_fond_carto.innerText = " Fond cartographique : ";

        // Affiche le label pour le niveau de zoom
        label_zoom_level.innerText = " Niveau de zoom : ";

        // Affiche le label pour la position du centre
        label_center_pos.innerText = " Position du centre : ";

        // Vérifie si l'élément HTML "info_illu" contient déjà l'élément "num_of_illu"
        console.log(info_illu.contains(num_of_illu));

        // Si l'élément "num_of_illu" n'est pas déjà présent dans "info_illu", ajoute tous les éléments créés précédemment
        if(!info_illu.contains(num_of_illu)){
            info_illu.appendChild(num_of_illu);
            info_illu.appendChild(linebreak);
            info_illu.appendChild(label_fond_carto);
            info_illu.appendChild(input_fond_carto);
            info_illu.appendChild(label_zoom_level);
            info_illu.appendChild(input_zoom_level);
            info_illu.appendChild(label_center_pos);
            info_illu.appendChild(input_center_pos);
            info_illu.appendChild(linebreak);
        }
    }
})
