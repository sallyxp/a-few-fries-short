async function newFormHandler(event) {
  event.preventDefault();

  const name = document.querySelector('input[name="restaurant-name"]').value.trim();
  const location = document.querySelector('input[name="restaurant-location"]').value.trim();
  const img_url = "";

  // FOR IMAGE UPLOAD
  // if(document.body.contains(imageEl)){
  //   img_url = imageEl.src;
  // }

  const response = await fetch(`/api/restaurants`, {
    method: 'POST',
    body: JSON.stringify({
      name,
      location,
      img_url,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });


  if (response.ok) {
    // send to page that shows all restaurants
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-restaurant-form').addEventListener('submit', newFormHandler);