---
layout: default
title: "Reading Schematic Symbols"
permalink: /technician-study-guide/schematic-symbols
---

# Reading Schematic Symbols

*A primer for T6C and T6D — read this before the component-identification questions.*

A **schematic** is a wiring diagram drawn with standardized symbols. It shows how
components are **electrically connected** — not their physical size, shape, or position on
the board. The Technician exam includes three figures (below) and asks you to name the
numbered components. Almost every answer is just symbol recognition, so learn the symbols
first and the questions become trivial.

## The symbols you need

| Component | How it's drawn | Notes |
|---|---|---|
| **Resistor** | Zigzag line (or a plain rectangle) | Opposes current |
| **Variable resistor** / potentiometer | Resistor with an **arrow** through or into it | Arrow = adjustable |
| **Capacitor** | Two short **parallel lines/plates** | Stores energy in an electric field |
| **Variable capacitor** | Capacitor with an **arrow** through it | |
| **Inductor** | A series of **loops/coils** | Stores energy in a magnetic field |
| **Variable inductor** | Coil with an **arrow** (or tap) | |
| **Transformer** | **Two coils** facing each other (often with lines between for the core) | Couples AC between windings |
| **Diode** | A **triangle pointing into a bar** | Current flows the way the triangle points; the bar is the cathode |
| **LED** | Diode symbol with **small arrows pointing away** | Light *out* |
| **Transistor** | A **circle** with a base bar and two angled leads (one with an arrow) | The arrow marks the emitter |
| **Battery / cell** | Alternating **long and short parallel lines** | Long line = +; stacked pairs = multiple cells |
| **Lamp** | A loop or circle (sometimes with an ✕) | Incandescent filament |
| **Antenna** | A **triangle** or "tree" at a line's end | Where RF leaves/enters |
| **Ground** | Short **stacked horizontal lines** that shrink downward | Common reference / earth |
| **Fuse** | A small rectangle or an "S" curve in line | Opens on overcurrent |
| **Switch (SPST)** | A line that **lifts off a contact** | Single pole, single throw = on/off |

**The one trick that unlocks half the figure questions:** an **arrow drawn through a symbol
means the component is *variable*.** Same base symbol — a resistor, capacitor, or inductor —
plus an arrow = variable resistor, variable capacitor, or variable inductor.

---

## Figure T-1

![Figure T-1](images/figure-T-1.jpeg)

A simple transistor switch lighting a lamp from a battery.

| # | Component | Why |
|---|---|---|
| 1 | **Resistor** | Zigzag in the input lead |
| 2 | **Transistor** | Circle with base bar + emitter/collector leads; its job here is to **control current flow** |
| 3 | **Lamp** | The loop at the top of the circuit |
| 4 | **Battery** | Stacked long/short lines |
| 5 | Ground | Stacked shrinking lines |

---

## Figure T-2

![Figure T-2](images/figure-T-2.jpeg)

A small AC-to-DC power supply: source → fuse/switch → transformer → rectifier → filter →
regulation/indicator.

| # | Component | Why |
|---|---|---|
| 1 | Battery / source | Stacked lines (left) |
| 2 | **Fuse** | In series after the source |
| 3 | **SPST switch** | Single line lifting off one contact |
| 4 | **Transformer** | Two facing coils |
| 5 | **Diode** | Triangle into a bar (the rectifier) |
| 6 | **Capacitor** | Two parallel plates (the filter) |
| 7 | Resistor | Zigzag |
| 8 | **Light-emitting diode** | Diode with arrows pointing away |
| 9 | **Variable resistor** | Resistor with an arrow through it |
| 10 | Diode | Triangle into a bar (right side) |

---

## Figure T-3

![Figure T-3](images/figure-T-3.jpeg)

An antenna matching / tuned network — a variable capacitor and variable inductor feeding an
antenna.

| # | Component | Why |
|---|---|---|
| 1 | Feed point / input | Line entering at left |
| 2 | **Variable capacitor** | Parallel plates with an arrow |
| 3 | **Variable inductor** | Coil with an arrow/tap |
| 4 | **Antenna** | Triangle at the top-right |

---

## How this maps to the exam

Once you can read the symbols above, the figure questions in **T6C** (identify the
component) and the function questions in **T6D** (e.g., the transistor in Figure T-1
*controls the flow of current*) are recognition, not memorization. Pair this page with the
[T6 — Components](t6-components.md) section.
