function computer() {
  class Device {
    constructor(manufacturer) {
      if (new.target === Device) {
        throw new Error("Cannot construct Device abstract instance directly");
      }
      this.manufacturer = manufacturer;
    }
  }

  class Keyboard extends Device {
    constructor(manufacturer, responseTime) {
      super(manufacturer);
      this.responseTime = Number(responseTime);
    }
  }

  class Monitor extends Device {
    constructor(manufacturer, width, height) {
      super(manufacturer);
      this.width = Number(width);
      this.height = Number(height);
    }
  }

  class Battery extends Device {
    constructor(manufacturer, expectedLife) {
      super(manufacturer);
      this.expectedLife = Number(expectedLife);
    }
  }

  class Computer extends Device {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
      if (new.target === Computer) {
        throw new Error("Cannot construct Computer abstract instance directly");
      }
      super(manufacturer);
      this.processorSpeed = Number(processorSpeed);
      this.ram = Number(ram);
      this.hardDiskSpace = Number(hardDiskSpace);
    }
  }

  class Laptop extends Computer {
    constructor(
      manufacturer,
      processorSpeed,
      ram,
      hardDiskSpace,
      weight,
      color,
      batteryInstance
    ) {
      super(manufacturer, processorSpeed, ram, hardDiskSpace);
      this.weight = Number(weight);
      this.color = color;
      this.battery = batteryInstance;
    }

    get battery() {
      return this._battery;
    }

    set battery(batteryInstance) {
      if (!(batteryInstance instanceof Battery)) {
        throw new TypeError(`Battery must be an instance of class Battery!`);
      }
      this._battery = batteryInstance;
    }
  }

  class Desktop extends Computer {
    constructor(
      manufacturer,
      processorSpeed,
      ram,
      hardDiskSpace,
      keyboardInstance,
      monitor
    ) {
      super(manufacturer, processorSpeed, ram, hardDiskSpace);
      this.keyboard = keyboardInstance;
      this.monitor = monitor;
    }

    get keyboard() {
      return this._keyboard;
    }

    set keyboard(keyboardInstance) {
      if (!(keyboardInstance instanceof Keyboard)) {
        throw new TypeError(`Keyboard must be an instance of class Keyboard!`);
      }
      this._keyboard = keyboardInstance;
    }

    get monitor() {
      return this._monitor;
    }

    set monitor(monitorInstance) {
      if (!(monitorInstance instanceof Monitor)) {
        throw new TypeError(`Monitor must be an instance of class Monitor!`);
      }
      this._monitor = monitorInstance;
    }
  }

  return {
    Battery,
    Keyboard,
    Monitor,
    Computer,
    Laptop,
    Desktop,
  };
}

let classes = computer();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let battery = new Battery("Energy", 3);
console.log(battery);

let laptop = new Laptop(
  "Hewlett Packard",
  2.4,
  4,
  0.5,
  3.12,
  "Silver",
  battery
);
console.log(laptop);
