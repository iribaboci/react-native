

const url = ''

fetch(url) // fetch returns a promise
  .then(function(res) { // .then are callbacks
    return res.json()
  })
  .then(function(json) {
    return ({
      importantData: json.importantData
    })
  })
  .then(function(data) {
    console.log(data)
  })
  .catch(function(err) {
    // handle error
  })
