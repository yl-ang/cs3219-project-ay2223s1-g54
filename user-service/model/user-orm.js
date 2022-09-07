import { createUser, checkUserExists, logUserIn } from './repository.js';

//need to separate orm functions from repository to decouple business logic from persistence
export async function ormCreateUser(email, username, password) {

    try {
        const newUser = await createUser({email, username, password});
        const resultSave = await newUser.save();
    } catch (err) {
        return {err};
    }

    return true;
}

export async function ormCheckUserExists(username) {
    const id = await checkUserExists({username});
    return id;
}

export async function ormLogInUser(email, password) {

    try {
        const isLoggedIn = await logUserIn({email, password});
        return isLoggedIn;
    } catch (err) {
        return {err};
    }
}
