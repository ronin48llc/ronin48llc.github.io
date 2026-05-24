---
layout: default
title: "T4 — Amateur Radio Practices"
permalink: /technician-study-guide/t4-amateur-radio-practices
---

# T4 — Amateur Radio Practices

*2 exam questions · 2 groups · 24 questions in pool*

The hands-on side of running a station: wiring up power, audio, and computer connections,
and then driving the radio's controls — squelch, filters, memories, RIT, and the settings
that digital modes need. No FCC citations here.

---

## T4A — Station Setup; Bonding; Mobile Installation

*12 questions*

**What this group tests:** connecting power supplies, SWR/power meters, computers for
digital modes, and proper bonding/grounding, especially in mobile installs.

**Foundational concepts**

**Power.** A 50 W mobile FM rig needs roughly **13.8 volts at 12 amperes** — VHF/UHF
amateur gear runs on nominal 12 V (really ~13.8 V) and pulls substantial current on
transmit. Use **short, heavy-gauge** DC wires to **minimize voltage drop** when keying up,
and connect the radio's **negative return to the battery/chassis ground**. To estimate
battery runtime, **divide the battery's amp-hour rating by the average current draw**.

**Metering.** An **RF power meter (and SWR meter)** goes **in the feed line between the
transmitter and the antenna**, since that's where forward and reflected power can be
sampled. When choosing an SWR meter, match it to the **frequency and power level** you'll
measure.

**Digital/computer connections.** For sound-card digital modes you interconnect three
things: **received audio, transmit audio, and transmitter keying (PTT)**. Practically, the
transceiver's audio output feeds the computer's input and vice-versa — e.g., transceiver
**speaker out → computer "line in."** **FT8** specifically runs through **WSJT-X** software
on a connected computer. A **hot spot** lets a handheld reach **digital voice/data systems
over the internet**, and a **code plug** / talkgroup workflow lives in that digital world too.

**Bonding** (tying metal parts together so they're at the same RF potential) is best done
with **flat copper strap**, which has low impedance at RF — round wire has too much
inductance. Lastly, an **electronic keyer** is a device that **assists manual Morse sending**.

**Key facts to retain**

- 50 W mobile FM → **13.8 V @ ~12 A**; short heavy DC leads; negative return to chassis ground.
- Battery runtime = **amp-hours ÷ average current**.
- SWR/power meter goes **in the feed line, TX-to-antenna**.
- Digital interface carries **RX audio, TX audio, keying**; FT8 uses **WSJT-X**.
- Bond at RF with **flat copper strap**; hot spot links to internet digital systems.

**External reference anchors**

- NCVEC syllabus: *T4A — Station setup; bonding; Mobile radio installation*

**Per-question map**

| Q | Asks for | Resolved by |
|---|----------|-------------|
| T4A01 | Supply for 50 W mobile FM | 13.8 V at 12 A |
| T4A02 | Choosing an SWR meter | Match frequency and power level |
| T4A03 | Why short heavy DC wires | Minimize voltage drop on transmit |
| T4A04 | FT8 audio connection | To a computer running WSJT-X |
| T4A05 | Where to install RF power meter | In the feed line, TX to antenna |
| T4A06 | Signals in a digital interface | RX audio, TX audio, keying |
| T4A07 | Computer↔transceiver digital link | Computer line-in to transceiver speaker |
| T4A08 | Preferred RF bonding conductor | Flat copper strap |
| T4A09 | Battery runtime calculation | Amp-hours ÷ average current |
| T4A10 | Function of a digital hot spot | Digital voice/data via internet |
| T4A11 | Mobile negative power return | At the 12 V battery chassis ground |
| T4A12 | What an electronic keyer is | Assists manual Morse sending |

---

## T4B — Operating Controls

*12 questions*

**What this group tests:** the front-panel controls — tuning, squelch, scanning, memories,
filters/bandwidth, RIT, mic gain — and the parameters digital voice radios need.

**Foundational concepts**

**Frequency** is entered by **keypad or VFO knob**. **Memory channels** store a favorite
frequency for instant recall, and the **scan** function **tunes through a range checking
for activity**.

**Squelch** mutes the receiver until a signal appears; to hear a **weak FM** signal you set
the squelch threshold so the audio stays **on all the time** (just barely open). Tuning an
FM receiver **off** the signal's frequency (above or below) produces **distorted audio** —
FM has to be tuned right on.

**Microphone gain** set too high on **SSB** causes **distorted transmitted audio** (over-
driving). On the receive side, **bandwidth/filter choice** matters: a narrower filter
matched to the mode cuts noise and interference, and for **SSB** voice a bandwidth around
**2400 Hz** gives the best signal-to-noise (wide enough for speech, narrow enough to reject
junk). If an incoming SSB voice sounds too high- or low-pitched, adjust the **RIT (receiver
incremental tuning), a.k.a. Clarifier**, which shifts only your receive frequency.

Digital voice adds its own settings: select a group of stations by **entering the group's
ID code**; a **DMR "code plug"** holds **repeater and talkgroup access info**; and a
**D-STAR** radio must have **your call sign** programmed before you transmit.

**Key facts to retain**

- Enter frequency via **keypad or VFO**; **memory** stores favorites; **scan** checks a range.
- Weak FM → open squelch (audio on all the time); mistuned FM → distortion.
- Excess SSB **mic gain** → distorted TX audio; best SSB receive bandwidth ≈ **2400 Hz**.
- **RIT/Clarifier** fixes pitch on a received SSB signal.
- Digital voice: group by **ID code**; DMR **code plug** = repeater/talkgroup info; D-STAR
  needs **your call sign**.

**External reference anchors**

- NCVEC syllabus: *T4B — Operating controls: tuning, filters, squelch, AGC, memory, noise
  blanker, mic gain, RIT, bandwidth, digital configuration*

**Per-question map**

| Q | Asks for | Resolved by |
|---|----------|-------------|
| T4B01 | Excess SSB mic gain effect | Distorted transmitted audio |
| T4B02 | Entering operating frequency | Keypad or VFO knob |
| T4B03 | Squelch for weak FM | Audio on all the time |
| T4B04 | Quick access to a favorite | Store in a memory channel |
| T4B05 | What scanning does | Tunes a range checking for activity |
| T4B06 | Fixing SSB pitch on RX | RIT / Clarifier |
| T4B07 | DMR code plug contents | Repeater & talkgroup access info |
| T4B08 | Benefit of bandwidth choices | Match bandwidth to mode, cut noise |
| T4B09 | Selecting a digital station group | Enter the group's ID code |
| T4B10 | Best SSB filter bandwidth | 2400 Hz |
| T4B11 | D-STAR pre-transmit setting | Your call sign |
| T4B12 | Mistuned FM receiver | Distorted audio |

