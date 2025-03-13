import Pocketbase from 'pocketbase';
const pb = new Pocketbase('http://127.0.0.1:8090');

export default pb;

export async function getAllFilms() {
    return await pb.collection('Films').getFullList({
        sort: 'Date_film'
    });
}

export async function getAllActivities() {
    return await pb.collection('Activites').getFullList({
        sort: 'Date_activites'
    });
}

export async function getAllParticipants() {
    return await pb.collection('Invites').getFullList({
        sort: 'Nom_invite'
    });
}

export async function getFilmById(id) {
    return await pb.collection('Films').getOne(id);
}

export async function getActivityById(id) {
    return await pb.collection('Activites').getOne(id);
}

export async function getParticipantById(id) {
    return await pb.collection('Invites').getOne(id);
}

export async function getActivitiesByAnimatorId(id) {
    return await pb.collection('Activites').getFullList({
        filter: `id_animateur = "${id}"`
    });
}

export async function getActivitiesByAnimatorName(Nom_invite) {
    return await pb.collection('Activites').getFullList({
        filter: `nom_animateur ~ "${Nom_invite}"`
    });
}

export async function addOrUpdateItem(Collections, data) {
    if (data.id) {
        return await pb.collection(Collections).update(data.id, data);
    } else {
        return await pb.collection(Collections).create(data);
    }
}
