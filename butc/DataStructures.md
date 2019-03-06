Data Structures - What's stored in the redux store?
====================================================

activeItem (str): current item on NavBar

last_university_id (int): id of last university to be added to the list (allows unique identifier)

universities(array): Main data store, structure below:
    {
        id (int) : unique identifier
        name (str) : university name
        target (array) : target number and position for seeding round{
            number (int) : target number
            position (str) : position (top or bottom)
        }
        teamSeedingScore (array): university overall score {
            overallScore (int): total
            overallRank (int): ranking amongst universities
            overallHits (int): Total number of hits
            overallXs (int): Total number of Xs
        }
        archers (array): {
            id (int)
            first_name (str)
            surname (str)
            gender (str): M or F
            experience (str) E or N
            target (str): Position on target A-C or D-F
            seedingScore (array) {
                overallScore (int)
                overallRank (int)
                Hits (int)
                numXs (int)
                num10s (int)
                num9s (int)
                num8s (int)
                num7s (int)
                num6s (int)
                num5s (int)
                num4s (int)
                num3s (int)
                num2s (int)
                num1s (int)
                arrows (array):
                    1 (array [3]): List of end's arrow values
                    2 (array [3]): List of end's arrow values
                    3 (array [3]): List of end's arrow values
                    4 (array [3]): List of end's arrow values
                    5 (array [3]): List of end's arrow values
                    6 (array [3]): List of end's arrow values
                    7 (array [3]): List of end's arrow values
                    8 (array [3]): List of end's arrow values
                    9 (array [3]): List of end's arrow values
                    10 (array [3]): List of end's arrow values
            }
        }
    }

targets (array): Seeding score available target numbers (1-16 top and bottom)
    {
        number (int)
        position (str)
    }

university_names (array) : list of university names - used for displaying university scores?

<!-- IDEAS for further rearrangement of data-->
archers (array):
{
    id (int)
    first_name (str)
    surname (str)
    gender (str): M or F
    experience (str) E or N
    target (str): Position on target A-C or D-F
    university_id (str): Reference to associated university
    overallScore (int)  
                overallRank (int)
                Hits (int)
                numXs (int)
                num10s (int)
                num9s (int)
                num8s (int)
                num7s (int)
                num6s (int)
                num5s (int)
                num4s (int)
                num3s (int)
                num2s (int)
                num1s (int)
                arrows (array):
                    1 (array [3]): List of end's arrow values
                    2 (array [3]): List of end's arrow values
                    3 (array [3]): List of end's arrow values
                    4 (array [3]): List of end's arrow values
                    5 (array [3]): List of end's arrow values
                    6 (array [3]): List of end's arrow values
                    7 (array [3]): List of end's arrow values
                    8 (array [3]): List of end's arrow values
                    9 (array [3]): List of end's arrow values
                    10 (array [3]): List of end's arrow values
}