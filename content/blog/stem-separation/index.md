---
title: "Stem Separation"
slug: "stem-separation"
---

So, you'd like to "separate the stems" of a song -- you want to take the mixed version you've got in an .mp3 or .wav or .aiff or whatever and _separate_ it into it's constitent tracks: vocals, drums, bass, and ... _other_.

**_How can you achieve this magic?_**

SHORT ANSWER: use this: [Kajise's Demucs_v4-FT_4s](https://huggingface.co/spaces/Kajise/Demucs_v4-FT_4s)

LONGER ANSWER: I'll give you a bit of context because it will help you understand how to get the best results.

The best model right now is called `demucs`. It has several modes, but generally separates into four stems entitled vocals, drums, bass, and other.

When using `demucs`, there are many different pre-trained models that you can choose from. The best ones are these two:

- `htdemucs`: first version of Hybrid Transformer Demucs. Trained on MusDB + 800 songs. Default model.

- `htdemucs_ft`: fine-tuned version of `htdemucs`, separation will take 4 times more time but might be a bit better. Same training set as `htdemucs`.

That "fine-tuned" version has given me the best results. Especially on bass -- other pre-trained models are much much worse on bass. ... but the "fine-tuned" version is _**slow**_.

OK, so -- **_the software_** -- from easy/default to hard/customizable:

1. [sparanoid's demucs-gpu](https://huggingface.co/spaces/sparanoid/demucs-gpu) -- 4-stem separation in the cloud AND running on a GPU so it's faster. This one isn't the best model... but, again, it's fast. Sometimes, it's not available (likely because it costs the creator money to run it on a GPU in the cloud).

2. [Kajise's Demucs_v4-FT_4s](https://huggingface.co/spaces/Kajise/Demucs_v4-FT_4s) -- the one I've used most often... in the cloud, best model, slow.

3. [Kevin676's Demucs_v4](https://huggingface.co/spaces/Kevin676/Demucs_v4) OR [RockmanYang's Demucs_v4_2s_HT](https://huggingface.co/spaces/RockmanYang/Demucs_v4_2s_HT) -- KARAOKE MODE: if you just want to extract two stems: vocals + instrumental.

4. [Ultimate Vocal Remover](https://github.com/Anjok07/ultimatevocalremovergui) -- this one runs on your own computer and is fully customizable. If you have a bunch of songs to do, this one is the easiest because you can build a queue and let it run overnight. If you have a video card, you might even be able to get it to run on that for faster results. I think you have to install the models before you can proceed. If you end up wanting to do this one, let's get on a Zoom. It's not that hard, but I can't remember exactly what I did to get mine running (and now mine is configured, so it's hard to tell).

If you have questions, leave a comment or send me a message. Please include a description of the input you've got and the output you're hoping for.