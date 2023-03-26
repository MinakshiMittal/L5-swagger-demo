import axios from "axios";

export const fetchUsers = async (url: string) => {
  try {
    const fetchedUsers = await axios.get(url);
    console.log(fetchedUsers);
    if (fetchedUsers.status === 200) {
      const users = fetchedUsers.data.data.map((user: any) => {
        return {
          id: user.id,
          email: user.email,
          name: user.name,
        };
      });
      const requiredResult = {
        users,
        nextUrl: fetchedUsers.data.next_page_url,
        prevUrl: fetchedUsers.data.prev_page_url,
        currentPage: fetchedUsers.data.current_page,
      };
      return requiredResult;
    }
    return {
      users: [],
      nextUrl: "",
      prevUrl: "",
      currentPage: "",
    };
  } catch (error) {
    console.error(error, "err");
  }
};
