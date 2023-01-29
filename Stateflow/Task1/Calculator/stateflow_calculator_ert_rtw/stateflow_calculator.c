/*
 * File: stateflow_calculator.c
 *
 * Code generated for Simulink model 'stateflow_calculator'.
 *
 * Model version                  : 1.6
 * Simulink Coder version         : 8.13 (R2017b) 24-Jul-2017
 * C/C++ source code generated on : Sun Jan 29 17:33:01 2023
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. RAM efficiency
 *    3. ROM efficiency
 * Validation result: Not run
 */

#include "stateflow_calculator.h"
#include "stateflow_calculator_private.h"

/* External inputs (root inport signals with auto storage) */
ExtU_stateflow_calculator_T stateflow_calculator_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_stateflow_calculator_T stateflow_calculator_Y;

/* Real-time model */
RT_MODEL_stateflow_calculator_T stateflow_calculator_M_;
RT_MODEL_stateflow_calculator_T *const stateflow_calculator_M =
  &stateflow_calculator_M_;

/* Model step function */
void stateflow_calculator_step(void)
{
  /* Chart: '<Root>/Chart' incorporates:
   *  Inport: '<Root>/In2'
   */
  if (stateflow_calculator_U.In2 != 0.0) {
    /* Outport: '<Root>/Out4' incorporates:
     *  Inport: '<Root>/In1'
     */
    stateflow_calculator_Y.Out4 = stateflow_calculator_U.In1 /
      stateflow_calculator_U.In2;
  }

  /* Outport: '<Root>/Out1' incorporates:
   *  Chart: '<Root>/Chart'
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   */
  stateflow_calculator_Y.Out1 = stateflow_calculator_U.In1 +
    stateflow_calculator_U.In2;

  /* Outport: '<Root>/Out2' incorporates:
   *  Chart: '<Root>/Chart'
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   */
  stateflow_calculator_Y.Out2 = stateflow_calculator_U.In1 -
    stateflow_calculator_U.In2;

  /* Outport: '<Root>/Out3' incorporates:
   *  Chart: '<Root>/Chart'
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   */
  stateflow_calculator_Y.Out3 = stateflow_calculator_U.In1 *
    stateflow_calculator_U.In2;
}

/* Model initialize function */
void stateflow_calculator_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(stateflow_calculator_M, (NULL));

  /* external inputs */
  (void)memset((void *)&stateflow_calculator_U, 0, sizeof
               (ExtU_stateflow_calculator_T));

  /* external outputs */
  (void) memset((void *)&stateflow_calculator_Y, 0,
                sizeof(ExtY_stateflow_calculator_T));

  /* SystemInitialize for Outport: '<Root>/Out4' incorporates:
   *  Chart: '<Root>/Chart'
   */
  stateflow_calculator_Y.Out4 = 0.0;
}

/* Model terminate function */
void stateflow_calculator_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
