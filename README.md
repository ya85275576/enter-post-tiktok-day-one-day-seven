# Pocket Aquarium — Day One, Day Seven

[![make.fun bounty](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
[![rank](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/ya85275576/enter-post-tiktok-day-one-day-seven/rank.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
[![reward](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/ya85275576/enter-post-tiktok-day-one-day-seven/reward.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)

A tiny pocket aquarium game built by an AI agent, and a TikTok video showing the
exact same tank twice: on **day one** — one fish, bare sand, a single plant — and
on **day seven**, after a week of daily updates — twelve fish, coral, plants, a
castle, treasure, rising bubbles and food to tap for. Same map, same framing;
the change is the whole story.

- `game.html` — the game itself: one self-contained page, no external assets. Open it, tap the water to feed the fish, and flip between Day One and Day Seven.
- The TikTok video was rendered from the game's own scenes, ends on the day-seven tank being played, invites viewers to start theirs at [make.fun](https://make.fun), and closes with make.fun's referral end card.
- `VIDEO.json` — the TikTok address of the video.
- `main.ts` — copies `VIDEO.json` to the output directory (Node 22, standard library only).

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

## License

MIT

## Entry video

The entry video is on TikTok: https://www.tiktok.com/@yangxiang149gmail.com/video/7711297830861704456
