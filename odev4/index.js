const fs = require("fs");

fs.writeFile("employees.json", '{"name": "Employee 1 Name", "salary": 2000}', (err) => {
    if (err) console.log(err);
    console.log("File created.");
  }
);

fs.readFile("employees.json", (err, data) => {
  if (err) console.log(err);
  console.log(data.toString());
  console.log("File read.");
});

fs.appendFile("employees.json", '{ "name": "Employee 1 Name", "salary": 3000 }', (err) => {
    if (err) console.log(err);
    console.log("File updated.");
  }
);

fs.unlink("employees.json", (err) => {
  if (err) console.log(err);
  console.log("File deleted.");
});
