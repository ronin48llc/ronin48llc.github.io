---
layout: default
title: "T7 — Practical Circuits"
permalink: /technician-study-guide/t7-practical-circuits
---

# T7 — Practical Circuits

*4 exam questions · 4 groups · 43 questions in pool*

Equipment at the block-diagram level and the everyday troubleshooting that keeps a station
on the air: what receivers, transmitters, and amplifiers do; diagnosing interference and
RF feedback; measuring SWR and caring for feed lines; and using basic test meters and
soldering properly. (T7D has 10 questions — T7D05 was withdrawn in the errata.) No FCC
citations.

---

## T7A — Station Equipment; Basic Radio Concepts

*11 questions*

**What this group tests:** the building blocks of a radio and the vocabulary for what each
does.

**Foundational concepts**

A **transceiver** is simply a **receiver and transmitter combined** in one box. Two key
receiver qualities: **sensitivity** is the ability to **detect a weak signal**, and
**selectivity** is the ability to **discriminate between signals** close in frequency.

Inside, a few named circuits do specific jobs. A **mixer converts a signal from one
frequency to another**. An **oscillator generates a signal at a specific frequency**.
**Modulation** is the act of **combining speech (or data) with an RF carrier**. A
**transverter** shifts a transceiver's RF input/output to **another band**.

For boosting signals: an **RF power amplifier increases transmitted output power** and sits
after the transceiver, while an **RF preamplifier** boosts weak received signals and is
installed **between the antenna and the receiver**. A VHF amplifier's **SSB/CW–FM switch**
configures it for **proper operation in the selected mode**. Finally, the **PTT** (push-to-
talk) input **switches the radio from receive to transmit when grounded**.

**Key facts to retain**

- Transceiver = RX + TX. **Sensitivity** = detect weak; **selectivity** = separate signals.
- **Mixer** changes frequency; **oscillator** generates a frequency; **modulation** = speech
  onto a carrier; **transverter** = move to another band.
- Power amp boosts TX output; **preamp goes between antenna and receiver**; **PTT** keys TX
  when grounded.

**External reference anchors**

- NCVEC syllabus: *T7A — Station equipment; basic radio circuit concepts (sensitivity,
  selectivity, mixers, oscillators, PTT, modulation)*

**Per-question map**

| Q | Asks for | Resolved by |
|---|----------|-------------|
| T7A01 | Detect presence of a signal | Sensitivity |
| T7A02 | What a transceiver is | Combines RX and TX |
| T7A03 | Convert one frequency to another | Mixer |
| T7A04 | Discriminate between signals | Selectivity |
| T7A05 | Generates a specific frequency | Oscillator |
| T7A06 | Converts RF to another band | Transverter |
| T7A07 | PTT input function | RX→TX when grounded |
| T7A08 | Speech + RF carrier | Modulation |
| T7A09 | VHF amp SSB/CW-FM switch | Sets amp for the mode |
| T7A10 | Increases transmit power | RF power amplifier |
| T7A11 | Where a preamp goes | Between antenna and receiver |

---

## T7B — Interference and RF Feedback

*11 questions*

**What this group tests:** the symptoms, causes, and cures of overload, distortion, and
interference between your station and consumer electronics.

**Foundational concepts**

Most consumer-electronics interference is **fundamental overload**: a nearby strong amateur
signal swamps a receiver that **can't reject signals outside its own band**. The cure is to
**filter at the affected receiver's antenna input** (a band-reject/high-pass filter there),
not at your transmitter — the problem is the victim's front end. A **band-reject filter**
likewise tames a VHF transceiver overloaded by a strong commercial FM station. RFI has many
possible causes — "all of these."

A few specific fixes: RF current on a microphone cable shield causing distortion is cured
with a **ferrite choke**. The **first step** for cable-TV interference is to make sure all
**coax connectors are properly installed**. If a neighbor reports interference, your
**first responsibility is to verify your own station is operating properly** and isn't
interfering with your own TV on the same channel. If something in the **neighbor's** home is
interfering with *you*, there are several reasonable steps — "all of these."

**RF feedback** is RF getting back into your transmitter's audio stages; its hallmark
symptom is **garbled, distorted, or unintelligible** transmitted voice. Over-deviation on
an FM handheld (talking too loud/close) is cured by **talking farther from the mic**, and a
distorted repeater signal can have several causes — "all of these."

**Key facts to retain**

- **Fundamental overload** = victim receiver can't reject your strong signal → filter at
  the **victim's** antenna input.
- **Ferrite choke** cures RF on a mic cable shield; check **coax connectors** first for CATV
  interference.
- Neighbor complains → verify **your** station is clean first.
- **RF feedback** → garbled/distorted transmitted audio; over-deviation → back off the mic.

**External reference anchors**

- NCVEC syllabus: *T7B — Symptoms, causes, cures of transmitter/receiver problems: overload,
  distortion, interference, RF feedback*

**Per-question map**

| Q | Asks for | Resolved by |
|---|----------|-------------|
| T7B01 | Over-deviating handheld | Talk farther from the mic |
| T7B02 | Broadcast radio hears amateur | Can't reject strong out-of-band signals |
| T7B03 | Causes of RFI | All these choices |
| T7B04 | RF on mic cable shield | Ferrite choke |
| T7B05 | Cure fundamental overload | Filter at victim's antenna input |
| T7B06 | Neighbor reports interference | Verify your own station is proper |
| T7B07 | Overload by commercial FM | Band-reject filter |
| T7B08 | Neighbor's home interferes with you | All these choices |
| T7B09 | First step, CATV interference | Check coax connectors |
| T7B10 | Distorted repeater audio | All these choices |
| T7B11 | RF feedback symptom | Garbled/distorted voice |

---

## T7C — Antenna and Feed Line Measurements; SWR; Coax; Dummy Loads

*11 questions*

**What this group tests:** measuring SWR and why it matters, feed-line losses and failures,
coax characteristics, and the dummy load.

**Foundational concepts**

**SWR (standing wave ratio)** measures how well the antenna's impedance matches the feed
line. A **1:1** reading is a **perfect match**; a reading like **4:1** indicates an
**impedance mismatch**. SWR is read with an **SWR meter** or a **directional wattmeter**.
High SWR matters because most **solid-state transmitters reduce power as SWR rises** to
**protect the output transistors**. Whatever power is lost in a feed line **turns into
heat**. To find whether an antenna is **resonant** at your frequency, use an **antenna
analyzer**.

A **dummy load** is a **non-inductive resistor on a heat sink** that lets you test a
transmitter **without radiating a signal over the air**. Coax care: **moisture** is a prime
cause of cable failure, so the jacket must resist **UV** (UV degrades the jacket and lets
water in). **Air-core** coax has lower loss but **requires special techniques to keep
moisture out** compared with foam/solid dielectric.

**Key facts to retain**

- SWR **1:1** = perfect match; **4:1** = mismatch. Read with SWR meter / directional wattmeter.
- High SWR → solid-state rigs fold back power to **protect output transistors**.
- Feed-line loss becomes **heat**; **antenna analyzer** checks resonance.
- **Dummy load** = non-inductive resistor + heat sink; lets you test without transmitting.
- **Moisture** kills coax; jacket must resist **UV**.

**External reference anchors**

- NCVEC syllabus: *T7C — Antenna/transmission-line measurements; SWR; coax characteristics;
  dummy loads*

**Per-question map**

| Q | Asks for | Resolved by |
|---|----------|-------------|
| T7C01 | Purpose of a dummy load | Test without transmitting on air |
| T7C02 | Check antenna resonance | Antenna analyzer |
| T7C03 | What a dummy load is | Non-inductive resistor on heat sink |
| T7C04 | Perfect-match SWR | 1:1 |
| T7C05 | Why rigs reduce power at high SWR | Protect output transistors |
| T7C06 | SWR 4:1 means | Impedance mismatch |
| T7C07 | Fate of feed-line loss | Converted to heat |
| T7C08 | Instrument to determine SWR | Directional wattmeter |
| T7C09 | Cause of coax failure | Moisture contamination |
| T7C10 | Why UV-resistant jacket | UV lets water enter |
| T7C11 | Air-core coax disadvantage | Needs moisture-prevention techniques |

---

## T7D — Test Instruments; Soldering

*10 questions*

**What this group tests:** how to connect and use a voltmeter, ammeter, and ohmmeter
safely, and what good vs. bad soldering looks like.

**Foundational concepts**

How a meter connects depends on what it reads. A **voltmeter** measures **potential** and
connects **in parallel** (across) the component. An **ammeter** measures **current** and
connects **in series** (in line) so the current flows through it. A **multimeter** measures
**voltage and resistance** (and current). The dangerous mistake: trying to **measure
voltage while set to the resistance (ohms) range** can **damage** the meter. When measuring
**in-circuit resistance**, always make sure the **circuit is unpowered** first. A clue about
component behavior: an ohmmeter across a large **discharged capacitor** shows **resistance
increasing over time** as the cap charges from the meter.

For **soldering**: never use **acid-core solder** on electronics (it's for plumbing and
corrodes connections) — use rosin-core. A **cold solder joint** (joint that moved or wasn't
hot enough) has a **rough, lumpy, dull** appearance instead of a smooth shiny one.

**Key facts to retain**

- **Voltmeter → parallel**; **ammeter → series**. Multimeter does voltage + resistance.
- Measuring **volts on the ohms setting** damages the meter; de-power circuits before
  measuring resistance.
- **Acid-core solder** is wrong for electronics; **cold joint** looks rough/lumpy.

**External reference anchors**

- NCVEC syllabus: *T7D — Using basic test instruments (voltmeter, ammeter, ohmmeter);
  Soldering*

**Per-question map**

| Q | Asks for | Resolved by |
|---|----------|-------------|
| T7D01 | Measure electric potential | A voltmeter |
| T7D02 | How to connect a voltmeter | In parallel |
| T7D03 | Multimeter to measure current | In series |
| T7D04 | Measure electric current | An ammeter |
| T7D06 | Can damage a multimeter | Volts on the resistance setting |
| T7D07 | Multimeter measurements | Voltage and resistance |
| T7D08 | Solder not for electronics | Acid-core solder |
| T7D09 | Cold solder joint look | Rough or lumpy surface |
| T7D10 | Ohmmeter on discharged cap | Increasing resistance with time |
| T7D11 | In-circuit resistance precaution | Ensure circuit is unpowered |

