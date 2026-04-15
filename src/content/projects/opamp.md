---
title: "511 GHz GBW Fully Differential Op-Amp (45nm CMOS)"
description: "A three-stage fully differential operational amplifier in 45nm CMOS. The architecture leverages Series-Shunt feedback, a Triple Cascode gain stage, and dual-loop Common Mode Feedback (CMFB) to achieve 511 GHz GBW and >60° phase margin under 8.3mW."
imageUrl: "/images/Magnum_Opus_Schematic.png"
order: 1
---

## Wideband Op-Amp Architecture

Designed a high-speed three-stage fully differential amplifier from transistor-level to layout evaluation natively in Cadence Virtuoso. The amplifier was designed strictly around a `<12mW` envelope while exceeding massive $350$ GHz GBW specifications inside a 45nm silicon context.

### Core Topology Breakdown

The core architecture pivots on three discrete stages utilizing advanced mixed-signal optimization strategies:
* **Gain Stage (Triple Cascode NMOS):** Concentrates massive gain locally to generate an overwhelming dominant pole. It secures $\approx 72\text{dB}$ of stable voltage gain while drawing only 1mA.
* **Swing Stage (Sooch-Current PMOS):** Handles large core-level voltage excursions ($\pm 2.6 \text{V}_{pp}$). Bias nets utilize discrete high-Q inductors acting as AC chokes to shield sensitive rails from transient disruptions.
* **Output Buffer (Source Follower):** Stripped down to minimize output impedance naturally, avoiding harmful Miller phase multiplication at multi-GHz bands.

![Full Circuit Schematic](/images/Magnum_Opus_Schematic_Labels.png)

### Topology Highlights & Stabilization

The shift from a traditional Inverting topology to **Series-Shunt Feedback** was pivotal to maintaining a massive input resistance ($Z_{11} > 41\,\text{G}\Omega$). Because the three stages accumulated extreme internal phase delays across nearly $100\text{dB}$ of raw gain, strict hierarchical control loops were established:
1. **Local CMFB Control:** Dedicated high-speed loop monitors Stage 1 current tail integrity and output swing dynamically. 
2. **Global CMFB Control:** A secondary loop tracks the final global output $V_{out}$ and isolates the high-impedance drivers from extreme output transient sweeps.
3. **Nested Compensation:** Employs Ahuja buffers, Miller zeroes, and a high-speed Feedforward path to manipulate phase before gain drops beneath 0dB.

<div style="display: flex; gap: 2rem; margin-top: 2rem; margin-bottom: 2rem; flex-wrap: wrap;">
  <div style="flex: 1; min-width: 300px;">
    <img src="/images/Magnum_Opus_Closed_Loop_Freq_AC_Sim.png" alt="AC Sim" style="width: 100%; border-radius: 8px; border: 1px solid var(--border-color); box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
    <p style="text-align: center; font-size: 0.85rem; color: #8b7969; margin-top: 0.5rem; font-family: var(--font-special);">Loop Gain & Phase Margin (STB Analysis)</p>
  </div>
  <div style="flex: 1; min-width: 300px;">
    <img src="/images/Magnum_Opus_Closed_Loop_Freq_Transient_Sim.png" alt="Transient Sim" style="width: 100%; border-radius: 8px; border: 1px solid var(--border-color); box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
    <p style="text-align: center; font-size: 0.85rem; color: #8b7969; margin-top: 0.5rem; font-family: var(--font-special);">Transient simulation of a $1\text{mV}@1\text{MHz}$ signal.</p>
  </div>
</div>

### Performance Verification

Simulated against full PVT corners and Monte-Carlo extraction parameters:
- **Gain Bandwidth Product:** $511.25\text{ GHz}$
- **Phase Margin:** $61.0^{\circ}$
- **Closed Loop Gain:** $65.81\text{ dB}$ ($1952\text{ V/V}$)
- **Output Swing:** $3.82\text{ V}_{pp}$
- **Power Draw:** $8.26\text{ mW}$
