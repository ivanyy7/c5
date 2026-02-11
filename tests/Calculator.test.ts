import { describe, it, expect, beforeEach } from 'vitest';
import { Calculator } from '../src/Calculator';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    it('должен складывать два положительных числа', () => {
      expect(calculator.add(2, 3)).toBe(5);
      expect(calculator.add(10, 15)).toBe(25);
      expect(calculator.add(100, 200)).toBe(300);
    });

    it('должен складывать отрицательные числа', () => {
      expect(calculator.add(-2, -3)).toBe(-5);
      expect(calculator.add(-10, -15)).toBe(-25);
    });

    it('должен складывать положительное и отрицательное число', () => {
      expect(calculator.add(5, -3)).toBe(2);
      expect(calculator.add(-5, 3)).toBe(-2);
      expect(calculator.add(10, -10)).toBe(0);
    });

    it('должен складывать числа с нулем', () => {
      expect(calculator.add(5, 0)).toBe(5);
      expect(calculator.add(0, 5)).toBe(5);
      expect(calculator.add(0, 0)).toBe(0);
    });

    it('должен складывать десятичные числа', () => {
      expect(calculator.add(2.5, 3.7)).toBeCloseTo(6.2);
      expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
      expect(calculator.add(-2.5, 3.7)).toBeCloseTo(1.2);
    });

    it('должен складывать большие числа', () => {
      expect(calculator.add(Number.MAX_SAFE_INTEGER, 0)).toBe(Number.MAX_SAFE_INTEGER);
      expect(calculator.add(1000000, 2000000)).toBe(3000000);
    });
  });

  describe('subtract', () => {
    it('должен вычитать два положительных числа', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
      expect(calculator.subtract(10, 4)).toBe(6);
      expect(calculator.subtract(100, 50)).toBe(50);
    });

    it('должен вычитать отрицательные числа', () => {
      expect(calculator.subtract(-5, -3)).toBe(-2);
      expect(calculator.subtract(-10, -4)).toBe(-6);
    });

    it('должен вычитать положительное и отрицательное число', () => {
      expect(calculator.subtract(5, -3)).toBe(8);
      expect(calculator.subtract(-5, 3)).toBe(-8);
    });

    it('должен вычитать числа с нулем', () => {
      expect(calculator.subtract(5, 0)).toBe(5);
      expect(calculator.subtract(0, 5)).toBe(-5);
      expect(calculator.subtract(0, 0)).toBe(0);
    });

    it('должен возвращать отрицательный результат при вычитании большего из меньшего', () => {
      expect(calculator.subtract(3, 5)).toBe(-2);
      expect(calculator.subtract(10, 20)).toBe(-10);
    });

    it('должен вычитать десятичные числа', () => {
      expect(calculator.subtract(5.5, 3.2)).toBeCloseTo(2.3);
      expect(calculator.subtract(0.3, 0.1)).toBeCloseTo(0.2);
      expect(calculator.subtract(-2.5, 3.7)).toBeCloseTo(-6.2);
    });
  });

  describe('multiply', () => {
    it('должен умножать два положительных числа', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
      expect(calculator.multiply(5, 4)).toBe(20);
      expect(calculator.multiply(10, 10)).toBe(100);
    });

    it('должен умножать отрицательные числа', () => {
      expect(calculator.multiply(-2, -3)).toBe(6);
      expect(calculator.multiply(-5, -4)).toBe(20);
    });

    it('должен умножать положительное и отрицательное число', () => {
      expect(calculator.multiply(2, -3)).toBe(-6);
      expect(calculator.multiply(-5, 4)).toBe(-20);
    });

    it('должен умножать на ноль', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
      expect(calculator.multiply(0, 5)).toBe(0);
      expect(calculator.multiply(0, 0)).toBe(0);
    });

    it('должен умножать на единицу', () => {
      expect(calculator.multiply(5, 1)).toBe(5);
      expect(calculator.multiply(1, 5)).toBe(5);
    });

    it('должен умножать десятичные числа', () => {
      expect(calculator.multiply(2.5, 3)).toBeCloseTo(7.5);
      expect(calculator.multiply(0.5, 0.5)).toBeCloseTo(0.25);
      expect(calculator.multiply(-2.5, 3)).toBeCloseTo(-7.5);
    });

    it('должен умножать большие числа', () => {
      expect(calculator.multiply(1000, 2000)).toBe(2000000);
    });
  });

  describe('divide', () => {
    it('должен делить два положительных числа', () => {
      expect(calculator.divide(6, 3)).toBe(2);
      expect(calculator.divide(10, 2)).toBe(5);
      expect(calculator.divide(100, 4)).toBe(25);
    });

    it('должен делить отрицательные числа', () => {
      expect(calculator.divide(-6, -3)).toBe(2);
      expect(calculator.divide(-10, -2)).toBe(5);
    });

    it('должен делить положительное и отрицательное число', () => {
      expect(calculator.divide(6, -3)).toBe(-2);
      expect(calculator.divide(-10, 2)).toBe(-5);
    });

    it('должен делить на единицу', () => {
      expect(calculator.divide(5, 1)).toBe(5);
      expect(calculator.divide(-5, 1)).toBe(-5);
    });

    it('должен делить ноль на число', () => {
      expect(calculator.divide(0, 5)).toBe(0);
      // 0 / -5 возвращает -0 в JavaScript, поэтому используем toBeCloseTo
      expect(calculator.divide(0, -5)).toBeCloseTo(0);
      expect(calculator.divide(0, -5)).toEqual(-0);
    });

    it('должен делить десятичные числа', () => {
      expect(calculator.divide(7.5, 2.5)).toBeCloseTo(3);
      expect(calculator.divide(0.5, 0.25)).toBeCloseTo(2);
      expect(calculator.divide(-7.5, 2.5)).toBeCloseTo(-3);
    });

    it('должен возвращать дробный результат при делении', () => {
      expect(calculator.divide(5, 2)).toBe(2.5);
      expect(calculator.divide(1, 3)).toBeCloseTo(0.3333333333333333);
    });

    it('должен выбрасывать ошибку при делении на ноль', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Деление на ноль невозможно');
      expect(() => calculator.divide(-5, 0)).toThrow('Деление на ноль невозможно');
      expect(() => calculator.divide(0, 0)).toThrow('Деление на ноль невозможно');
    });

    it('должен выбрасывать ошибку при делении на ноль (отрицательный ноль)', () => {
      expect(() => calculator.divide(5, -0)).toThrow('Деление на ноль невозможно');
    });
  });

  describe('calculate', () => {
    it('должен вычислять простое сложение', () => {
      expect(calculator.calculate('2 + 3')).toBe(5);
      expect(calculator.calculate('10+15')).toBe(25);
    });

    it('должен вычислять простое вычитание', () => {
      expect(calculator.calculate('5 - 3')).toBe(2);
      expect(calculator.calculate('10-4')).toBe(6);
    });

    it('должен вычислять простое умножение', () => {
      expect(calculator.calculate('2 * 3')).toBe(6);
      expect(calculator.calculate('5*4')).toBe(20);
      expect(calculator.calculate('2 × 3')).toBe(6);
    });

    it('должен вычислять простое деление', () => {
      expect(calculator.calculate('6 / 3')).toBe(2);
      expect(calculator.calculate('10/2')).toBe(5);
    });

    it('должен вычислять сложные выражения', () => {
      expect(calculator.calculate('2 + 3 * 4')).toBe(14);
      expect(calculator.calculate('(2 + 3) * 4')).toBe(20);
      expect(calculator.calculate('10 - 2 * 3')).toBe(4);
      expect(calculator.calculate('(10 - 2) * 3')).toBe(24);
    });

    it('должен вычислять выражения с десятичными числами', () => {
      expect(calculator.calculate('2.5 + 3.7')).toBeCloseTo(6.2);
      expect(calculator.calculate('5.5 * 2')).toBeCloseTo(11);
      expect(calculator.calculate('10.5 / 2')).toBeCloseTo(5.25);
    });

    it('должен вычислять выражения с отрицательными числами', () => {
      expect(calculator.calculate('-5 + 3')).toBe(-2);
      expect(calculator.calculate('5 + -3')).toBe(2);
      expect(calculator.calculate('-5 * -3')).toBe(15);
    });

    it('должен вычислять выражения с вложенными скобками', () => {
      expect(calculator.calculate('((2 + 3) * 4) - 1')).toBe(19);
      expect(calculator.calculate('(2 + (3 * 4)) - 1')).toBe(13);
    });

    it('должен вычислять выражения без пробелов', () => {
      expect(calculator.calculate('2+3')).toBe(5);
      expect(calculator.calculate('2*3+4')).toBe(10);
      expect(calculator.calculate('10/2+5')).toBe(10);
    });

    it('должен выбрасывать ошибку при делении на ноль', () => {
      expect(() => calculator.calculate('5 / 0')).toThrow('Деление на ноль невозможно');
      expect(() => calculator.calculate('10/0')).toThrow('Деление на ноль невозможно');
      expect(() => calculator.calculate('(5 + 3) / 0')).toThrow('Деление на ноль невозможно');
    });

    it('не должен выбрасывать ошибку при делении на 0.0 или 0.5', () => {
      expect(calculator.calculate('5 / 0.5')).toBe(10);
      expect(calculator.calculate('10/0.1')).toBe(100);
    });

    it('должен выбрасывать ошибку при некорректном выражении', () => {
      expect(() => calculator.calculate('2 + abc')).toThrow('Некорректное выражение');
      expect(() => calculator.calculate('2 + @')).toThrow('Некорректное выражение');
      expect(() => calculator.calculate('hello')).toThrow('Некорректное выражение');
    });

    it('должен выбрасывать ошибку при пустой строке', () => {
      expect(() => calculator.calculate('')).toThrow();
    });

    it('должен обрабатывать выражения с одним числом', () => {
      expect(calculator.calculate('5')).toBe(5);
      expect(calculator.calculate('-5')).toBe(-5);
      expect(calculator.calculate('5.5')).toBe(5.5);
    });

    it('должен вычислять выражения с несколькими операциями', () => {
      expect(calculator.calculate('2 + 3 + 4')).toBe(9);
      expect(calculator.calculate('10 - 2 - 3')).toBe(5);
      expect(calculator.calculate('2 * 3 * 4')).toBe(24);
      expect(calculator.calculate('100 / 2 / 5')).toBe(10);
    });
  });
});
