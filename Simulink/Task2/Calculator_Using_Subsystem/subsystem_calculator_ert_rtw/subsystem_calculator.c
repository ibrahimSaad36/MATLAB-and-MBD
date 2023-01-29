/*
 * File: subsystem_calculator.c
 *
 * Code generated for Simulink model 'subsystem_calculator'.
 *
 * Model version                  : 1.3
 * Simulink Coder version         : 8.13 (R2017b) 24-Jul-2017
 * C/C++ source code generated on : Sun Jan 29 16:50:11 2023
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. RAM efficiency
 *    3. ROM efficiency
 * Validation result: Not run
 */

#include "subsystem_calculator.h"
#include "subsystem_calculator_private.h"

/* External inputs (root inport signals with auto storage) */
ExtU_subsystem_calculator_T subsystem_calculator_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_subsystem_calculator_T subsystem_calculator_Y;

/* Real-time model */
RT_MODEL_subsystem_calculator_T subsystem_calculator_M_;
RT_MODEL_subsystem_calculator_T *const subsystem_calculator_M =
  &subsystem_calculator_M_;

/* Model step function */
void subsystem_calculator_step(void)
{
  /* Outport: '<Root>/Add' incorporates:
   *  Inport: '<Root>/Operand1'
   *  Inport: '<Root>/Operand2'
   *  Sum: '<S1>/Add'
   */
  subsystem_calculator_Y.Add = subsystem_calculator_U.Operand1 +
    subsystem_calculator_U.Operand2;

  /* Outport: '<Root>/Sub' incorporates:
   *  Inport: '<Root>/Operand1'
   *  Inport: '<Root>/Operand2'
   *  Sum: '<S1>/Subtract'
   */
  subsystem_calculator_Y.Sub = subsystem_calculator_U.Operand1 -
    subsystem_calculator_U.Operand2;

  /* Outport: '<Root>/Product' incorporates:
   *  Inport: '<Root>/Operand1'
   *  Inport: '<Root>/Operand2'
   *  Product: '<S1>/Product'
   */
  subsystem_calculator_Y.Product = subsystem_calculator_U.Operand1 *
    subsystem_calculator_U.Operand2;

  /* Outport: '<Root>/Divide' incorporates:
   *  Inport: '<Root>/Operand1'
   *  Inport: '<Root>/Operand2'
   *  Product: '<S1>/Divide'
   */
  subsystem_calculator_Y.Divide = subsystem_calculator_U.Operand1 /
    subsystem_calculator_U.Operand2;
}

/* Model initialize function */
void subsystem_calculator_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(subsystem_calculator_M, (NULL));

  /* external inputs */
  (void)memset((void *)&subsystem_calculator_U, 0, sizeof
               (ExtU_subsystem_calculator_T));

  /* external outputs */
  (void) memset((void *)&subsystem_calculator_Y, 0,
                sizeof(ExtY_subsystem_calculator_T));
}

/* Model terminate function */
void subsystem_calculator_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
