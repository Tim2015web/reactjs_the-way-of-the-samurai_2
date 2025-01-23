import axios from "axios";

const localAPI = axios.create({ baseURL: "http://localhost:4000/" });

export const serverAPI = {
  getFriends(currentPage, pageSize) {
    return localAPI
      .get(`friends?page=${currentPage}&pageSize=${pageSize}`)
      .then(({ data }) => data);
  },

  getProfile(friendId) {
    return localAPI.get(`friends/${friendId}`);
  },

  postFollow(userId, status) {
    return localAPI.post(`follow/${userId}`, { status: status });
  },

  postStatus(statusText) {
    return localAPI.post(`updateStatus/0`, { newStatus: statusText });
  },
};
