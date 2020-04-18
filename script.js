function myTask(dami) {
  let data = [];
  for (i = 1; i <= dami; i++) {

    if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
      dami.push("yu-gi-oh");
    } else if (i % 2 === 0 && i % 3 === 0) {
      dami.push("yu-gi");
    } else if (i % 2 === 0 && i % 5 === 0) {
      dami.push("yu-oh");
    } else if (i % 3 === 0 && i % 5 === 0) {
      dami.push("gi-oh");
    } else if (i % 2 === 0) {
      dami.push("yu");
    } else if (i % 3 === 0) {
      dami.push("gi");
    } else if (i % 5 === 0) {
      dami.push("oh");
    } else {
      data.push(i);
    }
    console.log(dami);
  }
  
}
