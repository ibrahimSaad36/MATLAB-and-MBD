/*
 * File: logic_operations_with_switch.h
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

#ifndef RTW_HEADER_logic_operations_with_switch_h_
#define RTW_HEADER_logic_operations_with_switch_h_
#include <math.h>
#include <string.h>
#include <stddef.h>
#ifndef logic_operations_with_switch_COMMON_INCLUDES_
# define logic_operations_with_switch_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* logic_operations_with_switch_COMMON_INCLUDES_ */

#include "logic_operations_with_switch_types.h"
#include "rt_nonfinite.h"
#include "rtGetInf.h"

/* Macros for accessing real-time model data structure */
#ifndef rtmGetErrorStatus
# define rtmGetErrorStatus(rtm)        ((rtm)->errorStatus)
#endif

#ifndef rtmSetErrorStatus
# define rtmSetErrorStatus(rtm, val)   ((rtm)->errorStatus = (val))
#endif

/* External inputs (root inport signals with auto storage) */
typedef struct {
  boolean_T op1;                       /* '<Root>/op1' */
  boolean_T op2;                       /* '<Root>/op2' */
  real_T select;                       /* '<Root>/select' */
} ExtU_logic_operations_with_sw_T;

/* External outputs (root outports fed by signals with auto storage) */
typedef struct {
  boolean_T AND;                       /* '<Root>/AND' */
  boolean_T OR;                        /* '<Root>/OR' */
  boolean_T NAND;                      /* '<Root>/NAND' */
  boolean_T NOR;                       /* '<Root>/NOR' */
  boolean_T XOR;                       /* '<Root>/XOR' */
  boolean_T XNOR;                      /* '<Root>/XNOR' */
  boolean_T AND_DEF;                   /* '<Root>/AND_DEF' */
} ExtY_logic_operations_with_sw_T;

/* Real-time Model Data Structure */
struct tag_RTM_logic_operations_with_T {
  const char_T * volatile errorStatus;
};

/* External inputs (root inport signals with auto storage) */
extern ExtU_logic_operations_with_sw_T logic_operations_with_switch_U;

/* External outputs (root outports fed by signals with auto storage) */
extern ExtY_logic_operations_with_sw_T logic_operations_with_switch_Y;

/* Model entry point functions */
extern void logic_operations_with_switch_initialize(void);
extern void logic_operations_with_switch_step(void);
extern void logic_operations_with_switch_terminate(void);

/* Real-time Model object */
extern RT_MODEL_logic_operations_wit_T *const logic_operations_with_switch_M;

/*-
 * The generated code includes comments that allow you to trace directly
 * back to the appropriate location in the model.  The basic format
 * is <system>/block_name, where system is the system number (uniquely
 * assigned by Simulink) and block_name is the name of the block.
 *
 * Use the MATLAB hilite_system command to trace the generated code back
 * to the model.  For example,
 *
 * hilite_system('<S3>')    - opens system 3
 * hilite_system('<S3>/Kp') - opens and selects block Kp which resides in S3
 *
 * Here is the system hierarchy for this model
 *
 * '<Root>' : 'logic_operations_with_switch'
 * '<S1>'   : 'logic_operations_with_switch/Switch Case Action Subsystem'
 * '<S2>'   : 'logic_operations_with_switch/Switch Case Action Subsystem1'
 * '<S3>'   : 'logic_operations_with_switch/Switch Case Action Subsystem2'
 * '<S4>'   : 'logic_operations_with_switch/Switch Case Action Subsystem3'
 * '<S5>'   : 'logic_operations_with_switch/Switch Case Action Subsystem4'
 * '<S6>'   : 'logic_operations_with_switch/Switch Case Action Subsystem5'
 * '<S7>'   : 'logic_operations_with_switch/Switch Case Action Subsystem6'
 */
#endif                                 /* RTW_HEADER_logic_operations_with_switch_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
