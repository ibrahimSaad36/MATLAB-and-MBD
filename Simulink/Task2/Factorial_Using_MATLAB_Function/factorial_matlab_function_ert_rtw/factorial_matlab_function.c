/*
 * File: factorial_matlab_function.c
 *
 * Code generated for Simulink model 'factorial_matlab_function'.
 *
 * Model version                  : 1.4
 * Simulink Coder version         : 8.13 (R2017b) 24-Jul-2017
 * C/C++ source code generated on : Sun Jan 29 16:05:21 2023
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. RAM efficiency
 *    3. ROM efficiency
 * Validation result: Not run
 */

#include "factorial_matlab_function.h"
#include "factorial_matlab_function_private.h"

/* External inputs (root inport signals with auto storage) */
ExtU_factorial_matlab_functio_T factorial_matlab_function_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_factorial_matlab_functio_T factorial_matlab_function_Y;

/* Real-time model */
RT_MODEL_factorial_matlab_fun_T factorial_matlab_function_M_;
RT_MODEL_factorial_matlab_fun_T *const factorial_matlab_function_M =
  &factorial_matlab_function_M_;

/* Model step function */
void factorial_matlab_function_step(void)
{
  real_T in;
  real_T fact;

  /* MATLAB Function: '<Root>/MATLAB Function' incorporates:
   *  Inport: '<Root>/In1'
   */
  in = factorial_matlab_function_U.In1;
  fact = 1.0;
  while (in != 0.0) {
    fact *= in;
    in--;
  }

  /* Outport: '<Root>/Out1' incorporates:
   *  MATLAB Function: '<Root>/MATLAB Function'
   */
  factorial_matlab_function_Y.Out1 = fact;
}

/* Model initialize function */
void factorial_matlab_function_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(factorial_matlab_function_M, (NULL));

  /* external inputs */
  factorial_matlab_function_U.In1 = 0.0;

  /* external outputs */
  factorial_matlab_function_Y.Out1 = 0.0;
}

/* Model terminate function */
void factorial_matlab_function_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
