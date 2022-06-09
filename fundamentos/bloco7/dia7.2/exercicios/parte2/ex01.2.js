const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const delivery = Object.values(Object.values(Object.values(order)[3])[2])
  const person = Object.values(order)[0]
  const telefone = Object.values(order)[1]
  const endereço = Object.values(order)[2]
  return `Olá ${delivery[0]}, entrega para: ${person}, Telefone: ${telefone},
  R. ${endereço.street}, Nº: ${endereço.number}, AP: ${endereço.apartment}`
}

// console.log(customerInfo(order));

const orderModifier = (order) => {
  //  "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
  order['name'] = 'Luiz Silva'
  order.payment = 50
  const person = Object.values(order)[0]
  const pizzas = Object.keys(Object.values(Object.values(order)[3])[0])
  const pagamento = Object.values(order)[4]
  const bebida = Object.values(Object.values(Object.values(Object.values(order)[3])[1])[0])

  return `Olá ${person}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${bebida[0]} é R$ ${pagamento},00.`
  
}

console.log(orderModifier(order));