let newarr = [];
function shuffle(o) {
  for (
    var j, x, i = o.length;
    i;
    j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
  );
  return o;
}

export function numberGenerator(numbers) {
  if (newarr.length === 0) {
    newarr = shuffle(numbers);
  }
  return newarr.pop();
}
