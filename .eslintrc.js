module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		"node": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended"
	],
	"overrides": [
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins":  ["react", "@typescript-eslint"],
	"rules": {
		"@typescript-eslint/no-explicit-any": ["off"],
		"no-unused-vars": ["error"],
		"max-len": [
			"error", 
			{ "code": 200 }
		],
		"max-lines":["error", 150],
		"camelcase": [ "error",{"properties":"never"}],
		"indent": ["error","tab", { "MemberExpression": 1 }],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error", "double" 
		],
		"semi": [
			"error",
			"always"
		]
	}
};
