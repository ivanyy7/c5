/**
 * Класс Calculator для выполнения математических операций
 */
export class Calculator {
  /**
   * Сложение двух чисел
   * @param a Первое число
   * @param b Второе число
   * @returns Результат сложения
   */
  add(a: number, b: number): number {
    return a + b;
  }

  /**
   * Вычитание двух чисел
   * @param a Уменьшаемое
   * @param b Вычитаемое
   * @returns Результат вычитания
   */
  subtract(a: number, b: number): number {
    return a - b;
  }

  /**
   * Умножение двух чисел
   * @param a Первый множитель
   * @param b Второй множитель
   * @returns Результат умножения
   */
  multiply(a: number, b: number): number {
    return a * b;
  }

  /**
   * Деление двух чисел
   * @param a Делимое
   * @param b Делитель
   * @returns Результат деления
   * @throws {Error} Выбрасывает ошибку при делении на ноль
   */
  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Деление на ноль невозможно');
    }
    return a / b;
  }

  /**
   * Вычисление математического выражения
   * @param expression Строка с математическим выражением
   * @returns Результат вычисления
   * @throws {Error} Выбрасывает ошибку при некорректном выражении или делении на ноль
   */
  calculate(expression: string): number {
    // Удаляем пробелы и заменяем × на *
    const cleanedExpression = expression.replace(/\s/g, '').replace(/×/g, '*');
    
    // Проверяем на деление на ноль (но не на 0.0, 0.5 и т.д.)
    if (/\/0(?!\.)/.test(cleanedExpression)) {
      throw new Error('Деление на ноль невозможно');
    }

    // Проверяем корректность выражения
    if (!/^[0-9+\-*/().\s]+$/.test(cleanedExpression)) {
      throw new Error('Некорректное выражение');
    }

    try {
      // Используем Function для безопасного вычисления
      const result = Function('"use strict"; return (' + cleanedExpression + ')')();
      
      if (isNaN(result) || !isFinite(result)) {
        throw new Error('Результат не является числом');
      }
      
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Ошибка при вычислении выражения');
    }
  }
}
