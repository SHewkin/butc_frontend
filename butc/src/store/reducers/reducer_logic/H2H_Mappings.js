// Mapping qualifying scores to targets

export const R1Mapping = {
    1: { number: 1, round: 'A' },
    2: { number: 16, round: 'B' },

    3: { number: 1, round: 'B' },
    4: { number: 16, round: 'A' },

    5: { number: 9, round: 'A' },
    6: { number: 8, round: 'B' },

    7: { number: 9, round: 'B' },
    8: { number: 8, round: 'A' },

    9: { number: 5, round: 'A' },
    10: { number: 12, round: 'B' },

    11: { number: 5, round: 'B' },
    12: { number: 12, round: 'A' },

    13: { number: 13, round: 'A' },
    14: { number: 4, round: 'B' },

    15: { number: 13, round: 'B' },
    16: { number: 4, round: 'A' },

    17: { number: 3, round: 'A' },
    18: { number: 14, round: 'B' },

    19: { number: 3, round: 'B' },
    20: { number: 14, round: 'A' },

    21: { number: 11, round: 'A' },
    22: { number: 6, round: 'B' },

    23: { number: 11, round: 'B' },
    24: { number: 6, round: 'A' },

    25: { number: 7, round: 'A' },
    26: { number: 10, round: 'B' },

    27: { number: 7, round: 'B' },
    28: { number: 10, round: 'A' },

    29: { number: 15, round: 'A' },
    30: { number: 2, round: 'B' },

    31: { number: 15, round: 'B' },
    32: { number: 2, round: 'A' }

}

// maps assigned targets to scoring target
// Target num (irrelevant of A/B) : Scoring Target Num
export const scoringMapping = {
    1: 1,
    2: 1,
    3: 2,
    4: 2,
    5: 3,
    6: 3,
    7: 4,
    8: 4,
    9: 5,
    10: 5,
    11: 6,
    12: 6,
    13: 7,
    14: 7,
    15: 8,
    16: 8
}

// Maps current target to next target, from R1 to which target should be used for the medal matches
export const h2hTargetMapping = {
    R1: {
        1: 1,
        2: 1,
        3: 2,
        4: 2,
        5: 3,
        6: 3,
        7: 4,
        8: 4,
        9: 5,
        10: 5,
        11: 6,
        12: 6,
        13: 7,
        14: 7,
        15: 8,
        16: 8,
        17: 9,
        18: 9,
        19: 10,
        20: 10,
        21: 11,
        22: 11,
        23: 12,
        24: 12,
        25: 13,
        26: 13,
        27: 14,
        28: 14,
        29: 15,
        30: 15,
        31: 16,
        32: 16,
    },
    R2: {
        1: 5,
        2: 5,
        3: 6,
        4: 6,
        5: 7,
        6: 7,
        7: 8,
        8: 8,
        9: 9,
        10: 9,
        11: 10,
        12: 10,
        13: 11,
        14: 11,
        15: 12,
        16: 12
    },
    QF: {
        5: 7,
        6: 7,
        7: 8,
        8: 8,
        9: 9,
        10: 9,
        11: 10,
        12: 10
    },
    SF: {
        7: 9,
        8: 8,
        9: 9,
        10: 9
    }
}

