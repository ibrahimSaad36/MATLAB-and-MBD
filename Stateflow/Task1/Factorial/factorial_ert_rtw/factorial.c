/*
 * File: factorial.c
 *
 * Code generated for Simulink model 'factorial'.
 *
 * Model version                  : 1.2
 * Simulink Coder version         : 8.13 (R2017b) 24-Jul-2017
 * C/C++ source code generated on : Sun Jan 29 17:49:56 2023
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. RAM efficiency
 *    3. ROM efficiency
 * Validation result: Not run
 */

#include "factorial.h"
#include "factorial_private.h"

/* External inputs (root inport signals with auto storage) */
ExtU_factorial_T factorial_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_factorial_T factorial_Y;

/* Real-time model */
RT_MODEL_factorial_T factorial_M_;
RT_MODEL_factorial_T *const factorial_M = &factorial_M_;

/* Model step function */
void factorial_step(void)
{
  real_T fact;
  real_T temp;

  /* Chart: '<Root>/Chart' incorporates:
   *  Inport: '<Root>/In1'
   */
  fact = 1.0;

  /*  factorial  */
  for (temp = factorial_U.In1; temp > 0.0; temp--) {
    fact *= temp;
  }

  /* Outport: '<Root>/Out1' incorporates:
   *  Chart: '<Root>/Chart'
   */
  factorial_Y.Out1 = fact;
}

/* Model initialize function */
void factorial_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(factorial_M, (NULL));

  /* external inputs */
  factorial_U.In1 = 0.0;

  /* external outputs */
  factorial_Y.Out1 = 0.0;
}

/* Model terminate function */
void factorial_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
