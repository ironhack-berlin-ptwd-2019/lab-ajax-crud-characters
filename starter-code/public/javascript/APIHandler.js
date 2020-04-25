
// wrapper class for the API
class SpotifyAPI {
  getFullList() {
    axios.get('http://localhost:8000/characters')


    // this is the new feature
  }

  getOneRegister(id) {
    axios.get(`http://localhost:8000/characters/${id}`)
  }

  createOneRegister(name, occupation, weapon, cartoon = false) {

    axios.post(`http://localhost:8000/characters`, { name, occupation, weapon, cartoon })
  }

  updateOneRegister(id, name, occupation, weapon, cartoon = false) {
    axios.put(`http://localhost:8000/characters/${id}`, { name, occupation, weapon, cartoon })
  }

  deleteOneRegister(id) {
    axios.delete(`http://localhost:8000/characters/${id}`)
  }
}
