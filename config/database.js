module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'wazz_db'),
        username: env('DATABASE_USERNAME', 'wazz_db'),
        password: env('DATABASE_PASSWORD', '01272345'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
