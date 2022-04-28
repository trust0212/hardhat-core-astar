/// <reference types="node" />
/**
 * This function hashes its input with a NON cryptographic.
 *
 * This function is useful for creating unique identifiers based on some
 * input. You can be confident that there won't be any collision, as long
 * as the input is not generated by an attacker.
 *
 * The exact algorithm being used shouldn't matter.
 */
export declare function createNonCryptographicHashBasedIdentifier(input: Buffer): Buffer;
//# sourceMappingURL=hash.d.ts.map