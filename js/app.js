function handleSubmit(event) {
    event.preventDefault();
  
    const data = new FormData(event.target);
    const result = {}
    result.firstName=data.get("firstName");
    console.log({})
    
  }
  
  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);
