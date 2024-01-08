const car = {
  brand: "tata",
  name: "nexon",
  year: 2023,
  isTopModel: true,
  printInfo: function () {
    console.log(`Car is ${this.name} of brand ${this.brand}`);
  },

  printInfoArrow: () => {
    console.log(`Car is ${this.name} of brand ${this.brand}`);
  },
};

car.printInfo();
car.printInfoArrow();
