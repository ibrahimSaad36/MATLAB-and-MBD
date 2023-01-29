/*
 * File: traffic_light.h
 *
 * Code generated for Simulink model 'traffic_light'.
 *
 * Model version                  : 1.3
 * Simulink Coder version         : 8.13 (R2017b) 24-Jul-2017
 * C/C++ source code generated on : Sun Jan 29 18:20:13 2023
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. RAM efficiency
 *    3. ROM efficiency
 * Validation result: Not run
 */

#ifndef RTW_HEADER_traffic_light_h_
#define RTW_HEADER_traffic_light_h_
#include <stddef.h>
#include <string.h>
#ifndef traffic_light_COMMON_INCLUDES_
# define traffic_light_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* traffic_light_COMMON_INCLUDES_ */

#include "traffic_light_types.h"

/* Macros for accessing real-time model data structure */
#ifndef rtmGetErrorStatus
# define rtmGetErrorStatus(rtm)        ((rtm)->errorStatus)
#endif

#ifndef rtmSetErrorStatus
# define rtmSetErrorStatus(rtm, val)   ((rtm)->errorStatus = (val))
#endif

/* Block states (auto storage) for system '<Root>' */
typedef struct {
  uint16_T temporalCounter_i1;         /* '<Root>/Chart' */
  uint8_T is_active_c3_traffic_light;  /* '<Root>/Chart' */
  uint8_T is_c3_traffic_light;         /* '<Root>/Chart' */
} DW_traffic_light_T;

/* External outputs (root outports fed by signals with auto storage) */
typedef struct {
  real_T Out1;                         /* '<Root>/Out1' */
  real_T Out2;                         /* '<Root>/Out2' */
  real_T Out3;                         /* '<Root>/Out3' */
} ExtY_traffic_light_T;

/* Real-time Model Data Structure */
struct tag_RTM_traffic_light_T {
  const char_T * volatile errorStatus;
};

/* Block states (auto storage) */
extern DW_traffic_light_T traffic_light_DW;

/* External outputs (root outports fed by signals with auto storage) */
extern ExtY_traffic_light_T traffic_light_Y;

/* Model entry point functions */
extern void traffic_light_initialize(void);
extern void traffic_light_step(void);
extern void traffic_light_terminate(void);

/* Real-time Model object */
extern RT_MODEL_traffic_light_T *const traffic_light_M;

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
 * '<Root>' : 'traffic_light'
 * '<S1>'   : 'traffic_light/Chart'
 */
#endif                                 /* RTW_HEADER_traffic_light_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
