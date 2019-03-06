import { R1Mapping, h2hTargetMapping} from './H2H_Mappings';
import { getSum } from '../../utilities';

// round abbreviations (must be uppercase):
// R1: Round 1 (parts A and B)
// R2: Round 2
// QF: Quarter Finals
// SF: Semi Finals
// MB: Bronze medal match
// MG: Gold medal match

export function assignTargets(universities, round) {
    console.log('inside assign targets')
    console.log(universities)
    universities.map((university, index) => {
        var rank = university.teamSeedingScore.overallRank
        universities[index].h2hScoring[round].target = R1Mapping[rank]

    })
    return universities
}

export function assignScoringTargets(universities, round) {

    // special case for round 1 where there are two rounds, A and B
    universities.map((university, index) => {
        var target = null
        if (round === 'R1') {
            target = university.h2hScoring[round].target.number
        } else {
            target = university.h2hScoring[round].target
        }

        universities[index].h2hScoring[round].scoringTarget = h2hTargetMapping.round[target]
        console.log(universities[index].h2hScoring[round].scoringTarget = h2hTargetMapping.round[target])
    })
    return universities
}

export function calculateH2HScores(universities, round) {
    // map all univerisities and calculate total end and total shoot off scores
    universities.map((university, index) => {
        var totalEndsScore = getSum(university.h2hScoring[round].ends)
        var totalShootOffScore = getSum(university.h2hScoring[round].shootOff)

        universities[index].h2hScoring[round].totalEndsScore = totalEndsScore
        universities[index].h2hScoring[round].totalShootOffScore = totalShootOffScore
        universities[index].h2hScoring[round].totalScore = totalEndsScore + totalShootOffScore
    })

    // group universities by scoring target and work out which of the two is currently winning
    // if a draw indicate a shoot off is required

    // scoringMapping.map((scoringTarget, index) => {
    //     if (round == 'R1') {
    //         targetUniversities = universities.find(key => key.h2hScoring[round].scoringTarget === scoringTarget)
    //         if (targetUniversities !== undefined) {
    //             targetUniversities.
    //         }
    //     } else {

    //     }
    // })

    return universities

}