# dc-content-managed-pwa-nextjs

This project is a sample React / NextJS application using [Amplience Dynamic Content](https://amplience.com/dynamic-content) for content management.

## Features

* Content types that represent the content managed components
* Fetch content from the Content Delivery API
* Connect content to component props
* Dynamically render components based on content
* Automation of Content Schemas and Content Types using the Amplience CLI
* Support for visualisation and time based preview

And a few niceties:

* [TypeScript](https://www.typescriptlang.org/)
* [Storybook](https://storybook.js.org/)
* [MDX](https://github.com/storybookjs/storybook/blob/next/addons/docs/docs/mdx.md)
* [Lerna](https://github.com/lerna/lerna)

## Dependencies

This project has various dependency packages all listed in the package.json files which include node and yarn. If you do not already have yarn, you can follow the online documentation and installation type of your choice [here](https://classic.yarnpkg.com/en/docs/install/).

## Getting Started

After you checkout the project, you can install the dependencies as follows:

```
yarn install
```

### Project Packages
This project is a monorepo and contains two sub-projects:

#### packages/client

This package is the application itself, you can run it as you would any NestJS app:

```
yarn run dev
```

Which will launch the application on [http://localhost:3000](http://localhost:3000).

##### Storybook

The client package also contains Storybook for simple component UX showcase & editing. The components that make up the client app have been documented using Storybook. You can access this by running:

```
yarn run storybook
```

#### packages/configuration

This package is a set of configuration files that help automate setting up your Dynamic Content hub.

## Guide to to setting up this application on your own account

By default, the application is loading its content and media from an Amplience demonstration sandbox for your initial tests. If you have your own Amplience account which you would like to use end to end, please follow the steps below.

### Amplience Account Pre-Requisiites

You will need the following to set up this demo in your own Amplience account:

1. An Amplience account with access to Dynamic Content.
2. Your Amplience account should have Content Delivery V2 enabled.
3. Your user account should either be a Developer or an Admin to allow you to create content types.
4. Management API credendials (ClientID & Secret).
5. Your Amplience Hub ID which you will be using.
6. Your Content Delivery V2 publishing endpoint domain.

If you do not have any of these, please contact your Customer Success Manager or Amplience support directly.

### Application Configuration

If you want to connect the app to your own hub rather than the demo account you need to update next.config.js. to your account CDV2 publishing endpoint domain (excluding protocol).

```
env: {
    contentApi: '<add your content publishing domain here>'
}
```

When you run your application this will now display dummy content asking you to have content with delivery keys. The application is now pointing to your account.

#### HTTPS visualisation
Amplience is a secure platform and does not allow embedded apps which are not delivered via SSL. However, you can preview by opening your visualisation away from the Amplience appplication by clicking the 'open in a new window' button.

Some options to enable your app SSL:
1. Deploy and host on an SSL server supporting SSR.
2. Create a localhost certificate and set your browser to trust. There are many guides available online such as [this](https://www.freecodecamp.org/news/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec/)
3. Ammend your localhost application to run a HTTPS server.

###  Content Types and Content Schemas

As mentioned above, this is a monorepo. Under `packages/configuration` you will find the following sub folders:

1. **content-schemas:** These are your content models in JSON-Schema format. These content models map to components and also slots.
2. **content-types:** These are your settings for your schemas for use in Amplience. They contain names, icons, visualisations and which repositories they can be used in.
3. **content-type-schemas:** These tell the Amplience CLI how to provision your content types and schemas.

#### Import automation
You can automate the import of schemas and content types directly from your local machine using the Amplience DC CLI.

1. In your command line interface change directory to `packages/configuration`.
2. If not already installed, install the CLI using node package manager:
```
npm install -g @amplience/dc-cli
```
3. Check install
```
dc-cli configure --help
```
4. Configure your CLI with your account details ( clientId, clientSecret, hubId) by running the following with your credentials:
```
 dc-cli configure --clientId <YOUR_CLIENT_ID> --clientSecret <YOUR_CLIENT_SECRET> --hubId <YOUR_HUB_ID>
 ```
 A message will display to say that you have succesfully configured the CLI

5. Sync to your account
```
yarn run sync
```

Your account will now be populated with the relavant Content Type Schemas and Content Types ready to use.

#### Manual import
You can also manually create your schemas and content types in the Amplience UI if you do not wish to use the Amplience CLI.
* [Schemas](https://docs.amplience.net/integration/contenttypes.html)
* [Content Types](https://docs.amplience.net/integration/workingwithcontenttypes.html)


###  Content Creation
There a 4 content types included in this project to start:
1. Editorial Block
2. Gallery Block
3. Hero Banner Block
4. Navigation


In your `content` repository, we recommend that you create test content for each of the components listed above. See guidance for [Content Creation](https://docs.amplience.net/production/creatingcontent.html).

These content types have been enabled with 2 visualisations:
1. **PWA (Localhost):** This points to your application to visualise the content as your application would render it. 
2. **JSON:** This gets JSON content which an application would use directly from the Delivery APIs.

Both have parameterised substitution values for the domain to load content from (Staging content) and the id of the content to load.

### Slot Creation
The application functions by loading content from Slots which map to locations on the PWA. See guidance for [Slot Creation](https://docs.amplience.net/integration/slots.html).

In this application there are 2 slot types:

1. **Navigation Slot:** Can hold a single piece of navigation content.
2. **Page Slot:** Can hold an ordered array of content. Accepted types of content are listed in the Page Slot Schema which include:
    - Editorial Block
    - Gallery Block
    - Hero Banner Block

In your `slots` repository, create the following:
1. **Instance of your Navigation Slot:** With your example navigation content. You should also set the delivery key that your application is expecting for the navigtion which is `slots/navigation`.
2. **Instance of your Page Slot:** With one or many of your components. You should also set the delivery key that your application is expecting for the page which is `slots/homepage-hero`.

If you would like to see your application running from here pointing to the content that you have placed into these slots simply publish your 2 slots and go directly to your application at:

```
http://localhost:3000
```


### Full application Preview

Amplience enables customers to plan and preview content in their applications through the context of time using the planning functionality in the marketing calendar. 

#### Amplience Preview Configuration

This step gives a pointer to your application in the Planning calender.

Log into [Dynamic Content](https://content.amplience.net) and Navigate to: Settings --> Preview and add a preview application with the following URL and a label for your application (ie, 'PWA (Localhost)'):

```
http://localhost:3000?contentApi={{vse.domain}}
```

Relevant preview documentation can be found [here](https://docs.amplience.net/planning/previewingcontent.html). 

Now you can create your marketing calendar with Campaigns (Events), Time based content drops (Editions) and choose where content is going to go at that time (Slots) with the abiliy to preview your content before it is published and schedule to automatically deploy.

Typical flow:
1. Create Event (Campaign)
2. Create Editions (Drops of content)
3. Assign slots (Navigation & home)
4. Put content into slots
5. Preview / Schedule
6. Auto publish on schedule

Guideance for using [Planning](https://docs.amplience.net/planning/readme.html).

## Deploying your application
This application uses server side rendering, you should choose a hosting provider that supports SSR and SSL.

### Deploy To Netlify

Click on the button below to deploy this repository via Netlify.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/amplience/dc-content-managed-pwa-nextjs)

### Others

Some options but not limited to:
* [Heroku](https://www.heroku.com/)
* [AWS Lightsail](https://aws.amazon.com/lightsail/)
* [Vercel](https://vercel.com/)

Once deployed you may also choose to ammend / add additional options for visualising and previewing your application which you can do manually in Dynamic Content or automatically using the CLI tool.

Areas of change:
In `packages/configuration/content-types/`:
1. Change the domain of your cards to your hosted application.
2. Change or add an additional visualisation to point to your hosted application. You may wish to make the hosted version your default.

In the Dynamic Content application you may also want to change or add an additional preview URL pointed to your hosted environment following the steps in [here](####Amplience-Preview-Configuration).

## License

This software is licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),

Copyright 2020 Amplience

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.