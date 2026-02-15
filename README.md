# JSON Prettifier Node.js

[![npm Version](https://img.shields.io/npm/v/json-prettifier-nodejs?style=flat-square)](https://www.npmjs.com/package/json-prettifier-nodejs)
[![npm Downloads](https://img.shields.io/npm/dm/json-prettifier-nodejs?style=flat-square)](https://www.npmjs.com/package/json-prettifier-nodejs)
[![License](https://img.shields.io/npm/l/json-prettifier-nodejs?style=flat-square)](LICENSE)
[![Node Version](https://img.shields.io/node/v/json-prettifier-nodejs?style=flat-square)](https://www.npmjs.com/package/json-prettifier-nodejs)
[![GitHub Stars](https://img.shields.io/github/stars/mizoz/json-prettifier-nodejs?style=flat-square)](https://github.com/mizoz/json-prettifier-nodejs)

> A Node.js CLI tool for formatting and prettifying JSON data with customizable indentation.

## Features

- Format JSON with custom indentation
- Minify JSON
- Sort keys alphabetically
- Validate JSON syntax
- Color output in terminal
- JavaScript/TypeScript API

## Installation

### From npm

```bash
npm install -g json-prettifier-nodejs
```

### From Source

```bash
git clone https://github.com/mizoz/json-prettifier-nodejs.git
cd json-prettifier-nodejs
npm install
```

## Usage

### Command Line

```bash
# Prettify JSON
json-prettify '{"name":"test"}'

# With indentation
json-prettify '{"name":"test"}' --indent 4

# Minify JSON
json-prettify '{"name": "test"}' --minify
```

### JavaScript API

```javascript
const { JSONPrettifier } = require("json-prettifier-nodejs");

const prettifier = new JSONPrettifier();

// Prettify
const formatted = prettifier.prettify('{"name":"test"}', { indent: 2 });
console.log(formatted);
```

## Requirements

- Node.js 14+

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Author

**mizoz**
- GitHub: [@mizoz](https://github.com/mizoz)

---

⭐ If you find this project useful, please consider giving it a star on GitHub!
