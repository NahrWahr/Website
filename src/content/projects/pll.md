---
title: "Quarter-Rate Bang-Bang Alexander PLL (22nm FDSOI)"
description: "A quarter-rate bang-bang Alexander-based Phase Detector (PD) implemented in 22nm FDSOI from GlobalFoundries. Includes ring oscillator VCO, varactors, and evaluated up/down phase alignment through custom charge pumps."
imageUrl: "/images/Ring-Oscillator-Top-Level.png"
order: 2
---

# Phase-Locked Loop & Alexander Phase Detector

Designed and modeled a quarter rate bang-bang Alexander-based Phase Detector (PD) implemented in the 22nm FDSOI node from GlobalFoundries. Check out the internal block configurations and behavioral evaluations below.

## Voltage-Controlled Oscillator Analysis

Built a fully differential ring oscillator, with varactors and tail current source controls to tune the central frequency. 

### Simulation & Analysis

This project involved running PSS + PNOISE analysis in SpectreRF to extract output jitter data and evaluate performance under a locked-phase CDR loop using PLLs.

![Ring Oscillator Top Level](/images/Ring-Oscillator-Top-Level.png)

![Latches](/images/All-Latches.png)

### Layout & Charge Pumps

Phase detection was fully evaluated up and down the charge pump hierarchy using the bang-bang mechanism for phase/frequency tuning. Note the phase variation over the extracted jitter plots.

![Charge Pump](/images/Charge-Pump.png)
![Freq Ctrl Locked](/images/Freq-Ctrl-Locked.png)

### Eye Diagrams

Data samples taken at the final quarter-rate output nodes.

![Eye Diagram 0-25](/images/Eye-0-25.png)
![Eye Diagram 50-75](/images/Eye-50-75.png)
