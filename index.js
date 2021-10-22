// Add your code here
function submitData(name, email){
const data = {name: `${name}`, email: `${email}`,};

const good = document.createElement("p");
const bad = document.createElement("h1")

const configuration = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
        body: JSON.stringify(data),
    };
    

return fetch("http://localhost:3000/users", configuration)
.then(resp => resp.json())
.then(data => {
    good.textContent = `${data.id}`;
    document.body.appendChild(good);
    console.log(data);
    console.log(good.textContent);
    console.log(good);

})
.catch(function(badData){
    alert("ERROR!");
    bad.textContent = `${badData}`;
    document.body.appendChild(bad);
});
} 