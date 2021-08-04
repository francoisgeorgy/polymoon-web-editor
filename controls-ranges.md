Ranges of values sent by the Polymoon
=====================================

TIME    1..124
FEEDBACK    1..124
MIX         1.124
MULTIPLY    0..123
DIMENSION   0..123
DYNAMICS    0..123
TIME ALT    0..123
FEEDBACK ALT    1..124
MIX ALT         1..124      
MULTIPLY ALT    0..123
DIMENSION ALT   0..123
DYNAMICS ALT    0..123

Sending a value to the Polymoon
-------------------------------

The polymoon expect a CC value in the range 0..127. It then maps this value within its range and send it back.

    value_back = value_sent * (range_max - range_min) / 127 + range_min 

Examples:

For CC 19 (MULTIPLY) the range is 0..123 

    send CC 19 127 to Polymoon
    Polymoon sends back CC 19 123       

    127 * 123 / 127 = 123 

    send CC 19 63 to Polymoon
    Polymoon sends back CC 19 61
    
    63 * 123 / 127 = 61

For CC 16 (TIME) the range is 1..124

    send CC 19 10 to Polymoon
    Polymoon sends back CC 19 11       

    10 * (124 - 1) / 127 + 1 = 10.68 --> 11 
