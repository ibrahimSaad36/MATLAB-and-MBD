/*
 * File: calculator.h
 *
 * Code generated for Simulink model 'calculator'.
 *
 * Model version                  : 1.3
 * Simulink Coder version         : 8.13 (R2017b) 24-Jul-2017
 * C/C++ source code generated on : Fri Dec 23 12:04:17 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. RAM efficiency
 *    3. ROM efficiency
 * Validation result: Not run
 */

#ifndef RTW_HEADER_calculator_h_
#define RTW_HEADER_calculator_h_
#include <string.h>
#include <stddef.h>
#ifndef calculator_COMMON_INCLUDES_
# define calculator_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* calculator_COMMON_INCLUDES_ */

#include "calculator_types.h"

/* Macros for accessing real-time model data structure */
#ifndef rtmGetErrorStatus
# define rtmGetErrorStatus(rtm)        ((rtm)->errorStatus)
#endif

#ifndef rtmSetErrorStatus
# define rtmSetErrorStatus(rtm, val)   ((rtm)->errorStatus = (val))
#endif

/* External inputs (root inport signals with auto storage) */
typedef struct {
  real_T Operand1;                     /* '<Root>/Operand1' */
  real_T Operand2;                     /* '<Root>/Operand2' */
} ExtU_calculator_T;

/* External outputs (root outports fed by signals with auto storage) */
typedef struct {
  real_T Addition;                     /* '<Root>/Addition' */
  real_T Subtraction;                  /* '<Root>/Subtraction' */
  real_T Multiplication;               /* '<Root>/Multiplication' */
  real_T Division;                     /* '<Root>/Division' */
} ExtY_calculator_T;

/* Real-time Model Data Structure */
struct tag_RTM_calculator_T {
  const char_T * volatile errorStatus;
};

/* External inputs (root inport signals with auto storage) */
extern ExtU_calculator_T calculator_U;

/* External outputs (root outports fed by signals with auto storage) */
extern ExtY_calculator_T calculator_Y;

/* Model entry point functions */
extern void calculator_initialize(void);
extern void calculator_step(void);
extern void calculator_terminate(void);

/* Real-time Model object */
extern RT_MODEL_calculator_T *const calculator_M;

/*-
 * These blocks were eliminated from the model due to optimizations:
 *
 * Block '<Root>/Display' : Unused code path elimination
 * Block '<Root>/Display1' : Unused code path elimination
 * Block '<Root>/Display2' : Unused code path elimination
 * Block '<Root>/Display3' : Unused code path elimination
 */

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
 * '<Root>' : 'calculator'
 */
#endif                                 /* RTW_HEADER_calculator_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
