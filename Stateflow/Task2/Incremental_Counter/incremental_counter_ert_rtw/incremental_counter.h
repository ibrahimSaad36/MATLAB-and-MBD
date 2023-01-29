/*
 * File: incremental_counter.h
 *
 * Code generated for Simulink model 'incremental_counter'.
 *
 * Model version                  : 1.4
 * Simulink Coder version         : 8.13 (R2017b) 24-Jul-2017
 * C/C++ source code generated on : Sun Jan 29 19:44:59 2023
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. RAM efficiency
 *    3. ROM efficiency
 * Validation result: Not run
 */

#ifndef RTW_HEADER_incremental_counter_h_
#define RTW_HEADER_incremental_counter_h_
#include <stddef.h>
#include <string.h>
#ifndef incremental_counter_COMMON_INCLUDES_
# define incremental_counter_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* incremental_counter_COMMON_INCLUDES_ */

#include "incremental_counter_types.h"

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
  real_T UnitDelay1_DSTATE;            /* '<Root>/Unit Delay1' */
} DW_incremental_counter_T;

/* External outputs (root outports fed by signals with auto storage) */
typedef struct {
  real_T Out1;                         /* '<Root>/Out1' */
} ExtY_incremental_counter_T;

/* Real-time Model Data Structure */
struct tag_RTM_incremental_counter_T {
  const char_T * volatile errorStatus;
};

/* Block states (auto storage) */
extern DW_incremental_counter_T incremental_counter_DW;

/* External outputs (root outports fed by signals with auto storage) */
extern ExtY_incremental_counter_T incremental_counter_Y;

/* Model entry point functions */
extern void incremental_counter_initialize(void);
extern void incremental_counter_step(void);
extern void incremental_counter_terminate(void);

/* Real-time Model object */
extern RT_MODEL_incremental_counter_T *const incremental_counter_M;

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
 * '<Root>' : 'incremental_counter'
 */
#endif                                 /* RTW_HEADER_incremental_counter_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
