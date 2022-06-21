const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  const damage = dragon.strength
  return Math.floor(Math.random() * (damage - 15 + 1) + 15)
}

const warriorDamage = () => {
  const strength = warrior.strength;
  const weapon = warrior.weaponDmg;
  return Math.floor(Math.random() * ((strength*weapon) - strength + 1) + strength)
}

const mageDamage = () => {
  const int = mage.intelligence
  const dmgMana = {damage: Math.floor(Math.random() * ((int*2) - int + 1) + int), manaConsumed: 15,}
  if (mage.mana < 15) {
    dmgMana.damage = 0
    dmgMana.manaConsumed = 'Não possui mana suficiente'
  }
  return dmgMana;
}

const gameActions = {
  warriorTurn: (warriorDamage) => {
    const damage = warriorDamage();
    dragon.healthPoints = dragon.healthPoints - damage;
    warrior.damage = damage
  },
  mageTurn: (mageDamage) => {
    const damage = mageDamage();
    dragon.healthPoints = dragon.healthPoints - damage.damage;
    mage.damage = damage.damage;
    if (typeof damage.manaConsumed === 'number') {
      mage.mana = mage.mana - damage.manaConsumed;
    }
  },
  dragonTurn: (dragonDamage) => {
    const damage = dragonDamage();
    warrior.healthPoints = warrior.healthPoints - damage;
    mage.healthPoints = mage.healthPoints - damage;
    dragon.damage = damage;
  },
  action: () => {
    gameActions.warriorTurn(warriorDamage)
    gameActions.mageTurn(mageDamage)
    gameActions.dragonTurn(dragonDamage)
    return console.log(battleMembers);
  }
};

gameActions.action()