import { 
    getAllFilms, getAllActivities, getAllParticipants, getFilmById, getActivityById, getParticipantById, getActivitiesByAnimatorId, getActivitiesByAnimatorName, addOrUpdateItem} from '../sae-203-2025-Omasta-Parisot-Ethan/backend.mjs';

try {
    const films = await getAllFilms();
    console.log("Liste des films récupérée avec succès !", films);
} catch (e) {
    console.error("Erreur lors de la récupération des films :", e);
}

try {
    const activities = await getAllActivities();
    console.log("Liste des activités récupérée avec succès !", activities);
} catch (e) {
    console.error("Erreur lors de la récupération des activités :", e);
}

try {
    const participants = await getAllParticipants();
    console.log("Liste des participants récupérée avec succès !", participants);
} catch (e) {
    console.error("Erreur lors de la récupération des participants :", e);
}

try {
    const film = await getFilmById("filmIdExemple");
    console.log("Film récupéré avec succès !", film);
} catch (e) {
    console.error("Erreur lors de la récupération du film :", e);
}

try {
    const activity = await getActivityById("activityIdExemple");
    console.log("Activité récupérée avec succès !", activity);
} catch (e) {
    console.error("Erreur lors de la récupération de l'activité :", e);
}

try {
    const participant = await getParticipantById("participantIdExemple");
    console.log("Participant récupéré avec succès !", participant);
} catch (e) {
    console.error("Erreur lors de la récupération du participant :", e);
}

try {
    const activitiesByAnimatorId = await getActivitiesByAnimatorId("animateurIdExemple");
    console.log("Activités de l'animateur récupérées avec succès !", activitiesByAnimatorId);
} catch (e) {
    console.error("Erreur lors de la récupération des activités de l'animateur par ID :", e);
}

try {
    const activitiesByAnimatorName = await getActivitiesByAnimatorName("NomAnimateurExemple");
    console.log("Activités de l'animateur récupérées avec succès !", activitiesByAnimatorName);
} catch (e) {
    console.error("Erreur lors de la récupération des activités de l'animateur par nom :", e);
}

try {
    const newItem = await addOrUpdateItem("Films", { titre: "Nouveau Film", date_projection: "2025-01-01" });
    console.log("Élément ajouté ou mis à jour avec succès !", newItem);
} catch (e) {
    console.error("Erreur lors de l'ajout ou de la mise à jour de l'élément :", e);
}