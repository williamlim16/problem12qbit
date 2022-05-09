class Fruit {
  constructor(fruitId, fruitName, fruitType, stock) {
    this.fruitId = fruitId;
    this.fruitName = fruitName;
    this.fruitType = fruitType;
    this.stock = stock;
  }
}

const fruits = [
  new Fruit(1, "Apel", "IMPORT", 10),
  new Fruit(2, "Kurma", "IMPORT", 20),
  new Fruit(3, "apel", "IMPORT", 50),
  new Fruit(4, "Manggis", "LOCAL", 100),
  new Fruit(5, "Jeruk Bali", "LOCAL", 10),
  new Fruit(5, "KURMA", "IMPORT", 20),
  new Fruit(5, "Salak", "LOCAL", 150),
];

/**
 * Menampilkan buah yang andi miliki
 */
const getAllFruit = (fruits) => {
  fruits.forEach((el) => {
    console.log(el.fruitName);
  });
};

// getAllFruit(fruits)

/**
 * Menampilkan masing-masing wadah dengan buah dalam wadah
 */

const getFruitsBasedOnType = (type, fruits) => {
  fruits
    .filter((e) => e.fruitType == type)
    .forEach((el) => {
      console.log(el.fruitName);
    });
};

// getFruitsBasedOnType("IMPORT", fruits)
// getFruitsBasedOnType("LOCAL", fruits)

/**
 * Mencari jumlah stok buah berdasarkan type
 */
const getFruitStockBasedOnType = (type, fruits) => {
  let total = 0;
  fruits
    .filter((e) => e.fruitType == type)
    .forEach((el) => {
      total += el.stock;
    });

  return total;
};

// console.log(getFruitStockBasedOnType("IMPORT", fruits));

/**
 * Komen terhadap kasus diatas data yang memiliki ID yang sama akan mempersulit pencarian data (Jeruk Bali, Kurma, Salak).
 * Data yang duplikat lebih baik digabungkan untuk mengurangi kebingungan di saat yang akan mendatang ("Apel" && "apel" || "KURMA" && "Kurma")
 */
