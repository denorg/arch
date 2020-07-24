# 🤖 Arch

This module is used to determine if the user is on a 32-bit vs. 64-bit operating system to offer the right app installer

Use this package to get the actual operating system CPU architecture.

[![Deno CI](https://github.com/denorg/arch/workflows/Deno%20CI/badge.svg)](https://github.com/denorg/arch/actions)
[![GitHub](https://img.shields.io/github/license/denorg/arch)](https://github.com/denorg/arch/blob/master/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/denorg/arch)](https://github.com/denorg/arch/graphs/contributors)
[![Deno Starter](https://img.shields.io/badge/deno-starter-brightgreen)](https://denorg.github.io/starter/)
[![Made by Denorg](https://img.shields.io/badge/made%20by-denorg-0082fb)](https://github.com/denorg)
[![TypeScript](https://img.shields.io/badge/types-TypeScript-blue)](https://github.com/denorg/arch)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## ⭐ Getting started

Import the default function and use it:

```ts
import arch from "https://raw.githubusercontent.com/denorg/arch/master/mod.ts";

const result = await arch();
```

### CLI with [DPX](https://github.com/denorg/dpx)

After [installing DPX](https://github.com/denorg/dpx), you can directly use the CLI using the `dpx` command:

```bash
dpx --allow-read arch <arguments>
```

### CLI

Alternatively, you can use it directly from the CLI by using `deno run`:

```bash
deno run --allow-read https://raw.githubusercontent.com/denorg/arch/master/cli.ts <arguments>
```

You can also install it globally using the following:

```bash
deno install --allow-read -n arch https://raw.githubusercontent.com/denorg/arch/master/cli.ts
```

Then, the package is available to run:

```bash
arch <arguments>
```

### Configuration

Required permissions:

1. `--allow-read`

## 👩‍💻 Development

Run tests:

```bash
deno test --allow-read
```

## ⭐ Related Work

- [feross/arch](https://github.com/feross/arch) is the Node.js project serving as inspiration for this one

## 📄 License

MIT © [Denorg](https://den.org.in)

<p align="center">
  <a href="https://den.org.in">
    <img width="100" alt="" src="https://raw.githubusercontent.com/denorg/denorg/master/logo.svg">
  </a>
</p>
<p align="center">
  <sub>A project by <a href="https://den.org.in">Denorg</a>, the world's first Deno-focused community<br>organization and consulting company. <a href="https://den.org.in">Work with us →</a></sub>
</p>
