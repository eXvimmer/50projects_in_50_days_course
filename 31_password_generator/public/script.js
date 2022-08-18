const random = {
  lower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  },
  upper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  },
  symbol() {
    const symbols = "!@#$%^&*()-+{}[]/,.=";
    return symbols[Math.floor(Math.random() * symbols.length)];
  },
  number() {
    return Math.floor(Math.random() * 10);
  },
};
