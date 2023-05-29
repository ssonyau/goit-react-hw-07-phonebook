import axios from 'axios';
const BASE_URL = 'https://646782d2ba7110b663bb07b6.mockapi.io/';

async function getContacts_API() {
  const colectedURL = `${BASE_URL}/contacts`;
  // console.log('colectedURL', colectedURL)
  return axios.get(colectedURL).then(r => r.data);
}

async function deleteContacts_API(id) {
  const colectedURL = `${BASE_URL}/contacts/${id}`;
  return axios.delete(colectedURL).then(r => r.data);
}

async function addContact_API(contactOBJ) {
  const colectedURL = `${BASE_URL}/contacts`;
  return axios.post(colectedURL, contactOBJ).then(r => r.data);
}

export { getContacts_API, deleteContacts_API, addContact_API };
