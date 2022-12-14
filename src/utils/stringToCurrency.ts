export const stringToCurrenty = (value: string): string => {
  let v = value.replace(/\D/g, "");
  v = (+v / 100).toFixed(2) + "";
  v = v.replace(".", ",");
  v = v.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  v = v.replace(",", ".");
  return v;
};
