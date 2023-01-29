function varargout = calculator(varargin)
% CALCULATOR MATLAB code for calculator.fig
%      CALCULATOR, by itself, creates a new CALCULATOR or raises the existing
%      singleton*.
%
%      H = CALCULATOR returns the handle to a new CALCULATOR or the handle to
%      the existing singleton*.
%
%      CALCULATOR('CALLBACK',hObject,eventData,handles,...) calls the local
%      function named CALLBACK in CALCULATOR.M with the given input arguments.
%
%      CALCULATOR('Property','Value',...) creates a new CALCULATOR or raises the
%      existing singleton*.  Starting from the left, property value pairs are
%      applied to the GUI before calculator_OpeningFcn gets called.  An
%      unrecognized property name or invalid value makes property application
%      stop.  All inputs are passed to calculator_OpeningFcn via varargin.
%
%      *See GUI Options on GUIDE's Tools menu.  Choose "GUI allows only one
%      instance to run (singleton)".
%
% See also: GUIDE, GUIDATA, GUIHANDLES

% Edit the above text to modify the response to help calculator

% Last Modified by GUIDE v2.5 19-Dec-2022 09:40:14

% Begin initialization code - DO NOT EDIT
gui_Singleton = 1;
gui_State = struct('gui_Name',       mfilename, ...
                   'gui_Singleton',  gui_Singleton, ...
                   'gui_OpeningFcn', @calculator_OpeningFcn, ...
                   'gui_OutputFcn',  @calculator_OutputFcn, ...
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


% --- Executes just before calculator is made visible.
function calculator_OpeningFcn(hObject, eventdata, handles, varargin)
% This function has no output args, see OutputFcn.
% hObject    handle to figure
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
% varargin   command line arguments to calculator (see VARARGIN)

% Choose default command line output for calculator
handles.output = hObject;

% Update handles structure
guidata(hObject, handles);

% UIWAIT makes calculator wait for user response (see UIRESUME)
% uiwait(handles.figure1);


% --- Outputs from this function are returned to the command line.
function varargout = calculator_OutputFcn(hObject, eventdata, handles) 
% varargout  cell array for returning output args (see VARARGOUT);
% hObject    handle to figure
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Get default command line output from handles structure
varargout{1} = handles.output;



function txtFieldOp1_Callback(hObject, eventdata, handles)
% hObject    handle to txtFieldOp1 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of txtFieldOp1 as text
%        str2double(get(hObject,'String')) returns contents of txtFieldOp1 as a double


% --- Executes during object creation, after setting all properties.
function txtFieldOp1_CreateFcn(hObject, eventdata, handles)
% hObject    handle to txtFieldOp1 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end



function txtFieldOp2_Callback(hObject, eventdata, handles)
% hObject    handle to txtFieldOp2 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of txtFieldOp2 as text
%        str2double(get(hObject,'String')) returns contents of txtFieldOp2 as a double


% --- Executes during object creation, after setting all properties.
function txtFieldOp2_CreateFcn(hObject, eventdata, handles)
% hObject    handle to txtFieldOp2 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end


% --- Executes on button press in btnCalculate.
function btnCalculate_Callback(hObject, eventdata, handles)
% hObject    handle to btnCalculate (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
set(handles.txtFieldEqual, 'String', '');
op1 = get(handles.txtFieldOp1, 'String');
op2 = get(handles.txtFieldOp2, 'String');
contents = cellstr(get(handles.popUpOperation,'String'));
operation = contents{get(handles.popUpOperation,'Value')};
if(isempty(op1))
    set(handles.labelError, 'String', 'Enter operand 1');
elseif(isempty(op2))
    set(handles.labelError, 'String', 'Enter operand 2');
else
    set(handles.labelError, 'String', 'OK, No Errors');
    val1 = str2double(get(handles.txtFieldOp1, 'String'));
    val2 = str2double(get(handles.txtFieldOp2, 'String'));
    switch(operation)
        case '+'
            result = val1 + val2;
            set(handles.txtFieldEqual, 'String', result);
        case '-'
            result = val1 - val2;
            set(handles.txtFieldEqual, 'String', result);
        case 'x'
            result = val1 * val2;
            set(handles.txtFieldEqual, 'String', result);
        case '/'
            if val2 == 0
                set(handles.labelError, 'String', 'Can not divide by zero');
            else
                result = val1 / val2;
                set(handles.txtFieldEqual, 'String', result);
            end
    end
end



function txtFieldEqual_Callback(hObject, eventdata, handles)
% hObject    handle to txtFieldEqual (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of txtFieldEqual as text
%        str2double(get(hObject,'String')) returns contents of txtFieldEqual as a double


% --- Executes during object creation, after setting all properties.
function txtFieldEqual_CreateFcn(hObject, eventdata, handles)
% hObject    handle to txtFieldEqual (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end

% --- Executes on selection change in popUpOperation.
function popUpOperation_Callback(hObject, eventdata, handles)
% hObject    handle to popUpOperation (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
contents = cellstr(get(hObject,'String'));
operation = contents{get(hObject,'Value')};
set(handles.labelOperation, 'String', operation);
% Hints: contents = cellstr(get(hObject,'String')) returns popUpOperation contents as cell array
%        contents{get(hObject,'Value')} returns selected item from popUpOperation


% --- Executes during object creation, after setting all properties.
function popUpOperation_CreateFcn(hObject, eventdata, handles)
% hObject    handle to popUpOperation (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: popupmenu controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end



function editTextXAxis_Callback(hObject, eventdata, handles)
% hObject    handle to editTextXAxis (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of editTextXAxis as text
%        str2double(get(hObject,'String')) returns contents of editTextXAxis as a double


% --- Executes during object creation, after setting all properties.
function editTextXAxis_CreateFcn(hObject, eventdata, handles)
% hObject    handle to editTextXAxis (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end



function editTextYAxis_Callback(hObject, eventdata, handles)
% hObject    handle to editTextYAxis (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of editTextYAxis as text
%        str2double(get(hObject,'String')) returns contents of editTextYAxis as a double


% --- Executes during object creation, after setting all properties.
function editTextYAxis_CreateFcn(hObject, eventdata, handles)
% hObject    handle to editTextYAxis (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end


% --- Executes on selection change in popUpAxes.
function popUpAxes_Callback(hObject, eventdata, handles)
% hObject    handle to popUpAxes (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: contents = cellstr(get(hObject,'String')) returns popUpAxes contents as cell array
%        contents{get(hObject,'Value')} returns selected item from popUpAxes


% --- Executes during object creation, after setting all properties.
function popUpAxes_CreateFcn(hObject, eventdata, handles)
% hObject    handle to popUpAxes (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: popupmenu controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end



function editTextEqualAxes_Callback(hObject, eventdata, handles)
% hObject    handle to editTextEqualAxes (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of editTextEqualAxes as text
%        str2double(get(hObject,'String')) returns contents of editTextEqualAxes as a double


% --- Executes during object creation, after setting all properties.
function editTextEqualAxes_CreateFcn(hObject, eventdata, handles)
% hObject    handle to editTextEqualAxes (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end


% --- Executes on button press in btnCalculateAxes.
function btnCalculateAxes_Callback(hObject, eventdata, handles)
% hObject    handle to btnCalculateAxes (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
set(handles.editTextEqualAxes, 'String', '');
contents = cellstr(get(handles.popUpAxes,'String'));
operation = contents{get(handles.popUpAxes,'Value')};
operand1 = get(handles.editTextXAxis, 'String');
operand2 = get(handles.editTextYAxis, 'String');
if isempty(operand1)
    set(handles.labelErrorAxes, 'String', 'Enter X axis');
    disp('Enter op1');
elseif isempty(operand2)
    disp('Enter op2');
    set(handles.labelErrorAxes, 'String', 'Enter Y axis');
else
    set(handles.labelErrorAxes, 'String', 'Ok, No Errors');
    vec1 = str2num(operand1);
    vec2 = str2num(operand2);
    [r1, c1] = size(vec1);
    [r2, c2] = size(vec2);
    switch operation
        case '+'
            if(r1 == r2 && c1 == c2)
                result = vec1 + vec2;
                set(handles.editTextEqualAxes, 'String', num2str(result));
            else
                set(handles.labelErrorAxes, 'String', 'Size not equal');
            end
        case '-'
            if(r1 == r2 && c1 == c2)
                result = vec1 - vec2;
                set(handles.editTextEqualAxes, 'String', num2str(result));
            else
                set(handles.labelErrorAxes, 'String', 'Size not equal');
            end
        case 'x'
            if r1 == r2 && c1 == c2
                result = vec1 .* vec2;
                set(handles.editTextEqualAxes, 'String', num2str(result));
            else
                if c1 == r2
                    result = vec1 * vec2;
                    set(handles.editTextEqualAxes, 'String', num2str(result));
                else
                    set(handles.labelErrorAxes, 'String', 'Inner dimensions must met');
                end
            end 
    end
end


% --- Executes on button press in btnDeleteGraph.
function btnDeleteGraph_Callback(hObject, eventdata, handles)
% hObject    handle to btnDeleteGraph (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)


% --- Executes on button press in btnShow.
function btnShow_Callback(hObject, eventdata, handles)
% hObject    handle to btnShow (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
a = get(handles.editTextEquation,'string');
if ~isempty(a)
    x = 0:0.1:10;
    axes(handles.plotAxes)
    plot(eval(a)), grid
end

function editTextEquation_Callback(hObject, eventdata, handles)
% hObject    handle to editTextEquation (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of editTextEquation as text
%        str2double(get(hObject,'String')) returns contents of editTextEquation as a double


% --- Executes during object creation, after setting all properties.
function editTextEquation_CreateFcn(hObject, eventdata, handles)
% hObject    handle to editTextEquation (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end
