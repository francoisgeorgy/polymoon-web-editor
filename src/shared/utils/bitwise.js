
// export function getRightShift(v) {
//     if (!v) return -1;  //means there isn't any 1-bit
//     let i = 0;
//     while ((v & 1) === 0) {
//         i++;
//         v = v>>1;
//     }
//     return i;
// }

export function setBits(target, value, mask, width = 8) {

    // console.log("setBits", target, value, b(value), b(mask));

    const rs = getRightShift(mask);
    // const msb_bit = (msb_byte >> k) & 0x01;

    const w = (1 << width) - 1;

    // make sure the value to set do not exceed the mask:
    let maskedValue = value & (mask >> rs);

    // shift the value to place it in the same place as the mask:
    maskedValue = maskedValue << rs;

    // invert the mask:
    let invert_mask = (~mask >>> 0) & w;     // convert an unsigned integer to a signed integer with the unsigned >>> shift operator

    // set the mask bits to zero and set the bits in the target:
    return (target & invert_mask) | maskedValue;
}
