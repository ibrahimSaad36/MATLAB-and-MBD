/*
 * File: calculator_using_switch.c
 *
 * Code generated for Simulink model 'calculator_using_switch'.
 *
 * Model version                  : 1.7
 * Simulink Coder version         : 8.13 (R2017b) 24-Jul-2017
 * C/C++ source code generated on : Fri Dec 23 12:14:37 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. RAM efficiency
 *    3. ROM efficiency
 * Validation result: Not run
 */

#include "calculator_using_switch.h"
#include "calculator_using_switch_private.h"

/* Block signals (auto storage) */
B_calculator_using_switch_T calculator_using_switch_B;

/* External inputs (root inport signals with auto storage) */
ExtU_calculator_using_switch_T calculator_using_switch_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_calculator_using_switch_T calculator_using_switch_Y;

/* Real-time model */
RT_MODEL_calculator_using_swi_T calculator_using_switch_M_;
RT_MODEL_calculator_using_swi_T *const calculator_using_switch_M =
  &calculator_using_switch_M_;

/* Model step function */
void calculator_using_switch_step(void)
{
  real_T tmp;

  /* SwitchCase: '<Root>/Switch Case' incorporates:
   *  Inport: '<Root>/Action'
   */
  tmp = trunc(calculator_using_switch_U.Action);
  if (rtIsNaN(tmp) || rtIsInf(tmp)) {
    tmp = 0.0;
  } else {
    tmp = fmod(tmp, 4.294967296E+9);
  }

  switch (tmp < 0.0 ? -(int32_T)(uint32_T)-tmp : (int32_T)(uint32_T)tmp) {
   case 1:
    /* Outputs for IfAction SubSystem: '<Root>/Switch Case Action Subsystem' incorporates:
     *  ActionPort: '<S1>/Action Port'
     */
    /* Sum: '<S1>/Add' incorporates:
     *  Inport: '<Root>/Operand1'
     *  Inport: '<Root>/Operand2'
     */
    calculator_using_switch_B.Merge = calculator_using_switch_U.Operand1 +
      calculator_using_switch_U.Operand2;

    /* End of Outputs for SubSystem: '<Root>/Switch Case Action Subsystem' */
    break;

   case 2:
    /* Outputs for IfAction SubSystem: '<Root>/Switch Case Action Subsystem1' incorporates:
     *  ActionPort: '<S2>/Action Port'
     */
    /* Sum: '<S2>/Subtract' incorporates:
     *  Inport: '<Root>/Operand1'
     *  Inport: '<Root>/Operand2'
     */
    calculator_using_switch_B.Merge = calculator_using_switch_U.Operand1 -
      calculator_using_switch_U.Operand2;

    /* End of Outputs for SubSystem: '<Root>/Switch Case Action Subsystem1' */
    break;

   case 3:
    /* Outputs for IfAction SubSystem: '<Root>/Switch Case Action Subsystem2' incorporates:
     *  ActionPort: '<S3>/Action Port'
     */
    /* Product: '<S3>/Product' incorporates:
     *  Inport: '<Root>/Operand1'
     *  Inport: '<Root>/Operand2'
     */
    calculator_using_switch_B.Merge = calculator_using_switch_U.Operand1 *
      calculator_using_switch_U.Operand2;

    /* End of Outputs for SubSystem: '<Root>/Switch Case Action Subsystem2' */
    break;

   case 4:
    /* Outputs for IfAction SubSystem: '<Root>/Switch Case Action Subsystem3' incorporates:
     *  ActionPort: '<S4>/Action Port'
     */
    /* Product: '<S4>/Divide' incorporates:
     *  Inport: '<Root>/Operand1'
     *  Inport: '<Root>/Operand2'
     */
    calculator_using_switch_B.Merge = calculator_using_switch_U.Operand1 /
      calculator_using_switch_U.Operand2;

    /* End of Outputs for SubSystem: '<Root>/Switch Case Action Subsystem3' */
    break;
  }

  /* End of SwitchCase: '<Root>/Switch Case' */

  /* Outport: '<Root>/Result' */
  calculator_using_switch_Y.Result = calculator_using_switch_B.Merge;
}

/* Model initialize function */
void calculator_using_switch_initialize(void)
{
  /* Registration code */

  /* initialize non-finites */
  rt_InitInfAndNaN(sizeof(real_T));

  /* initialize error status */
  rtmSetErrorStatus(calculator_using_switch_M, (NULL));

  /* block I/O */
  (void) memset(((void *) &calculator_using_switch_B), 0,
                sizeof(B_calculator_using_switch_T));

  /* external inputs */
  (void)memset((void *)&calculator_using_switch_U, 0, sizeof
               (ExtU_calculator_using_switch_T));

  /* external outputs */
  calculator_using_switch_Y.Result = 0.0;

  /* SystemInitialize for Merge: '<Root>/Merge' */
  calculator_using_switch_B.Merge = 0.0;
}

/* Model terminate function */
void calculator_using_switch_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
