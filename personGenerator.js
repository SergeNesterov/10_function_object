const mon = Math.floor(Math.random() * 3); // Для генерации случайного числа для генерации месяца

const personGenerator = {
    surnameJson: `{  
        "count": 15,
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
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
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
    patronymicJson: `{
        "count": 10,
        "list": {
            "id_1": "Александров",
            "id_2": "Сергеев",
            "id_3": "Андрев",
            "id_4": "Егоров",
            "id_5": "Никитов",
            "id_6": "Максимов",
            "id_7": "Артемов",
            "id_8": "Михайлов",
            "id_9": "Дмитриев",
            "id_10": "Евгеньев"
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

    GENDER_MALE: 'Мужчина, ',
    GENDER_FEMALE: 'Женщина, ',

    randomGender: function() {
        return Math.floor(Math.random()*2) == 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomIntNumber: (min = 0, max = 1) => Math.floor(Math.random() * (max - min + 1) + min), // Метод отвечающий за случайную генерацию данных

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

    randomPatronymic: function() { // Функция генерации мужского и женского Отчества
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.patronymicJson) + "ич";
        } else {
            return this.randomValue(this.patronymicJson) + "на";
        }
    },

    randomMonth28: function randomMonth() { // Функция генерации месяца Февраль
		let month = `февраля`
		return month;
	},

    randomMonth30: function randomMonth() { // Функция генерации месяцев, в которых 30 дней
        let months = [`апреля`, `июня`, `сентября`, `ноября`];
        let month = months[Math.floor(Math.random() * 4)];
        return month;
    },

    randomMonth31: function randomMonth() { // Функция генерации месяцев, в которых 31 день
        let months = [`января`, `марта`, `мая`,	`июля`,	`августа`, `октября`, `декабря`];
        let month = months[Math.floor(Math.random() * 7)];
        return month;
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
        if (mon === 0) {
            this.person.month = this.randomMonth31();
            this.person.day = this.randomIntNumber(1, 31); // Генерация чисел в месяцах, в которых 31 день
        } else if (mon === 1) {
            this.person.month = this.randomMonth30();
            this.person.day = this.randomIntNumber(1, 30); // Генерация чисел в месяцах, в которых 30 деней
        } else if (mon === 2) {
            this.person.month = this.randomMonth28();
            this.person.day = this.randomIntNumber(1, 28); // Генерация чисел в месяце Февраль, в котором 28 дней
        }
        this.person.year = this.randomYear(1960, 2004);
        this.person.profession = this.randomРrofession();
        return this.person;
    }
};

