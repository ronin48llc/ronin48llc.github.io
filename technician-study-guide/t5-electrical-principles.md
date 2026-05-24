---
layout: default
title: "T5 — Electrical Principles"
permalink: /technician-study-guide/t5-electrical-principles
---

# T5 — Electrical Principles

*4 exam questions · 4 groups · 51 questions in pool*

The math and vocabulary of electricity: what current, voltage, resistance, and power *are*
and their units; converting between metric prefixes and decibels; the meaning of
capacitance, inductance, and impedance; and the two formulas you must be able to use —
Ohm's Law and the power law. This subelement rewards understanding a few relationships over
memorizing dozens of answers, because the questions are the same handful of ideas with the
numbers swapped.

---

## T5A — Current and Voltage; Conductors and Insulators; AC and DC

*12 questions*

**What this group tests:** the four core quantities and their units, the difference between
conductors and insulators, and AC vs. DC.

**Foundational concepts**

Four quantities, four units — learn the pairing and a third of this subelement falls into
place:

- **Current** is the **flow of electrons**, measured in **amperes** (A).
- **Voltage** is the **force that pushes** electrons (electromotive force), measured in **volts**.
- **Resistance** is opposition to flow, measured in **ohms** (Ω).
- **Power** is the **rate energy is used**, measured in **watts** (W).

**Frequency** — the number of complete cycles per second — is measured in **hertz** (Hz).

**Conductors vs. insulators** comes down to free electrons. **Metals conduct well because
they have many free electrons**; materials like **glass** lock their electrons in place and
make good **insulators**.

**AC vs. DC**: **alternating current** periodically **reverses direction** (positive, then
negative), while direct current flows one way. Resistance opposes **all** current flow
(AC or DC) — "all of these."

**Key facts to retain**

- Current = amperes (electron flow); Voltage = volts (the force); Resistance = ohms; Power
  = watts (rate of energy use); Frequency = hertz (cycles/second).
- Metals conduct = many free electrons; glass insulates.
- AC reverses direction; resistance opposes any current.

**External reference anchors**

- NCVEC syllabus: *T5A — Current and voltage: terminology and units; conductors and
  insulators; AC and DC*

**Per-question map**

| Q | Asks for | Resolved by |
|---|----------|-------------|
| T5A01 | Unit of current | Amperes |
| T5A02 | Unit of power | Watts |
| T5A03 | Name for electron flow | Current |
| T5A04 | Unit of resistance | Ohms |
| T5A05 | Force causing electron flow | Voltage |
| T5A06 | Unit of frequency | Hertz |
| T5A07 | Why metals conduct | Many free electrons |
| T5A08 | A good insulator | Glass |
| T5A09 | What AC is | Reverses positive/negative |
| T5A10 | Rate energy is used | Power |
| T5A11 | What resistance opposes | All these choices |
| T5A12 | Cycles per second | Frequency |

---

## T5B — Math for Electronics: Unit Conversion and Decibels

*13 questions*

**What this group tests:** moving between metric prefixes (milli, kilo, micro, pico, mega,
giga) and the decibel scale for power ratios.

**Foundational concepts**

**Metric prefixes** are just powers of ten. Learn these multipliers and every conversion
question is mechanical:

- **milli (m)** = ×0.001 → so **1.5 A = 1500 mA**, **3000 mA = 3 A**, **500 mW = 0.5 W**
- **kilo (k)** = ×1000 → **1 kV = 1000 V**, **1,500,000 Hz = 1500 kHz**, **3.525 MHz = 3525 kHz**
- **micro (µ)** = ×0.000001 → **1 µV = one-millionth of a volt**
- **pico (p)** = ×10⁻¹² → **1,000,000 pF = 1 µF**
- **mega (M)** = ×1,000,000 → **28400 kHz = 28.400 MHz**
- **giga (G)** = ×1,000,000,000 → **2425 MHz = 2.425 GHz**

The trick is just counting decimal places: each step up the ladder (e.g., Hz→kHz→MHz→GHz)
moves the decimal three places.

**Decibels (dB)** express *ratios* of power, and only three values appear on this exam:

- **doubling** power (×2) ≈ **+3 dB**; halving ≈ −3 dB. So 5 W→10 W = **+3 dB**.
- **×10** power = **+10 dB**; ÷10 = −10 dB. So 20 W→200 W = **+10 dB**.
- combine them: 12 W→3 W is ÷4 = two halvings = **−6 dB**.

Memorize "**3 dB = double, 10 dB = ten times**," and you can build the rest by adding.

**Key facts to retain**

- Prefix ladder in steps of ×1000: pico, (nano), micro, milli, **unit**, kilo, mega, giga.
- 1500 mA = 1.5 A; 1 kV = 1000 V; 1,000,000 pF = 1 µF; 28400 kHz = 28.4 MHz.
- **+3 dB = ×2 power**, **+10 dB = ×10 power** (negatives = the inverse).

**External reference anchors**

- NCVEC syllabus: *T5B — Math for electronics: conversion of electrical units; decibels*

**Per-question map**

| Q | Asks for | Resolved by |
|---|----------|-------------|
| T5B01 | 1.5 A in mA | 1500 mA |
| T5B02 | 1,500,000 Hz | 1500 kHz |
| T5B03 | One kilovolt | 1000 volts |
| T5B04 | One microvolt | One-millionth of a volt |
| T5B05 | 500 mW | 0.5 W |
| T5B06 | 3000 mA | 3 A |
| T5B07 | 3.525 MHz | 3525 kHz |
| T5B08 | 1,000,000 pF | 1 µF |
| T5B09 | 5 W → 10 W | +3 dB |
| T5B10 | 12 W → 3 W | −6 dB |
| T5B11 | 20 W → 200 W | +10 dB |
| T5B12 | 28400 kHz | 28.400 MHz |
| T5B13 | 2425 MHz | 2.425 GHz |

---

## T5C — Capacitance, Inductance, Impedance; RF; Calculating Power

*13 questions*

**What this group tests:** three more quantities and their units, the meaning of "RF" and
its abbreviations, and the DC power formula.

**Foundational concepts**

Two ways to store energy, two new units. **Capacitance** is the ability to store energy in
an **electric field**, measured in **farads** (F). **Inductance** is the ability to store
energy in a **magnetic field**, measured in **henrys** (H). **Impedance** is the total
opposition to **AC** current flow, and like resistance it's measured in **ohms** (Ω).

**RF** stands for **radio frequency** — signals of all types at radio frequencies. The
abbreviations to recognize: **kHz** = kilohertz, **MHz** = megahertz.

**Power** in a DC circuit follows **P = I × E** (power = current × voltage). Three of the
questions are just this with numbers: 13.8 V × 10 A = **138 W**; 12 V × 2.5 A = **30 W**;
and rearranged, 120 W ÷ 12 V = **10 A**. (This pairs naturally with Ohm's Law in T5D — if
you know any two of voltage, current, resistance, and power, you can find the rest.)

**Key facts to retain**

- **Capacitance → farad** (electric field); **Inductance → henry** (magnetic field);
  **Impedance → ohm** (opposition to AC).
- **RF** = radio frequency; **kHz**, **MHz** abbreviations.
- **P = I × E**; rearrange to I = P / E.

**External reference anchors**

- NCVEC syllabus: *T5C — Capacitance and inductance; RF definition and units; Impedance;
  Calculating power*

**Per-question map**

| Q | Asks for | Resolved by |
|---|----------|-------------|
| T5C01 | Store energy in electric field | Capacitance |
| T5C02 | Unit of capacitance | The farad |
| T5C03 | Store energy in magnetic field | Inductance |
| T5C04 | Unit of inductance | The henry |
| T5C05 | Unit of impedance | The ohm |
| T5C06 | Meaning of "RF" | Radio frequency signals |
| T5C07 | Abbreviation for megahertz | MHz |
| T5C08 | DC power formula | P = I × E |
| T5C09 | 13.8 V × 10 A | 138 watts |
| T5C10 | 12 V × 2.5 A | 30 watts |
| T5C11 | Current for 120 W at 12 V | 10 amperes |
| T5C12 | What impedance is | Opposition to AC current flow |
| T5C13 | Abbreviation for kilohertz | kHz |

---

## T5D — Ohm's Law; Series and Parallel Circuits

*14 questions*

**What this group tests:** the single algebraic relationship between voltage, current, and
resistance, and the two rules about how current and voltage behave in series vs. parallel
circuits. Every calculation question is the same equation rearranged with different numbers.

**Foundational concepts**

There is really only *one* equation here, written three ways. Ohm's Law states that voltage
equals current times resistance:

- **E = I × R** — solve for voltage
- **I = E / R** — solve for current
- **R = E / I** — solve for resistance

The symbols matter because the pool uses letters, not words: **E** is voltage (it stands for
*electromotive force*), in **volts**; **I** is current (for *intensity*), in **amperes**;
**R** is resistance, in **ohms**. If you internalize "voltage is current times resistance,"
you can re-derive the other two forms by dividing both sides by whichever quantity you're
not solving for. That answers T5D01–03 outright and defeats every distractor in the
calculation questions, because the wrong choices are always just the wrong operation (they
substitute +, −, or ÷ where × belongs, or flip the division).

For the numeric questions the method never changes: identify the two quantities given, pick
the form that isolates the unknown, plug in. "3 A from 90 V" → R = 90 / 3 = **30 Ω**
(T5D04). "120 V across 80 Ω" → I = 120 / 80 = **1.5 A** (T5D07). "0.5 A through 2 Ω" →
E = 0.5 × 2 = **1 V** (T5D10).

Series vs. parallel is two facts about where charge can flow. In a **series** circuit there
is one path, so the same **current** flows through every component (T5D13). In a **parallel**
circuit every component sits across the same two nodes, so each sees the same **voltage**
(T5D14).

**Key facts to retain**

- E = I × R, with rearrangements I = E / R and R = E / I.
- E = volts, I = amperes, R = ohms.
- **Series → current** the same everywhere; **Parallel → voltage** the same everywhere.

**External reference anchors**

- NCVEC syllabus: *T5D — Ohm's Law; Series and parallel circuits*

**Per-question map**

| Q | Asks for | Resolved by |
|---|----------|-------------|
| T5D01 | Current formula | I = E / R |
| T5D02 | Voltage formula | E = I × R |
| T5D03 | Resistance formula | R = E / I |
| T5D04 | 90 V, 3 A → R | 30 ohms |
| T5D05 | 12 V, 1.5 A → R | 8 ohms |
| T5D06 | 12 V, 4 A → R | 3 ohms |
| T5D07 | 120 V, 80 Ω → I | 1.5 amperes |
| T5D08 | 200 V, 100 Ω → I | 2 amperes |
| T5D09 | 240 V, 24 Ω → I | 10 amperes |
| T5D10 | 0.5 A, 2 Ω → E | 1 volt |
| T5D11 | 1 A, 10 Ω → E | 10 volts |
| T5D12 | 2 A, 10 Ω → E | 20 volts |
| T5D13 | Same current through all | Series |
| T5D14 | Same voltage across all | Parallel |

