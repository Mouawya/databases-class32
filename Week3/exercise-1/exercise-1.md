1- The columns that violate 1NF are:
dinner_date, food_code and food_description

2- Entities that could be extracted:
food, dinner and member

3- We can make the following tables and columns to meet the 3NF: - member tables consists of: - member_id - member_name - member_address

    - food table consists of:
      - food_code
      - food_description
      - venue_code

    - venue table consists of:
      - dinner_code
      - venue_code
      - venue_description

    - dinner table consists of:
      - member_id
      - dinner_id
      - dinner_date
