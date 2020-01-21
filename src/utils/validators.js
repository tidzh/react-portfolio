export const required = value => (value ? undefined : "Это поле обязательное");

export const maxLength = max => value =>
  value && value.length > max
    ? `Ваше сообщение должно быть меньше или больше ${max} символов`
    : undefined;

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Неверный адрес электронной почты"
    : undefined;
