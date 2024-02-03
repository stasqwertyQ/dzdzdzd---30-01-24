//// task 1


const bankAccount = {
    ownerName: "Bank",
    accountNumber: "23",
    balance: "",
    

    deposit: function (amount) {
        this.balance += amount;
        console.log(" Ваш рахунок поповнено на " + amount + ". Залишок на рахунку: " + this.balance);
    },


withdraw: function(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log("Знято " + amount + " з рахунку. Залишок на рахунку: " + this.balance);
        } else {
            console.log("Недостатньо коштів на рахунку!");
        }
    }
};

bankAccount.deposit(5700);
bankAccount.withdraw(50);




///task 2








///task3


const user = {
    name: "",
    email: "",
    password: "",
    login: function() {
        const enteredEmail = document.getElementById("emailInput").value;
        const enteredPassword = document.getElementById("passwordInput").value;

      
        if (enteredEmail === this.email && enteredPassword === this.password) {
            alert("Ви успішно авторизувались!");
        } else {
            alert("Непривильний емейл або пароль.Спробуй ще раз");
        }
    }
};


const loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", function() {
    user.email = document.getElementById("emailInput").value;
    user.password = document.getElementById("passwordInput").value;
    user.login();
});
/// task4



const movie = {
        title: "Interstellar",
        director: "Christopher Nolan",
        year: 2014,
        rating: 10,
        isHighlyRated: function() {
            return this.rating > 8;
        }
    };


    const titleElement = document.getElementById("title");
    const directorElement = document.getElementById("director");
    const yearElement = document.getElementById("year");
    const ratingElement = document.getElementById("rating");

    titleElement.textContent = "Title: " + movie.title;
    directorElement.textContent = "Director: " + movie.director;
    yearElement.textContent = "Year: " + movie.year;
    ratingElement.textContent = "Rating: " + movie.rating;


    if (movie.isHighlyRated()) {
        titleElement.classList.add("greentext");
        console.log("Хороший вибір");
    } else {
        console.log("Не сподобався глядачам");
    }