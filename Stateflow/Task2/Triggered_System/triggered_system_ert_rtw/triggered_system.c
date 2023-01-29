/*
 * File: triggered_system.c
 *
 * Code generated for Simulink model 'triggered_system'.
 *
 * Model version                  : 1.3
 * Simulink Coder version         : 8.13 (R2017b) 24-Jul-2017
 * C/C++ source code generated on : Sun Jan 29 19:27:26 2023
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. RAM efficiency
 *    3. ROM efficiency
 * Validation result: Not run
 */

#include "triggered_system.h"
#include "triggered_system_private.h"

/* Block states (auto storage) */
DW_triggered_system_T triggered_system_DW;

/* Previous zero-crossings (trigger) states */
PrevZCX_triggered_system_T triggered_system_PrevZCX;

/* External inputs (root inport signals with auto storage) */
ExtU_triggered_system_T triggered_system_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_triggered_system_T triggered_system_Y;

/* Real-time model */
RT_MODEL_triggered_system_T triggered_system_M_;
RT_MODEL_triggered_system_T *const triggered_system_M = &triggered_system_M_;

/* Model step function */
void triggered_system_step(void)
{
  int32_T rtb_PulseGenerator;
  ZCEventType zcEvent;

  /* DiscretePulseGenerator: '<Root>/Pulse Generator' */
  rtb_PulseGenerator = ((triggered_system_DW.clockTickCounter < 1) &&
                        (triggered_system_DW.clockTickCounter >= 0));
  if (triggered_system_DW.clockTickCounter >= 19) {
    triggered_system_DW.clockTickCounter = 0;
  } else {
    triggered_system_DW.clockTickCounter++;
  }

  /* End of DiscretePulseGenerator: '<Root>/Pulse Generator' */

  /* Outputs for Triggered SubSystem: '<Root>/Triggered Subsystem' incorporates:
   *  TriggerPort: '<S1>/Trigger'
   */
  zcEvent = rt_ZCFcn(RISING_ZERO_CROSSING,
                     &triggered_system_PrevZCX.TriggeredSubsystem_Trig_ZCE,
                     ((real_T)rtb_PulseGenerator));
  if (zcEvent != NO_ZCEVENT) {
    /* Outport: '<Root>/Out1' incorporates:
     *  Chart: '<S1>/Chart'
     *  Inport: '<Root>/In1'
     */
    /*  check switch input  */
    triggered_system_Y.Out1 = (triggered_system_U.In1 == 1.0);
  }

  /* End of Outputs for SubSystem: '<Root>/Triggered Subsystem' */
}

/* Model initialize function */
void triggered_system_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(triggered_system_M, (NULL));

  /* states (dwork) */
  (void) memset((void *)&triggered_system_DW, 0,
                sizeof(DW_triggered_system_T));

  /* external inputs */
  triggered_system_U.In1 = 0.0;

  /* external outputs */
  triggered_system_Y.Out1 = 0.0;

  /* Start for DiscretePulseGenerator: '<Root>/Pulse Generator' */
  triggered_system_DW.clockTickCounter = 0;
  triggered_system_PrevZCX.TriggeredSubsystem_Trig_ZCE = UNINITIALIZED_ZCSIG;

  /* SystemInitialize for Triggered SubSystem: '<Root>/Triggered Subsystem' */
  /* SystemInitialize for Outport: '<Root>/Out1' incorporates:
   *  Chart: '<S1>/Chart'
   */
  triggered_system_Y.Out1 = 0.0;

  /* End of SystemInitialize for SubSystem: '<Root>/Triggered Subsystem' */
}

/* Model terminate function */
void triggered_system_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
