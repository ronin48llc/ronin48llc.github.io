---
layout: default
title: "T0 — Safety"
permalink: /technician-study-guide/t0-safety
---

# T0 — Safety

*3 exam questions · 3 groups · 36 questions in pool*

The part that keeps you alive: electrical and battery hazards and proper grounding/fusing;
tower and antenna safety; and RF exposure. There are no calculations to fear here — almost
every answer follows from common sense plus a few specific numbers and the idea that
**you, the licensee, are responsible** for safety.

---

## T0A — Power Circuits, Hazards, Fuses, Grounding, Lightning, Batteries

*12 questions*

**What this group tests:** household AC wiring conventions, fuses, grounding/bonding,
lightning protection, and battery hazards.

**Foundational concepts**

**Fuses** exist to **remove power during an overload**; they protect the wiring from
overheating. So a fuse must be installed **in series with the hot conductor**, and you must
**never** replace a 5 A fuse with a 20 A one — the oversized fuse lets **excessive current
flow and start a fire**. In U.S. 120 V wiring, **black insulation = the hot conductor**.

**Electric shock** through the body can cause many injuries — "all of these" — so guarding
against shock uses several measures ("all of these"). Two non-obvious electrical hazards: a
power supply can still bite you **right after you switch it off**, because **filter
capacitors hold a charge**; and when measuring **high voltage**, your **voltmeter and leads
must be rated** for it.

**Grounding/lightning:** a **lightning arrester** goes on a **grounded panel where the feed
lines enter the building**, and all **external ground rods must be bonded together** with
heavy wire or strap (a single common ground prevents dangerous voltage differences).

**Batteries:** shorting a **12 V storage battery's terminals** can cause **burns, fire, or
explosion**; charging or discharging **too quickly** causes **overheating or out-gassing**
(venting explosive hydrogen).

**Key facts to retain**

- Fuse = removes power on overload, **in series with hot**; never oversize a fuse (fire).
- U.S. 120 V: **black = hot**.
- Filter capacitors stay charged **after power-off**; use **rated** leads for high voltage.
- Lightning arrester at a **grounded entry panel**; **bond all ground rods together**.
- Shorted battery → fire/explosion; too-fast charge → overheating/out-gassing.

**External reference anchors**

- NCVEC syllabus: *T0A — Power circuits and hazards; fuses & breakers; grounding; electrical
  code; lightning protection; battery safety*
- National Electrical Code (referenced generally for compliance).

**Per-question map**

| Q | Asks for | Resolved by |
|---|----------|-------------|
| T0A01 | 12 V battery hazard | Shorting → burns/fire/explosion |
| T0A02 | Current through the body | All these choices |
| T0A03 | Black wire = which conductor | Hot |
| T0A04 | Purpose of a fuse | Remove power on overload |
| T0A05 | Why not 5 A → 20 A fuse | Excess current could cause fire |
| T0A06 | Guarding against shock | All these choices |
| T0A07 | Where lightning arrester goes | Grounded panel at building entry |
| T0A08 | Where fuse/breaker goes | In series with hot only |
| T0A09 | All external ground rods | Bond together with heavy wire/strap |
| T0A10 | Too-fast battery charge/discharge | Overheating or out-gassing |
| T0A11 | Hazard right after power-off | Charge in filter capacitors |
| T0A12 | High-voltage measurement precaution | Use rated meter and leads |

---

## T0B — Antenna and Tower Safety

*11 questions*

**What this group tests:** the physical safety of erecting and climbing towers and
antennas, and tower grounding.

**Foundational concepts**

The dominant hazard around antenna work is **power lines**. When installing an antenna,
keep enough distance that **if it falls, no part can come within 10 feet of the power
wires**; look for and **stay clear of overhead wires**; and never attach an antenna to a
**utility pole** (it could contact high-voltage lines).

Climbing rules are strict: **never climb a tower without a helper/observer**, and always use
proper equipment ("all of these" required). A **crank-up tower must not be climbed unless
fully retracted or with mechanical safety locks** in place. A **safety wire through a
turnbuckle** keeps guy-line tension from **vibrating loose**.

**Tower grounding for lightning** wants the fastest possible path to earth: connections
**short and direct**, **sharp bends avoided** (lightning won't make a tight turn),
**separate 8-foot ground rods for each tower leg, all bonded together** and to the tower.
The authority that sets these grounding requirements is your **local electrical code**.

**Key facts to retain**

- Antenna fall clearance from power lines = **10 feet**; never on a **utility pole**.
- **Never climb without a helper**; crank-up towers only when **retracted/locked**.
- Turnbuckle safety wire stops vibration loosening.
- Lightning grounds: **short, direct, no sharp bends**; a rod per leg, all **bonded**;
  governed by **local codes**.

**External reference anchors**

- NCVEC syllabus: *T0B — Antenna safety: tower safety and grounding, installing antennas,
  antenna supports*

**Per-question map**

| Q | Asks for | Resolved by |
|---|----------|-------------|
| T0B01 | Good tower ground wire practice | Short and direct connections |
| T0B02 | Required when climbing | All these choices |
| T0B03 | Climb without observer? | Never |
| T0B04 | Important install precaution | Stay clear of overhead wires |
| T0B05 | Turnbuckle safety wire purpose | Prevent vibration loosening |
| T0B06 | Min distance from power line | 10 ft clearance if it falls |
| T0B07 | Crank-up tower rule | Climb only retracted/locked |
| T0B08 | Proper tower grounding | A bonded 8-ft rod per leg |
| T0B09 | Avoid utility poles because | Could contact high-voltage lines |
| T0B10 | Lightning conductor install | Avoid sharp bends |
| T0B11 | Who sets grounding requirements | Local electrical codes |

---

## T0C — RF Exposure

*13 questions*

**What this group tests:** the nature of RF radiation, the FCC exposure limits and what
affects them, and how to stay compliant.

**Foundational concepts**

RF is **non-ionizing radiation** — unlike X-rays or radioactivity, it **lacks the energy to
cause chemical changes or damage DNA**. Its hazard is heating: touching a transmitting
antenna causes an **RF burn to the skin**.

Several factors set the **maximum permissible exposure (MPE)**, and they all interact —
"all of these" affect exposure near an antenna. **Frequency** matters because **the body
absorbs RF more efficiently at some frequencies than others**; the limit is *most
restrictive* (lowest) around **50 MHz**, near where the body resonates. **Duty cycle** —
the **percentage of time the transmitter is actually transmitting** — matters because it
sets the **average** exposure: cutting duty cycle from 100% to 50% **doubles** the allowable
power density (you may run twice the power for half the airtime).

Staying compliant is the **licensee's responsibility**. You may evaluate your station by any
acceptable method ("all of these"), you must **re-evaluate whenever you change the
transmitter or antenna system**, and the simplest fix to reduce exposure is to **relocate
antennas** farther from people.

**Key facts to retain**

- RF = **non-ionizing**, can't damage DNA; main hazard = **RF skin burn**.
- MPE is most restrictive near **50 MHz**; limits vary because the **body absorbs more at
  some frequencies**.
- **Duty cycle** = % of time transmitting → affects **average** exposure; 100%→50% doubles
  allowed density.
- **The licensee is responsible**; re-evaluate after any system change; relocate antennas to
  reduce exposure.

**External reference anchors**

- NCVEC syllabus: *T0C — RF hazards: radiation exposure, proximity to antennas, safe power
  levels, radiation types, duty cycle*
- FCC RF-exposure rules live in Part 1 (§1.1307/1.1310) and OET Bulletin 65.

**Per-question map**

| Q | Asks for | Resolved by |
|---|----------|-------------|
| T0C01 | Type of radiation radio is | Non-ionizing |
| T0C02 | Lowest MPE frequency | 50 MHz |
| T0C03 | Duty cycle 100%→50% | Allowed density ×2 |
| T0C04 | Factors affecting RF exposure | All these choices |
| T0C05 | Why limits vary with frequency | Body absorbs more at some frequencies |
| T0C06 | Acceptable compliance methods | All these choices |
| T0C07 | Touching antenna during TX | RF burn to skin |
| T0C08 | Reduce RF exposure | Relocate antennas |
| T0C09 | Staying compliant | Re-evaluate after system changes |
| T0C10 | Why duty cycle matters | Affects average exposure |
| T0C11 | Definition of duty cycle | % of time transmitting |
| T0C12 | RF vs ionizing radiation | RF can't damage DNA |
| T0C13 | Who's responsible for exposure | The station licensee |

