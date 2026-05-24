---
layout: default
title: "T6 — Electronic & Electrical Components"
permalink: /technician-study-guide/t6-components
---

# T6 — Electronic and Electrical Components

*4 exam questions · 4 groups · 47 questions in pool*

The parts themselves: resistors, capacitors, inductors, switches, fuses, batteries, diodes,
transistors, and the functional building blocks (rectifiers, regulators, transformers,
ICs). Two groups (T6C, T6D) require reading **schematic symbols** off three figures, which
are included below. No FCC citations.

---

## T6A — Resistors, Capacitors, Inductors, Fuses, Switches, Batteries

*12 questions*

**What this group tests:** what each passive component does and a couple of facts about
switches and battery chemistry.

**Foundational concepts**

The three fundamental passives map directly onto the quantities from T5:

- A **resistor** opposes current flow. A **potentiometer** is a *variable* resistor used as
  an adjustable control (like a volume knob); the parameter it varies is **resistance**.
- A **capacitor** stores energy in an **electric field** and is physically **two conductive
  surfaces separated by an insulator** (dielectric).
- An **inductor** stores energy in a **magnetic field** and is typically a **coil of wire**.

A **fuse** protects a circuit by breaking the connection during a **current overload**.
Switches are described by poles and throws: an **SPDT** (single-pole double-throw) switch
routes **one circuit to one of two others**; an **SPST** (single-pole single-throw) is a
simple on/off — that's **component 3 in figure T-2**.

Battery chemistry: the rechargeable ones include lithium-ion, nickel-metal-hydride, and
lead-acid — "all of these" are rechargeable — while **carbon-zinc** is a common **non-
rechargeable** (primary) chemistry.

**Key facts to retain**

- Resistor opposes current; **potentiometer** = variable resistor (controls resistance).
- Capacitor = conductors + insulator, stores in electric field; inductor = coil, magnetic field.
- Fuse protects against **overcurrent**; **SPDT** = one circuit to one of two; SPST = on/off.
- Carbon-zinc = **not** rechargeable.

**External reference anchors**

- NCVEC syllabus: *T6A — Fixed and variable resistors; Capacitors; Inductors; Fuses;
  Switches; Batteries*

**Per-question map**

| Q | Asks for | Resolved by |
|---|----------|-------------|
| T6A01 | Opposes DC current | Resistor |
| T6A02 | Adjustable volume control | Potentiometer |
| T6A03 | Parameter a pot controls | Resistance |
| T6A04 | Stores energy in electric field | Capacitor |
| T6A05 | Conductors + insulator | Capacitor |
| T6A06 | Stores energy in magnetic field | Inductor |
| T6A07 | Built as a coil of wire | Inductor |
| T6A08 | SPDT switch function | One circuit to one of two |
| T6A09 | Protects from overcurrent | Fuse |
| T6A10 | Rechargeable chemistry | All these choices |
| T6A11 | Non-rechargeable chemistry | Carbon-zinc |
| T6A12 | Switch component 3, fig T-2 | SPST |

---

## T6B — Semiconductors: Diodes and Transistors

*12 questions*

**What this group tests:** the two workhorse semiconductors — diodes and transistors —
their electrodes, behavior, and terminology.

**Foundational concepts**

A **diode** allows current to flow in **only one direction**. Its two electrodes are the
**anode** and **cathode**, and the **cathode** end is usually marked with a **stripe** on
the package. Diodes have a **forward voltage drop** that **varies by type** (silicon ~0.7 V,
Schottky lower, LEDs higher). A **light-emitting diode (LED)** emits light when **forward
current** flows through it, which makes it a common **visual indicator**.

A **transistor** can act as an **electronic switch** and, crucially, can provide **gain** —
the ability to **amplify** a signal (it provides *power* gain, unlike a passive part). The
two main families: a **bipolar junction transistor (BJT)** is built from **three regions of
semiconductor** and its electrodes are **emitter, base, collector**; a **field-effect
transistor (FET)** has a **gate, drain, and source**. "FET" stands for **Field Effect
Transistor**.

**Key facts to retain**

- Diode = one-way current; electrodes **anode/cathode**; **cathode = striped** end.
- Forward voltage drop differs by diode type; **LED lights on forward current**.
- Transistor = switch + amplifier; provides **gain** (power gain).
- **BJT** = emitter/base/collector (three regions); **FET** = gate/drain/source.

**External reference anchors**

- NCVEC syllabus: *T6B — Semiconductors: solid-state devices, diodes and transistors*

**Per-question map**

| Q | Asks for | Resolved by |
|---|----------|-------------|
| T6B01 | Diode forward voltage drop | Lower in some types than others |
| T6B02 | One-direction current | Diode |
| T6B03 | Electronic switch | Transistor |
| T6B04 | Three regions of semiconductor | Transistor |
| T6B05 | Gate, drain, source | Field-effect transistor |
| T6B06 | Cathode marking | A stripe |
| T6B07 | What makes an LED emit | Forward current |
| T6B08 | "FET" stands for | Field Effect Transistor |
| T6B09 | Diode electrodes | Anode and cathode |
| T6B10 | Provides power gain | Transistor |
| T6B11 | Ability to amplify | Gain |
| T6B12 | BJT electrodes | Emitter, base, collector |

---

## T6C — Circuit Diagrams; Schematic Symbols

*12 questions*

**What this group tests:** reading a **schematic** — recognizing standard component symbols
in figures T-1, T-2, and T-3.

**Foundational concepts**

A **schematic** is a wiring diagram that uses **standard component symbols**; what it
accurately represents is the **electrical connections** between components (not their
physical size or placement). Learn to recognize each symbol on sight:

- **Resistor** — a zigzag (or rectangle).
- **Capacitor** — two parallel plates/lines.
- **Inductor** — a series of loops/coils.
- **Diode** — a triangle pointing into a bar; **LED** adds little arrows pointing away.
- **Transistor** — a circle with base bar and emitter/collector leads.
- **Battery** — alternating long/short parallel lines.
- **Transformer** — two coils facing each other (often with core lines between).
- **Variable** components — an arrow drawn through the symbol (variable resistor, variable
  capacitor, variable inductor).
- **Antenna** — a triangle/"tree" at the end of a line.
- **Lamp** — a loop or circle (incandescent filament).

![Figure T-1](images/figure-T-1.jpeg)

In **Figure T-1**: ① **resistor**, ② **transistor**, ③ **lamp**, ④ **battery**, ⑤ ground.

![Figure T-2](images/figure-T-2.jpeg)

In **Figure T-2**: ④ **transformer**, ⑥ **capacitor**, ⑧ **light-emitting diode**, ⑨
**variable resistor** (plus ② fuse, ③ SPST switch, ⑤ diode from other groups).

![Figure T-3](images/figure-T-3.jpeg)

In **Figure T-3**: ③ **variable inductor**, ④ **antenna** (with ② a variable capacitor).

**Key facts to retain**

- A **schematic** uses standard symbols and shows **connections**.
- Memorize the symbols above; an **arrow through** a symbol means it's **variable**.
- Figure T-1: R, transistor, lamp, battery. Figure T-2: transformer, capacitor, LED,
  variable resistor. Figure T-3: variable inductor, antenna.

**External reference anchors**

- NCVEC syllabus: *T6C — Circuit diagrams; schematic symbols*
- Figures T-1, T-2, T-3 (included above; required for T6C/T6D).

**Per-question map**

| Q | Asks for | Resolved by |
|---|----------|-------------|
| T6C01 | Diagram with standard symbols | Schematic |
| T6C02 | Fig T-1, component 1 | Resistor |
| T6C03 | Fig T-1, component 2 | Transistor |
| T6C04 | Fig T-1, component 3 | Lamp |
| T6C05 | Fig T-1, component 4 | Battery |
| T6C06 | Fig T-2, component 6 | Capacitor |
| T6C07 | Fig T-2, component 8 | Light-emitting diode |
| T6C08 | Fig T-2, component 9 | Variable resistor |
| T6C09 | Fig T-2, component 4 | Transformer |
| T6C10 | Fig T-3, component 3 | Variable inductor |
| T6C11 | Fig T-3, component 4 | Antenna |
| T6C12 | What schematics represent | Component connections |

---

## T6D — Component Functions; Resonant Circuit; Shielding

*11 questions*

**What this group tests:** what functional parts do — rectifiers, relays, regulators,
meters, transformers, ICs — plus the LC resonant circuit and why we shield wire.

**Foundational concepts**

Several parts are defined by their *job*:

- A **rectifier** changes **AC into varying DC** (the first stage of a power supply).
- A **regulator** controls/holds the **output voltage** of a supply steady.
- A **transformer** changes one AC voltage to another — e.g., **120 V AC down to a lower
  AC voltage**.
- A **relay** is an **electrically controlled switch**.
- A **meter** displays an electrical quantity as a **numeric value**; an **LED** is a common
  **visual indicator**.
- An **integrated circuit (IC)** combines **many semiconductors and other components in one
  package**.

Two recurring concepts: a **resonant (tuned) circuit** is an **inductor and capacitor in
series or parallel** — you combine an inductor *with a capacitor* to make one (figure T-3 is
exactly such a network feeding an antenna). And **shielded wire** is used **to prevent
unwanted signals coupling to or from the wire**. The function of the transistor (component 2
in figure T-1) in that circuit is to **control the flow of current**.

**Key facts to retain**

- Rectifier: AC → varying DC. Regulator: holds voltage. Transformer: changes AC voltage.
- Relay = electrically controlled switch; meter = numeric display; IC = many parts in one package.
- **Resonant circuit = inductor + capacitor** (series or parallel).
- **Shielded wire** prevents signal coupling in/out.

**External reference anchors**

- NCVEC syllabus: *T6D — Component functions; Resonant circuit; Shielding*
- Figure T-1 (component 2 function).

**Per-question map**

| Q | Asks for | Resolved by |
|---|----------|-------------|
| T6D01 | AC to varying DC | Rectifier |
| T6D02 | What a relay is | Electrically controlled switch |
| T6D03 | Reason for shielded wire | Prevent unwanted coupling |
| T6D04 | Numeric display of a quantity | Meter |
| T6D05 | Controls supply voltage | Regulator |
| T6D06 | 120 V AC to lower AC | Transformer |
| T6D07 | Common visual indicator | LED |
| T6D08 | Combined with inductor for resonance | Capacitor |
| T6D09 | Many semiconductors in one package | Integrated circuit |
| T6D10 | Fig T-1 component 2 function | Control the flow of current |
| T6D11 | A resonant/tuned circuit | Inductor + capacitor (series/parallel) |

