module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: '5433',
  username: 'postgres',
  password: 'gympointapp',
  database: 'gympoint',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  }
}