/*
 * File: even_and_odd.h
 *
 * Code generated for Simulink model 'even_and_odd'.
 *
 * Model version                  : 1.8
 * Simulink Coder version         : 8.13 (R2017b) 24-Jul-2017
 * C/C++ source code generated on : Sun Jan 29 19:08:03 2023
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. RAM efficiency
 *    3. ROM efficiency
 * Validation result: Not run
 */

#ifndef RTW_HEADER_even_and_odd_h_
#define RTW_HEADER_even_and_odd_h_
#include <math.h>
#include <stddef.h>
#include <string.h>
#ifndef even_and_odd_COMMON_INCLUDES_
# define even_and_odd_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* even_and_odd_COMMON_INCLUDES_ */

#include "even_and_odd_types.h"

/* Macros for accessing real-time model data structure */
#ifndef rtmGetErrorStatus
# define rtmGetErrorStatus(rtm)        ((rtm)->errorStatus)
#endif

#ifndef rtmSetErrorStatus
# define rtmSetErrorStatus(rtm, val)   ((rtm)->errorStatus = (val))
#endif

/* Block states (auto storage) for system '<Root>' */
typedef struct {
  real_T UnitDelay_DSTATE;             /* '<S2>/Unit Delay' */
  uint8_T is_active_c3_even_and_odd;   /* '<Root>/Chart' */
  uint8_T is_c3_even_and_odd;          /* '<Root>/Chart' */
} DW_even_and_odd_T;

/* External outputs (root outports fed by signals with auto storage) */
typedef struct {
  real_T Out1;                         /* '<Root>/Out1' */
} ExtY_even_and_odd_T;

/* Real-time Model Data Structure */
struct tag_RTM_even_and_odd_T {
  const char_T * volatile errorStatus;
};

/* Block states (auto storage) */
extern DW_even_and_odd_T even_and_odd_DW;

/* External outputs (root outports fed by signals with auto storage) */
extern ExtY_even_and_odd_T even_and_odd_Y;

/* Model entry point functions */
extern void even_and_odd_initialize(void);
extern void even_and_odd_step(void);
extern void even_and_odd_terminate(void);

/* Real-time Model object */
extern RT_MODEL_even_and_odd_T *const even_and_odd_M;

/*-
 * These blocks were eliminated from the model due to optimizations:
 *
 * Block '<S2>/Switch' : Eliminated due to constant selection input
 * Block '<S2>/Switch1' : Eliminated due to constant selection input
 * Block '<S2>/Constant' : Unused code path elimination
 * Block '<S2>/Constant1' : Unused code path elimination
 * Block '<S2>/Constant2' : Unused code path elimination
 * Block '<S2>/Constant4' : Unused code path elimination
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
 * '<Root>' : 'even_and_odd'
 * '<S1>'   : 'even_and_odd/Chart'
 * '<S2>'   : 'even_and_odd/counter [0 to 20]'
 */
#endif                                 /* RTW_HEADER_even_and_odd_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
