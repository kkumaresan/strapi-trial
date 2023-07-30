module.exports = ({ env }) => ({
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        deal: {
          field: 'slug',
          references: 'title',
        },
      },
    },
  },
});