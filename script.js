"use strict";

const tableData = async function () {
    //FETCH DATA FROM API
  const dataFetch = await fetch("https://jsonplaceholder.typicode.com/users");

  const response = await dataFetch.json();

  
  const id = response.forEach((res, i) => {
    //DESTRUCTURE NESTED OBJECTS
    const { street, suite, city } = res.address;

    const { name, catchPhrase } = res.company;
    console.log(res)

    //BUILD MARKUP WITH CORRESPONDING DATA FROM API
    const markup =  
            
                `<tr>
                <td>${res.id}</td>
                <td>${res.name}</td>
                <td>${res.username}</td>
                <td>${suite}, ${street}, ${city}.</td>
                <td>${res.email}</td>
                <td>${catchPhrase}, ${name}.</td>
                <td>${res.phone}</td>
                <td>${res.website}</td>
                </tr>
            `;
     
            
//INSERT (MARKUP) INTO PAGE (TABLE)
    document.querySelector(".newroot").insertAdjacentHTML("beforebegin", markup);
  });
};
tableData();
