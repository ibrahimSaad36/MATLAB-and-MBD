clc
clear

x_body = [ 15 21 21 15 15 ];
y_body = [ 15 15 31 31 15 ];
plot(x_body ,y_body,'k')

hold on
x_base = [ 17.5 18.5 18.5 17.5 17.5 ];
y_base = [ 1 1 15 15 1 ];
plot(x_base, y_base, 'k')

hold on
r = 2;
a=0:pi/50:2*pi;
plot(r*cos(a)+18, r*sin(a)+28, 'k')
hold on
plot(r*cos(a)+18, r*sin(a)+23, 'k')
hold on
plot(r*cos(a)+18, r*sin(a)+18, 'k')

xlim([0 35])
ylim([0 35])

while true
    fill(r*cos(a)+18, r*sin(a)+28, 'r')
    pause(1)
    fill(r*cos(a)+18, r*sin(a)+28, 'w')
    fill(r*cos(a)+18, r*sin(a)+23, 'y')
    pause(1)
    fill(r*cos(a)+18, r*sin(a)+23, 'w')
    fill(r*cos(a)+18, r*sin(a)+18, 'g')
    pause(1)
    fill(r*cos(a)+18, r*sin(a)+18, 'w')
end