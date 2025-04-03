# node-monorepo-workspaces

Node.js Monorepo example with npm Workspaces

## Introduction

Monorepo structure of TypeScript and [NestJS](https://nestjs.com) project using [Nx](https://nx.dev) and [npm Workspaces](https://docs.npmjs.com/cli/v10/using-npm/workspaces)

- Not using NestJS [monorepo mode](https://docs.nestjs.com/cli/monorepo).
- Use Nx on top of the npm workspace.
- Nx alone can handle [releases](https://nx.dev/features/manage-releases) (`versioning` → `changelog` → `publishing`), so it's more scalable than using `Turborepo` or `Lerna` alone.

## Continuous Integration

```sh
npm ci
npm run lint
npm run test
npm run build
# The above command can also be used like this:
npx nx run-many -t=lint,test,build

# Run tasks affected
npx nx affected -t=build
```

## Development

```sh
# package manage to a specific workspace
npm i -w sample-nestjs-app install-package
npm un -w sample-nestjs-app uninstall-package
npm ci -w sample-nestjs-app

# launch the development process
npx nx run sample-nestjs-app:dev

# execute npm tasks
npx nx run workspace-name:any-task
npx nx exec ---projects workspace-name -- any-task
npm run any-task -w workspace-name
```

## Production

```sh
# https://docs.npmjs.com/cli/v9/commands/npm-ci#omit
npm ci -w sample-nestjs-app --omit=dev
```

## Create a new workspace (apps or packages)

- See <https://docs.npmjs.com/cli/v9/commands/npm-init#workspaces-support>
- Modify workspace by refer to the sample code. or edit after copy-paste

### Apps

- `npm init -w apps/app-name`
  - [TypeScript simple sample-app](./apps/sample-app)
  - [NestJS server sample-app](./apps/sample-nestjs-app)

### Packages

- `npm init -w packages/package-name`
  - [TypeScript simple sample-package](./packages/sample-lib)
  - [NestJS module sample-package](./packages/sample-nestjs-lib)
- Modify the [pah mapping](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping) in [tsconfig.json](./tsconfig.json).

## Folders

```js
+-- apps
|   +-- sample-app // TypeScript simple sample-app
|   +-- sample-nestjs-app // NestJS server sample-app
+-- packages
|   +-- sample-lib // TypeScript simple sample-package
|   +-- sample-nestjs-lib // NestJS module sample-package
+-- eslint.config.mjs // ESLint common configuration
+-- vitest.config.ts // Vitest common configuration
+-- nx.json // Nx task pipeline configuration
```

### Links

- [Monorepo tools](https://monorepo.tools)
- [npm Workspaces](https://docs.npmjs.com/cli/v9/using-npm/workspaces)
- [Nx](https://nx.dev)
  - [Nx Commands](https://nx.dev/reference/nx-commands)
  - [Get Started with Nx Release](https://nx.dev/recipes/nx-release/get-started-with-nx-release)
