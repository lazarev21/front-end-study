
//Задача 3. Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  function multiplyNumeric(menu) {
      for (let key in menu) {
          if (typeof menu[key] == 'number') {
              menu[key] *= 2
      
          }
      }
  }

  multiplyNumeric(menu);
  console.log(menu);

/* let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
let sumSalaries = 0
  for (let key in salaries) {
      sumSalaries += salaries[key]
  }

console.log(sumSalaries) */

//задача 2 проверка есть ли свойства в объекте
function isEmpty(obj) {
    for (let key in obj) {
      // если тело цикла начнет выполняться - значит в объекте есть свойства
      return false;
    }
    return true;
  }


/* 
//задача 1
let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

for (let key in user) {
    console.log (user[key])
} */