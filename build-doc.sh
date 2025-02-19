#!/bin/bash
export PATH=~/.nvm/versions/node/v18.20.3/bin/:$PATH
yarn build
rm -r ../ecdocs/*
cp -R build/* ../ecdocs/
