const ap_colors_2 = [
  'red',
  'yellow',
  'white',
  'pink',
  'green',
  'black',
  'blue'
];

BlockEvents.placed(event => {
  const id = event.block.id;

  ap_colors_2.forEach(color => {
    const original = `cobblemon:${color}_apricorn_sapling`;
    const replacement = `dtcobblemon:${color}_apricorn_sapling`;

    if (id === original) {
      event.block.set(replacement);
    }
  });
});