const mon = Math.floor(Math.random() * 3); // Для генерации случайного числа для генерации месяца

const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Владимир",
            "id_6": "Леонид",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Виктор"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Анастасия",
            "id_2": "Александра",
            "id_3": "Милена",
            "id_4": "Ольга",
            "id_5": "Снежанна",
            "id_6": "Любовь",
            "id_7": "Виктория",
            "id_8": "Кристина",
            "id_9": "Светлана",
            "id_10": "Евгения"
        }
    }`,

    professionMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Водитель",
            "id_2": "Охранник",
            "id_3": "Инженер",
            "id_4": "Юрист",
            "id_5": "Слесарь",
            "id_6": "Шахтер",
            "id_7": "Строитель",
            "id_8": "Электрик",
            "id_9": "Пожарный",
            "id_10": "Программист"
        }
    }`,
    professionFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Учительница",
            "id_2": "Фармацевт",
            "id_3": "Визажистка",
            "id_4": "Юристка",
            "id_5": "Медсестра",
            "id_6": "Бухгалтер",
            "id_7": "Соцработница",
            "id_8": "Воспитательница",
            "id_9": "Повар",
            "id_10": "Стюардесса"
        }
    }`,

    monthBornJson: `{
        "count": 12,
        "list": {     
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля",
            "id_5": "Мая",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря"
        }
    }`,

    GENDER_MALE: 'Мужчина, ',
    GENDER_FEMALE: 'Женщина, ',

    randomGender: function() {
        return Math.floor(Math.random()*2) == 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomIntNumber: (min = 0, max = 1) => Math.floor(Math.random() * (max - min + 1) + min), // Метод отвечающий за случайную генерацию данных
    
    randomDayFeb: (max = 28, min = 1) => Math.floor(Math.random() * (max - min + 1) + min),

    randomDayAll: (max = 30, min = 1) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },
    
    randomSurname: function() { // Функция генерации мужской и женской Фамилии
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + "а";
        }
    },

    randomFirstName: function() { // Функция генерации мужского и женского Имени
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    randomPatronymic: function() { // Функция генерации мужского и женского Отчества из мужских имен
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.firstNameMaleJson) + "ович";
        } else {
            return this.randomValue(this.firstNameMaleJson) + "овна";
        }
    },

    randomMonthBorn: function() {
        return this.randomValue(this.monthBornJson);
    },

    randomDayBorn: function(randomMonthBorn) {

        if (randomMonthBorn == 'Февраля') {
            return this.randomDayFeb();
        } else {
            return this.randomDayAll();
        }
    },

    randomYear: function() { // Функция генерации Года
        return this.randomIntNumber(1960, 2004) + " г.р.";
    },

    randomРrofession: function() { // Функция генерации мужских и женских Профессий
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.professionMaleJson);
        } else {
            return this.randomValue(this.professionFemaleJson);
        }
    },

    getPerson: function() {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.surname = this.randomSurname();
        this.person.firstName = this.randomFirstName();
        this.person.patronymic = this.randomPatronymic();
        this.person.month = this.randomMonthBorn();
        this.person.day = this.randomDayBorn(this.person.month); // Генерация чисел в месяцах, в которых 31 день
        this.person.year = this.randomYear(1960, 2004);
        this.person.profession = this.randomРrofession();
        return this.person;
    }
};