---
layout: default
title: "T8 — Signals & Emissions"
permalink: /technician-study-guide/t8-signals-and-emissions
---

# T8 — Signals and Emissions

*4 exam questions · 4 groups · 48 questions in pool*

The modes themselves: FM and SSB and their bandwidths, working amateur satellites, the
internet-linking and direction-finding activities, and the family of digital modes (CW,
packet, PSK, APRS, DMR, FT8, mesh). No FCC citations.

---

## T8A — FM and SSB Characteristics; Bandwidth; Emission Choice

*12 questions*

**What this group tests:** the two main voice modes, the bandwidth each mode occupies, and
when you'd choose one over another.

**Foundational concepts**

Two voice modes dominate VHF/UHF. **FM (or PM)** is used for **repeaters and packet** —
robust and clear but spectrum-hungry. **SSB (single sideband)**, a form of **amplitude
modulation**, is used for **weak-signal/long-distance** VHF/UHF work because it packs the
signal into a **narrower bandwidth**. On 10 m HF and on VHF/UHF, the convention is **upper
sideband (USB)**.

Bandwidth is a recurring theme — memorize the ladder from narrowest to widest:

- **CW (Morse)** — narrowest, about **150 Hz**
- **SSB voice** — about **3 kHz**
- **FM voice (repeater)** — about **10–15 kHz**
- **AM fast-scan TV** — about **6 MHz** (huge — it carries a full video picture)

A trade-off question: a **disadvantage of FM vs. SSB** is that with FM (due to the "capture
effect") **only one signal can be received at a time**, whereas multiple SSB signals can
coexist in the same space.

**Key facts to retain**

- **FM/PM** → repeaters, packet; **SSB** → weak-signal/DX, narrower bandwidth; use **USB**
  on 10 m & up.
- Bandwidths: **CW ≈150 Hz < SSB ≈3 kHz < FM ≈10–15 kHz < fast-scan TV ≈6 MHz**.
- FM disadvantage: only one signal received at a time (capture effect).

**External reference anchors**

- NCVEC syllabus: *T8A — FM and SSB characteristics; bandwidth of modes; choice of emission*

**Per-question map**

| Q | Asks for | Resolved by |
|---|----------|-------------|
| T8A01 | Form of amplitude modulation | Single sideband |
| T8A02 | Modulation for VHF packet | FM or PM |
| T8A03 | Voice mode for VHF/UHF weak signal | SSB |
| T8A04 | Modulation for VHF/UHF repeaters | FM or PM |
| T8A05 | Narrowest bandwidth | CW |
| T8A06 | Sideband for 10 m/VHF/UHF | Upper sideband |
| T8A07 | SSB vs FM | SSB narrower bandwidth |
| T8A08 | SSB voice bandwidth | 3 kHz |
| T8A09 | FM repeater bandwidth | 10–15 kHz |
| T8A10 | AM fast-scan TV bandwidth | About 6 MHz |
| T8A11 | CW bandwidth | 150 Hz |
| T8A12 | FM disadvantage vs SSB | Only one signal at a time |

---

## T8B — Amateur Satellite Operation

*12 questions*

**What this group tests:** the vocabulary and good practice of working amateur satellites —
Doppler, modes, beacons, telemetry, tracking, and uplink power.

**Foundational concepts**

A satellite hears you on its **uplink** and transmits to you on its **downlink**; the two
are usually on different bands, named by a mode letter pair. **U/V mode** means **uplink on
70 cm, downlink on 2 m**. Because the satellite is moving fast, **Doppler shift** — a
**change in observed frequency from relative motion** — must be tracked. **Spin fading** is
the signal rising and falling as the **satellite and its antennas rotate**. A **LEO**
satellite is one in **low Earth orbit**. Amateur sats use many modulation types — "all of
these."

**Tracking programs** predict when and where a satellite will be; their input is the
**Keplerian elements** (orbital parameters), and they provide azimuth/elevation, timing,
and more — "all of these." A **beacon** is a satellite transmission carrying **status/health
telemetry**, and **anyone** may receive telemetry from a space station.

The big operating courtesy: **don't use excessive uplink power**. Too much effective
radiated power **blocks other users** (the satellite is a shared resource). The right amount
is set by comparison: your **downlink signal should be about as strong as the satellite's
beacon** — if you're louder than the beacon, turn down.

**Key facts to retain**

- **Uplink/downlink**; **U/V** = up on 70 cm, down on 2 m.
- **Doppler** = frequency shift from motion; **spin fading** = rotating satellite/antennas;
  **LEO** = low Earth orbit.
- Tracking input = **Keplerian elements**; **beacon** = status telemetry; **anyone** may
  receive telemetry.
- Don't over-power the uplink (blocks others); match your downlink to the **beacon** level.

**External reference anchors**

- NCVEC syllabus: *T8B — Amateur satellite operation: Doppler, orbits, protocols, telemetry,
  tracking, beacons, uplink/downlink, spin fading, LEO*

**Per-question map**

| Q | Asks for | Resolved by |
|---|----------|-------------|
| T8B01 | Beacon telemetry content | Satellite health & status |
| T8B02 | Excessive uplink ERP | Blocks other users |
| T8B03 | Tracking-program outputs | All these choices |
| T8B04 | Satellite transmission modes | All these choices |
| T8B05 | What a beacon is | Status-information transmission |
| T8B06 | Tracking-program input | Keplerian elements |
| T8B07 | Doppler shift | Frequency change from relative motion |
| T8B08 | U/V mode meaning | Up 70 cm, down 2 m |
| T8B09 | Cause of spin fading | Rotation of satellite/antennas |
| T8B10 | What a LEO is | Low Earth orbit satellite |
| T8B11 | Who may receive telemetry | Anyone |
| T8B12 | Setting correct uplink power | Match downlink to beacon strength |

---

## T8C — Operating Activities: Direction Finding, Contests, Internet Linking, Grid Locators

*11 questions*

**What this group tests:** popular on-air activities and the internet-linking systems
(IRLP, EchoLink, gateways, VoIP).

**Foundational concepts**

**Radio direction finding (RDF)** locates a transmitter — noise, jamming, or a "hidden
transmitter hunt" (foxhunt) — and the key tool is a **directional antenna**. **Contesting**
is contacting **as many stations as possible** in a set period; good contest etiquette is to
send only the **minimum info needed for ID and the exchange**. A **grid locator** is a
**letter-number code for a geographic location** (Maidenhead grid), commonly exchanged on
VHF.

Internet linking connects radios over the net using **VoIP** (Voice over Internet Protocol —
**voice carried over the internet digitally**). **IRLP** links repeaters/systems via VoIP,
and you access IRLP nodes over the air with **DTMF** tones. **EchoLink** lets a station
transmit through a repeater **without using a radio to initiate** it (from a computer/phone)
— but you must first **register your call sign and prove your license**. A **gateway** is a
station that **connects other amateur stations to the internet**.

**Key facts to retain**

- **RDF** finds transmitters; tool = **directional antenna**.
- **Contesting** = max contacts; send **minimum** exchange. **Grid locator** = geographic
  letter-number code.
- **VoIP** = voice over internet; **IRLP** links via VoIP, accessed by **DTMF**.
- **EchoLink** needs **call-sign registration + license proof**; a **gateway** bridges
  amateurs to the internet.

**External reference anchors**

- NCVEC syllabus: *T8C — Operating activities: RDF, contests, internet linking, grid locators*

**Per-question map**

| Q | Asks for | Resolved by |
|---|----------|-------------|
| T8C01 | Locating noise/jamming | Radio direction finding |
| T8C02 | Useful for a hidden hunt | A directional antenna |
| T8C03 | Most contacts in a period | Contesting |
| T8C04 | Good contest procedure | Send minimum ID + exchange |
| T8C05 | What a grid locator is | Letter-number geographic code |
| T8C06 | Over-air IRLP access | DTMF signals |
| T8C07 | What VoIP is | Voice over the internet, digital |
| T8C08 | What IRLP is | Connect systems via VoIP |
| T8C09 | Transmit through repeater w/o radio | EchoLink |
| T8C10 | Before using EchoLink | Register call sign, prove license |
| T8C11 | Station connecting hams to internet | A gateway |

---

## T8D — Non-Voice and Digital Communications

*13 questions*

**What this group tests:** the digital and image modes — CW, packet, PSK, APRS, DMR, NTSC,
WSJT-X/FT8, mesh — and error-correction concepts.

**Foundational concepts**

A wide family of digital modes exists — "all of these" are digital. A few specifics worth
knowing:

- **CW** is simply another name for a **Morse code** transmission.
- **NTSC** is **analog fast-scan color TV**.
- **PSK** stands for **Phase Shift Keying** (the digital keyboard mode).
- **Packet radio** transmissions carry several things (data, addressing, error checking) —
  "all of these," and packet can carry many data types.
- **APRS** (Automatic Packet Reporting System) provides **real-time tactical data tied to a
  map** of station locations — GPS positions, weather, messages ("all of these").
- **DMR** (Digital Mobile Radio) **time-multiplexes two digital voice signals on one
  12.5 kHz** repeater channel, organized by **talkgroups** — a way for groups to **share a
  channel at different times** without hearing each other.
- **WSJT-X** is a software suite supporting several weak-signal activities — "all of these"
  — and **FT8** is its flagship: a **digital mode that works at very low signal-to-noise**.
- A **mesh network** is an amateur data network built from **commercial Wi-Fi gear with
  modified firmware**.

On reliability, **ARQ** (Automatic Repeat reQuest) is **error correction where the receiver
detects errors and requests retransmission**.

**Key facts to retain**

- **CW** = Morse; **NTSC** = analog fast-scan TV; **PSK** = Phase Shift Keying.
- **APRS** = real-time positions on a map; **DMR** = two voice streams on a 12.5 kHz channel
  via talkgroups.
- **FT8** = low-SNR digital mode (WSJT-X suite); **mesh** = modified commercial Wi-Fi.
- **ARQ** = detect error, request resend.

**External reference anchors**

- NCVEC syllabus: *T8D — Non-voice and digital communications: image/NTSC, CW, packet, PSK,
  APRS, error correction, DMR, WSJT modes, Broadband-Hamnet*

**Per-question map**

| Q | Asks for | Resolved by |
|---|----------|-------------|
| T8D01 | A digital mode | All these choices |
| T8D02 | DMR talkgroup | Groups share a channel at different times |
| T8D03 | Data APRS can send | All these choices |
| T8D04 | What "NTSC" indicates | Analog fast-scan color TV |
| T8D05 | APRS application | Real-time tactical data on a map |
| T8D06 | "PSK" meaning | Phase Shift Keying |
| T8D07 | Describes DMR | Two voice signals on 12.5 kHz channel |
| T8D08 | In packet transmissions | All these choices |
| T8D09 | What CW is | Another name for Morse code |
| T8D10 | WSJT-X activities | All these choices |
| T8D11 | ARQ system | Receiver detects error, requests resend |
| T8D12 | Amateur mesh network | Modified commercial Wi-Fi gear |
| T8D13 | What FT8 is | Low signal-to-noise digital mode |

