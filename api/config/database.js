module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "mysql",
        host: "localhost",
        port: 3306,
        username: "admin",
        password: "1234",
        database: "jean-librairie"
      },
      options: {}
    }
  }
});
