module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "",
        database: "jean-librairie",
      },
      options: {},
    },
  },
});
