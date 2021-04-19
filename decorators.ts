@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formatedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @logerror('something bad')
  pilot(@parametedDecorator speed: string): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('hothing');
    }
  }
}

function classDecorator(constractor: Function) {
  console.log(constractor);
}

function parametedDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string) {
  console.log('Target:', target);
  console.log('Key:', key);
}

function logerror(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
    //console.log('Target:', target);
    //console.log('Key:', key);
  };
}

//new Boat().pilot();

//testDecorator(Boat.prototype, 'pilot');
