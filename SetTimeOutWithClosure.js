for(var i = 1; i <= 3; i++) {

  function close(x) {
    setTimeout(() => {
      console.log(x);
    }, 1000);
  }

  close(i);
}


// x stores seperately for each iteration of the loop, so it will print 1, 2, and 3 after 1 second. 