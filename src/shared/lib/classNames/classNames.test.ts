import { classNames } from './classNames';

describe('classNames', () => {
  test('with first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'someClass class1 class2 hovered click';
    expect(
      classNames('someClass', { hovered: true, click: true }, [
        'class1',
        'class2',
      ]),
    ).toBe(expected);
  });

  test('with mods true and false', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(
      classNames('someClass', { hovered: true, click: false }, [
        'class1',
        'class2',
      ]),
    ).toBe(expected);
  });

  test('with mods true and undefined', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(
      classNames('someClass', { hovered: true, click: undefined }, [
        'class1',
        'class2',
      ]),
    ).toBe(expected);
  });
});
