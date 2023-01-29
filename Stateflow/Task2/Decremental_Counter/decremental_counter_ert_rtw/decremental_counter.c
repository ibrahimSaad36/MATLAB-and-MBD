/*
 * File: decremental_counter.c
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

#include "decremental_counter.h"
#include "decremental_counter_private.h"

/* Block states (auto storage) */
DW_decremental_counter_T decremental_counter_DW;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_decremental_counter_T decremental_counter_Y;

/* Real-time model */
RT_MODEL_decremental_counter_T decremental_counter_M_;
RT_MODEL_decremental_counter_T *const decremental_counter_M =
  &decremental_counter_M_;

/* Model step function */
void decremental_counter_step(void)
{
  real_T rtb_Subtract;

  /* Sum: '<Root>/Subtract' incorporates:
   *  Constant: '<Root>/Constant1'
   *  UnitDelay: '<Root>/Unit Delay'
   */
  rtb_Subtract = decremental_counter_DW.UnitDelay_DSTATE - 1.0;

  /* Switch: '<Root>/Switch' incorporates:
   *  Constant: '<Root>/Constant'
   */
  if (!(rtb_Subtract >= 0.0)) {
    rtb_Subtract = 20.0;
  }

  /* End of Switch: '<Root>/Switch' */

  /* Outport: '<Root>/Out1' */
  decremental_counter_Y.Out1 = rtb_Subtract;

  /* Update for UnitDelay: '<Root>/Unit Delay' */
  decremental_counter_DW.UnitDelay_DSTATE = rtb_Subtract;
}

/* Model initialize function */
void decremental_counter_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(decremental_counter_M, (NULL));

  /* states (dwork) */
  (void) memset((void *)&decremental_counter_DW, 0,
                sizeof(DW_decremental_counter_T));

  /* external outputs */
  decremental_counter_Y.Out1 = 0.0;
}

/* Model terminate function */
void decremental_counter_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
