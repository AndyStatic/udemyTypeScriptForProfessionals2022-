/**
 * Reference one project in another project\
 * Both project folders can be opened in IDE
 *
 * In project that you would like to reference by other projects
 * modify tsconfig.json
 * Set(uncomment) "composite": true
 * Set(uncomment) "declaration": true,
 * Set(uncomment) "declarationMap": true,
 *
 * In project that references other project
 * modify tsconfig.json
 * Add
 * "references": [
 * {"path": "..//project-to-ref/"}
 * ]
 *
 * Than can import project-to-ref as npm package
 *
 * package.json
 * "scripts": {
 * "build": "tsc --build .",
 * },
 *
 * will compile also project that are refernced
 *
 * "start": "npm run build -- --watch"
 * changes in one project will be notified in other projects
 *
 * Both projects should be in separate folders above .gitignore
 */
