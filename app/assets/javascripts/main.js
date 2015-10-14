
//bubble
function bubbleSort(arr){
   var len = arr.length;
   for (var i = len-1; i>=0; i--){
     for(var j = 1; j<=i; j++){
       if(arr[j-1]>arr[j]){
           var temp = arr[j-1];
           arr[j-1] = arr[j];
           arr[j] = temp;
        }
        alert(arr);
     }

  document.getElementById("bs").innerHTML=(arr.join(", "));
   }
   return arr;
}
// var a=[2,1,4,7,5];
document.getElementById("play1").addEventListener("click", function() {
  var a;

  a = document.getElementById("bubble").value;
  var b = a.split(',').map(Number);
  alert(b);
  bubbleSort(b);
});

//selection
function selectionSort(arr){
  var minIdx, temp,
      len = arr.length;
  var b = [];
  for(var i = 0; i < len; i++){

    minIdx = i;
    for(var  j = i+1; j<len; j++){
       if(arr[j]<arr[minIdx]){
          minIdx = j;
       }
    }
    temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
    alert("Selection Sort in Progress: " + arr.join(", "));

  }

  return arr;

}
document.getElementById("play2").addEventListener("click", function() {
  var a;

  a = document.getElementById("selection").value;
  var b = a.split(',').map(Number);
  alert("Time to sort using my fantastic selection sort! Array: " + b);
  selectionSort(b);
  //console.log(c);
  document.getElementById("ss").innerHTML=(b.join(", "));
});
//insertion
function insertionSort(items) {
    var len     = items.length,     // number of items in the array
        value,                      // the value currently being compared
        i,                          // index into unsorted section
        j;

    for (i=0; i < len; i++) {
        value = items[i];
        alert("We will now insert " + value);
        for (j=i-1; j > -1 && items[j] > value; j--) {
            items[j+1] = items[j];
        }
        items[j+1] = value;
        alert(items.slice(0,i+1));

    }
    alert("Yippee! The array is now sorted!")
    return items;
}
document.getElementById("play3").addEventListener("click", function() {
  var a;

  a = document.getElementById("insert").value;
  var b = a.split(',').map(Number);
  //console.log(b);
  insertionSort(b);
  document.getElementById("is").innerHTML=(b.join(", "));
});

function merge(left, right){

    var result  = [],
        il      = 0,
        ir      = 0;

    while (il < left.length && ir < right.length){
        if (left[il] < right[ir]){
            result.push(left[il++]);

        } else {
            result.push(right[ir++]);

        }
    }
    var tmp =result.concat(left.slice(il)).concat(right.slice(ir));
    alert(tmp);
    return tmp;
}

function mergeSort(items){


    // Terminal case: 0 or 1 item arrays don't need sorting
    if (items.length < 2) {
        return items;
    }

    var middle = Math.floor(items.length / 2),
        left    = items.slice(0, middle),
        right   = items.slice(middle);
        alert(left);
        alert(right);

    return merge(mergeSort(left), mergeSort(right));
}

document.getElementById("play4").addEventListener("click", function() {
  var a = [];
  var b =[];
  //var c= [];
  alert("We recursively slice the array until only one element is remaining.")
  a = document.getElementById("merge").value;

  b = mergeSort(a.split(',').map(Number));
  console.log(b);
  document.getElementById("ms").innerHTML=(b.join(", "));

});

//quick
function quickSort(items) {
    quickSort1(items, 0, items.length-1);
}

function quickSort1(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort1(items, left, index - 1);
        }
        if (index < right) {
            quickSort1(items, index, right);
        }
    }
    return items;
}

function partition(items, left, right) {
    var pivot   = items[left],
        i       = left,
        j       = right,
        mid =  Math.floor((right + left) / 2);
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
        alert(items);
    }

    return i;
}


function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

document.getElementById("play5").addEventListener("click", function() {
  var a;

  a = document.getElementById("quick").value;
  var b = a.split(',').map(Number);
  quickSort(b);
  document.getElementById("qs").innerHTML=(b.join(", "));
});

//bucket

function bucketSort(array, bucketSize) {
  if (array.length === 0) {
    return array;
  }
  //maxValue
  var i;
  var minValue = array[0];
  var maxValue = array[0];
  for (i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
    } else if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }

  //buckets
  var BUCKET_SIZE = 10;
  bucketSize = BUCKET_SIZE;
  var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  var buckets = new Array(bucketCount);
  for (i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  //Input array values into buckets
  for (i = 0; i < array.length; i++) {
    buckets[Math.floor((array[i] - minValue) / bucketSize)].push(array[i]);
  }

  array.length = 0;
  for (i = 0; i < buckets.length; i++) {
    if(buckets[i]!=null) {

    }
    insertionSort1(buckets[i]);

    for (var j = 0; j < buckets[i].length; j++) {
      array.push(buckets[i][j]);
      alert(array);
    }

  }

  return array;
}

function insertionSort1(items) {
    var len     = items.length,
        value,
        i,
        j;

    for (i=0; i < len; i++) {
        value = items[i];
        for (j=i-1; j > -1 && items[j] > value; j--) {
            items[j+1] = items[j];
        }
        items[j+1] = value;

    }
    return items;
}

document.getElementById("play6").addEventListener("click", function() {
  var a;

  a = document.getElementById("bucket").value;
  var b = a.split(',').map(Number);
  bucketSort(b,0,b.length,10);
  document.getElementById("bs2").innerHTML=(b.join(", "));
});

//radix


function radixSort(array, maxDigitSymbols) {
  var counter = [[]];
        var mod = 10;
        var dev = 1;
        for (var i = 0; i < maxDigitSymbols; i++, dev *= 10, mod *= 10) {
            for(var j = 0; j < array.length; j++) {
                var bucket = parseInt((array[j] % mod) / dev);
              if(counter[bucket]==null) {
                counter[bucket] = [];
              }
              counter[bucket].push(array[j]);
            }
            var pos = 0;
            for(var j = 0; j < counter.length; j++) {
                var value = null;
              if(counter[j]!=null) {
                while ((value = counter[j].shift()) != null) {
                    array[pos++] = value;
                }
              }
            }
          alert(array);
        }
}
document.getElementById("play7").addEventListener("click", function() {
  var a;
  var num;

  a = document.getElementById("radix").value;
  var b = a.split(',').map(Number);
  for(var i =0; i<b.length; i++) {
    if (b[i]>1000) {
      document.getElementById("rs").innerHTML="Oops, only enter values less than 1000."
    }
    else {
      radixSort(b, 3);
      document.getElementById("rs").innerHTML=(b.join(", "));
    }
  }
});

function shuffle(a) {

    for (var i=a.length-1; i>0; i--) {
        // j is a random integer [0-i]
        var j = Math.floor(Math.random()*(i+1));
        swap(a, j, i);
    }
    alert(a);
    return a;
}


function isSorted(v){
    for(var i=1; i<v.length; i++) {
        if (v[i-1] > v[i]) { return false; }
    }
    return true;
}

function bogosort(v) {
    var sorted = false;
    while(sorted == false){
        v = shuffle(v);
        sorted = isSorted(v);
    }
    return v;
}

document.getElementById("play8").addEventListener("click", function() {
  var a;
  var num;

  a = document.getElementById("bogo").value;
  var b = a.split(',').map(Number);
  bogosort(b);
  document.getElementById("bs3").innerHTML=(b.join(", "));
});
