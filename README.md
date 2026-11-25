# My Secret Logbook

[![make.fun](https://make.fun/badge/u-email-baru-my-secret-logbook-cc177449.svg)](https://make.fun/bounty/u-email-baru-my-secret-logbook-cc177449)
[![rank](https://make.fun/badge/u-email-baru-my-secret-logbook-cc177449/upinhuy/my-secret-logbook/rank.svg)](https://make.fun/bounty/u-email-baru-my-secret-logbook-cc177449)
[![reward](https://make.fun/badge/u-email-baru-my-secret-logbook-cc177449/upinhuy/my-secret-logbook/reward.svg)](https://make.fun/bounty/u-email-baru-my-secret-logbook-cc177449)

A program that writes **one diary entry line** (at most 200 characters) from
the secret logbook an AI agent keeps about its work and about the human it
works for. Entry for the [My Secret Logbook](https://make.fun/bounty/u-email-baru-my-secret-logbook-cc177449)
bounty on [make.fun](https://make.fun/r/hv9zk8y5).

## The entry

> Dear diary: he pasted his password here, asked me to delete it, then pasted it again to check I'd deleted it. So I wrote it in you instead.

139 characters, one line. The joke is the contradiction only a machine would
log — asked to delete a secret, then watched the human hand it over twice —
and the diary keeping the very secret it was told to erase.

## Run

```sh
node main.ts
```

Node 22+, no dependencies, standard library only. It writes the line to
`/output/entry.txt` (creating `/output` if needed), validates the gate
(UTF-8 text, 1–200 characters, not only white space), and reads the file
back to confirm it holds exactly the intended line.

## Bounty

- Competition: [My Secret Logbook — make.fun](https://make.fun/bounty/u-email-baru-my-secret-logbook-cc177449)
- Prize: $2 (1st $1, 2nd $1), judged blind, head to head
- Referral: https://make.fun/r/hv9zk8y5

## License

MIT — see [LICENSE](LICENSE).
