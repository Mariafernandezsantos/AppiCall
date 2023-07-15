const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      console.log(data);
  
      createTable(data);
    } catch (error) {
      console.log(error);
    }
  };
  
  const createTable = (data) => {
    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    const tableBody = document.createElement('tbody');
  
    const headRow = document.createElement('tr');
    const headId = document.createElement('th');
    headId.textContent = 'ID';
    const headName = document.createElement('th');
    headName.textContent = 'Name';
    const headCity = document.createElement('th');
    headCity.textContent = 'City';
  
    headRow.appendChild(headId);
    headRow.appendChild(headName);
    headRow.appendChild(headCity);
    tableHead.appendChild(headRow);
  
    data.forEach((user) => {
      const row = document.createElement('tr');
      const cellId = document.createElement('td');
      cellId.textContent = user.id;
      const cellName = document.createElement('td');
      cellName.textContent = user.name;
      const cellCity = document.createElement('td');
      cellCity.textContent = user.address.city;
  
      row.appendChild(cellId);
      row.appendChild(cellName);
      row.appendChild(cellCity);
      tableBody.appendChild(row);
    });
  
    table.appendChild(tableHead);
    table.appendChild(tableBody);
    document.body.appendChild(table);
  };
  
  const fetchUserById = async () => {
    const userId = document.getElementById('userId').value;
  
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const data = await response.json();
      console.log(data);
  
      displayUserInfo(data);
    } catch (error) {
      console.log(error);
    }
  };
  
  const displayUserInfo = (user) => {
    const resultContainer = document.getElementById('resultContainer');
  
    resultContainer.innerHTML = '';
  
    const nameElement = document.createElement('p');
    nameElement.textContent = `Name: ${user.name}`;
  
    const phoneElement = document.createElement('p');
    phoneElement.textContent = `Phone: ${user.phone}`;
  
    resultContainer.appendChild(nameElement);
    resultContainer.appendChild(phoneElement);
  };

  document.addEventListener('DOMContentLoaded', () => {
    fetchData();
  });