from turtle import *
screensize(2000,2000)
color("black")
width(3)
speed(30)
hideturtle()

penup()
goto (-500,-300)
pendown()

#base of the castle
forward(800)

left(90)
forward(300)

#right tower

left(45)
forward(100)

left(90)
forward(100)

left(45)
forward(300)


left(180)
forward(400)

#roof base

left(90)
forward(659.4)

left(90)
forward(400)

#left tower
right(180)
forward(300)

left(45)
forward(100)

left(90)
forward(100)

left(45)
forward(300)

left(90)
forward(141.4)

left(90)
forward(400)

#roof
color("grey")
begin_fill()

fillcolor("grey")
penup()
goto (159,100)
pendown()
circle(329.5,180)
end_fill()

#flag
penup()
goto(-170.5,429.5)
pendown()
color("black")
begin_fill()

width(10)
left(180)
forward(150)

right(90)
forward(100)

right(90)
forward(100)

right(90)
forward(100)

end_fill()

right(90)
forward(50)

right(90)
forward(25)

color("white")
write("GOA", move=False, align='left', font=('Arial', 15, 'normal'))

#door

penup()
goto(-100,-299)
pendown()

color("brown")
begin_fill()

left(90)
forward(100)

circle(70,180)

forward(100)

end_fill()

#main windows

penup()
goto(-450,-150)
pendown()

color("yellow")
begin_fill()

left(180)
forward(100)

right(90)
forward(100)

right(90)
forward(100)

right(90)
forward(100)


penup()
goto(109,-150)
pendown()

right(90)
forward(100)

left(90)
forward(100)

left(90)
forward(100)

left(90)
forward(100)

end_fill()

#middel window

penup()
goto(-170,-70)
pendown()
begin_fill()

circle(50)

end_fill()

#tower windows

penup()
goto(-550,-90)
pendown()
begin_fill()


right(90)
forward(60)

right(90)
forward(60)

right(90)
forward(60)

right(90)
forward(60)

penup()
goto(260,-90)
pendown()

right(90)
forward(60)

right(90)
forward(60)

right(90)
forward(60)

right(90)
forward(60)

end_fill()

color("black")
width(3)

penup()
goto(-500,0)
pendown()

right(180)
forward(141)

penup()
goto(300,0)
pendown()

forward(141)

exitonclick()