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
