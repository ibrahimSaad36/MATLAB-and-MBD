/*
 * File: triggered_system.h
 *
 * Code generated for Simulink model 'triggered_system'.
 *
 * Model version                  : 1.3
 * Simulink Coder version         : 8.13 (R2017b) 24-Jul-2017
 * C/C++ source code generated on : Sun Jan 29 19:27:26 2023
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. RAM efficiency
 *    3. ROM efficiency
 * Validation result: Not run
 */

#ifndef RTW_HEADER_triggered_system_h_
#define RTW_HEADER_triggered_system_h_
#include <stddef.h>
#include <string.h>
#ifndef triggered_system_COMMON_INCLUDES_
# define triggered_system_COMMON_INCLUDES_
#include "rtwtypes.h"
#include "zero_crossing_types.h"
#endif                                 /* triggered_system_COMMON_INCLUDES_ */

#include "triggered_system_types.h"
#include "rt_zcfcn.h"

/* Macros for accessing real-time model data structure */
#ifndef rtmGetErrorStatus
# define rtmGetErrorStatus(rtm)        ((rtm)->errorStatus)
#endif

#ifndef rtmSetErrorStatus
# define rtmSetErrorStatus(rtm, val)   ((rtm)->errorStatus = (val))
#endif

/* Block states (auto storage) for system '<Root>' */
typedef struct {
  int32_T clockTickCounter;            /* '<Root>/Pulse Generator' */
} DW_triggered_system_T;

/* Zero-crossing (trigger) state */
typedef struct {
  ZCSigState TriggeredSubsystem_Trig_ZCE;/* '<Root>/Triggered Subsystem' */
} PrevZCX_triggered_system_T;

/* External inputs (root inport signals with auto storage) */
typedef struct {
  real_T In1;                          /* '<Root>/In1' */
} ExtU_triggered_system_T;

/* External outputs (root outports fed by signals with auto storage) */
typedef struct {
  real_T Out1;                         /* '<Root>/Out1' */
} ExtY_triggered_system_T;

/* Real-time Model Data Structure */
struct tag_RTM_triggered_system_T {
  const char_T * volatile errorStatus;
};

/* Block states (auto storage) */
extern DW_triggered_system_T triggered_system_DW;

/* External inputs (root inport signals with auto storage) */
extern ExtU_triggered_system_T triggered_system_U;

/* External outputs (root outports fed by signals with auto storage) */
extern ExtY_triggered_system_T triggered_system_Y;

/* Model entry point functions */
extern void triggered_system_initialize(void);
extern void triggered_system_step(void);
extern void triggered_system_terminate(void);

/* Real-time Model object */
extern RT_MODEL_triggered_system_T *const triggered_system_M;

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
 * '<Root>' : 'triggered_system'
 * '<S1>'   : 'triggered_system/Triggered Subsystem'
 * '<S2>'   : 'triggered_system/Triggered Subsystem/Chart'
 */
#endif                                 /* RTW_HEADER_triggered_system_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
