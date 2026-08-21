import util from "./util";
import "./css/main.css";

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
