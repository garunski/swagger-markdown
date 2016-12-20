#! /usr/bin/env node

const yaml = require('js-yaml');
const fs = require('fs');
const ArgumentParser = require('argparse').ArgumentParser;
const transformInfo = require('./transformers/info');
const transformPath = require('./transformers/path');
const transformDefinition = require('./transformers/definition');
const transformSecurityDefinitions = require('./transformers/securityDefinitions');
const transformExternalDocs = require('./transformers/externalDocs');
const packageInfo = require('../package.json');

const parser = new ArgumentParser({
  addHelp: true,
  description: 'swagger-markdown',
  version: packageInfo.version
});

parser.addArgument(
  ['-i', '--input'], {
    required: true,
    help: 'Path to the swagger yaml file',
    metavar: '',
    dest: 'input'
  });
parser.addArgument(
  ['-o', '--output'], {
    help: 'Path to the resulting md file',
    metavar: '',
    dest: 'output'
  }
);
const args = parser.parseArgs();

if (args.input) {
  const document = [];

  try {
    const inputDoc = yaml.safeLoad(fs.readFileSync(args.input, 'utf8'));
    const outputFile = args.output || args.input.replace(/(yaml|json)$/i, 'md');

    // Process info
    if ('info' in inputDoc) {
      document.push(transformInfo(inputDoc.info));
    }

    if ('externalDocs' in inputDoc) {
      document.push(transformExternalDocs(inputDoc.externalDocs));
    }

    // Security definitions
    if ('securityDefinitions' in inputDoc) {
      document.push(transformSecurityDefinitions(inputDoc.securityDefinitions));
    }

    // Process Paths
    if ('paths' in inputDoc) {
      Object.keys(inputDoc.paths).map(
        path => document.push(transformPath(path, inputDoc.paths[path]))
      );
    }

    if ('definitions' in inputDoc) {
      Object.keys(inputDoc.definitions).map(
        definition => document.push(transformDefinition(definition, inputDoc.definitions[definition]))
      );
    }

    fs.writeFile(outputFile, document.join('\n'), err => {
      if (err) {
        console.log(err);
      }
    });
  } catch (e) {
    console.log(e);
  }
}
