
# 📅 get-current-day

[![Daily Version Update](https://img.shields.io/badge/version-daily-blue.svg)](https://www.npmjs.com/package/get-current-day)

A completely useless NPM package that does just one thing: returns today's date.  
It gets a **new version every single day**, because... why not? 🤷‍♂️  

## 🚀 Installation

```sh
npm install get-current-day
```

## 📌 Usage

```js
import today from 'get-current-day';

console.log(today()); // "2025-04-01"
```

That's it. Nothing more, nothing less.

## 🔄 Automatic Daily Updates

Every day, a GitHub Action publishes a new version of the package to match the current date. If you want to stay up-to-date with **the latest version of today**, just keep updating the package daily:

```sh
npm update get-current-day
```

The package version number is the publication date (`YYYY.MM.DD`). This lets you test a prior release or pin down the dependency to a certain date:

```sh
npm install --save-exact get-current-day@2025.04.01
```

**Tip**: `npm install` uses the `^` version modifier by default, which may jeopardize the reproducibility of your builds. To ensure you install the exact version you require, use the `--save-exact` command line option.

## 🎉 Why does this exist?

- Because we can.
- Because daily package updates are fun.
- Because **"what even is time?"**  

But more seriously:

- **Think Before You Code**: Not every idea, no matter how clever, is worth implementing.
- **Sustainability Matters**: Every line of code has an environmental impact. As developers, we must be mindful of our carbon footprint.
- **Choose Your Libraries Wisely**: Not all libraries are created equal. Some may seem useful but can introduce unnecessary complexity or even be outright harmful. 

## 🤝 Contributing

Feel free to open an issue or a pull request... but honestly, there's nothing to improve here. 😆  

## 📝 License

MIT License. Use it however you like, but don't expect it to be useful.  

## 🧑‍💻 Authors

- [Anthony RIMET](https://github.com/arimet)
- [Julien Mattuissi](https://github.com/JulienMattiussi)
