/*
 * File: calculator.c
 *
 * Code generated for Simulink model 'calculator'.
 *
 * Model version                  : 1.3
 * Simulink Coder version         : 8.13 (R2017b) 24-Jul-2017
 * C/C++ source code generated on : Fri Dec 23 12:04:17 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. RAM efficiency
 *    3. ROM efficiency
 * Validation result: Not run
 */

#include "calculator.h"
#include "calculator_private.h"

/* External inputs (root inport signals with auto storage) */
ExtU_calculator_T calculator_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_calculator_T calculator_Y;

/* Real-time model */
RT_MODEL_calculator_T calculator_M_;
RT_MODEL_calculator_T *const calculator_M = &calculator_M_;

/* Model step function */
void calculator_step(void)
{
  /* Outport: '<Root>/Addition' incorporates:
   *  Inport: '<Root>/Operand1'
   *  Inport: '<Root>/Operand2'
   *  Sum: '<Root>/Add'
   */
  calculator_Y.Addition = calculator_U.Operand1 + calculator_U.Operand2;

  /* Outport: '<Root>/Subtraction' incorporates:
   *  Inport: '<Root>/Operand1'
   *  Inport: '<Root>/Operand2'
   *  Sum: '<Root>/Subtract'
   */
  calculator_Y.Subtraction = calculator_U.Operand1 - calculator_U.Operand2;

  /* Outport: '<Root>/Multiplication' incorporates:
   *  Inport: '<Root>/Operand1'
   *  Inport: '<Root>/Operand2'
   *  Product: '<Root>/Product'
   */
  calculator_Y.Multiplication = calculator_U.Operand1 * calculator_U.Operand2;

  /* Outport: '<Root>/Division' incorporates:
   *  Inport: '<Root>/Operand1'
   *  Inport: '<Root>/Operand2'
   *  Product: '<Root>/Divide'
   */
  calculator_Y.Division = calculator_U.Operand1 / calculator_U.Operand2;
}

/* Model initialize function */
void calculator_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(calculator_M, (NULL));

  /* external inputs */
  (void)memset((void *)&calculator_U, 0, sizeof(ExtU_calculator_T));

  /* external outputs */
  (void) memset((void *)&calculator_Y, 0,
                sizeof(ExtY_calculator_T));
}

/* Model terminate function */
void calculator_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
