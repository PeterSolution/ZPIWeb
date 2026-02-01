export type ApiConfigType = {
  ip: string;
  port: string;
  getBaseUrl: () => string;
  getUserUrl: () => string;
  getUserCheckUrl: () => string;
  getEntriesUrl: () => string;
  getImageUrl: () => string;
  getEntriesInRowUrl: () => string;
};

const apiConfig: ApiConfigType = {
  ip: "127.0.0.1",
  port: "5000",

  getBaseUrl() {
    return `http://${this.ip}:${this.port}`;
  },
  getEntriesInRowUrl() {
    return `${this.getBaseUrl()}/entriesInRow`;
  },

  getUserUrl() {
    return `${this.getBaseUrl()}/users`;
  },

  getUserCheckUrl() {
    return `${this.getBaseUrl()}/users/check`;
  },

  getEntriesUrl() {
    return `${this.getBaseUrl()}/entries`;
  },

  getImageUrl() {
    return `${this.getBaseUrl()}/images`;
  }
};

export default apiConfig;
