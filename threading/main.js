const persons = [
    {
      name: "Hriday",
      isMember: true,
    },
    {
      name: "Hridayesh",
      isMember: false,
    },
    {
      name: "Bob",
      isMember: true,
    },
    {
      name: "Daisy",
      isMember: true,
    },
  ]
  
  // Our club container
  const club = document.getElementById("club")
  let worker
  
  /**
   * Function entry allows entry to people coming to our club
   */
  function entry(persons) {
    persons.forEach(person => {
      const { isMember, name } = person
      const listItem = document.createElement("li")
      listItem.textContent = name
      // if a person is not registered, register them first
      if (!isMember) {
        // create a new worker thread
        worker = new Worker("worker.js")
        // pass data to worker thread
        worker.postMessage(name)
        // listen to any data passed from worker thread
        worker.addEventListener("message", event => {
          if (event.data) {
            club.appendChild(listItem)
          }
        })
      } else {
        // if they are registered let them in
        club.appendChild(listItem)
      }
    })
  }
  
  entry(persons)