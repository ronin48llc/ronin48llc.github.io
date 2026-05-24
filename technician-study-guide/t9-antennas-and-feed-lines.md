---
layout: default
title: "T9 — Antennas & Feed Lines"
permalink: /technician-study-guide/t9-antennas-and-feed-lines
---

# T9 — Antennas and Feed Lines

*2 exam questions · 2 groups · 24 questions in pool*

Getting the signal into and out of the radio: antenna types, polarization, gain, and length;
then the feed lines that connect them — coax types, loss, connectors, SWR, and tuners.
No FCC citations.

---

## T9A — Antennas: Polarization, Gain, Beams, Loading, Length

*12 questions*

**What this group tests:** the common antenna types and the relationships between length,
frequency, polarization, and gain.

**Foundational concepts**

**Antenna gain** is the **increase in signal strength in a given direction compared to a
reference antenna** — gain isn't free power, it's *focusing*. A **beam antenna**
concentrates energy in one direction, and the highest-gain common type is the **Yagi**. A
**5/8-wave whip** for VHF/UHF mobile has **more gain than a 1/4-wave** whip.

**Polarization** depends on orientation: a **dipole parallel to the ground is horizontally
polarized**. A half-wave **dipole radiates strongest broadside** — out the sides,
perpendicular to the wire.

**Length and frequency** are inversely linked (the same idea as λ = 300/f from T3B):
**shortening** an antenna **raises** its resonant frequency. For VHF you can estimate
physical length — a **quarter-wave vertical for 146 MHz is about 19 inches**, and a
**half-wave 6 m dipole is about 112 inches**. When an antenna must be shorter than
resonant, **loading** (inserting **inductors** in the radiating elements) **electrically
lengthens** it back to resonance.

A couple of practical disadvantages: the stubby "rubber duck" on a handheld is **low
efficiency** versus a full quarter-wave, and using a handheld **inside a vehicle** loses
signal because the **metal body shields** the antenna.

**Key facts to retain**

- **Gain** = stronger signal in one direction vs. a reference; **Yagi** = highest common
  gain; **5/8-wave whip** beats 1/4-wave mobile.
- Horizontal dipole = horizontal polarization; dipole radiates **broadside**.
- **Shorter antenna → higher** resonant frequency; **loading** uses inductors to
  electrically lengthen.
- 1/4-wave vertical @146 MHz ≈ **19 in**; 1/2-wave 6 m dipole ≈ **112 in**.
- Rubber duck = low efficiency; handheld in a car loses signal to **shielding**.

**External reference anchors**

- NCVEC syllabus: *T9A — Antennas: polarization, gain, beam types, loading, portable/mobile
  antennas, resonant length vs. frequency, dipole pattern*

**Per-question map**

| Q | Asks for | Resolved by |
|---|----------|-------------|
| T9A01 | What a beam antenna is | Concentrates signal one direction |
| T9A02 | A type of antenna loading | Inductors in radiating elements |
| T9A03 | Horizontal dipole polarization | Horizontally polarized |
| T9A04 | Rubber-duck disadvantage | Low efficiency |
| T9A05 | Raising dipole resonant freq | Shortening it |
| T9A06 | Greatest gain | Yagi |
| T9A07 | Handheld inside vehicle | Vehicle shielding reduces signal |
| T9A08 | 1/4-wave vertical for 146 MHz | ~19 inches |
| T9A09 | 1/2-wave 6 m dipole length | ~112 inches |
| T9A10 | Dipole strongest direction | Broadside |
| T9A11 | What antenna gain is | Increase vs. a reference antenna |
| T9A12 | 5/8-wave whip advantage | More gain than 1/4-wave |

---

## T9B — Feed Lines; SWR Concepts; Tuners; Connectors

*12 questions*

**What this group tests:** coax characteristics and loss, RF connectors, SWR, and the job
of an antenna tuner.

**Foundational concepts**

**Coax** is the most common amateur feed line because it's **easy to use with few special
installation considerations**, and the standard impedance is **50 ohms**. **Loss** in coax
**increases with frequency**, and there are several loss sources at once — "all of these."
Cable choice trades size for loss: **RG-213 has less loss than RG-58** at a given frequency,
and **air-insulated hardline** has the **lowest loss** at VHF/UHF.

**Connectors** by frequency: **PL-259 (UHF)** connectors are common at **HF and VHF**, while
**Type N** is preferred **above 400 MHz** (it's weatherproof and lower-loss at UHF).

**SWR** describes **how well the load (antenna) is matched to the line**. **Low SWR** gives
**reduced signal loss** (the benefit). **Erratic SWR** changes usually point to a **loose
connection** in the antenna or feed line. An **antenna tuner (coupler)** doesn't change the
antenna — its job is to **match the antenna-system impedance to the transceiver's output**
so the rig sees a good load.

**Key facts to retain**

- Coax is easy to use; standard **50 Ω**; **loss rises with frequency**.
- **RG-213 < RG-58** loss; **hardline** lowest loss at VHF/UHF.
- **PL-259** for HF/VHF; **Type N** above **400 MHz**.
- **Low SWR → less loss**; erratic SWR = **loose connection**; **tuner matches impedance**.

**External reference anchors**

- NCVEC syllabus: *T9B — Feed lines: types, attenuation vs frequency, selecting; SWR;
  antenna tuners; RF connectors*

**Per-question map**

| Q | Asks for | Resolved by |
|---|----------|-------------|
| T9B01 | Benefit of low SWR | Reduced signal loss |
| T9B02 | Common coax impedance | 50 ohms |
| T9B03 | Why coax is common | Easy to use, few special needs |
| T9B04 | Antenna tuner function | Matches antenna to transceiver impedance |
| T9B05 | Coax loss vs frequency | Loss increases |
| T9B06 | Connector above 400 MHz | Type N |
| T9B07 | PL-259 connectors | Common at HF and VHF |
| T9B08 | Source of coax loss | All these choices |
| T9B09 | Cause of erratic SWR | Loose connection |
| T9B10 | RG-58 vs RG-213 | RG-213 has less loss |
| T9B11 | Lowest-loss feed line at VHF/UHF | Air-insulated hardline |
| T9B12 | What SWR is | How well load matches the line |

