import java.util.ArrayList;
import java.util.TreeSet;

public class Main {

    public static void main(String[] args) {

        // Création des chambres
        Chambre c1 = new Chambre("A22", 2, 150.0f);
        Chambre c2 = new Chambre("All", 3, 240.0f);
        Chambre c3 = new Chambre("A33", 4, 320.0f);

        // Création de l'hôtel
        Hotel h = new Hotel();

        // Ajout des chambres à l'hôtel
        h.ajoutChambre(c1);
        h.ajoutChambre(c2);
        h.ajoutChambre(c3);

        // Réservation de la chambre A22
        h.reserverChambre("A22");

        // Affichage des chambres familiales
        ArrayList<Chambre> familiales = h.familiale();
        System.out.println("Chambres familiales : ");
        for (Chambre c : familiales) {
            System.out.println(c.toString());
        }

        // Suppression de la chambre A33
        try {
            h.supprimerChambre("A33");
        } catch (ChambreException e) {
            System.out.println(e.getMessage());
        }

        // Affichage des chambres ordonnées par prix
        TreeSet<Chambre> chambresParPrix = h.ordrePrix();
        System.out.println("Chambres ordonnées par prix : ");
        for (Chambre c : chambresParPrix) {
            System.out.println(c.toString());
        }
    }

}
