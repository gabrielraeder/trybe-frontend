const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email, index, array) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados! Posição ${index}`);
  console.log(array.length);
};

// Adicione seu código aqui
emailListInData.forEach(showEmailList)