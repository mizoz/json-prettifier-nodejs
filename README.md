# JSON Prettifier Node.js

A command-line tool to format and prettify JSON data.

## Features

- Pretty print JSON with custom indentation
- Minify JSON
- Syntax highlighting (colors)
- Validate JSON syntax
- Sort keys alphabetically
- Filter JSON paths
- Support for large files

## Installation

```bash
npm install -g json-prettifier-nodejs
```

Or clone and install:

```bash
git clone https://github.com/mizoz/json-prettifier-nodejs.git
cd json-prettifier-nodejs
npm install
```

## Usage

```bash
# Pretty print from file
json-prettifier pretty data.json

# Pretty print from stdin
echo '{"name":"test"}' | json-prettifier pretty

# Minify JSON
json-prettifier minify data.json

# With custom indentation (2 spaces)
json-prettifier pretty --indent 2 data.json

# Sort keys alphabetically
json-prettifier pretty --sort data.json

# Validate JSON
json-prettifier validate data.json
```

## Options

- `-i, --indent` - Number of spaces for indentation (default: 2)
- `-s, --sort` - Sort object keys alphabetically
- `-c, --color` - Enable syntax highlighting
- `-v, --validate` - Only validate JSON syntax

## Examples

### Input
```json
{"name":"John","age":30,"city":"NYC"}
```

### Output (pretty)
```json
{
  "name": "John",
  "age": 30,
  "city": "NYC"
}
```

## License

MIT License

## Author

mizoz
