const dotenv = require("dotenv");
dotenv.config({ path: "./.env.test" });

module.exports = {
  testPathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/", "/__tests__/config/"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
  coveragePathIgnorePatterns: [
    "<rootDir>/build/",
    "<rootDir>/node_modules/",
    "/__tests__/config/",
    "/db/",
    "/infrastructure/aws/",
    "/infrastructure/errors/",
    "/test-data-factories/",
    "/controllers/",
    "/dto/",
    "/interfaces/"
  ]
};
