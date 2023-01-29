/*
 * File: grading.c
 *
 * Code generated for Simulink model 'grading'.
 *
 * Model version                  : 1.3
 * Simulink Coder version         : 8.13 (R2017b) 24-Jul-2017
 * C/C++ source code generated on : Sun Jan 29 16:38:37 2023
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. RAM efficiency
 *    3. ROM efficiency
 * Validation result: Not run
 */

#include "grading.h"
#include "grading_private.h"

/* External inputs (root inport signals with auto storage) */
ExtU_grading_T grading_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_grading_T grading_Y;

/* Real-time model */
RT_MODEL_grading_T grading_M_;
RT_MODEL_grading_T *const grading_M = &grading_M_;

/* Model step function */
void grading_step(void)
{
  /* If: '<Root>/If' incorporates:
   *  Inport: '<Root>/In1'
   */
  if (grading_U.In1 >= 85.0) {
    /* Outputs for IfAction SubSystem: '<Root>/If Action Subsystem4' incorporates:
     *  ActionPort: '<S5>/Action Port'
     */
    /* Outport: '<Root>/Out1' incorporates:
     *  Constant: '<Root>/Constant'
     *  Inport: '<S5>/In1'
     */
    grading_Y.Out1 = 5.0;

    /* End of Outputs for SubSystem: '<Root>/If Action Subsystem4' */
  } else if (grading_U.In1 >= 75.0) {
    /* Outputs for IfAction SubSystem: '<Root>/If Action Subsystem' incorporates:
     *  ActionPort: '<S1>/Action Port'
     */
    /* Outport: '<Root>/Out1' incorporates:
     *  Constant: '<Root>/Constant1'
     *  Inport: '<S1>/In1'
     */
    grading_Y.Out1 = 4.0;

    /* End of Outputs for SubSystem: '<Root>/If Action Subsystem' */
  } else if (grading_U.In1 >= 65.0) {
    /* Outputs for IfAction SubSystem: '<Root>/If Action Subsystem1' incorporates:
     *  ActionPort: '<S2>/Action Port'
     */
    /* Outport: '<Root>/Out1' incorporates:
     *  Constant: '<Root>/Constant2'
     *  Inport: '<S2>/In1'
     */
    grading_Y.Out1 = 3.0;

    /* End of Outputs for SubSystem: '<Root>/If Action Subsystem1' */
  } else if (grading_U.In1 >= 50.0) {
    /* Outputs for IfAction SubSystem: '<Root>/If Action Subsystem2' incorporates:
     *  ActionPort: '<S3>/Action Port'
     */
    /* Outport: '<Root>/Out1' incorporates:
     *  Constant: '<Root>/Constant3'
     *  Inport: '<S3>/In1'
     */
    grading_Y.Out1 = 2.0;

    /* End of Outputs for SubSystem: '<Root>/If Action Subsystem2' */
  } else {
    /* Outputs for IfAction SubSystem: '<Root>/If Action Subsystem3' incorporates:
     *  ActionPort: '<S4>/Action Port'
     */
    /* Outport: '<Root>/Out1' incorporates:
     *  Constant: '<Root>/Constant4'
     *  Inport: '<S4>/In1'
     */
    grading_Y.Out1 = 1.0;

    /* End of Outputs for SubSystem: '<Root>/If Action Subsystem3' */
  }

  /* End of If: '<Root>/If' */
}

/* Model initialize function */
void grading_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(grading_M, (NULL));

  /* external inputs */
  grading_U.In1 = 0.0;

  /* external outputs */
  grading_Y.Out1 = 0.0;
}

/* Model terminate function */
void grading_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
