let totalseats=120;
let bookedseats=78;
let available=totalseats-bookedseats;

let status=available<20 ? "Almost Full":available<=60 ? "Moderate Availability":"Plenty of Seats Available";
console.log('Available Seats: ${available}');
console.log('Status: ${status}');