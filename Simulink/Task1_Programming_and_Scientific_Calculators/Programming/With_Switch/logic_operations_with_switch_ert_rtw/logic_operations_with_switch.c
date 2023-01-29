/*
 * File: logic_operations_with_switch.c
 *
 * Code generated for Simulink model 'logic_operations_with_switch'.
 *
 * Model version                  : 1.15
 * Simulink Coder version         : 8.13 (R2017b) 24-Jul-2017
 * C/C++ source code generated on : Sat Dec 31 15:24:38 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. RAM efficiency
 *    3. ROM efficiency
 * Validation result: Not run
 */

#include "logic_operations_with_switch.h"
#include "logic_operations_with_switch_private.h"

/* External inputs (root inport signals with auto storage) */
ExtU_logic_operations_with_sw_T logic_operations_with_switch_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_logic_operations_with_sw_T logic_operations_with_switch_Y;

/* Real-time model */
RT_MODEL_logic_operations_wit_T logic_operations_with_switch_M_;
RT_MODEL_logic_operations_wit_T *const logic_operations_with_switch_M =
  &logic_operations_with_switch_M_;

/* Model step function */
void logic_operations_with_switch_step(void)
{
  real_T tmp;

  /* SwitchCase: '<Root>/Switch Case' incorporates:
   *  Inport: '<Root>/select'
   */
  tmp = trunc(logic_operations_with_switch_U.select);
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
    /* Outport: '<Root>/AND' incorporates:
     *  Inport: '<Root>/op1'
     *  Inport: '<Root>/op2'
     *  Logic: '<S1>/Logical Operator'
     */
    logic_operations_with_switch_Y.AND = (logic_operations_with_switch_U.op1 &&
      logic_operations_with_switch_U.op2);

    /* End of Outputs for SubSystem: '<Root>/Switch Case Action Subsystem' */
    break;

   case 2:
    /* Outputs for IfAction SubSystem: '<Root>/Switch Case Action Subsystem1' incorporates:
     *  ActionPort: '<S2>/Action Port'
     */
    /* Outport: '<Root>/OR' incorporates:
     *  Inport: '<Root>/op1'
     *  Inport: '<Root>/op2'
     *  Logic: '<S2>/Logical Operator1'
     */
    logic_operations_with_switch_Y.OR = (logic_operations_with_switch_U.op1 ||
      logic_operations_with_switch_U.op2);

    /* End of Outputs for SubSystem: '<Root>/Switch Case Action Subsystem1' */
    break;

   case 3:
    /* Outputs for IfAction SubSystem: '<Root>/Switch Case Action Subsystem2' incorporates:
     *  ActionPort: '<S3>/Action Port'
     */
    /* Outport: '<Root>/NAND' incorporates:
     *  Inport: '<Root>/op1'
     *  Inport: '<Root>/op2'
     *  Logic: '<S3>/Logical Operator2'
     */
    logic_operations_with_switch_Y.NAND = !(logic_operations_with_switch_U.op1 &&
      logic_operations_with_switch_U.op2);

    /* End of Outputs for SubSystem: '<Root>/Switch Case Action Subsystem2' */
    break;

   case 4:
    /* Outputs for IfAction SubSystem: '<Root>/Switch Case Action Subsystem3' incorporates:
     *  ActionPort: '<S4>/Action Port'
     */
    /* Outport: '<Root>/NOR' incorporates:
     *  Inport: '<Root>/op1'
     *  Inport: '<Root>/op2'
     *  Logic: '<S4>/Logical Operator3'
     */
    logic_operations_with_switch_Y.NOR = !(logic_operations_with_switch_U.op1 ||
      logic_operations_with_switch_U.op2);

    /* End of Outputs for SubSystem: '<Root>/Switch Case Action Subsystem3' */
    break;

   case 5:
    /* Outputs for IfAction SubSystem: '<Root>/Switch Case Action Subsystem4' incorporates:
     *  ActionPort: '<S5>/Action Port'
     */
    /* Outport: '<Root>/XOR' incorporates:
     *  Inport: '<Root>/op1'
     *  Inport: '<Root>/op2'
     *  Logic: '<S5>/Logical Operator4'
     */
    logic_operations_with_switch_Y.XOR = logic_operations_with_switch_U.op1 ^
      logic_operations_with_switch_U.op2;

    /* End of Outputs for SubSystem: '<Root>/Switch Case Action Subsystem4' */
    break;

   case 6:
    /* Outputs for IfAction SubSystem: '<Root>/Switch Case Action Subsystem5' incorporates:
     *  ActionPort: '<S6>/Action Port'
     */
    /* Outport: '<Root>/XNOR' incorporates:
     *  Inport: '<Root>/op1'
     *  Inport: '<Root>/op2'
     *  Logic: '<S6>/Logical Operator5'
     */
    logic_operations_with_switch_Y.XNOR = (logic_operations_with_switch_U.op1 ==
      logic_operations_with_switch_U.op2);

    /* End of Outputs for SubSystem: '<Root>/Switch Case Action Subsystem5' */
    break;

   default:
    /* Outputs for IfAction SubSystem: '<Root>/Switch Case Action Subsystem6' incorporates:
     *  ActionPort: '<S7>/Action Port'
     */
    /* Outport: '<Root>/AND_DEF' incorporates:
     *  Inport: '<Root>/op1'
     *  Inport: '<Root>/op2'
     *  Logic: '<S7>/Logical Operator'
     */
    logic_operations_with_switch_Y.AND_DEF = (logic_operations_with_switch_U.op1
      && logic_operations_with_switch_U.op2);

    /* End of Outputs for SubSystem: '<Root>/Switch Case Action Subsystem6' */
    break;
  }

  /* End of SwitchCase: '<Root>/Switch Case' */
}

/* Model initialize function */
void logic_operations_with_switch_initialize(void)
{
  /* Registration code */

  /* initialize non-finites */
  rt_InitInfAndNaN(sizeof(real_T));

  /* initialize error status */
  rtmSetErrorStatus(logic_operations_with_switch_M, (NULL));

  /* external inputs */
  (void)memset((void *)&logic_operations_with_switch_U, 0, sizeof
               (ExtU_logic_operations_with_sw_T));

  /* external outputs */
  (void) memset((void *)&logic_operations_with_switch_Y, 0,
                sizeof(ExtY_logic_operations_with_sw_T));
}

/* Model terminate function */
void logic_operations_with_switch_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
