import security from "eslint-plugin-security";

export default [
  security.configs.recommended,
  {
    files: ["js/**/*.js"],
    rules: {
      "security/detect-object-injection": "warn",
      "security/detect-non-literal-regexp": "warn",
    },
  },
];
