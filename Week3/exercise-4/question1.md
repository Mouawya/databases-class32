The steps of converting from mysql to mongoDB:

1- Create an account on mongoDB.com so you have an Atlas cloud to store the data in.
2- Create a new cluster on Atlas with a user for the cluster.
3- Connect your cluster on Atlas with mongoDB compass, to do so you have to click on 'connect' in your cluster/database you created => choose connect with mongoDB compass => copy the string and past it in mongoDB compass to connect.
4- Create a new database in compass called 'world' and create the collections (city, country, countryLanguage) to move the data required into those collections.
5- Download the data wanted of the three tables on your own pc:
    - Past the command (select * into outfile 'city.csv' FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' from city;) in mysql Command Line with adding the folder location just before 'city.csv' where the table will be downloaded.
    - We add the field names by inserting extra row on the top using Excel.
6- We import the data of the three table via compass (import), refresh the cluster and we have all data converted.