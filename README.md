# dc-content-managed-pwa-nextjs

This project is a sample React / NextJS application using [Amplience Dynamic Content](https://amplience.com/dynamic-content) for content management.

## Features

* Content types that represent the content managed components
* Fetch content from the Content Delivery API
* Connect content to component props
* Dynamically render components based on content

And a few niceties:

* TypeScript
* [Storybook](https://storybook.js.org/)
* [MDX](https://github.com/storybookjs/storybook/blob/next/addons/docs/docs/mdx.md)
* [Lerna](https://github.com/lerna/lerna)

## Getting Started

After you checkout the project, you can install the depdencies as follows:

```
yarn install
```

This project is a monorepo and contains two sub-projects:

**packages/client**

This package is the application itself, you can run it as you would any NestJS app:

```
yarn run dev
```

Which will launch the application on [http://localhost:3000](http://localhost:3000).

**packages/configuration**

This package is a set of configuration files that help automate setting up your Dynamic Content hub.

If you have not already, install and setup the [Dynamic Content CLI](https://github.com/amplience/dc-cli).

Once installed, you can run the following command to create all of the schemas and content types:

```
yarn run sync
```

### Configuration

If you want to connect the app to your own hub rather than the demo account you need to update next.config.js.

```
env: {
    contentApi: '<add your staging url here>'
}
```

### Storybook

The components that make up the client app have been documented using Storybook. You can access this by running:

```
yarn run storybook
```

## License

This software is licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),

Copyright 2019 Amplience

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.