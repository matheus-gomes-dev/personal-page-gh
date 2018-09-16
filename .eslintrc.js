module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "mocha": true,
  },
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  },
  "settings": {
    "import/alias": {
      "modules": "./node_modules"
    }
  },
  "globals": {
    "TweenMax": true,
    "Elastic": true
  }
};