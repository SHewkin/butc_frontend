import pandas as pd
import numpy as np

import json
import simplejson

individual_path = "D:\OneDrive\BUTC_2019_draft_data\individual.csv"
uni_path = "D:\OneDrive\BUTC_2019_draft_data\\uni.csv"
out_path = "D:\OneDrive\BUTC_2019_draft_data\\butc.json"

json_path = "D:\OneDrive\BUTC_2019_draft_data\\combined_json.csv"

SEEDING_TOP_TARGETS = {'A', 'B''C'}
ROUND_1 = 'R1'
ROUND_2 = 'R2'
QUARTER_FINALS = 'QF'
SEMI_FINALS = 'SF'
MEDAL_BRONZE = 'MB'
MEDAL_GOLD = 'MG'

SCORING_TARGETS = {
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


def main():
    individual = pd.read_csv(individual_path)
    uni = pd.read_csv(uni_path)

    combined = pd.merge(uni, individual, on='University', suffixes=['_h2h', '_seeding'])
    combined = combined.fillna("")

    team_groups = combined.groupby('University')

    universities = []
    for group in team_groups:
        university = group[1]
        uni = {}

        uni = add_main_uni_details(uni, university)
        uni = add_team_seeding_score(uni, university)
        uni = add_h2h(uni, university)
        uni = add_archers(uni, university)

        universities.append(uni)
        pass

    with open(out_path, 'w') as f:
        simplejson.dump(obj=universities, fp=f, ignore_nan=True)
        print(simplejson.dumps(universities, ignore_nan=True))

    pass


def add_main_uni_details(uni, university):
    # main uni details
    uni['id'] = float(university['Uni ID'].unique()[0])
    uni['name'] = university['University'].unique()[0]
    target = {}
    target['number'] = float(university['SeedingTargetNo'].unique()[0])
    if set(university['SeedingTargetPosition']) == SEEDING_TOP_TARGETS:
        target['position'] = 'top'
    else:
        target['position'] = 'bottom'
    uni['target'] = target
    return uni


def add_team_seeding_score(uni, university):
    # team seeding score
    team_seeding_score = {}
    team_seeding_score['overallRankingScore'] = university['Total for rankings'].sum()
    team_seeding_score['overallScore'] = float(round(university['Total'].sum()))
    team_seeding_score['overallRank'] = float(university['rank'].unique()[0])
    team_seeding_score['overallHits'] = float(university['Hits '].unique()[0])
    team_seeding_score['overallXs'] = float(university['Golds_h2h'].unique()[0])

    uni['teamSeedingScore'] = team_seeding_score
    return uni


def add_h2h(uni, university):
    h2hScoring = {}

    h2hScoring[ROUND_1] = add_h2h_round(university, ROUND_1)
    h2hScoring[ROUND_2] = add_h2h_round(university, ROUND_2)
    h2hScoring[QUARTER_FINALS] = add_h2h_round(university, QUARTER_FINALS)
    h2hScoring[SEMI_FINALS] = add_h2h_round(university, SEMI_FINALS)
    h2hScoring[MEDAL_BRONZE] = add_h2h_round(university, MEDAL_BRONZE)
    h2hScoring[MEDAL_GOLD] = add_h2h_round(university, MEDAL_GOLD)

    uni['h2hScoring'] = h2hScoring
    return uni


def add_h2h_round(university, round):
    h2h = {}
    if round == ROUND_1:
        target = {}
        target['number'] = float(university['{} TargetNum'.format(ROUND_1)].unique()[0])
        target['round'] = university['{} TargetRound'.format(ROUND_1)].unique()[0]
        h2h['target'] = target
        if target['round'] == 'B':
            h2h['scoringTarget'] = float(SCORING_TARGETS[target['number']] + 8)
        else:
            h2h['scoringTarget'] = float(SCORING_TARGETS[target['number']])
    else:
        h2h['target'] = add_h2h_value(university['{} Target'.format(round)].unique()[0])

    h2h['totalEndsScore'] = add_h2h_value(university['{} TotalEndsScore'.format(round)].unique()[0])
    h2h['totalShootOffScore'] = add_h2h_value(university['{} TotalShootOffScore'.format(round)].unique()[0])
    h2h['totalScore'] = add_h2h_value(university['{} TotalScore'.format(round)].unique()[0])
    h2h['ends'] = [

        add_h2h_value(university['{} End1'.format(round)].unique()[0]),
        add_h2h_value(university['{} End2'.format(round)].unique()[0]),
        add_h2h_value(university['{} End3'.format(round)].unique()[0]),
        add_h2h_value(university['{} End4'.format(round)].unique()[0])
    ]
    shoot_off_columns = [col for col in university.columns if '{} ShootOff'.format(round) in col]
    h2h['shootOff'] = []
    for column in shoot_off_columns:
        h2h['shootOff'].append(add_h2h_value(university[column].unique()[0]))

    return h2h


def add_h2h_value(value):
    try:
        return float(value)
    except ValueError:
        return np.nan


def add_archers(uni, university):
    archers = []
    for index, individual in university.iterrows():
        archer = {}

        archer['id'] = index
        archer['first_name'] = individual['Name']
        archer['surname'] = individual['Last Name']
        archer['gender'] = individual['Gender']
        archer['experience'] = individual['Experienced']
        archer['target'] = individual['SeedingTargetPosition']

        archer['seedingScore'] = add_seeding_score(individual)

        archers.append(archer)
    uni['archers'] = archers
    return uni


def add_seeding_score(individual):
    seeding_score = {}
    seeding_score['rankingScore'] = individual['Total for rankings']
    seeding_score['overallScore'] = float(individual['Total'])
    seeding_score['overallRank'] = float(individual['Position'])
    seeding_score['Hits'] = float(individual['Hits'])
    seeding_score['numXs'] = float(individual["X's"])
    seeding_score['num10s'] = float(individual["10's"])
    seeding_score['num9s'] = float(individual["9's"])
    seeding_score['num8s'] = float(individual["8's"])
    seeding_score['num7s'] = float(individual["7's"])
    seeding_score['num6s'] = float(individual["6's"])
    seeding_score['num5s'] = float(individual["5s"])
    seeding_score['num4s'] = float(individual["4s"])
    seeding_score['num3s'] = float(individual["3s"])
    seeding_score['num2s'] = float(individual["2s"])
    seeding_score['num1s'] = float(individual["1s"])
    seeding_score['arrows'] = add_arrows(individual)
    return seeding_score


def add_arrows(individual):
    arrows = {}
    arrows[1] = [
        process_arrow(individual['1']),
        process_arrow(individual['2']),
        process_arrow(individual['3'])
    ]
    arrows[2] = [
        process_arrow(individual['4']),
        process_arrow(individual['5']),
        process_arrow(individual['6'])
    ]
    arrows[3] = [
        process_arrow(individual['7']),
        process_arrow(individual['8']),
        process_arrow(individual['9'])
    ]
    arrows[4] = [
        process_arrow(individual['10']),
        process_arrow(individual['11']),
        process_arrow(individual['12'])
    ]
    arrows[5] = [
        process_arrow(individual['13']),
        process_arrow(individual['14']),
        process_arrow(individual['15'])
    ]
    arrows[6] = [
        process_arrow(individual['16']),
        process_arrow(individual['17']),
        process_arrow(individual['18'])
    ]
    arrows[7] = [
        process_arrow(individual['19']),
        process_arrow(individual['20']),
        process_arrow(individual['21'])
    ]
    arrows[8] = [
        process_arrow(individual['22']),
        process_arrow(individual['23']),
        process_arrow(individual['24'])
    ]
    arrows[9] = [
        process_arrow(individual['25']),
        process_arrow(individual['26']),
        process_arrow(individual['27'])
    ]
    arrows[10] = [
        process_arrow(individual['28']),
        process_arrow(individual['29']),
        process_arrow(individual['30'])
    ]

    return arrows


def process_arrow(arrow):
    try:
        return float(arrow)
    except ValueError:
        return arrow


if __name__ == '__main__':
    main()
