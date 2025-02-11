const editFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    const id = window.location.toString().split('/').pop();
  
    if (title && content) {
      const response = await fetch(`/api/projects/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update post.');
      }
    }
  };
  
  const deleteHandler = async () => {
    const id = window.location.toString().split('/').pop();
  
    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post.');
    }
  };
  
  document
    .querySelector('.edit-post-form')
    .addEventListener('submit', editFormHandler);
  
  document
    .querySelector('.delete-btn')
    .addEventListener('click', deleteHandler); 