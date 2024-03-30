This is a Firefox extension, that tries to perform an edit on Wikidata using [wikibase-edit](https://github.com/maxlath/wikibase-edit).

## Requirements 

You'll need [web-ext](https://github.com/mozilla/web-ext): `npm install --global web-ext`

## Setup

1. `git clone git@github.com:fuddl/wikibase-edit-test.git`
2. `cd wikibase-edit-test`
3. `npm install`
4. `web-ext run -f=/Applications/Firefox.app/Contents/MacOS/firefox --browser-console`

## How to test

Firefox should display a button. Click it to perform an edit in the Wikidata Sandbox. In the Browser Console, select _Multiprocess (Slower)_ to see what actually happens.
