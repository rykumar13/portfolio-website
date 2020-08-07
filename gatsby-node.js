/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// https://www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
const path = require('path');
const _ = require('lodash');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
}

exports.onCreateWebpackConfig = ({ actions }) => {
    // https://www.gatsbyjs.org/docs/debugging-html-builds/#fixing-third-party-modules
    actions.setWebpackConfig({
      resolve: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@config': path.resolve(__dirname, 'src/config'),
          '@fonts': path.resolve(__dirname, 'src/fonts'),
          '@images': path.resolve(__dirname, 'src/images'),
          '@pages': path.resolve(__dirname, 'src/pages'),
          '@styles': path.resolve(__dirname, 'src/styles'),
          '@utils': path.resolve(__dirname, 'src/utils'),
        },
      },
    });
  };