function genRandom(length) {
  let rand = [];

  for (let i = 0; i <= length; i++) {
    // define exit condition
    let assigned = false;
    // loop through each number and assign a random number to rand arrat
    // only if there isn't one already
    while (!assigned) {
      let index = Math.floor(Math.random() * length );

      if (!rand[index]) {
        // set exit condition
        assigned = true;
        rand[index] = i;
      }
    }
  }
  // return randomize array of numbers
  return rand;
}

function quickSort(array, low, high) {
  // define initial min/max indices
  if (!low) low = 0;
  if (!high) high = array.length - 1;

  // sort only if there is more than 1 element
  if (array.length > 1) {
    // find the partitioning index
    let index = partition(array, low, high);
    // only if there is more than 1 element in subarray
    if (low < index - 1) {
      quickSort(array, low, index - 1);
    }

    // only if there is more than 1 element in subarray
    if (index + 1 < high) {
      quickSort(array, index + 1, high);
    }
  }

  return array;
}

function quickSortLive(array, update, low, high, p) {
  return new Promise(resolve => {
    setTimeout(() => {
      update(array);
      // define initial min/max indices
      if (!low) low = 0;
      if (!high) high = array.length - 1;
      if (!p) p = [];
      // sort only if there is more than 1 element
      if (array.length > 1) {
        // find the partitioning index
        let index = partition(array, low, high);
        // only if there is more than 1 element in subarray
        if (low < index - 1) {
          quickSortLive(array, update, low, index - 1, p);
        }
        
        // only if there is more than 1 element in subarray
        if (index + 1 < high) {
          quickSortLive(array, update, index + 1, high, p);
        }
      } 

      resolve(array);
    }, 0);
  })
}

function partition(array, low, high) {
  // define pivot
  let pivot = array[high];
  // define partitioning index
  let wall = low;
  for (let i = low; i < high; i++) {
    // if value is less than pivot
    if (array[i] < pivot) {
      // swap and increase wall position
      swap(array, i, wall);
      wall++;
    }
  }

  // swap pivot with current wall position
  swap(array, wall, high);

  return wall;
}

function swap(array, a, b) {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

export { genRandom, quickSort, quickSortLive };
