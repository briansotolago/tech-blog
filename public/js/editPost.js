
 
const editButtonHandler = async (event) => {
  event.preventDefault()
 
    const id = event.target.getAttribute('data-id');
    const name = document.getElementById("name-edit").value
    const description = document.getElementById("description-edit").value
    const needed_funding=document.getElementById("needed_funding-edit").textContent
 
    console.log(id)
    if (name && description && needed_funding && id ) {
      const response = await fetch(`/api/projects/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ name, description, needed_funding }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.location.replace('/view-posts');
      } else {
        alert('Failed to delete project');
      }

    }
 
};

const delButtonHandler = async (event) => {
 
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/view-posts');
    } else {
      alert('Failed to delete project');
    }
  }
};

 

document
  .querySelector('.delete-btn')
  .addEventListener('click', delButtonHandler);


document
  .querySelector('.edit-form')
  .addEventListener('submit', editButtonHandler);