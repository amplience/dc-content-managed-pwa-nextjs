const babelLoader = {
    loader: require.resolve('babel-loader'),
    options: {
        presets: [['react-app', { flow: false, typescript: true }]]
    }
};

const docGenLoader = {
    loader: require.resolve("react-docgen-typescript-loader")
};

module.exports = {
    stories: ['../**/*.stories.(tsx|mdx)'],
    addons: [
        '@storybook/addon-links/register',
        "@storybook/preset-create-react-app",
        {
            name: "@storybook/addon-docs/react/preset",
            options: {
                configureJSX: true
            }
        }
    ],
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [babelLoader, docGenLoader]
        });
        config.resolve.extensions.push('.ts', '.tsx');
        return config;
    }
};
