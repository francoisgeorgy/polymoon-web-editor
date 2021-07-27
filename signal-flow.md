Meris Polymoon signal flow
==========================

Flangers
--------

The first element of the signal chain is the pair of Dynamic Flangers driven either by a peak follower or a sine wave LFO
depending on the selection you make with the second layer Dynamic Filter Mode control. The top level Dynamics control changes
the depth of the peak follower and the lfo, and the minimum position of the knob mutes the Dynamic Flanger’s output. The second layer Dynamic Flanger Speed controls either the peak follower’s attack time or the sine wave lfo’s speed. Finally, the second
layer Dynamic Flanger Feedback adds negative feedback to each flanger.

### Controls:

- DIMENSIONS ALT: Dynamic Flanger Mode. Set to minimum for Envelope Down, set to noon for Envelope Up, and set to maximum for LFO. (3 values)
- DYNAMICS: Sets the intensity/depth of the Dynamic Flanger. Flanger is off at minimum. (continuous value)
- DYNAMICS ALT: Dynamic Flanger Speed. Sets the envelope attack time or LFO speed based on the Dynamic Flanger Mode. (continuous value)
- BYPASS ALT: Dynamic Flanger Feedback. Adds negative feedback to the Dynamic Flanger. (on/off)

Delay line
----------

The Polymoon’s Delay Line network is structured as 6 delays each with their own output and modulation source. The
Feedback Knob provides a global delay feedback for the whole delay network, with our custom Feedback Filter providing color
to the repeats. The Multiply Knob controls the Pan and Level of each delay line. The Dimension Knob controls a special internal
feedback for each of the 6 individual series delay lines. The Mix Knob provides the overall balance between the dry signal and the
delays, with the second layer Delay Level providing fine tuning over the delays. Finally, the Early and Late Modulation work
together to control the 6 triangle wave LFOs which modulate the delay network.

### Controls:

- TIME: Sets the time for the delay and the synchronized phaser. (continuous value)
- MULTIPLY: Sets the number of delay taps added to the output. (6 values)
- FEEDBACK: Sets the feedback amount. (continuous value)
- FEEDBACK ALT: Feedback Filter Controls filter in the feedback path. Set to noon for no filtering, set towards minimum for a darker filter, set towards maximum for a brighter filter. (continuous value)
- DIMENSION: Sets the dimension amount. Dimension smears and sustains the delay tap reflections. (continuous value)
- TAP: Sets the time for the delay and the synchronized phaser. (continuous value)
- TAP ALT: Dotted Eighth Note. Changes current tempo from 1/4 notes to dotted 1/8 notes. (on/off)
- TAP HOLD: engage Half Speed Delay (on/off)

Modulation
----------

The Polymoon features 6 independent triangle waveform lfos to modulate the delay line network. Triangle LFO 1 is
controlled by the second layer Early Modulation Knob. Since the delay network is series, modulating this first in the chain delay
has an impact on every delay tap. The Late Modulation Knob primarily controls Triangle LFO 6. Again, with the delay network
being primarily a series configuration, modulating this last in the chain delay allows for the early taps to pass to the output first
before its effect is heard. LFOs 2 through 5, are set to gentle complementary modulation settings as the Late Modulation knob
is increased. Turning both Early and Late Modulations to zero bypasses all 6 Triangle LFOs.

### Controls:

- TIME ALT: Early Modulation. Triangle waveform modulation of the early delay taps. Ranges from gentle modulation, to FM, to pitch effects. (16 values)
- MULTIPLY ALT: Late Modulation. Triangle waveform modulation of the later delay taps. Ranges from gentle modulation, to FM, to pitch effects. (16 values)

Output
------

### Controls:

- MIX: Adjusts the balance between Dry and Wet signals. (continuous value)
- MIX ALT: Delay Level Sets the gain of the Wet signal. Ranges from 0dB to -12dB. For auto-scaling, set to min. (continuous value)

Layout
======

    TIME            MULTIPLY            FEEDBACK        FEEDBACK ALT        DIMENSION       MIX ALT         
    TIME ALT                                            MULTIPLY ALT                        MIX                                
    DYNAMICS        DIM.ALT & BP.ALT    DYNAMICS ALT                                        BYPASS

    Time            Multiply            Feedback        Feedback filter     Dimension       Delay level     
    Early mod                                           Late mod                            Mix                                
    Flanger depth   Flanger speed       Fl. mode & fback                                    Bypass





