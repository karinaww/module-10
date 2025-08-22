// Задание 1: Сохранение примитивных данных в LocalStorage
localStorage.setItem("greeting", "Привет, мир!");
let greet = localStorage.getItem("greeting");
console.log(greet);

// Задание 2: Удаление данных из LocalStorage
localStorage.removeItem("greeting");
let greet2 = localStorage.getItem("greeting");

if (greet2 === null) {
  console.log("Ключ greeting удален");
} else {
  console.log(greet2);
}

// Задание 3: Хранение объектов в LocalStorage с использованием JSON
let user = {
  name: "Анна",
  age: 22,
  email: "anna@example.com",
  isStudent: true,
};
localStorage.setItem("user", JSON.stringify(user));

let myUser = JSON.parse(localStorage.getItem("user"));

console.log(myUser);

// Задание 4: Модификация данных в LocalStorage
let updatedUser = JSON.parse(localStorage.getItem("user"));

updatedUser.country = "Казахстан";

localStorage.setItem("user", JSON.stringify(updatedUser));

console.log(updatedUser);

// Задание 5: Проверка наличия данных в LocalStorage
if (localStorage.getItem("user")) {
  let existingUser = JSON.parse(localStorage.getItem("user"));
  console.log("Пользователь найден:", existingUser);
} else {
  let user = {
    name: "Ирина",
    age: 31,
    email: "irina@example.com",
    isStudent: true,
  };

  localStorage.setItem("user", JSON.stringify(user));

  console.log("Создан новый пользователь:", user);
}

// Задание 6: Очистка LocalStorage
localStorage.clear();

let userData = localStorage.getItem("user");

if (userData === null) {
  console.log("Данные удалены, ключ 'user' отсутствует");
} else {
  let myUser2 = JSON.parse(userData);
  console.log(myUser2);
}

// Задание 7: Сохранение списка задач в LocalStorage
let tasks = [
  { title: "Помыть посуду", completed: false },
  { title: "Погулять с собакой", completed: true },
  { title: "Купить продукты", completed: false },
];

localStorage.setItem("tasks", JSON.stringify(tasks));

let savedTasks = JSON.parse(localStorage.getItem("tasks"));
console.log(savedTasks);

// Задание 8: Обновление состояния задачи
let myTasks = JSON.parse(localStorage.getItem("tasks"));

tasks[0].completed = true;

localStorage.setItem("tasks", JSON.stringify(tasks));

console.log(tasks);
