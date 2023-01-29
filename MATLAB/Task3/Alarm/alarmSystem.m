% this app is used to read and analog pin from arduino
% this [in is connected to an LM35 sensor to read temperarture
% once value is bigger than predefined value, it will cause an alarm

clc
clear

ard = arduino;

thresholdTemp = input('Enter threshold temperature: ');

configurePin(ard, 'A3', 'AnalogInput');

while true
    tempValue = readVoltage(ard, 'A3');
    disp(tempValue)
    if tempValue > thresholdTemp
        % produce an alarm
        % here causing beep of the os
        beep on
        beep
    else
        beep off
    end
end