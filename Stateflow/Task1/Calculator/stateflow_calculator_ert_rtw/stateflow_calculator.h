/*
 * File: stateflow_calculator.h
 *
 * Code generated for Simulink model 'stateflow_calculator'.
 *
 * Model version                  : 1.6
 * Simulink Coder version         : 8.13 (R2017b) 24-Jul-2017
 * C/C++ source code generated on : Sun Jan 29 17:33:01 2023
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. RAM efficiency
 *    3. ROM efficiency
 * Validation result: Not run
 */

#ifndef RTW_HEADER_stateflow_calculator_h_
#define RTW_HEADER_stateflow_calculator_h_
#include <string.h>
#include <stddef.h>
#ifndef stateflow_calculator_COMMON_INCLUDES_
# define stateflow_calculator_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* stateflow_calculator_COMMON_INCLUDES_ */

#include "stateflow_calculator_types.h"

/* Macros for accessing real-time model data structure */
#ifndef rtmGetErrorStatus
# define rtmGetErrorStatus(rtm)        ((rtm)->errorStatus)
#endif

#ifndef rtmSetErrorStatus
# define rtmSetErrorStatus(rtm, val)   ((rtm)->errorStatus = (val))
#endif

/* External inputs (root inport signals with auto storage) */
typedef struct {
  real_T In1;                          /* '<Root>/In1' */
  real_T In2;                          /* '<Root>/In2' */
} ExtU_stateflow_calculator_T;

/* External outputs (root outports fed by signals with auto storage) */
typedef struct {
  real_T Out1;                         /* '<Root>/Out1' */
  real_T Out2;                         /* '<Root>/Out2' */
  real_T Out3;                         /* '<Root>/Out3' */
  real_T Out4;                         /* '<Root>/Out4' */
} ExtY_stateflow_calculator_T;

/* Real-time Model Data Structure */
struct tag_RTM_stateflow_calculator_T {
  const char_T * volatile errorStatus;
};

/* External inputs (root inport signals with auto storage) */
extern ExtU_stateflow_calculator_T stateflow_calculator_U;

/* External outputs (root outports fed by signals with auto storage) */
extern ExtY_stateflow_calculator_T stateflow_calculator_Y;

/* Model entry point functions */
extern void stateflow_calculator_initialize(void);
extern void stateflow_calculator_step(void);
extern void stateflow_calculator_terminate(void);

/* Real-time Model object */
extern RT_MODEL_stateflow_calculator_T *const stateflow_calculator_M;

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
 * '<Root>' : 'stateflow_calculator'
 * '<S1>'   : 'stateflow_calculator/Chart'
 */
#endif                                 /* RTW_HEADER_stateflow_calculator_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
