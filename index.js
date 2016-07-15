function calculateEvolution(total_candies, candies_to_evolve, pokemons_to_evolve, total_evolved) {
  if (pokemons_to_evolve === 0) {
    return;
  }

  var evolved = total_evolved;
  var candies_remaining = total_candies;
  var pokemons = pokemons_to_evolve;
  var i = 0;

  // Use candies to evolve as many as possible
  while (candies_remaining >= candies_to_evolve) {
    if (pokemons === 0) {
      return;
    }

    candies_remaining -= candies_to_evolve;
    pokemons--;
    evolved++;
    candies_remaining++;
  }

  console.log('Evolved ' + evolved + ' pokemons.');

  // Transfer evolved pokemons first
  var transfered_evolved = 0;
  while (evolved > 0) {
    if (candies_remaining >= candies_to_evolve) {
      break;
    }
    evolved--;
    candies_remaining++;
    transfered_evolved++;
  }

  // Transfer pokemons if necessary
  var transfered_pokemon = 0;
  while (candies_remaining < candies_to_evolve && pokemons > 0) {
    pokemons--;
    candies_remaining++;
    transfered_pokemon++;
  }

  // If we can evolve start from the begining
  if (pokemons > 0 && candies_remaining >= candies_to_evolve) {
    transfered_evolved && console.log('Transfer evolved ' + transfered_evolved);
    transfered_pokemon && console.log('Transfer pokemon ' + transfered_pokemon);
    evolved = calculateEvolution(candies_remaining, candies_to_evolve, pokemons, evolved);
  }
}
