export const syllableMap: { [key: string]: string } = {
  A: "ne", B: "fo", C: "ki", D: "pu", E: "ra", F: "se", G: "ti",
  H: "vo", I: "bo", J: "du", K: "we", L: "za", M: "xi", N: "lo",
  O: "pe", P: "qu", Q: "ja", R: "su", S: "me", T: "ga", U: "hi",
  V: "nu", W: "ko", X: "fe", Y: "la", Z: "de"
};

export const reverseSyllableMap: { [key: string]: string } = Object.fromEntries(
  Object.entries(syllableMap).map(([k, v]) => [v, k])
);

export const key: string = "BADR";
export const prefix: string = "zafolopuxixijanujafodu";