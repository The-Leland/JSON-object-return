


//first challenge

const users = [
    {
        "Id": 1,
        "Name": "Laser",
        "Email": "Laser@llaser.com",
        "Password": "laswerbeam123"
    },
    {
        "Id": 2,
        "Name": "Blazer",
        "Email": "Blazer@blazer.com",
        "Password": "blazing321"
    },
    {
        "Id": 3,
        "Name": "my fitness consigliari, Me'Shell",
        "Email": "Me'Shell@consigliari.com",
        "Password": "Meshell789"
    }
];


for (const user of users) {
    console.log(`Hello, ${user.Name}, your email is ${user.Email}`);
}

//second challenge

function fetchData(url) {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
  
      
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            
            var requestObject = JSON.parse(xhr.responseText);
  
            
            alert("Data fetched successfully!");
  
            var jsonifiedData = JSON.stringify(requestObject.response.results[0]);
  
            console.log("Full Data:", requestObject);
            console.log("JSONified Data:", jsonifiedData);
  
           
            resolve(requestObject.response.results[0]);
          } else {
            reject(`Error fetching data: ${xhr.status}`);
          }
        }
      };
  
      xhr.send();
    });
  }
  
  
  fetchData("https://swapi.tech/api/people/1")
    .then((data) => {
      
      console.log("Data received:", data);
      alert("Data has been logged in the console!");
      return data.name; 
    })
    .then((name) => {
      console.log("Character's name is:", name);
      alert("Character's name is logged!");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred while fetching the data.");
    });


  