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

export async function getAllPlayers(params) {
  try {
    const result = await Client.get("player/paginate", { params });
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

export async function getAllClubs(params) {
  try {
    const result = await Client.get("club/paginate", { params });
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

//Vacancies

export async function getAllVacancies() {
  try {
    const result = await Client.get("vacancy");
    return result.data;
  } catch (err) {
    console.error("getAllVacancies", err);
  }
}

export async function deleteVacancy(id) {
  try {
    const result = await Client.delete(`vacancy/${id}`);
    return result;
  } catch (err) {
    console.error("deleteVacancy", err);
    return err;
  }
}

// Admins

export async function registerAdmin(data) {
  try {
    const result = await Client.post(`admin`, { ...data });
    return result;
  } catch (err) {
    console.error("registerAdmin", err);
    return err;
  }
}

export async function getAllAdmins(params) {
  try {
    const result = await Client.get("admin/paginate", { params });
    return result.data;
  } catch (err) {
    console.error("getAllAdmins", err);
  }
}

export async function deleteAdmin(id) {
  try {
    const result = await Client.delete(`admin/${id}`);
    return result;
  } catch (err) {
    console.error("deleteAdmin", err);
    return err;
  }
}
