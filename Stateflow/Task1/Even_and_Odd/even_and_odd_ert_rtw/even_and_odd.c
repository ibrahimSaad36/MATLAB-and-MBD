/*
 * File: even_and_odd.c
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

#include "even_and_odd.h"
#include "even_and_odd_private.h"

/* Named constants for Chart: '<Root>/Chart' */
#define even_and_odd_IN_NO_ACTIVE_CHILD ((uint8_T)0U)
#define even_and_odd_IN_even           ((uint8_T)1U)
#define even_and_odd_IN_odd            ((uint8_T)2U)

/* Block states (auto storage) */
DW_even_and_odd_T even_and_odd_DW;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_even_and_odd_T even_and_odd_Y;

/* Real-time model */
RT_MODEL_even_and_odd_T even_and_odd_M_;
RT_MODEL_even_and_odd_T *const even_and_odd_M = &even_and_odd_M_;

/* Model step function */
void even_and_odd_step(void)
{
  /* Chart: '<Root>/Chart' */
  if (even_and_odd_DW.is_active_c3_even_and_odd == 0U) {
    even_and_odd_DW.is_active_c3_even_and_odd = 1U;
    even_and_odd_DW.is_c3_even_and_odd = even_and_odd_IN_even;

    /* Outport: '<Root>/Out1' */
    even_and_odd_Y.Out1 = 1.0;
  } else {
    if (even_and_odd_DW.is_c3_even_and_odd == even_and_odd_IN_even) {
      even_and_odd_DW.is_c3_even_and_odd = even_and_odd_IN_odd;

      /* Outport: '<Root>/Out1' */
      even_and_odd_Y.Out1 = 1.0;
    }
  }

  /* End of Chart: '<Root>/Chart' */

  /* Update for UnitDelay: '<S2>/Unit Delay' incorporates:
   *  Constant: '<S2>/Constant5'
   *  MinMax: '<S2>/Min'
   */
  even_and_odd_DW.UnitDelay_DSTATE = fmax(even_and_odd_DW.UnitDelay_DSTATE, 20.0);
}

/* Model initialize function */
void even_and_odd_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(even_and_odd_M, (NULL));

  /* states (dwork) */
  (void) memset((void *)&even_and_odd_DW, 0,
                sizeof(DW_even_and_odd_T));

  /* external outputs */
  even_and_odd_Y.Out1 = 0.0;

  /* SystemInitialize for Chart: '<Root>/Chart' */
  even_and_odd_DW.is_active_c3_even_and_odd = 0U;
  even_and_odd_DW.is_c3_even_and_odd = even_and_odd_IN_NO_ACTIVE_CHILD;

  /* SystemInitialize for Outport: '<Root>/Out1' incorporates:
   *  Chart: '<Root>/Chart'
   */
  even_and_odd_Y.Out1 = 0.0;
}

/* Model terminate function */
void even_and_odd_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
