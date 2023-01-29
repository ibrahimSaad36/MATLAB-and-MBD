/*
 * File: grading.h
 *
 * Code generated for Simulink model 'grading'.
 *
 * Model version                  : 1.3
 * Simulink Coder version         : 8.13 (R2017b) 24-Jul-2017
 * C/C++ source code generated on : Sun Jan 29 16:38:37 2023
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. RAM efficiency
 *    3. ROM efficiency
 * Validation result: Not run
 */

#ifndef RTW_HEADER_grading_h_
#define RTW_HEADER_grading_h_
#include <stddef.h>
#ifndef grading_COMMON_INCLUDES_
# define grading_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* grading_COMMON_INCLUDES_ */

#include "grading_types.h"

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
} ExtU_grading_T;

/* External outputs (root outports fed by signals with auto storage) */
typedef struct {
  real_T Out1;                         /* '<Root>/Out1' */
} ExtY_grading_T;

/* Real-time Model Data Structure */
struct tag_RTM_grading_T {
  const char_T * volatile errorStatus;
};

/* External inputs (root inport signals with auto storage) */
extern ExtU_grading_T grading_U;

/* External outputs (root outports fed by signals with auto storage) */
extern ExtY_grading_T grading_Y;

/* Model entry point functions */
extern void grading_initialize(void);
extern void grading_step(void);
extern void grading_terminate(void);

/* Real-time Model object */
extern RT_MODEL_grading_T *const grading_M;

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
 * '<Root>' : 'grading'
 * '<S1>'   : 'grading/If Action Subsystem'
 * '<S2>'   : 'grading/If Action Subsystem1'
 * '<S3>'   : 'grading/If Action Subsystem2'
 * '<S4>'   : 'grading/If Action Subsystem3'
 * '<S5>'   : 'grading/If Action Subsystem4'
 */
#endif                                 /* RTW_HEADER_grading_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
