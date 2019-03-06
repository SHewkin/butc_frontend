// Create a blank competition 

// competition name

// possible variables
// -  num universities <- default 16
// - num targets <- = num universities


// intiialisation procedures

// iniitalise blank states 
// - univerisities: []
// - archerScores: []
// - last_university_id: 0

// create target mappings for seeding round


function createTargetMappings(num_targets) {
    const targets = []
    for (var i = 1; i < num_targets + 1; i++) {
        targets.push({ number: i, position: 'top' })
        targets.push({ number: i, position: 'bottom' })
    }

    return targets
}

function iniitaliseSeedingScore() {
    const seedingScore = {
        rankingScore: none,
        overallScore: none,
        overallRank: none,
        Hits: none,
        numXs: none,
        num1nones: none,
        num9s: none,
        num8s: none,
        num7s: none,
        num6s: none,
        num5s: none,
        num4s: none,
        num3s: none,
        num2s: none,
        num1s: none,
        arrows: {
            1: [none, none, none],
            2: [none, none, none],
            3: [none, none, none],
            4: [none, none, none],
            5: [none, none, none],
            6: [none, none, none],
            7: [none, none, none],
            8: [none, none, none],
            9: [none, none, none],
            10: [none, none, none]
        }
    }
    return seedingScore
}

function initialiseArcher() {
    const archer = {
        id: none, // ideally set this to a unique value here if possible
        first_name: none,
        surname: none,
        gender: none,
        experience: none,
        target: none,
        seedingScore: iniitaliseSeedingScore()
    }
    return archer
}

function intiialiseUniversity() {
    const university = {
        id: none, // ideally set this to a unique value here if possible
        name: none,
        target: none,
        teamSeedingScore: {
            overallScore: none,
            overallRank: none,
            overallHits: none,
            overallXs: none,
            overallRankingScore: none,
            currentEnd: 1
        },
        archers: []
    }
    for (var i = 0; 3; i++) {
        university.archers.push(initialiseArcher())
    }
    return university
}
