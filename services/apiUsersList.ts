import axios from "axios";

export const fetchUsers = async (url:string) => {
  try {
    const fetchedUsers = await axios.get(url);
    console.log(fetchedUsers,"users");
    return fetchedUsers;
  } catch (error) {
    console.error(error, "err");
  }
};
