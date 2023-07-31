install:
	npm ci

gendiff:
	node gendiff.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
 	NODE_OPTIONS=--experimental-vm-modules npx jest

test-coverage:
	NODE_OPTIONS=--experimental-vm-modules npm test -- --coverage --coverageProvider=v8

colors: 
	NODE_OPTIONS=--experimental-vm-modules npx jest --colors
	
jest-test:
	NODE_OPTIONS=--experimental-vm-modules npx jest


.PHONY: test
