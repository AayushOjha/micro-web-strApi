module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e54eef8c72370f46b03c53d3430e1c82'),
  },
});
