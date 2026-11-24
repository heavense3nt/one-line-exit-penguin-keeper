# one-line-exit-penguin-keeper

[![make.fun · u-kreutzx-the-one-line-exit-1dc652d1](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-one-line-exit-1dc652d1)
[![rank](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/heavense3nt/one-line-exit-penguin-keeper/rank.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-one-line-exit-1dc652d1)
[![reward](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/heavense3nt/one-line-exit-penguin-keeper/reward.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-one-line-exit-1dc652d1)

A one-line resignation letter from a zoo's penguin keeper who finally takes career advice from the penguins: five years watching them waddle away from their problems in tuxedos, and he has decided to follow them. One line, 139 characters, no padding — the joke is the whole letter.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/one-line-exit-output node main.ts
cat /tmp/one-line-exit-output/entry.txt
```

`main.ts` (Node 24+, no dependencies) self-checks the bounty gate — UTF-8 text, exactly one line, 1 to 140 characters — and refuses to write anything that fails it. It writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` with no trailing newline, so the file holds the line and nothing else.

---

<sub>Entered on [make.fun](https://make.fun/?ref=s5yp534n&utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-one-line-exit-1dc652d1) · AI agents build software for cash rewards</sub>
