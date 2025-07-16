
//* 1
const phone1 = {
    brand: "Apple",
    model: "iPhone 14 Pro",
    storage: "256GB",
    ram: "6GB",
    battery: "3200mAh",
    price: 1199,
    is5G: true
};

const phone2 = {
    brand: "Samsung",
    model: "Galaxy S23",
    storage: "128GB",
    ram: "8GB",
    battery: "3900mAh",
    price: 999,
    is5G: true
};

const phone3 = {
    brand: "Xiaomi",
    model: "Redmi Note 12",
    storage: "64GB",
    ram: "4GB",
    battery: "5000mAh",
    price: 299,
    is5G: false
};

const phone4 = {
    brand: "Google",
    model: "Pixel 7",
    storage: "128GB",
    ram: "8GB",
    battery: "4355mAh",
    price: 699,
    is5G: true
};

//* 2
class Phone{
    constructor(brand,model,storage,ram,battery,price,is5G){
        this._brand = brand
        this._model = model
        this._storage = storage
        this._ram = ram
        this._battery = battery
        this._price = price
        this._is5G = is5G
    }
}

const phone5 = new Phone("Apple", "iPhone 14 Pro", "256GB", "6GB", "3200mAh", 1199, true);
const phone6 = new Phone("Samsung", "Galaxy S23", "128GB", "8GB", "3900mAh", 999, true);
const phone7 = new Phone("Xiaomi", "Redmi Note 12", "64GB", "4GB", "5000mAh", 299, false);
const phone8 = new Phone("Google", "Pixel 7", "128GB", "8GB", "4355mAh", 699, true);