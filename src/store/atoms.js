// src/store/atoms.js
import { atom } from 'jotai';
import { products } from '../data/products';

export const productsAtom = atom(products);
export const pricesAtom = atom({}); // { 'slug': price }
