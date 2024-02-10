## 7.9

a) 
if(age>=65);                 <---- wrong
    document.writeln( "Age greater than or equal to 65" );
else
    document.writeln( "Age is less than 65" );


the if statement is written wrong instead of ending with a ; you need to delete it
like:

if(age>=65)
    document.writeln( "Age greater than or equal to 65" );
else
    document.writeln( "Age is less than 65" );}

b) 
var x = 1, total;            --> total is not instantiated 
while ( x <= 10 ) {
    total += x;
    ++x; 
    }
Fix: 

int x = 1, 
int total = 0;
    while ( x <= 10 ) 
    {
        total += x;
        ++x; 
    }

c) 
var x=1;
var total=0;
While ( x <= 100 )          ---> no brackets 
    total += x;
    ++x;  
d) 
var y = 5;
while ( y > 0 ) 
{                           ---> no closing backets
    document.writeln( y );
    ++y;  


## 7.10


<!-- Exercise 7.10: ex08_10.html -->
<html>
   <head>
    <meta charset = "utf-8"> <title>Mystery Script</title>     
     <script>
        var y; var x=1;
        var total = 0;
        while(x<=10) {
        y = x * x;
        document.writeln( "<p>" + y + "</p>" ); 
        total += y;
        ++x;
        } // end while
        document.writeln( "<p>Total is " + total + "</p>" );
        </script>
    </head>
    <body>
    </body>
</html>

for x from 1 till 10 (10 iterations)

in the document it is written in a <p> tag y which is a X*X
so the output will be
1
4
8
... 
and the total is the summation of all X^2's and it is written to the HTML document

## 7.18


<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <title>Mystery Script</title>
      <script>
         var row = 10;
         var column;

         while (row >= 1) {
            column = 1;
            document.writeln("<p>");

            while (column <= 10) {
               document.write(row % 2 == 1 ? "<" : ">"); <--- if row is odd then seperate it with a column
               ++column;
            } // end while

            --row;
            document.writeln("</p>");
         } // end while
      </script>
   </head>
   <body>
   </body>
</html>

it generates a series of paragraphs where each paragraph contains a pattern of '<' and '>' characters. The pattern alternates between '<' and '>' for each row, creating an interesting visual effect. The final output will look like a staircase pattern of '<' and '>' characters.

## 8.4

a) 
For(x=100,x>=1,++x)     <----- you have to use a lowercase for
    document.writeln( x );


Solution:
for (let x = 100; x >= 1; --x)
    document.writeln(x);


b) The following code should print whether integer value is odd or even:
switch ( value % 2 ) { 
    case 0:
        document.writeln( "Even integer" ); 
    case 1:
        document.writeln( "Odd integer" );  <------- there is no break statement
}

solution:
switch (value % 2) { 
    case 0:
        document.writeln("Even integer");
        break;
    case 1:
        document.writeln("Odd integer");
}


c) The following code should output the odd integers from 19 to 1:
for ( x = 19; x >= 1; x += 2 ) <------ add var before c, change to -= 2
    document.writeln( x );

solution:
for (var x = 19; x >= 1; x -= 2) {
    document.writeln(x);
}


d) The following code should output the even integers from 2 to 100:

counter = 2; 
do {
    document.writeln( counter );
    counter += 2;
} While ( counter < 100 );  <------ while has to be in lowercase, and you have to include 100 so <=

solution:
counter = 2; 
do {
    document.writeln(counter);
    counter += 2;
} while (counter <= 100);


## 8.5

<!DOCTYPE html>
<!-- Exercise 8.5: ex08_05.html -->
<html>
  <head>
    <meta charset="utf-8">
    <title>Mystery</title>
    <script>
      document.writeln("<table>");
      for (var i = 1; i <= 7; i++) {
        document.writeln("<tr>");
        for (var j = 1; j <= 5; j++)
          document.writeln("<td>(" + i + ", " + j + ")</td>");
        document.writeln("</tr>");
      } // end for
      document.writeln("</table>");
    </script>
  </head>
  <body />
</html>

the script creates and displays a 7x5 table where each cell contains the coords for where the 
square is positioned within the table so like (1, 0), (1, 1) etc.
