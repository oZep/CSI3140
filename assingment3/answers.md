## 7.9

a) 
if(age>=65); <---- wrong
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
var x = 1, total; --> total is not instantiated 
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
While ( x <= 100 ) ---> no brackets 
    total += x;
    ++x;  
d) 
var y = 5;
while ( y > 0 ) 
{   ---> no closing backets
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

