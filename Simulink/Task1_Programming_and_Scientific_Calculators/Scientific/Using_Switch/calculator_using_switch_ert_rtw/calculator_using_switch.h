/*
 * File: calculator_using_switch.h
 *
 * Code generated for Simulink model 'calculator_using_switch'.
 *
 * Model version                  : 1.7
 * Simulink Coder version         : 8.13 (R2017b) 24-Jul-2017
 * C/C++ source code generated on : Fri Dec 23 12:14:37 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. RAM efficiency
 *    3. ROM efficiency
 * Validation result: Not run
 */

#ifndef RTW_HEADER_calculator_using_switch_h_
#define RTW_HEADER_calculator_using_switch_h_
#include <math.h>
#include <string.h>
#include <stddef.h>
#ifndef calculator_using_switch_COMMON_INCLUDES_
# define calculator_using_switch_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* calculator_using_switch_COMMON_INCLUDES_ */

#include "calculator_using_switch_types.h"
#include "rt_nonfinite.h"
#include "rtGetInf.h"

/* Macros for accessing real-time model data structure */
#ifndef rtmGetErrorStatus
# define rtmGetErrorStatus(rtm)        ((rtm)->errorStatus)
#endif

#ifndef rtmSetErrorStatus
# define rtmSetErrorStatus(rtm, val)   ((rtm)->errorStatus = (val))
#endif

/* Block signals (auto storage) */
typedef struct {
  real_T Merge;                        /* '<Root>/Merge' */
} B_calculator_using_switch_T;

/* External inputs (root inport signals with auto storage) */
typedef struct {
  real_T Action;                       /* '<Root>/Action' */
  real_T Operand1;                     /* '<Root>/Operand1' */
  real_T Operand2;                     /* '<Root>/Operand2' */
} ExtU_calculator_using_switch_T;

/* External outputs (root outports fed by signals with auto storage) */
typedef struct {
  real_T Result;                       /* '<Root>/Result' */
} ExtY_calculator_using_switch_T;

/* Real-time Model Data Structure */
struct tag_RTM_calculator_using_swit_T {
  const char_T * volatile errorStatus;
};

/* Block signals (auto storage) */
extern B_calculator_using_switch_T calculator_using_switch_B;

/* External inputs (root inport signals with auto storage) */
extern ExtU_calculator_using_switch_T calculator_using_switch_U;

/* External outputs (root outports fed by signals with auto storage) */
extern ExtY_calculator_using_switch_T calculator_using_switch_Y;

/* Model entry point functions */
extern void calculator_using_switch_initialize(void);
extern void calculator_using_switch_step(void);
extern void calculator_using_switch_terminate(void);

/* Real-time Model object */
extern RT_MODEL_calculator_using_swi_T *const calculator_using_switch_M;

/*-
 * The generated code includes comments that allow you to trace directly
 * back to the appropriate location in the model.  The basic format
 * is <system>/block_name, where system is the system number (uniquely
 * assigned by Simulink) and block_name is the name of the block.
 *
 * Use the MATLAB hilite_system command to trace the generated code back
 * to the model.  For example,
 *
 * hilite_system('<S3>')    - opens system 3
 * hilite_system('<S3>/Kp') - opens and selects block Kp which resides in S3
 *
 * Here is the system hierarchy for this model
 *
 * '<Root>' : 'calculator_using_switch'
 * '<S1>'   : 'calculator_using_switch/Switch Case Action Subsystem'
 * '<S2>'   : 'calculator_using_switch/Switch Case Action Subsystem1'
 * '<S3>'   : 'calculator_using_switch/Switch Case Action Subsystem2'
 * '<S4>'   : 'calculator_using_switch/Switch Case Action Subsystem3'
 */
#endif                                 /* RTW_HEADER_calculator_using_switch_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
