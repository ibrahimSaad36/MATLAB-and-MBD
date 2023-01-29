/*
 * File: incremental_counter.c
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

#include "incremental_counter.h"
#include "incremental_counter_private.h"

/* Block states (auto storage) */
DW_incremental_counter_T incremental_counter_DW;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_incremental_counter_T incremental_counter_Y;

/* Real-time model */
RT_MODEL_incremental_counter_T incremental_counter_M_;
RT_MODEL_incremental_counter_T *const incremental_counter_M =
  &incremental_counter_M_;

/* Model step function */
void incremental_counter_step(void)
{
  real_T rtb_UnitDelay;

  /* UnitDelay: '<Root>/Unit Delay' */
  rtb_UnitDelay = incremental_counter_DW.UnitDelay_DSTATE;

  /* Switch: '<Root>/Switch' incorporates:
   *  Constant: '<Root>/Constant'
   *  Sum: '<Root>/Sum'
   *  UnitDelay: '<Root>/Unit Delay1'
   */
  if (rtb_UnitDelay >= 20.0) {
    rtb_UnitDelay = 0.0;
  } else {
    rtb_UnitDelay += incremental_counter_DW.UnitDelay1_DSTATE;
  }

  /* End of Switch: '<Root>/Switch' */

  /* Outport: '<Root>/Out1' */
  incremental_counter_Y.Out1 = rtb_UnitDelay;

  /* Update for UnitDelay: '<Root>/Unit Delay' */
  incremental_counter_DW.UnitDelay_DSTATE = rtb_UnitDelay;

  /* Update for UnitDelay: '<Root>/Unit Delay1' incorporates:
   *  Constant: '<Root>/Constant1'
   */
  incremental_counter_DW.UnitDelay1_DSTATE = 1.0;
}

/* Model initialize function */
void incremental_counter_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(incremental_counter_M, (NULL));

  /* states (dwork) */
  (void) memset((void *)&incremental_counter_DW, 0,
                sizeof(DW_incremental_counter_T));

  /* external outputs */
  incremental_counter_Y.Out1 = 0.0;
}

/* Model terminate function */
void incremental_counter_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
