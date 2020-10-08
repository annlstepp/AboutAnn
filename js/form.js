function testAlert() {
    alert('You are visiting ' + location.hostname)
  }
  
  let firstName = 'Ann'
  let lastName = 'Stepp';
  const fullName = firstName + ' ' + lastName;
  console.log(`${fullName}`.toUpperCase());
  console.log(`${fullName}`.split(' '));
  console.log(`${fullName}`.split(''));
  console.log(`${fullName}`.split('e'));
  
  let thisNumber = 3.14;
  console.log(thisNumber.toFixed(5));
  console.log(parseInt(thisNumber));
  console.log(typeof(thisNumber));
  
  let boolean1 = false;
  let boolean2 = true;
  let boolean3 = null;
  let boolean4 = undefined;
  let boolean5 = '';
  let boolean6 = 'Ann';
  let boolean7 = NaN;
  let boolean8 = -5;
  let boolean9 = 0;
  
  console.log(Boolean(boolean1));
  console.log(Boolean(boolean2));
  console.log(Boolean(boolean3));
  console.log(Boolean(boolean4));
  console.log(Boolean(boolean5));
  console.log(Boolean(boolean6));
  console.log(Boolean(boolean7));
  console.log(Boolean(boolean8));
  console.log(Boolean(boolean9));
  console.log(' ');
  
  
  let myArray = [5, 6, 7];
  myArray.push(8, 9, 10);
  let i = myArray.pop();
  myArray[0] = 1;
  myArray.forEach((element) => {
    console.log(element)
  });
  
  console.log('');
  console.log(myArray);
  console.log('');
  console.log(i);
  console.log('');
  
  let animal1 = {
    owner: {
       OwnerName: 'Ann',
       phone: '816-436-8872'
       },
       petName: 'Lenny',
       type: 'Dog',
       Color: 'white and brown',
       size: 'medium',
       age: 2
    };
  animal1.age = 3;
  
  console.log(animal1.age);
  console.log(Object.keys(animal1));
  console.log(Object.values(animal1));
  console.log('');
  
  let arithmetic1 = 5 + 5 - 4 * 4 / 4;
  console.log(arithmetic1);
  
  let arithmetic2 = 18 % 4;
  console.log(arithmetic2);
  console.log('');
  
  let relational1=10;
  let relational2=12;
  let relational3='12';
  
  
  console.log(relational1 >= relational2);
  console.log(relational1 != relational2);
  console.log(typeof relational2);
  console.log(typeof relational3);
  console.log(relational2==relational3);
  console.log(relational2===relational3);
  console.log('');
  
  let incriment1 = 1;
  incriment1++;
  console.log(incriment1);
  incriment1--;
  console.log(incriment1);
  console.log('');
  
  let increment2=13;
  increment2 %= 5;
  console.log(increment2);
  console.log('');
  
  let condition = 5;
  if (condition===6 || false == true) {
     console.log ( 'first option');
  } else if (condition=='6')  {
    console.log('second option')
  } else {
    console.log('last option')
  }
  console.log('');
  
  /* try these:
  else if (true)
  else if  (condition='5')
  else if (false)
  */
  
  let response ='c';
  switch(response); ) {
    case 'a':
    console.log('a is wrong.');
    break;
    case 'b':
      console.log('b is wrong.');
      break;
    case'c':
      console.log('c is correct.');
      break;
    default:
      console.log('that\'s not a real answer.');  
  }
  console.log('');
  
  let loop1 = 0;
  let numArray = [10, 20, 30, 40, 50, 60, 70, 80, 90];
  /*for loop */
  for (let i = 0; i < numArray.length; i++) {
    loop1 += numArray[i];
  }
  console.log(loop1);
  console.log('');
  
  /*while loop*/
  
  let loop2 = 1;
  msg = '';
  while (loop2 <= 5) {
    msg = loop2 + ' x 5 = ' + loop2 * 5 + ' '
    console.log(msg) 
    loop2++
  }
  console.log('');
  
  /*do while loop*/
  let loop3 = 0;
  do {
    loop3++;
    console.log(loop3);
    if(loop3 === 5) {
      break;
    }
  }
  while (true)
  
  console.log('');
  function funct1(num1, num2) {  //declare function 
     return num1 * num2;
  };
  
  console.log(funct1(8, 7));       //call function
  
  console.log('');
  
  
  
  