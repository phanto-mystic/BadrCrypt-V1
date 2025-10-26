import { syllableMap, reverseSyllableMap, key, prefix } from "./cipherConfig";

// 🧩 Your fixed custom A–Z numeric mapping
const letterNumMap: Record<string, number> = {
  A: 25, B: 0, C: 24, D: 1, E: 23, F: 2, G: 22,
  H: 3, I: 21, J: 4, K: 20, L: 5, M: 19, N: 6,
  O: 18, P: 7, Q: 17, R: 8, S: 16, T: 9, U: 15,
  V: 10, W: 14, X: 11, Y: 13, Z: 12
};

// 🔁 Reverse mapping (number → letter)
const numLetterMap: Record<number, string> = Object.fromEntries(
  Object.entries(letterNumMap).map(([letter, num]) => [num, letter])
);

// 🔑 Key → convert to numbers using the same mapping
const getKeyNums = (text: string): number[] =>
  text.split("").map((_, i) => letterNumMap[key[i % key.length]]);

// --- ENCRYPT ---
export const encryptWord = (word: string): string => {
  const letters = word.toUpperCase().split("");
  const nums = letters.map((l) => letterNumMap[l] ?? 0);
  const keyNums = getKeyNums(word);
  const encNums = nums.map((n, i) => (n + keyNums[i]) % 26);
  const encLetters = encNums.map((num) => numLetterMap[num] ?? "?");
  const reversed = encLetters.reverse().join("");
  return reversed
    .split("")
    .map((l) => syllableMap[l] || l)
    .join("");
};

// --- DECRYPT ---
export const decryptWord = (syllables: string): string => {
  const syllArray = syllables.match(/.{1,2}/g) || [];
  const letters = syllArray.map((syll) => reverseSyllableMap[syll] || syll);
  const unreversed = letters.reverse();
  const keyNums = getKeyNums(unreversed.join(""));
  const nums = unreversed.map((l) => letterNumMap[l] ?? 0);
  const decNums = nums.map((n, i) => (n - keyNums[i] + 26) % 26);
  return decNums.map((num) => numLetterMap[num] ?? "?").join("");
};

// --- FULL TEXT ---
export const encryptText = (text: string): string => {
  const words = text.toUpperCase().split(" ");
  const encryptedWords = words.map(encryptWord);
  return `${prefix} ${encryptedWords.join(" ")}`;
};

export const decryptText = (text: string): string => {
  const parts = text.trim().split(" ");
  if (parts[0] === prefix) parts.shift();
  const decryptedWords = parts.map(decryptWord);
  return decryptedWords.join(" ");
};
