# node-monorepo-workspaces

Node.js Monorepo example with npm Workspaces

## Introduction

Monorepo structure of TypeScript and [NestJS](https://nestjs.com) project using [Lerna](https://lerna.js.org) and [npm Workspaces](https://docs.npmjs.com/cli/v9/using-npm/workspaces)

- Not using NestJS [monorepo mode](https://docs.nestjs.com/cli/monorepo).
- Lerna now [depends on Nx](https://github.com/lerna/lerna/blob/329eb99e3080cc4d5de53960a7d0421091b08782/core/lerna/package.json#L66), so you can use [Nx commands](https://nx.dev/reference/commands) while using Lerna.

## Continuous Integration

```sh
npm ci
npm run lint
npm run test
npm run build
# The above command can also be used like this:
npx lerna run lint,test,build
#= npx nx run-many --target=build

# Run tasks affected
npx lerna run build --since=main
#= npx nx affected --target=build
```

## Development

```sh
# package manage to a specific workspace
npm i -w sample-nestjs-app install-package
npm uninstall -w sample-nestjs-app uninstall-package
npm ci -w sample-nestjs-app

# launch the development process
npx lerna run dev --scope=sample-nestjs-app
#= npx nx run sample-nestjs-app:dev

# execute npm tasks
npx lerna run any-task --scope=workspace-name
npx lerna exec npm run any-task --scope=workspace-name
#= npx nx run workspace-name:any-task
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
  - [TypeScript simple sample-app](apps/sample-app)
  - [NestJS server sample-app](apps/sample-nestjs-app)

### Packages

- `npm init -w packages/package-name`
  - [TypeScript simple sample-package](packages/sample-lib)
  - [NestJS module sample-package](packages/sample-nestjs-lib)
- Modify the [pah mapping](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping) in [tsconfig.json](tsconfig.json).

## Folders

```js
+-- apps
|   +-- sample-app // TypeScript simple sample-app
|   +-- sample-nestjs-app // NestJS server sample-app
+-- packages
|   +-- sample-lib // TypeScript simple sample-package
|   +-- sample-nestjs-lib // NestJS module sample-package
+-- .eslintrc // ESLint common configuration
+-- jest.config.ts // Jest common configuration
+-- lerna.json // Lerna configuration
+-- nx.json // Nx task pipeline configuration
```

### Links

- [Monorepo tools](https://monorepo.tools)
- [npm Workspaces](https://docs.npmjs.com/cli/v9/using-npm/workspaces)
- [Lerna and Nx](https://lerna.js.org/docs/lerna-and-nx)
- [Lerna commands](https://lerna.js.org/docs/api-reference/commands)
- [Nx commands](https://nx.dev/reference/commands)
