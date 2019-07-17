# eslint-config-hsb

## Installation

```
$ npm install --save-dev eslint-config-hsb
```

## Usage

create a file named .eslintrc in your project:

```js
{
  "extends": "hsb",
  "rules": {
    // Additional, per-project rules...
  }
}
```

### Using  with `eslint:recommended`

making sure to list `hsb` last:

```js
{
  "extends": ["eslint:recommended", "hsb"],
  "rules": {
    // Additional, per-project rules...
  }
}
```
