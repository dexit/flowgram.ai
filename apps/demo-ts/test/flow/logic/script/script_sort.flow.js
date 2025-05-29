export async function __main(__args) {
  //=== start@start | {level:1,blockIndex:0}
  const start = {}
  start.outputs = {
    nums: [3, 2, 1],
  }
  Object.assign(start.outputs, __args)
  //=== script@script | {level:1,blockIndex:1}
  const script = {}
  script.outputs = {
    output: 0,
  }
  script.data = {
    nums: start.outputs.nums,
  }
  const __func_script = (inputs, outputs) => {
    function insertionSort(arr) {
      for (let i = 1; i < arr.length; i++) {
        let key = arr[i]
        let j = i - 1

        // Move elements of arr[0..i-1], that are greater than key, to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
          arr[j + 1] = arr[j]
          j = j - 1
        }
        arr[j + 1] = key
      }
      return arr
    }
    insertionSort(inputs.nums)
  }
  __func_script(script.data, script.outputs)
  //=== end@end | {level:1,blockIndex:2}
  const end = {}
  end.data = {
    nums: start.outputs.nums,
  }
  return end.data
}
