function ColorList(min, max, colors, increment) {
  // define default min/max range
  if (!min) min = 0;
  if (!max) max = 255;

  this.genColors = function(min, max) {
    let array = [];
    if (!increment) increment = 10;
    // create sorted array of colors
    for (let r = min; r <= max; r += increment) {
      for (let g = min; g <= max; g += increment) {
        for (let b = min; b <= max; b += increment) {
          let color = {};
          // actually color code
          color.r = r;
          color.g = g;
          color.b = b;
          // coordinates on plot
          color.x = r;
          color.y = g;
          color.z = b;
          color.code = `rgb(${r},${g},${b})`
          array.push(color); 
        }
      }
    }
  
    return array;
  }

  // generate an ordered list of colors to be used 
  this.colors = colors ? colors : this.genColors(min, max);

  // unpack each object in an array based on key
  // use with plotly 3d scatter plot
  this.unpack = function(key) {
    let temp = [...this.colors];
    return temp.map(el => el[key]);
  }

  // values for plotly scatter 3d;
  this.R = this.unpack('r');

  this.G = this.unpack('g');

  this.B = this.unpack('b');

  this.X = this.unpack('x');

  this.Y = this.unpack('y');

  this.Z = this.unpack('z');

  this.Code = this.unpack('code');

  this.randomizeElements = function() {
    this.colors = this.colors.sort(el => Math.random() < 0.5);
    this.R = this.unpack('r');
    this.G = this.unpack('g');
    this.B = this.unpack('b');
    this.Code = this.unpack('code');
  };

  this.RandomizeElements = function() {
    let temp = [...this.colors].map(el => ({...el}));
    temp = temp.sort(el => Math.random() < 0.5);
    let newList = new ColorList(min, max, temp);
    
    return newList;
  };

  this.RandomizeCoordinates = function() {
    // temp array referencing color list
    let temp = [...this.colors].map(el => ({...el}));
    // randomized color list
    let randomized = [...this.colors].map(el => ({...el}));
    randomized.sort(el => Math.random() < 0.5);
    let len = temp.length;
    // loop through and swap xyz of temp array with randomized array
    // ensuring that the rgb order remain the same but with mixed xyz
    for (let i = 0; i < len; i++) {
      temp[i].x = randomized[i].x;
      temp[i].y = randomized[i].y;
      temp[i].z = randomized[i].z;
    }
    return new ColorList(min, max, temp);
  }

  this.quickSortCoordinates = function(array, update, low, high, coord) {
    // return new Promise(resolve => {
    //     setTimeout(() => {
          // define default variables
          // let coordinates = ["x", "y", "z"];
          if (!array) array = this.colors;
          if (!low) low = 0;
          if (!high) high = array.length - 1;

          // update current colors
          // update(new ColorList(min, max, array));

          // recursively sort through color list by x, y, z
            if (array.length > 1) {
              // find next pivot point
              let index = this.partition(array, low, high, coord);
              if (low < index - 1) {
                this.quickSortCoordinates(array, update, low, index - 1, coord);
              } 

              if(index + 1 < high) {
                this.quickSortCoordinates(array, update, index + 1, high, coord);
              }
            }
          // resolve();
        // }, 0)
        return (new ColorList(min, max, array));
    // });
  }

  this.quickSortCoordinatesLive = function(array, update, low, high, coord) {
    return new Promise(resolve => {
        setTimeout(() => {
          // define default variables
          let coordinates = ["x", "y", "z"];
          if (!array) array = this.colors;
          if (!low) low = 0;
          if (!high) high = array.length - 1;

          // update current colors
          update(new ColorList(min, max, array));
          
          for(let i = 0; i < coordinates.length; i++) {
            // recursively sort through color list by x, y, z
            if (array.length > 1) {
              // find next pivot point
              let index = this.partition(array, low, high, coordinates[i]);
              if (low < index - 1) {
                resolve(this.quickSortCoordinatesLive(array, update, low, index - 1, coordinates[i]))
              } 
              
              if(index + 1 < high) {
                resolve(this.quickSortCoordinatesLive(array, update, index + 1, high, coordinates[i]))
              }
            }
          }
          resolve();
        }, 0)
    });
  }

  this.partition = function (array, low, high, key) {
    // define pivot point for comparsion
    let pivot = array[high];
    // swap index
    let wall = low;

    // loop through each element
    // compare key-value and swap index with wall index if less than pivot
    for (let i = low; i < high; i++) {
      if (array[i][key] < pivot[key]) {
        swap(array, i, wall, key);
        wall++;
      }
    } 
    // swap pivot with wall position
    // everything to the left of pivot should be smaller
    // everything to the right should be larger
    swap(array, wall, high, key);

    return wall;
  }

  function swap (array, a, b, key) {
      let temp = { ...array[a] };
      // array[a][key] = array[b][key];
      // array[b][key] = temp[key];

      array[a].x = array[b].x;
      array[a].y = array[b].y;
      array[a].z = array[b].z;

      array[b].x = temp.x;
      array[b].y = temp.y;
      array[b].z = temp.z;
  }
}


export { ColorList }