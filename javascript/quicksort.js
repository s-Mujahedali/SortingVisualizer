//jshint esversion:8
async function Quick() {
    quickLegend();
    refresh();
    disableButtons();
    await quickSort(0, sortarray.length);
    for (var j = 0; j < sortarray.length; j++) {
        sortarray[j].style.backgroundColor = "#e52165";
    }
    enableButtons();
}
async function quickSort(l, h) {
    if (l < h) {
        var index = await partition(l, h);
        await quickSort(l, index);
        await quickSort(index + 1, h);
    }
}
async function partition(l, h) {
    var pivot = heightarray[l];
    var i = l,
        j = h;
    changeColor(sortarray[l], "red");
    while (i < j) {
        do {
            i++;
            if (i < j) {
                changeColor(sortarray[i], "green");
                await Sleep(150 / arrspeed);
                changeColor(sortarray[i], "#0d1137");
            }
        } while (i < h && heightarray[i] <= pivot);
        await Sleep(150 / arrspeed);
        if (i < j) {
            changeColor(sortarray[i], "green");
        }
        do {
            j--;
            changeColor(sortarray[j], "#6f63ec");
            await Sleep(150 / arrspeed);
            changeColor(sortarray[j], "#0d1137");
            await Sleep(150 / arrspeed);
        } while (j > l && heightarray[j] > pivot);
        await Sleep(150 / arrspeed);
        changeColor(sortarray[j], "#6f63ec");
        if (i < j) {
            await Sleep(100 / arrspeed);
            sortarray[i].style.height = heightarray[j] + "%";
            sortarray[j].style.height = heightarray[i] + "%";
            var temp = heightarray[i];
            heightarray[i] = heightarray[j];
            heightarray[j] = temp;
        }
        await Sleep(300 / arrspeed);
        if (i < j) {
            changeColor(sortarray[i], "#0d1137");
        }
        changeColor(sortarray[j], "#0d1137");
    }
    sortarray[l].style.height = heightarray[j] + "%";
    sortarray[j].style.height = heightarray[l] + "%";
    changeColor(sortarray[l], "#0d1137");
    changeColor(sortarray[j], "#e52165");
    await Sleep(300 / arrspeed);
    var tem = heightarray[l];
    heightarray[l] = heightarray[j];
    heightarray[j] = tem;
    return j;
}

function quickLegend() {
    leg.style.display = "flex";
    $("#leftext").text("Larger than Pivot from Left");
    $("#rightext").text("Smaller than Pivot from Right");
    $("#currtext").text("Pivot Element");
}

/* export const QuickSortDesc = {
   title: 'Quick Sort',
   description: (
     <div>
       <p>
         <a
           href="https://en.wikipedia.org/wiki/Quicksort"
           target="_blank"
           rel="noopener noreferrer"
         >
           Quick Sort
         </a>{' '}
         is an efficient, in-place sorting algorith that in practice is
         faster than MergeSort and HeapSort. However, it is not a stable
         sorting algorithm, meaning that the relative positioning of
         equal sort items is not preserved.Quicksort is a divide and
         conquer algorithm. Quicksort first divides a large array into
         two smaller sub-arrays: the low elements and the high elements.
         Quicksort can then recursively sort the sub-arrays. The steps
         are:
       </p>
       <ol>
         <li>
           Pick an element, called a pivot, from the array. This is
           usually done at random.
         </li>
         <li>Move pivot element to the start of the array.</li>
         <li>
           <em>Partitioning:</em> reorder the array so that all elements
           with values less than the pivot come before the pivot, while
           all elements with values greater than the pivot come after it
           (equal values can go either way). After this partitioning, the
           pivot is in its final position. This is called the{' '}
           <em>partition</em> operation.
         </li>
         <li>
           Recursively apply the above steps to the sub-array of elements
           with smaller values and separately to the sub-array of
           elements with greater values.
         </li>
       </ol>
       <p>
         The base case of the recursion is an array of size zero or one,
         which are sorted by definition.
       </p>
     </div>
   ),
   worstCase: (
     <span>
       O(<em>n</em>
       <sup>2</sup>)
     </span>
   ),
   avgCase: (
     <span>
       O(<em>n</em>log<em>n</em>)
     </span>
   ),
   bestCase: (
     <span>
       O(<em>n</em>log<em>n</em>)
     </span>
   ),
   space: (
     <span>
       O(log<em>n</em>)
     </span>
   )
 };  */