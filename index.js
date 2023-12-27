document.addEventListener('DOMContentLoaded', function() {
    const nameForm = document.getElementById('nameForm');
    const nameInput = document.getElementById('nameInput');
    const greeting = document.getElementById('greeting');
    const clearButton = document.getElementById('clearButton');
  
    nameForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const userName = nameInput.value.trim();
      if (userName !== '') {
        localStorage.setItem('user', userName);
        displayGreeting(userName);
      }
    });
  
    clearButton.addEventListener('click', function() {
      localStorage.removeItem('user');
      displayGreeting('');
    });
  
    function displayGreeting(name) {
      if (name !== '') {
        greeting.textContent = `Hello, ${name}!`;
      } else {
        greeting.textContent = 'Hello!';
      }
    }
  
    const storedName = localStorage.getItem('user');
    if (storedName) {
      displayGreeting(storedName);
    }
  });
  