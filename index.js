function calculateEvolution(
  total_candies,
  candies_to_evolve,
  pokemons_to_evolve,
  total_evolved
) {
  if (pokemons_to_evolve === 0) {
    return;
  }

  var evolved = total_evolved;
  var new_evolved = 0;
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
    new_evolved++;
    candies_remaining++;
  }

  console.log(bold('Evolved ' + new_evolved + ' pokemons.'));

  evolved = total_evolved + new_evolved;

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

  // If we cannot evolve we stop. Otherwise we start from the begining.
  if (pokemons <= 0 || candies_remaining < candies_to_evolve) {
    return;
  }

  if (transfered_evolved > 0) {
    console.log(underline('Transfer evolved ' + transfered_evolved));
  }
  if (transfered_pokemon >0) {
    console.log(underline('Transfer pokemon ' + transfered_pokemon));
  }
  calculateEvolution(
    candies_remaining,
    candies_to_evolve,
    pokemons,
    evolved
  );
}

function bold(string) {
  return '\033[1m' + string + '\033[0m';
}

function underline(string) {
  return '\033[2m' + string + '\033[0m';
}
