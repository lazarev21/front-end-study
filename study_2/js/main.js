

/* if (checkParametrs == true) {
    function calc (action, a, b);
}
else {
    return;
} */


/* let a = prompt ('введите a', '');
let n = prompt ('введите n', '');
pow (a,n);

function pow(a, n) {
        if (Number.isInteger(n) || (n >= 1)==false) {
         alert('Введено неверное число')
    }
    else {
        return alert(a**n);
    }
} */



/* function checkAge(age) {
    return (age > 18) ?  true : confirm('А родители?');

function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?'); 
  // нам нужно проверить возраст больше 18, оператор ИЛИ || ищет true, если не находит, то вернет последнее выражение
}

function min (a, b) {
    if a>b {
        return a
    }
    return b;
    } */


/* let login = (prompt('Введите логин', ''));

if (login == 'admin') {

    let password = (prompt ('Введите пароль', ''));

        if (password == ('123')) {
                alert ('здаров!');
        } else if (password == '' || password == null ) { // если пароль пустой или кнопка esc 
            alert ('отмена');
        } else {
             alert ('неверный пароль');
        }

} else if (login == '' || login == null) { // если логин пустой или кнопка esc 
    alert ('отмененно');
} else {
    alert ('ты кто, Увася?');
} */




/* //Перепишите if..else с использованием нескольких операторов '?'.

let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}
// мой варик
login ==
        ('Сотрудник') ? 'Привет':
        ('Директор)') ? 'Здравствуйте':
        ('') ? 'Нет логина':
        '';

//верный варик
let message = 
- (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  ''; */

// перепешите if в ?
/* let result;

(result a + b < 4) ? result = 'мало' : result = 'много';
result = (a + b < 4) ? 'Мало' : 'Много';
result = (a + b < 4) ? 'Мало' : 'много'; */

/* let chislo = prompt ('Введите число', '');
if (chislo>0) {
    alert ('1');
}
else if (chislo<0) {
    alert ('-1');
}
else {
    alert ('0');
}
 */
/* let questionAboutJava1 = prompt ('Какое официальное название JavaScript?', '');

if (questionAboutJava1 == 'ECMAScript') {
    alert ('Верно!');
}
else {
    alert ('Не знаете? “ECMAScript”!');
}


 */


/* let old = prompt ('Тебе сколько лет');
alert('Через 10 лет тебе будет '+(+old+10));

let message =            
              (old< 18)  ? 'Ты мелкий!!!':
              (old> 30)  ? 'Ты старый!!':
              (old>= 18) ? 'Ты совершенолетний!':
              'Че';

alert (message) */


/* if (old>=18) {
    alert ('Ты совершенолентий');
}
else if (old>30) {
    alert ('Ты уже старый!!!');
}
else {
    alert ('Ты несовершенолетний! Бухать нельзя!!!');
} */