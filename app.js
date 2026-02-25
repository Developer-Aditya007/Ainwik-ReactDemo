const arr =["Aditya",26,"Greater Noida",[201308,"Greater Noida"]]
const [a,b,c,d] = arr
const [x,y] = d

console.log(a,b,c,x,y)
console.table(arr)

const obj = {"firstname": "Dev",age: 21,address: {city: "Delhi",pincode: 110055}}

const {firstname,age,address:{city,pincode}} = obj
console.log(firstname,age)
console.log(city,pincode)