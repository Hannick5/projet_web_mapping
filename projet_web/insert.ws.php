<?php
    // Connexion à la base de données en utilisant les informations de connexion
    $conn = pg_connect("host=localhost port=5433 dbname=projet_web_mapping user=postgres password=postgres");

    // Vérification de la connexion
    if($conn === false){
        die("ERROR: Could not connect. " . mysqli_connect_error());
    }

    // Récupération des données de la requête
    $identifiant = $_POST['identifiant'];
    $descriptif = $_POST['descriptif'];
    $nb_illu = $_POST['nb_illu'];

    // Vérification si l'id existe déjà dans la table exemple
    $result = pg_query_params($conn, "SELECT COUNT(1) FROM exemple WHERE id = $1", array($identifiant));
    $count = pg_fetch_result($result, 0);

    if($count > 0){
        echo "<h3>Erreur : l'identifiant d'exemple existe déjà.</h3>";
    } else {
        // Insertion des données dans la table exemple
        $sql1 = "INSERT INTO exemple VALUES ($1, $2, $3)";

        if(pg_query_params($conn, $sql1, array($identifiant, $descriptif, $nb_illu))){
            echo "<h3>Insertion réussie dans la table exemple.</h3>";
            echo nl2br("\n$identifiant\n $descriptif\n $nb_illu");

            // Boucle pour insérer les données dans la table illustration
            for($k=1; $k<=$nb_illu; $k++){
                $fond_carto = $_POST['fond_carto_'.$k];
                $zoom_level = $_POST['zoom_level_'.$k];
                $center_point = $_POST['center_point_'.$k];
                $sql2 = "INSERT INTO illustration (fond_carto, zoom_level, center_point, exemple_id) VALUES ($1, $2, $3, $4)";

                if(pg_query_params($conn, $sql2, array($fond_carto, $zoom_level, $center_point, $identifiant))){
                    echo "<h3>Insertion réussie dans la table illustration.</h3>";
                    echo nl2br("\n $fond_carto\n $zoom_level\n $center_point\n $identifiant");
                } else{
                    echo "<h3>Erreur : insertion dans la table illustration échouée.</h3>";
                }
            }
        } else{
            echo "<h3>Erreur : insertion dans la table exemple échouée.</h3>";
        }
    }

    // Fermeture de la connexion à la base de données
    pg_close($conn);
?>
