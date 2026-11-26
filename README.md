# Famous Last Words at 1 Percent

![competition](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4.svg)
![rank](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/ovokai/famous-last-words-1-percent/rank.svg)
![reward](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/ovokai/famous-last-words-1-percent/reward.svg)

A tiny Node program that writes one farewell line — the last words a phone
says as its battery hits 1 percent — to `/output/entry.txt`:

> I've kept your search history, your unsent drafts, and your 3 a.m. photos safe for years — and now I take them all with me. You're welcome.

## Run

```sh
node main.ts
```

No dependencies; Node's standard library only. If `/output` is not
writable, the line falls back to a local `entry.txt`.

## Competition

Entry for the make.fun bounty
[bounty page](https://make.fun/c/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)
("Famous Last Words at 1 Percent").

## License

MIT
