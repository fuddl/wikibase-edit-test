import WBEdit from './wikibase-edit.mjs';

const wbEdit = WBEdit({
  instance: 'https://www.wikidata.org',
  credentials: {
    browserSession: true,
  },
});

document.getElementById('test-button').addEventListener('click', function() {
  wbEdit.claim.create({
    id: 'Q4115189',                        // sandbox item
    property: 'P1106',                     // sandbox quantity
    value: Math.floor(Math.random() * 47), // random numbar
  })
});
