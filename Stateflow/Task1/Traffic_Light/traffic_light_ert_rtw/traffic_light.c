/*
 * File: traffic_light.c
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

#include "traffic_light.h"
#include "traffic_light_private.h"

/* Named constants for Chart: '<Root>/Chart' */
#define traffic_ligh_IN_NO_ACTIVE_CHILD ((uint8_T)0U)
#define traffic_light_IN_LED_GREEN     ((uint8_T)1U)
#define traffic_light_IN_LED_RED       ((uint8_T)2U)
#define traffic_light_IN_LED_YELLOW    ((uint8_T)3U)

/* Block states (auto storage) */
DW_traffic_light_T traffic_light_DW;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_traffic_light_T traffic_light_Y;

/* Real-time model */
RT_MODEL_traffic_light_T traffic_light_M_;
RT_MODEL_traffic_light_T *const traffic_light_M = &traffic_light_M_;

/* Model step function */
void traffic_light_step(void)
{
  /* Chart: '<Root>/Chart' */
  if (traffic_light_DW.temporalCounter_i1 < 1023U) {
    traffic_light_DW.temporalCounter_i1++;
  }

  if (traffic_light_DW.is_active_c3_traffic_light == 0U) {
    traffic_light_DW.is_active_c3_traffic_light = 1U;
    traffic_light_DW.is_c3_traffic_light = traffic_light_IN_LED_RED;
    traffic_light_DW.temporalCounter_i1 = 0U;

    /* Outport: '<Root>/Out1' */
    traffic_light_Y.Out1 = 1.0;
  } else {
    switch (traffic_light_DW.is_c3_traffic_light) {
     case traffic_light_IN_LED_GREEN:
      /* Outport: '<Root>/Out2' */
      traffic_light_Y.Out2 = 0.0;
      traffic_light_DW.is_c3_traffic_light = traffic_light_IN_LED_YELLOW;
      traffic_light_DW.temporalCounter_i1 = 0U;

      /* Outport: '<Root>/Out3' */
      traffic_light_Y.Out3 = 1.0;
      break;

     case traffic_light_IN_LED_RED:
      /* Outport: '<Root>/Out1' */
      traffic_light_Y.Out1 = 0.0;
      traffic_light_DW.is_c3_traffic_light = traffic_light_IN_LED_GREEN;
      traffic_light_DW.temporalCounter_i1 = 0U;

      /* Outport: '<Root>/Out2' */
      traffic_light_Y.Out2 = 1.0;
      break;

     default:
      /* Outport: '<Root>/Out3' */
      traffic_light_Y.Out3 = 0.0;
      traffic_light_DW.is_c3_traffic_light = traffic_light_IN_LED_RED;
      traffic_light_DW.temporalCounter_i1 = 0U;

      /* Outport: '<Root>/Out1' */
      traffic_light_Y.Out1 = 1.0;
      break;
    }
  }

  /* End of Chart: '<Root>/Chart' */
}

/* Model initialize function */
void traffic_light_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(traffic_light_M, (NULL));

  /* states (dwork) */
  (void) memset((void *)&traffic_light_DW, 0,
                sizeof(DW_traffic_light_T));

  /* external outputs */
  (void) memset((void *)&traffic_light_Y, 0,
                sizeof(ExtY_traffic_light_T));

  /* SystemInitialize for Chart: '<Root>/Chart' */
  traffic_light_DW.temporalCounter_i1 = 0U;
  traffic_light_DW.is_active_c3_traffic_light = 0U;
  traffic_light_DW.is_c3_traffic_light = traffic_ligh_IN_NO_ACTIVE_CHILD;

  /* SystemInitialize for Outport: '<Root>/Out1' incorporates:
   *  Chart: '<Root>/Chart'
   */
  traffic_light_Y.Out1 = 0.0;

  /* SystemInitialize for Outport: '<Root>/Out2' incorporates:
   *  Chart: '<Root>/Chart'
   */
  traffic_light_Y.Out2 = 0.0;

  /* SystemInitialize for Outport: '<Root>/Out3' incorporates:
   *  Chart: '<Root>/Chart'
   */
  traffic_light_Y.Out3 = 0.0;
}

/* Model terminate function */
void traffic_light_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
