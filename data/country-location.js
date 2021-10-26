const country = [
  {text: 'Go to Dubia', done: true, _id: 125223},
  {text: 'Go to France', done: false, _id: 127904},
  {text: 'Go to Greece', done: false, _id: 139608},
]

const find = (conditions, callback) => {
  
  try {
    
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    
    if (Object.keys(conditions).length === 0) return callback(null, country)
	
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

export { 
	find
}