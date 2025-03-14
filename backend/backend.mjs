import Pocketbase from 'pocketbase';
const pb = new Pocketbase('https://sae203.ethan-omastaparisot.com:443');

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

export async function getAllActivitiesByAnimatorId(animatorId) {
    return await pb.collection('Activites').getFullList({
        filter: `Invites = '${animatorId}'`
    });
}

export async function getAllActivitiesByAnimatorName(animatorName) {
    const animators = await pb.collection('Invites').getFullList({
        filter: `Nom_invite = '${animatorName}'`
    });
    if (animators.length === 0) return [];
    return await pb.collection('Activites').getFullList({
        filter: `Invites = '${animators[0].id}'`
    });
}

export async function addOrUpdateItem(Collections, data) {
    if (data.id) {
        return await pb.collection(Collections).update(data.id, data);
    } else {
        return await pb.collection(Collections).create(data);
    }
}

