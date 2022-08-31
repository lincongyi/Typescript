// 枚举

enum Color {
  RED = 2,
  PINK,
  BLUE,
}

const red: Color = Color.RED;
console.log(Color);

enum Direction {
  NORTH = "NORTH",
  SOUTH = "SOUTH",
  EAST = "EAST",
  WEST = "WEST",
}
console.log(Direction);

enum Gender {
  MALE,
  FEMALE,
}
console.log(Gender);

let person1: {
  name: string;
  gender: Gender;
} = { name: "cy", gender: Gender.MALE };
console.log(person1);

enum EAnimalType {
  dog = "dog",
  cat = "cat",
  bird = "bird",
}
console.log(EAnimalType);
