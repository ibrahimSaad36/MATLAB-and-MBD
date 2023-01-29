function varargout = TrafficLightUsingArduino(varargin)
% TRAFFICLIGHTUSINGARDUINO MATLAB code for TrafficLightUsingArduino.fig
%      TRAFFICLIGHTUSINGARDUINO, by itself, creates a new TRAFFICLIGHTUSINGARDUINO or raises the existing
%      singleton*.
%
%      H = TRAFFICLIGHTUSINGARDUINO returns the handle to a new TRAFFICLIGHTUSINGARDUINO or the handle to
%      the existing singleton*.
%
%      TRAFFICLIGHTUSINGARDUINO('CALLBACK',hObject,eventData,handles,...) calls the local
%      function named CALLBACK in TRAFFICLIGHTUSINGARDUINO.M with the given input arguments.
%
%      TRAFFICLIGHTUSINGARDUINO('Property','Value',...) creates a new TRAFFICLIGHTUSINGARDUINO or raises the
%      existing singleton*.  Starting from the left, property value pairs are
%      applied to the GUI before TrafficLightUsingArduino_OpeningFcn gets called.  An
%      unrecognized property name or invalid value makes property application
%      stop.  All inputs are passed to TrafficLightUsingArduino_OpeningFcn via varargin.
%
%      *See GUI Options on GUIDE's Tools menu.  Choose "GUI allows only one
%      instance to run (singleton)".
%
% See also: GUIDE, GUIDATA, GUIHANDLES

% Edit the above text to modify the response to help TrafficLightUsingArduino

% Last Modified by GUIDE v2.5 29-Jan-2023 11:22:00

% Begin initialization code - DO NOT EDIT
gui_Singleton = 1;
gui_State = struct('gui_Name',       mfilename, ...
                   'gui_Singleton',  gui_Singleton, ...
                   'gui_OpeningFcn', @TrafficLightUsingArduino_OpeningFcn, ...
                   'gui_OutputFcn',  @TrafficLightUsingArduino_OutputFcn, ...
                   'gui_LayoutFcn',  [] , ...
                   'gui_Callback',   []);
if nargin && ischar(varargin{1})
    gui_State.gui_Callback = str2func(varargin{1});
end

if nargout
    [varargout{1:nargout}] = gui_mainfcn(gui_State, varargin{:});
else
    gui_mainfcn(gui_State, varargin{:});
end
% End initialization code - DO NOT EDIT


% --- Executes just before TrafficLightUsingArduino is made visible.
function TrafficLightUsingArduino_OpeningFcn(hObject, eventdata, handles, varargin)
% This function has no output args, see OutputFcn.
% hObject    handle to figure
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
% varargin   command line arguments to TrafficLightUsingArduino (see VARARGIN)

% Choose default command line output for TrafficLightUsingArduino
handles.output = hObject;

% Update handles structure
guidata(hObject, handles);

% UIWAIT makes TrafficLightUsingArduino wait for user response (see UIRESUME)
% uiwait(handles.figure1);
clc
clear global ard
global ard
ard = arduino;
% Green
configurePin(ard, 'D2', 'DigitalOutput');
% Red
configurePin(ard, 'D3', 'DigitalOutput');
% Yellow
configurePin(ard, 'D4', 'DigitalOutput');


% --- Outputs from this function are returned to the command line.
function varargout = TrafficLightUsingArduino_OutputFcn(hObject, eventdata, handles) 
% varargout  cell array for returning output args (see VARARGOUT);
% hObject    handle to figure
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Get default command line output from handles structure
varargout{1} = handles.output;


% --- Executes on button press in radiobuttonAutomaticMode.
function radiobuttonAutomaticMode_Callback(hObject, eventdata, handles)
% hObject    handle to radiobuttonAutomaticMode (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hint: get(hObject,'Value') returns toggle state of radiobuttonAutomaticMode


% --- Executes on button press in radiobuttonManualMode.
function radiobuttonManualMode_Callback(hObject, eventdata, handles)
% hObject    handle to radiobuttonManualMode (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hint: get(hObject,'Value') returns toggle state of radiobuttonManualMode



function editAutomaticDelayVal_Callback(hObject, eventdata, handles)
% hObject    handle to editAutomaticDelayVal (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of editAutomaticDelayVal as text
%        str2double(get(hObject,'String')) returns contents of editAutomaticDelayVal as a double


% --- Executes during object creation, after setting all properties.
function editAutomaticDelayVal_CreateFcn(hObject, eventdata, handles)
% hObject    handle to editAutomaticDelayVal (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end


% --- Executes on button press in pushbuttonAutomaticStart.
function pushbuttonAutomaticStart_Callback(hObject, eventdata, handles)
% hObject    handle to pushbuttonAutomaticStart (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Getting delay value
global ard
strDelayVal = get(handles.editAutomaticDelayVal,'string');
if handles.radiobuttonAutomaticMode.Value == 1
    if ~isempty(strDelayVal)
        delayVal = str2double(strDelayVal);
        disp(delayVal)
        val = delayVal;
        set(handles.textCountDown, 'String', strcat('RED: ', strDelayVal));
        while val > 0
            writeDigitalPin(ard, 'D2', 1);
            pause(delayVal)
            val = val - 1;
            myString = sprintf('RED: %d', val);
            set(handles.textCountDown, 'String', myString);
        end
        val = delayVal;
        writeDigitalPin(ard, 'D2', 0);
        set(handles.textCountDown, 'String', strcat('GREEN: ', strDelayVal));
        pause(0.01)
        while val > 0
            writeDigitalPin(ard, 'D3', 1);
            pause(delayVal)
            val = val - 1;
            myString = sprintf('GREEN: %d', val);
            set(handles.textCountDown, 'String', myString);
        end
        val = delayVal;
        writeDigitalPin(ard, 'D3', 0);
        set(handles.textCountDown, 'String', strcat('YELL: ', strDelayVal));
        pause(0.01)
        while val > 0
            writeDigitalPin(ard, 'D4', 1);
            pause(delayVal)
            val = val - 1;
            myString = sprintf('YELL: %d', val);
            set(handles.textCountDown, 'String', myString);
        end
        writeDigitalPin(ard, 'D4', 0);
        set(handles.textCountDown, 'String', 'Count Down');
    end
else
    disp('Automatic mode not selected')
end

% --- Executes on button press in pushbuttonManualTurnOn.
function pushbuttonManualTurnOn_Callback(hObject, eventdata, handles)
% hObject    handle to pushbuttonManualTurnOn (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
global ard
if handles.radiobuttonManualMode.Value == 1
    if handles.radiobuttonManualRed.Value == 1
        writeDigitalPin(ard, 'D2', 1);
        pause(1)
        writeDigitalPin(ard, 'D2', 0);
    elseif handles.radiobuttonManualGreen.Value == 1
        writeDigitalPin(ard, 'D3', 1);
        pause(1)
        writeDigitalPin(ard, 'D3', 0);
    elseif handles.radiobuttonManualYellow.Value == 1
        writeDigitalPin(ard, 'D4', 1);
        pause(1)
        writeDigitalPin(ard, 'D4', 0);
    else
        disp('No LED selected')
    end
else
    disp('Manual mode not selected')
end
