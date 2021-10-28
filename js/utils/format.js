export const formatMoney = (money) => {
  return new Intl.NumberFormat("ru-RU").format(money);
};
