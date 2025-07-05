/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://owner:npg_eNqjIAQxL4R6@ep-lingering-grass-a1ctfba8-pooler.ap-southeast-1.aws.neon.tech/Introvue?sslmode=require&channel_binding=require',
    }
  };