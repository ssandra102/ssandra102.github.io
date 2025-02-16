---
layout: post
title: Database connectivity in R Dashboard with MySQL
---

Once you have created the UI of your dashboard in R, it’s time to connect to the database. There are 2 possible uses of a database:
1. To retrieve data to work with it.
2. To store the data entered by the user through the UI, at some point(i.e. update the database from the dashboard).

Also, if there are multiple users for the dashboard one would be using a database to store and retrieve data related to individual users. A cloud service will help in scaling your product to a larger dataset that can also handle real-time requests neatly.

( This tutorial focuses on local MySQL database only)
----


**Pre-requisites**:
- MySQL Workbench installed on the system
- Basic knowledge on querying.

**Data retrieval**:
You can create a table in a database by exporting a csv, json file. Alternatively, you can use SQL queries to fill in the tables.

Here we will be using MySQL workbench, and how to connect it to the dashboard.

<h3>Create Table by exporting CSV file:</h3>

For this tutorial, I will be using a tutorial.csv. Open a new connection and create a new database **db** in MySQL workbench. For new users follow the steps given here to create a new database. Use this database by using this query : **use db;** .

Then, on the left side, click on **db**(below schemas), right-click over tables. Select Table Data Import Wizard. This will open a prompt asking for json, csv file location. Provide the **path/to/data.csv** or **path/to/data.json** and click next.

(image-caption- Select the path to your dataset, and press next.)

Then create a new table using a name you prefer. Click next until your table is created. Leave the datatype of the columns as default for now, though you can change it as you need!
----

Now to the main part. How to use this data into your R shiny dashboard. That is to pull the data from the database to work with it.

Import the libraries into your R program: **RODBC** , **RMySQL**

This step is for user authentication during login. In case, you need a user login page, the **check_credentials()** method can be used to verify the user. Let’s store these details into a new variable **credentials**.
```R
# written globally
credentials <- data.frame(
      # username root belongs to the admin, with root1 as password.
      user = c("user", "root"), # mandatory
      password = c("user1", "root1"), # mandatory
)
```

Then use the function **check_credentials()** to validate the credentials passed.
```R
# include in shiny ui
res_auth <- secure_server(
      check_credentials = check_credentials(credentials)
)
```

You can take it a step further by storing this details into a credentials database, in case you have multiple users!

Now, to actually establish a database connection use the **dbConnect()** method : by passing the driver, database name, server, port, user, and password. This method is defined inside the UI part of the R program.
```
#defining database connection
conn<- dbConnect(RMySQL::MySQL(),
        dbname="db",
        Server="localhost",
        port=3306,
        user="root",
        password="root1"
)
```

Since we established a connection, the main task is over!!

To query from the database, use the method **dbGetQuery()**. We pass the SQL query inside this method, along with the connection conn we defined above.
```R
# querying the database
result <- dbGetQuery(conn, "SELECT * FROM table_name;" )
```

Here, the resulting table of the query will be stored in the variable **result**. We can use this variable according to the application.

To query into the database, use the method **dbExecute()**. We pass the connection **conn** and the SQL query to this method.
```R
## command to update database
dbExecute(conn, "INSERT INTO table_name("val1", "val2");")
```

>_dbGetQuery_ runs a query and returns the records whereas _dbExecute_ runs SQL query but does not return any records.

The query inside the quotes will get executed and thus the database gets updated.

Some other methods:

- dbSendQuery() sends the SQL query to the DBMS and returns a result object. The query is limited to SELECT statements. If you want to send other statements, such as INSERT, UPDATE, DELETE, etc, use dbSendStatement().

- dbClearResult() is called when you have finished retrieving data. It releases the resources associated with the result object.

After opening a connection it is necessary to close it, we use the method **dbDisconnect()** : passing the connection we want to close.
```R
# disconnect from database
onSessionEnded(function() {
dbDisconnect(con)
})
```

In case you face the error: _Cannot allocate a new connection: 16 connections already opened_, use the following function to kill all the opened connections at once. Once defined call the function **killDbConnections()** inside server part of the program.

```R
# include this library
library(RMySQL)  

# to kill all the open connections at once
killDbConnections <- function () {
  all_cons <- dbListConnections(MySQL())
  #print(all_cons)
  for(con in all_cons)
    +  dbDisconnect(con)
  #print(paste(length(all_cons), " connections killed."))

}
```

We covered the basics of how to create a table in MySQL workbench, establish a connection with database, and retrieve the data using R shiny framework for creating dashboards.
