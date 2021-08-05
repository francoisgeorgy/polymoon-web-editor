## Time and Tempo

Modify TIME, save preset, read back preset.

    channel  3   control-change    16  00
    system-exclusive hex 00 20 10 02 01 02 26 0E 00 3D 17 56 0D 13 4D 5E 7F 0E 7F 18 7F 00 3F 00 01 0F 7F 65 7F 5C 5B 4D 41 7F 0E 7F 18 dec
                                                 ^^time                                          ^^tempo
   
    channel  3   control-change    16  34
    system-exclusive hex 00 20 10 02 01 02 26 0E 22 3D 17 56 0D 13 4D 5E 7F 0E 7F 18 7F 00 3F 00 20 0F 7F 65 7F 5C 5B 4D 41 7F 0E 7F 18 dec                                                 ^^time
                                                 ^^time                                          ^^tempo

    34 / 127 * 120 = 32

    channel  3   control-change    16  74
    system-exclusive hex 00 20 10 02 01 02 26 0E 4A 3D 17 56 0D 13 4D 5E 7F 0E 7F 18 7F 00 3F 00 46 0F 7F 65 7F 5C 5B 4D 41 7F 0E 7F 18 dec
                                                 ^^time                                          ^^tempo

    0x4A = 74       0x46 = 70
    74 / 127 * 120 = 70

    channel  3   control-change    16 127
    system-exclusive hex 00 20 10 02 01 02 26 0E 7F 3D 17 56 0D 13 4D 5E 7F 0E 7F 18 7F 00 3F 00 78 0F 7F 65 7F 5C 5B 4D 41 7F 0E 7F 18 dec
                                                 ^^time                                          ^^tempo

    0x78 = 120      max delay = 120*10 = 1200ms

Modify TEMPO, save preset, read back preset.

    system-exclusive hex 00 20 10 02 01 02 26 0E 28 3D 17 56 0D 13 4D 5E 7F 0E 7F 18 7F 00 3F 00 26 28 7F 65 7F 5C 5B 4D 41 7F 0E 7F 18 dec
                                                 ^^time                                          ^^tempo
    system-exclusive hex 00 20 10 02 01 02 26 0E 15 3D 17 56 0D 13 4D 5E 7F 0E 7F 18 7F 00 3F 00 14 15 7F 65 7F 5C 5B 4D 41 7F 0E 7F 18 dec
                                                 ^^time                                          ^^tempo
    system-exclusive hex 00 20 10 02 01 02 26 0E 71 3D 17 56 0D 13 4D 5E 7F 0E 7F 18 7F 00 3F 00 6B 71 7F 65 7F 5C 5B 4D 41 7F 0E 7F 18 dec
                                                 ^^time                                          ^^tempo

### Conclusion:

TIME and TEMPO represents the same parameter. Modifying one automatically updates the other.
