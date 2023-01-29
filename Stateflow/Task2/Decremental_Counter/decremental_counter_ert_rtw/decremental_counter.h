/*
 * File: decremental_counter.h
 *
 * Code generated for Simulink model 'decremental_counter'.
 *
 * Model version                  : 1.4
 * Simulink Coder version         : 8.13 (R2017b) 24-Jul-2017
 * C/C++ source code generated on : Sun Jan 29 19:53:52 2023
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. RAM efficiency
 *    3. ROM efficiency
 * Validation result: Not run
 */

#ifndef RTW_HEADER_decremental_counter_h_
#define RTW_HEADER_decremental_counter_h_
#include <stddef.h>
#include <string.h>
#ifndef decremental_counter_COMMON_INCLUDES_
# define decremental_counter_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* decremental_counter_COMMON_INCLUDES_ */

#include "decremental_counter_types.h"

/* Macros for accessing real-time model data structure */
#ifndef rtmGetErrorStatus
# define rtmGetErrorStatus(rtm)        ((rtm)->errorStatus)
#endif

#ifndef rtmSetErrorStatus
# define rtmSetErrorStatus(rtm, val)   ((rtm)->errorStatus = (val))
#endif

/* Block states (auto storage) for system '<Root>' */
typedef struct {
  real_T UnitDelay_DSTATE;             /* '<Root>/Unit Delay' */
} DW_decremental_counter_T;

/* External outputs (root outports fed by signals with auto storage) */
typedef struct {
  real_T Out1;                         /* '<Root>/Out1' */
} ExtY_decremental_counter_T;

/* Real-time Model Data Structure */
struct tag_RTM_decremental_counter_T {
  const char_T * volatile errorStatus;
};

/* Block states (auto storage) */
extern DW_decremental_counter_T decremental_counter_DW;

/* External outputs (root outports fed by signals with auto storage) */
extern ExtY_decremental_counter_T decremental_counter_Y;

/* Model entry point functions */
extern void decremental_counter_initialize(void);
extern void decremental_counter_step(void);
extern void decremental_counter_terminate(void);

/* Real-time Model object */
extern RT_MODEL_decremental_counter_T *const decremental_counter_M;

/*-
 * These blocks were eliminated from the model due to optimizations:
 *
 * Block '<Root>/Scope' : Unused code path elimination
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
 * '<Root>' : 'decremental_counter'
 */
#endif                                 /* RTW_HEADER_decremental_counter_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
