/*
 * File: factorial_while_loop.c
 *
 * Code generated for Simulink model 'factorial_while_loop'.
 *
 * Model version                  : 1.5
 * Simulink Coder version         : 8.13 (R2017b) 24-Jul-2017
 * C/C++ source code generated on : Sun Jan 29 15:53:59 2023
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. RAM efficiency
 *    3. ROM efficiency
 * Validation result: Not run
 */

#include "factorial_while_loop.h"
#include "factorial_while_loop_private.h"

/* External inputs (root inport signals with auto storage) */
ExtU_factorial_while_loop_T factorial_while_loop_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_factorial_while_loop_T factorial_while_loop_Y;

/* Real-time model */
RT_MODEL_factorial_while_loop_T factorial_while_loop_M_;
RT_MODEL_factorial_while_loop_T *const factorial_while_loop_M =
  &factorial_while_loop_M_;

/* Model step function */
void factorial_while_loop_step(void)
{
  int32_T s1_iter;
  boolean_T loopCond;
  real_T UnitDelay_DSTATE;

  /* Outputs for Iterator SubSystem: '<Root>/While Iterator Subsystem' incorporates:
   *  WhileIterator: '<S1>/While Iterator'
   */
  s1_iter = 1;

  /* InitializeConditions for UnitDelay: '<S1>/Unit Delay' */
  UnitDelay_DSTATE = 0.0;

  /* Inport: '<Root>/In1' */
  loopCond = (factorial_while_loop_U.In1 != 0.0);
  while (loopCond && (s1_iter <= 10000)) {
    /* Outport: '<Root>/Out1' incorporates:
     *  Product: '<S1>/Product'
     *  UnitDelay: '<S1>/Unit Delay'
     */
    factorial_while_loop_Y.Out1 = (real_T)s1_iter * UnitDelay_DSTATE;

    /* Update for UnitDelay: '<S1>/Unit Delay' incorporates:
     *  Outport: '<Root>/Out1'
     */
    UnitDelay_DSTATE = factorial_while_loop_Y.Out1;

    /* RelationalOperator: '<S1>/Relational Operator' incorporates:
     *  Inport: '<Root>/In1'
     */
    loopCond = (s1_iter < factorial_while_loop_U.In1);
    s1_iter++;
  }

  /* End of Outputs for SubSystem: '<Root>/While Iterator Subsystem' */
}

/* Model initialize function */
void factorial_while_loop_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(factorial_while_loop_M, (NULL));

  /* external inputs */
  factorial_while_loop_U.In1 = 0.0;

  /* external outputs */
  factorial_while_loop_Y.Out1 = 0.0;
}

/* Model terminate function */
void factorial_while_loop_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
