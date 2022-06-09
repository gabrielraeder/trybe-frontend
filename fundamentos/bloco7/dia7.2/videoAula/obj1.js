const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

// let newKey = 'lastName';
// const lastName = 'Ferreira';
// customer[newKey] = lastName;
// newKey = 'fullName';
// const fullName = `${customer.firstName} ${customer.lastName}`;
// customer[newKey] = fullName;
// console.log(customer);


const newKey = (obj, key, value) => {
  obj[key] = value;
  return obj;
}

console.log(newKey(customer, 'lastName', 'Ferreira'));
