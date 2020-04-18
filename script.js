function myTask(dami) {
  let data = [];
  for (i = 1; i <= dami; i++) {

    if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
      data.push("yu-gi-oh");
    } else if (i % 2 === 0 && i % 3 === 0) {
      data.push("yu-gi");
    } else if (i % 2 === 0 && i % 5 === 0) {
      data.push("yu-oh");
    } else if (i % 3 === 0 && i % 5 === 0) {
      data.push("gi-oh");
    } else if (i % 2 === 0) {
      data.push("yu");
    } else if (i % 3 === 0) {
      data.push("gi");
    } else if (i % 5 === 0) {
      data.push("oh");
    } else {
      data.push(i);
    }
  }
  console.log(data);
    return data;
}
myTask(100);
myTask(32);