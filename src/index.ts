import util from "./util";

const cart: any[] = [];

function addToCart(item: string) {
  cart.push(item);
  util.log("added new item: " + item);
}

function removeFromCart(idx: number) {
  cart.splice(idx, 1);
  util.log("removed: " + idx);
}

addToCart("Waterproof Boots");
