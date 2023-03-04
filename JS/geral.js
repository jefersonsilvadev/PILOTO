const documents = [];

function addDocument(title, content) {
  documents.push({ title, content });
  console.log(`Document "${title}" added.`);
}

function listDocuments() {
  console.log('Listing documents:');
  documents.forEach((document, index) => {
    console.log(`${index + 1}. ${document.title}`);
  });
}

function getDocument(index) {
  return documents[index];
}

addDocument('Document 1', 'Content of document 1');
addDocument('Document 2', 'Content of document 2');
listDocuments();

const document = getDocument(0);
console.log(`Title: ${document.title}`);
console.log(`Content: ${document.content}`);
