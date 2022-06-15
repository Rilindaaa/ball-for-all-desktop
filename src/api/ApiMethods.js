import Client from "./ApiBase";

//Authentication

export async function login(data) {
  try {
    const result = await Client.post("login?adminOnly=true", { ...data });
    return result;
  } catch (err) {
    console.error("login", err);
    return err;
  }
}

export async function loggedUser() {
  try {
    const result = await Client.get("loggedUser");
    return result;
  } catch (err) {
    console.error("loggedUser", err);
    return err;
  }
}

//Players

export async function getAllPlayers() {
  try {
    const result = await Client.get("player");
    return result.data;
  } catch (err) {
    console.error("getAllPlayers", err);
  }
}

export async function deletePlayer(id) {
  try {
    const result = await Client.delete(`player/${id}`);
    return result;
  } catch (err) {
    console.error("deletePlayer", err);
    return err;
  }
}

//Clubs

export async function getAllClubs() {
  try {
    const result = await Client.get("club");
    return result.data;
  } catch (err) {
    console.error("getAllClubs", err);
  }
}

export async function deleteClub(id) {
  try {
    const result = await Client.delete(`club/${id}`);
    return result;
  } catch (err) {
    console.error("deleteClub", err);
    return err;
  }
}
