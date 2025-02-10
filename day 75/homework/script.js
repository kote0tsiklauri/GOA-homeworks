function car(brand, model,year,engineVolume) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.engineVolume = engineVolume;

    this.getFullDescription = function() {
        return `${this.brand} ${this.model}, ${this.year}, ${this.engineVolume}L`;
    }
}


class Book {
    constructor(title, author, pages, year) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.year = year;
    }
  
    calculateDailyPages() {
      return Math.ceil(this.pages / 7);
    }
}

class Athlete {
    constructor(name, age, sport, trainingHours) {
      this.name = name;
      this.age = age;
      this.sport = sport;
      this.trainingHours = trainingHours;
    }
  
    requiredTrainingHours() {
      return this.trainingHours * 1.2;
    }
  }