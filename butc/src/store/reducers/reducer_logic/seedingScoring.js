import { count, getSum } from '../../utilities';
import { assignTargets } from './h2h_logic';

function cleanArrows(arrows) {
    var cleanedArrows = []
    for (var key in arrows) {
        if (arrows[key] === 'M') {
            cleanedArrows.push(0)
        } else if (arrows[key] === 'X') {
            cleanedArrows.push(10)
        } else {
            cleanedArrows.push(arrows[key])
        }
    }

    return cleanedArrows
}

export function calculateScores(universities) {
    // seeding score wrapper for updateScores reducer.js

    console.log('calculating archer scores')
    universities = calculateArcherScores(universities)
    console.log(universities)

    console.log('calculatingUniversityScores')
    universities = calculateUniversityScores(universities)
    console.log(universities)

    console.log('ranking universities')
    universities = rankUniversities(universities)
    console.log(universities)

    console.log('assigning H2H r1 targets')
    universities = assignTargets(universities, "R1")
    console.log(universities)

    return universities
}

export function calculateArcherScores(universities) {
    console.log('inside calculateArcherScores')
    const archerScores = []
    // May need to restructure data in order to reduce the number of loops
    universities.map((university, uni_index) => {
        university.archers.map((archer, archer_index) => {
            var overallScore = 0
            var hits = 0
            var numXs = 0
            var num10s = 0
            var num9s = 0
            var num8s = 0
            var num7s = 0
            var num6s = 0
            var num5s = 0
            var num4s = 0
            var num3s = 0
            var num2s = 0
            var num1s = 0
            var rankingScore = 0

            // Calculate scores
            const arrows = archer.seedingScore.arrows
            console.log(arrows)
            for (var key in arrows) {
                if (key > 0) { //temporary fix until seeding scoring targets are redesigned
                    overallScore = overallScore + getSum(cleanArrows(arrows[key]))
                    hits = hits + (arrows[key].length - count(arrows[key], 'M'))
                    numXs = numXs + count(arrows[key], 'X')
                    num10s = num10s + count(arrows[key], 10)
                    num9s = num9s + count(arrows[key], 9)
                    num8s = num9s + count(arrows[key], 8)
                    num7s = num9s + count(arrows[key], 7)
                    num6s = num9s + count(arrows[key], 6)
                    num5s = num9s + count(arrows[key], 5)
                    num4s = num9s + count(arrows[key], 4)
                    num3s = num9s + count(arrows[key], 3)
                    num2s = num9s + count(arrows[key], 2)
                    num1s = num9s + count(arrows[key], 1)

                    rankingScore = overallScore + (numXs * 1e-2) + (num10s * 1e-3) + (num9s * 1e-4) + (num8s * 1e-5) + (num7s * 1e-6) + (num6s * 1e-7) + (num5s * 1e-8) + (num4s * 1e-9) + (num3s * 1e-10) + (num2s * 1e-11) + (num1s * 1e-12)
                }
            }

            universities[uni_index].archers[archer_index].seedingScore.rankingScore = rankingScore
            universities[uni_index].archers[archer_index].seedingScore.overallScore = overallScore
            universities[uni_index].archers[archer_index].seedingScore.hits = hits
            universities[uni_index].archers[archer_index].seedingScore.numXs = numXs
            universities[uni_index].archers[archer_index].seedingScore.num10s = num10s
            universities[uni_index].archers[archer_index].seedingScore.num9s = num9s
            universities[uni_index].archers[archer_index].seedingScore.num8s = num8s
            universities[uni_index].archers[archer_index].seedingScore.num7s = num7s
            universities[uni_index].archers[archer_index].seedingScore.num6s = num6s
            universities[uni_index].archers[archer_index].seedingScore.num5s = num5s
            universities[uni_index].archers[archer_index].seedingScore.num4s = num4s
            universities[uni_index].archers[archer_index].seedingScore.num3s = num3s
            universities[uni_index].archers[archer_index].seedingScore.num2s = num2s
            universities[uni_index].archers[archer_index].seedingScore.num1s = num1s

            archerScores.push(
                {
                    id: archer.id,
                    rankingScore: archer.rankingScore
                }
            )
        })
    })
    return universities
}

export function calculateUniversityScores(universities) {
    universities.map((university, index) => {
        universities[index].teamSeedingScore.overallScore = university.archers[0].seedingScore.overallScore + university.archers[1].seedingScore.overallScore + university.archers[2].seedingScore.overallScore
        universities[index].teamSeedingScore.overallHits = university.archers[0].seedingScore.hits + university.archers[1].seedingScore.hits + university.archers[2].seedingScore.hits
        universities[index].teamSeedingScore.overallXs = university.archers[0].seedingScore.numXs + university.archers[1].seedingScore.numXs + university.archers[2].seedingScore.numXs
        universities[index].teamSeedingScore.overallRankingScore = university.archers[0].seedingScore.rankingScore + university.archers[1].seedingScore.rankingScore + university.archers[2].seedingScore.rankingScore

    })
    return universities
}

export function rankUniversities(universities) {

    universities = universities.sort(function (a, b) { return b.teamSeedingScore.overallRankingScore - a.teamSeedingScore.overallRankingScore })

    universities.map((university, index) => {
        universities[index].teamSeedingScore.overallRank = index + 1
    })
    return universities
}

export function rank_archers(universities) {
    var archerScores = []
    console.log(universities)
    universities.map((university) => {
        university.archers.map((archer, index) => {
            archerScores.push(
                {
                    id: archer.id,
                    rankingScore: archer.seedingScore.rankingScore,
                    seedingScore: archer.seedingScore,
                    first_name: archer.first_name,
                    surname: archer.surname,
                    rank: index
                }
            )
        })
    })

    console.log(archerScores)
    archerScores = archerScores.sort(function (a, b) { return b.rankingScore - a.rankingScore })

    archerScores.map((archer, index) => {
        archerScores[index].rank = index + 1
        // universities
    })
    return archerScores

}
