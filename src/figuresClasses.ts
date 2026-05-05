export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Сторона трикутника не може бути <= 0');
    }

    const numbers = [this.a, this.b, this.c];
    const max = Math.max(...numbers);
    const index = numbers.indexOf(max);

    numbers.splice(index, 1);

    if (max >= numbers[0] + numbers[1]) {
      throw new Error('Invalid triangle sides');
    }

    this.getArea = (): number => {
      const p = (this.a + this.b + this.c) / 2;

      return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(
        2,
      );
    };
  }

  public getArea: () => number;
}

export class Circle implements Figure {
  public shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Радіус кола не може бути <= 0');
    }

    this.getArea = (): number => {
      return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
    };
  }

  public getArea: () => number;
}

export class Rectangle implements Figure {
  public shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Ширина та висота прямокутника не можуть бути <= 0');
    }

    this.getArea = (): number => {
      return Math.floor(this.width * this.height * 100) / 100;
    };
  }

  public getArea: () => number;
}

export function getInfo<T extends Figure>(figure: T): string {
  const area = +figure.getArea().toFixed(2);

  if (figure instanceof Triangle) {
    return `A ${figure.color} ${figure.shape} - ${area}`;
  }

  if (figure instanceof Circle) {
    return `A ${figure.color} ${figure.shape} - ${area}`;
  }

  if (figure instanceof Rectangle) {
    return `A ${figure.color} ${figure.shape} - ${area}`;
  }

  return typeof figure;
}
