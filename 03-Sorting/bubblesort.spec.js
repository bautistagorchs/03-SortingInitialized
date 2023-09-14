describe("Bubble Sort", function () {
  it("handles an empty array", function () {
    expect(bubbleSort([])).toEqual([]);
  });
  it("ordena el array", function () {
    expect(bubbleSort([2,3,1,5,4])).toEqual([1, 2, 3, 4, 5]);
  });
});






