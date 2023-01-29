/*
 * File: factorial.h
 *
 * Code generated for Simulink model 'factorial'.
 *
 * Model version                  : 1.2
 * Simulink Coder version         : 8.13 (R2017b) 24-Jul-2017
 * C/C++ source code generated on : Sun Jan 29 17:49:56 2023
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. RAM efficiency
 *    3. ROM efficiency
 * Validation result: Not run
 */

#ifndef RTW_HEADER_factorial_h_
#define RTW_HEADER_factorial_h_
#include <stddef.h>
#ifndef factorial_COMMON_INCLUDES_
# define factorial_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* factorial_COMMON_INCLUDES_ */

#include "factorial_types.h"

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
} ExtU_factorial_T;

/* External outputs (root outports fed by signals with auto storage) */
typedef struct {
  real_T Out1;                         /* '<Root>/Out1' */
} ExtY_factorial_T;

/* Real-time Model Data Structure */
struct tag_RTM_factorial_T {
  const char_T * volatile errorStatus;
};

/* External inputs (root inport signals with auto storage) */
extern ExtU_factorial_T factorial_U;

/* External outputs (root outports fed by signals with auto storage) */
extern ExtY_factorial_T factorial_Y;

/* Model entry point functions */
extern void factorial_initialize(void);
extern void factorial_step(void);
extern void factorial_terminate(void);

/* Real-time Model object */
extern RT_MODEL_factorial_T *const factorial_M;

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
 * '<Root>' : 'factorial'
 * '<S1>'   : 'factorial/Chart'
 */
#endif                                 /* RTW_HEADER_factorial_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
