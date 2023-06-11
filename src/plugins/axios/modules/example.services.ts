import axios from "axios";

export default {
    randomData: async () => {
      return await axios.get("https://random-data-api.com/api/v2/users");
    },
};
