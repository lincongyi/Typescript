// 联合类型

const sayHi = (name: string | undefined): void => {
  console.log(`hello ${name}`);
};
sayHi("cy");

const sayBye = (name?: string): void => {
  console.log(`Bye ${name}`);
};
sayBye();

interface Motorcycle {
  vType: "motorcycle"; // discriminant
  make: number; // year
}

interface Car {
  vType: "car"; // discriminant
  brand: string;
}

interface Truck {
  vType: "truck"; // discriminant
  capacity: number; // in tons
}

type Vehicle = Motorcycle | Car | Truck;

const myVehicle: Vehicle = {
  vType: "car",
  brand: "Porsche",
};

const getMotorcycle = (vehicle: Motorcycle): void => {
  console.log(`${vehicle.vType} is made in ${vehicle.make}`);
};

let myMotorcycle: Motorcycle = {
  vType: "motorcycle",
  make: 2020,
};
getMotorcycle(myMotorcycle);

type HttpMethod = "get" | "post" | "put";

function request(method: HttpMethod) {
  console.log(method);
}

request("get");

type myType = {
  type: "get" | "post";
  resize: {
    detail: {
      width: number;
      height: number;
    };
  };
};

// let getMyType: myType = {
//   type: "get",
//   resize: {
//     detail: {},
//   },
// };
