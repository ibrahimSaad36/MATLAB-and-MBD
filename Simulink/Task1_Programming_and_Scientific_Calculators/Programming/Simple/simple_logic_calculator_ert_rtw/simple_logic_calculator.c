/*
 * File: simple_logic_calculator.c
 *
 * Code generated for Simulink model 'simple_logic_calculator'.
 *
 * Model version                  : 1.12
 * Simulink Coder version         : 8.13 (R2017b) 24-Jul-2017
 * C/C++ source code generated on : Sat Dec 31 15:07:54 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. RAM efficiency
 *    3. ROM efficiency
 * Validation result: Not run
 */

#include "simple_logic_calculator.h"
#include "simple_logic_calculator_private.h"

/* External inputs (root inport signals with auto storage) */
ExtU_simple_logic_calculator_T simple_logic_calculator_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_simple_logic_calculator_T simple_logic_calculator_Y;

/* Real-time model */
RT_MODEL_simple_logic_calcula_T simple_logic_calculator_M_;
RT_MODEL_simple_logic_calcula_T *const simple_logic_calculator_M =
  &simple_logic_calculator_M_;

/* Model step function */
void simple_logic_calculator_step(void)
{
  boolean_T OR_tmp;
  boolean_T AND_tmp;

  /* Logic: '<Root>/Logical Operator' incorporates:
   *  Inport: '<Root>/Operand1'
   *  Inport: '<Root>/Operand2'
   *  Logic: '<Root>/Logical Operator6'
   */
  AND_tmp = (simple_logic_calculator_U.Operand1 &&
             simple_logic_calculator_U.Operand2);

  /* Outport: '<Root>/AND' incorporates:
   *  Logic: '<Root>/Logical Operator'
   */
  simple_logic_calculator_Y.AND = AND_tmp;

  /* Logic: '<Root>/Logical Operator1' incorporates:
   *  Inport: '<Root>/Operand1'
   *  Inport: '<Root>/Operand2'
   *  Logic: '<Root>/Logical Operator5'
   */
  OR_tmp = (simple_logic_calculator_U.Operand1 ||
            simple_logic_calculator_U.Operand2);

  /* Outport: '<Root>/OR' incorporates:
   *  Logic: '<Root>/Logical Operator1'
   */
  simple_logic_calculator_Y.OR = OR_tmp;

  /* Outport: '<Root>/XOR' incorporates:
   *  Inport: '<Root>/Operand1'
   *  Inport: '<Root>/Operand2'
   *  Logic: '<Root>/Logical Operator2'
   */
  simple_logic_calculator_Y.XOR = simple_logic_calculator_U.Operand1 ^
    simple_logic_calculator_U.Operand2;

  /* Outport: '<Root>/NOT 1' incorporates:
   *  Inport: '<Root>/Operand1'
   *  Logic: '<Root>/Logical Operator3'
   */
  simple_logic_calculator_Y.NOT1 = !simple_logic_calculator_U.Operand1;

  /* Outport: '<Root>/NOT 2' incorporates:
   *  Inport: '<Root>/Operand2'
   *  Logic: '<Root>/Logical Operator7'
   */
  simple_logic_calculator_Y.NOT2 = !simple_logic_calculator_U.Operand2;

  /* Outport: '<Root>/XNOR' incorporates:
   *  Inport: '<Root>/Operand1'
   *  Inport: '<Root>/Operand2'
   */
  simple_logic_calculator_Y.XNOR = (simple_logic_calculator_U.Operand1 ==
    simple_logic_calculator_U.Operand2);

  /* Outport: '<Root>/NOR' incorporates:
   *  Logic: '<Root>/Logical Operator5'
   */
  simple_logic_calculator_Y.NOR = !OR_tmp;

  /* Outport: '<Root>/NAND' incorporates:
   *  Logic: '<Root>/Logical Operator6'
   */
  simple_logic_calculator_Y.NAND = !AND_tmp;
}

/* Model initialize function */
void simple_logic_calculator_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(simple_logic_calculator_M, (NULL));

  /* external inputs */
  (void)memset((void *)&simple_logic_calculator_U, 0, sizeof
               (ExtU_simple_logic_calculator_T));

  /* external outputs */
  (void) memset((void *)&simple_logic_calculator_Y, 0,
                sizeof(ExtY_simple_logic_calculator_T));
}

/* Model terminate function */
void simple_logic_calculator_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
