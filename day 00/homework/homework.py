from turtle import *
speed(10)
width(7)
#goto(-100,-100)
color("green")
begin_fill()
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
end_fill()


forward(70)
left(90)

color("blue")
begin_fill()
forward(120)
right(90)

forward(70)
right(90)

forward(120)
end_fill()
#ROOf

penup()
goto(200,200)
pendown()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

penup()
goto(50,140)
pendown()

#window
color("yellow")
begin_fill()
right(60)
forward(30)
left(90)

forward(40)
left(90)

forward(30)
left(90)

forward(40)
end_fill()  

penup()
goto(160,140)
pendown()

begin_fill()
right(90)

forward(30)
right(90)

forward(40)
right(90)

forward(30)
right(90)

forward(40)
end_fill()



exitonclick()