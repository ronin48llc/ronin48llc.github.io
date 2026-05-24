---
layout: default
title: "T3 — Radio Wave Propagation"
permalink: /technician-study-guide/t3-radio-wave-propagation
---

# T3 — Radio Wave Propagation

*3 exam questions · 3 groups · 34 questions in pool*

How signals get from your antenna to someone else's: the physical nature of a radio wave,
how wavelength relates to frequency, and the modes (line-of-sight, ionospheric, sporadic-E,
tropo, and so on) that carry signals near and far. Pure physics — no FCC citations.

---

## T3A — Radio Wave Characteristics; Antenna Orientation

*12 questions*

**What this group tests:** the everyday behavior of signals — fading, multipath,
polarization, absorption — especially at VHF/UHF.

**Foundational concepts**

When you move a VHF antenna a few feet and the signal jumps around, that's **multipath**:
copies of the signal arrive via different paths and either reinforce or cancel each other.
Multipath on a moving vehicle produces a rapid flutter called **"picket fencing,"** and on
*data* it **raises the error rate**. Ionospheric signals fade irregularly for the same
underlying reason — **random combining of signals arriving by different paths**.

**Polarization** is the orientation of the wave's electric field, set by the antenna. For
long-distance CW/SSB weak-signal work on VHF/UHF the convention is **horizontal**
polarization. If the two ends of a line-of-sight link use **mismatched** polarization, the
received signal is **weaker**. (Ionospheric signals are elliptically polarized, so for
sky-wave paths either vertical or horizontal antennas work.)

**Absorption** is the other big theme. **Vegetation** absorbs UHF and microwave energy;
**precipitation** cuts microwave range; but ordinary **fog and rain barely affect 10 m and
6 m**, because lower frequencies aren't absorbed by water droplets the way microwaves are.
The **ionosphere** is the atmospheric region that can **refract (bend)** HF and VHF waves.
And if a building blocks your path to a repeater, a **directional antenna aimed at a
reflecting surface** can bounce the signal around the obstruction.

**Key facts to retain**

- **Multipath** = signals via multiple paths reinforce/cancel → fading, picket fencing,
  higher data error rates.
- Polarization = electric-field orientation; VHF/UHF weak-signal work uses **horizontal**.
- Mismatched polarization on line-of-sight → **reduced** signal.
- Absorption: vegetation/precip hurt UHF–microwave; **fog/rain barely affect 10 m & 6 m**.
- The **ionosphere** refracts HF/VHF.

**External reference anchors**

- NCVEC syllabus: *T3A — Radio wave characteristics; Antenna orientation*

**Per-question map**

| Q | Asks for | Resolved by |
|---|----------|-------------|
| T3A01 | VHF strength varies with small moves | Multipath cancel/reinforce |
| T3A02 | Vegetation effect on UHF/microwave | Absorption |
| T3A03 | Polarization for VHF/UHF weak-signal | Horizontal |
| T3A04 | Mismatched polarization, line-of-sight | Reduced signal strength |
| T3A05 | Reaching a blocked repeater | Use a reflected path |
| T3A06 | "Picket fencing" | Rapid mobile flutter from multipath |
| T3A07 | Weather cutting microwave range | Precipitation |
| T3A08 | Irregular ionospheric fading | Random multi-path combining |
| T3A09 | Result of elliptical polarization | Either V or H antenna works |
| T3A10 | Multipath effect on data | Error rates increase |
| T3A11 | Region that refracts HF/VHF | The ionosphere |
| T3A12 | Fog/rain on 10 m & 6 m | Little effect |

---

## T3B — Electromagnetic Wave Properties

*11 questions*

**What this group tests:** the structure of an EM wave, the speed of light, and the
wavelength↔frequency relationship — including the one formula you must be able to use.

**Foundational concepts**

A radio wave is two fields — **electric and magnetic** — oscillating **at right angles** to
each other (and to the direction of travel). Its **polarization** is defined by the
**electric** field's orientation. In free space the wave travels at the **speed of light**,
about **300,000,000 meters per second** (3 × 10⁸ m/s).

From that constant speed comes the inverse relationship: as **frequency increases,
wavelength gets shorter**. The handy approximation to memorize is

> **wavelength (meters) ≈ 300 ÷ frequency (MHz)**

This is why bands are named by **approximate wavelength**: 300 ÷ 146 MHz ≈ 2 meters, 300 ÷
28 MHz ≈ 10 meters, and so on — the wavelength name and the frequency are two views of the
same thing.

Finally, the **spectrum labels** by frequency: **HF = 3–30 MHz**, **VHF = 30–300 MHz**,
**UHF = 300–3000 MHz**. Notice each band is a factor of ten wide and they tile neatly end
to end.

**Key facts to retain**

- EM wave = electric + magnetic fields, **at right angles**; polarization = E-field
  orientation.
- Speed in free space = **speed of light ≈ 3 × 10⁸ m/s**.
- **λ(m) = 300 ÷ f(MHz)**; higher frequency → shorter wavelength.
- **HF 3–30 MHz, VHF 30–300 MHz, UHF 300–3000 MHz**.

**External reference anchors**

- NCVEC syllabus: *T3B — Electromagnetic wave properties; spectrum definitions*

**Per-question map**

| Q | Asks for | Resolved by |
|---|----------|-------------|
| T3B01 | E and H field relationship | At right angles |
| T3B02 | What defines polarization | Orientation of the electric field |
| T3B03 | Two components of a wave | Electric and magnetic fields |
| T3B04 | Velocity in free space | Speed of light |
| T3B05 | Wavelength vs frequency | Shorter as frequency rises |
| T3B06 | Frequency→wavelength formula | λ = 300 / f(MHz) |
| T3B07 | Other band identifier | Approximate wavelength in meters |
| T3B08 | VHF range | 30–300 MHz |
| T3B09 | UHF range | 300–3000 MHz |
| T3B10 | HF range | 3–30 MHz |
| T3B11 | Velocity of a radio wave | 300,000,000 m/s |

---

## T3C — Propagation Modes; F-Region Skip; Line of Sight & Radio Horizon

*11 questions*

**What this group tests:** the named propagation modes that carry VHF/UHF beyond line of
sight, and how HF differs from VHF.

**Foundational concepts**

The baseline for VHF/UHF is **line of sight**: UHF signals are **rarely heard past the
radio horizon** because they're **usually not refracted by the ionosphere**. But the radio
horizon is slightly **farther than the visual horizon**, because the atmosphere **refracts
(bends)** the waves a little.

Several modes push VHF/UHF *beyond* the horizon. **Sporadic-E** produces occasional strong
signals on **10, 6, and 2 m** from beyond the horizon. **Tropospheric ducting**, caused by
**temperature inversions**, gives regular ~**300-mile** VHF/UHF paths. **Auroral
backscatter** off the aurora gives **distorted, fluttery** signals with widely varying
strength. **Meteor scatter** bounces signals off ionized meteor trails and works best on
**6 meters**. **Knife-edge diffraction** lets signals bend over a sharp obstruction like a
ridgeline.

On **HF**, long-distance **ionospheric (F-region) propagation is far more common** than at
VHF. During the **peak of the sunspot cycle** the F region can carry **6 and 10 meters**
long distances, with the best 10 m openings running **from dawn until shortly after
sunset** during high solar activity.

**Key facts to retain**

- UHF rarely beyond the horizon (no ionospheric refraction); radio horizon > visual
  horizon (atmospheric refraction).
- **Sporadic-E** → 10/6/2 m surprises; **tropo ducting** (temperature inversions) → ~300 mi.
- **Auroral** = distorted/variable; **meteor scatter** best on **6 m**; **knife-edge
  diffraction** bends over obstacles.
- HF favors **F-region** long haul; sunspot peak opens **6 & 10 m**, best 10 m = dawn→sunset.

**External reference anchors**

- NCVEC syllabus: *T3C — Propagation modes; F region skip; Line of sight and radio horizon*

**Per-question map**

| Q | Asks for | Resolved by |
|---|----------|-------------|
| T3C01 | UHF rarely past horizon | Not propagated by the ionosphere |
| T3C02 | HF vs VHF characteristic | Ionospheric long-distance far more common |
| T3C03 | Auroral backscatter trait | Distorted, varying strength |
| T3C04 | Strong beyond-horizon on 10/6/2 m | Sporadic-E |
| T3C05 | Signals around obstructions | Knife-edge diffraction |
| T3C06 | Regular ~300 mi VHF/UHF | Tropospheric ducting |
| T3C07 | Best band for meteor scatter | 6 meters |
| T3C08 | Cause of tropo ducting | Temperature inversions |
| T3C09 | Best time for 10 m F-region | Dawn to just after sunset, high sunspots |
| T3C10 | Bands for F-region at sunspot peak | 6 and 10 meters |
| T3C11 | Radio horizon > visual horizon | Atmosphere refracts waves slightly |

