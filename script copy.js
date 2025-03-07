const url = "https://exam.webscte.co.in/student/loginProcess" ;
data = { 
  reg_no: "D222315438",
  ph_no: "7362992606" 
}
// fetch(url, {
//   method: 'POST', 
//   body: JSON.stringify(data),
//   headers:{
//     'Content-Type': 'application/json'
//   }
// })
// .then(res => {console.log(res);
// })
// .then(response => console.log('Success:', response))

const response = await fetch(url, {
  method: "POST",
  data:data,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  // Automatically converted to "username=example&password=password"
  body: new URLSearchParams({ username: "example", password: "password" }),
  // ...
});
