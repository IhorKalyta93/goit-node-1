/*
 * Розкоментуйте і запиши значення
 * const contactsPath = ;
 */
// const path

// const contactsPath = path.join;
// TODO: задокументувати кожну функцію
const fsp = require("fs/promises");
const path = require("path");
const contactsPath = path.join(__dirname, "./db/contacts.json")

function listContacts() {
  // ...твій код
}

function getContactById(contactId) {
  // ...твій код
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}
// module.exports = {
//     // getCurrentDate
// }

// console.log(__filename);